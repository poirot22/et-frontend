import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { faComment, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

export default function ProfileContent({ userData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState(userData);
  const [projects, setProjects] = useState(userData.projects || []);
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    link: "",
    techStack: "",
  });
  const [showAddProjectDialog, setShowAddProjectDialog] = useState(false);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [postsID, setPostsID] = useState(userData.posts || []);
  const [posts, setPosts] = useState([]);
  const [postToDelete, setPostToDelete] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const uniquePostIds = new Set(postsID);
      const uniquePostIdsArray = Array.from(uniquePostIds);

      const fetchedPosts = [];
      for (const postId of uniquePostIdsArray) {
        try {
          const res = await axios.get(
            "http://localhost:9000/getPostById/" + postId
          );
          fetchedPosts.push(res.data.post);
        } catch (error) {
          console.error("Error fetching post:", error);
        }
      }
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, [postsID]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Save edited user data
    console.log("Saving edited data:", editedUserData);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({ ...editedUserData, [name]: value });
  };

  const handleAddProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({ name: "", description: "", link: "", techStack: "" });
    setShowAddProjectDialog(false);
  };

  const handleDeletePost = async () => {
    // Consume the API to delete the post
    try {
      await axios.delete(`http://localhost:9000/deletePost/${postToDelete}`);
      toast.success("Post deleted successfully");
      // Remove the post from the UI
      setPosts(posts.filter((post) => post._id !== postToDelete));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
    setShowConfirmationDialog(false);
  };

  const showDeleteConfirmation = (postId) => {
    setPostToDelete(postId);
    setConfirmationMessage("Are you sure you want to delete this post?");
    setShowConfirmationDialog(true);
  };

  return (
    <div className="border rounded p-4 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Profile</h2>
        {!isEditing && (
          <button
            onClick={handleEditClick}
            className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
          >
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Edit
          </button>
        )}
      </div>
      {isEditing ? (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={editedUserData.firstName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={editedUserData.lastName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          {/* Add more input fields for other user data */}
          <div className="flex justify-between">
            <button
              onClick={handleSaveClick}
              className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-md focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="font-semibold">First Name:</p>
              <p className="mt-1">{userData.firstName}</p>
            </div>
            <div>
              <p className="font-semibold">Last Name:</p>
              <p className="mt-1">{userData.lastName}</p>
            </div>
            <div>
              <p className="font-semibold">Branch:</p>
              <p className="mt-1">{userData.department}</p>
            </div>
            <div>
              <p className="font-semibold">ID:</p>
              <p className="mt-1">{userData.id}</p>
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2">Projects</h3>
          <div className="mb-4">
            <button
              onClick={() => setShowAddProjectDialog(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add Project
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="border p-4 rounded-md">
                <h4 className="text-lg font-semibold">{project.name}</h4>
                <p className="mb-2">{project.description}</p>
                <p className="mb-2">
                  Link:{" "}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {project.link}
                  </a>
                </p>
                <p className="mb-2">Tech Stack Used: {project.techStack}</p>
              </div>
            ))}
          </div>
          <div className="font-semibold mt-4">Posts:</div>
          {posts.map((post, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg mb-6">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span className="mr-2">Posted by: {post.postedBy}</span>
                  <span>|</span>
                  <span className="ml-2">
                    {new Date(post.postedOn).toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-700">{post.content}</p>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-100 rounded-b-lg">
                <button
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
                  onClick={() => {
                    const userDataQueryParam = encodeURIComponent(
                      JSON.stringify(userData._id)
                    );
                    window.open(
                      `/comment/${post._id}?userData=${userDataQueryParam}`,
                      "_blank"
                    );
                  }}
                >
                  <FontAwesomeIcon icon={faComment} className="mr-2" />
                  Comment
                </button>
                <button
                  className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md focus:outline-none hover:bg-red-600"
                  onClick={() => showDeleteConfirmation(post._id)}
                >
                  <FontAwesomeIcon icon={faTrash} className="mr-2" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {showAddProjectDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md w-3/4 md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Add Project</h3>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Project Name
              </label>
              <input
                type="text"
                value={newProject.name}
                onChange={(e) =>
                  setNewProject({ ...newProject, name: e.target.value })
                }
                placeholder="Enter project name"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Description
              </label>
              <textarea
                value={newProject.description}
                onChange={(e) =>
                  setNewProject({ ...newProject, description: e.target.value })
                }
                placeholder="Enter project description"
                className="border border-gray-300 rounded-md px-3 py-2 w-full resize-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Link</label>
              <input
                type="text"
                value={newProject.link}
                onChange={(e) =>
                  setNewProject({ ...newProject, link: e.target.value })
                }
                placeholder="Enter project link"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Tech Stack Used
              </label>
              <input
                type="text"
                value={newProject.techStack}
                onChange={(e) =>
                  setNewProject({ ...newProject, techStack: e.target.value })
                }
                placeholder="Enter tech stack used"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleAddProject}
                className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none mr-2"
              >
                Add
              </button>
              <button
                onClick={() => setShowAddProjectDialog(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {showConfirmationDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md w-3/4 md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">
              {confirmationMessage}
            </h3>
            <div className="flex justify-end">
              <button
                onClick={() => setShowConfirmationDialog(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md focus:outline-none mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleDeletePost}
                className="px-4 py-2 bg-red-500 text-white rounded-md focus:outline-none"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
