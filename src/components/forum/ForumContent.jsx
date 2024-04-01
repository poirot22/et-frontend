import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ForumContent({ userData }) {
  const navigator = useNavigate();
  const [openCreatePost, setOpenCreatePost] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  useEffect(() => {
    // Call the API to get all posts
    axios
      .get("http://localhost:9000/getAllPosts")
      .then((res) => {
        // Sort posts by date before setting state
        const sortedPosts = res.data.posts.sort((a, b) => {
          return new Date(b.postedOn) - new Date(a.postedOn);
        });
        setPosts(sortedPosts);
        console.log(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCreatePost = async () => {
    // Validate title and content
    if (!title.trim() || !content.trim()) {
      toast.error("Title and content are required");
      return;
    }
  
    // Create JSON object with title and content
    const postData = {
      title: title,
      content: content,
      postedBy: userData.id,
    };
  
    try {
      const res = await axios.post("http://localhost:9000/addPost2", postData);
      // Ensure that the response contains the newly created post
     
      // Update the state to include the new post at the beginning (or your desired position)
      setPosts([res.data.post_added, ...posts]); // Adds at the beginning
      // Alternatively, use: setPosts([...posts, newPost]); // Adds at the end
  
      
      toast.success("Post created successfully");
      setOpenCreatePost(false);
  
      // Reset title and content state values
      setTitle(null);
      setContent(null);
      // window.location.reload();
    } catch (err) {
      console.error("Error creating post:", err);
      toast.error("Error creating post");
    }
  };
  

  const handleDeletePost = (id) => {
    setConfirmDeleteId(id);
  };

  const confirmDelete = () => {
    toast.success("Post deleted successfully");
    axios
      .delete("http://localhost:9000/deletePost/" + confirmDeleteId)
      .then((res) => {
        // Filter out the deleted post from the posts array
        setPosts(posts.filter((post) => post._id !== confirmDeleteId));
        console.log(res.data);
        setConfirmDeleteId(null);
      })
      .catch((err) => {
        console.error(err);
        setConfirmDeleteId(null);
      });
  };

  const cancelDelete = () => {
    setConfirmDeleteId(null);
  };

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter posts based on search query
  const filteredPosts = posts.filter((post) =>
  post.title && post.title.toLowerCase().includes(searchQuery.toLowerCase())
);


  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Forum</h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
          onClick={() => setOpenCreatePost(true)}
        >
          Create Post
        </button>
      </div>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
      />
      {openCreatePost && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 w-1/2 rounded-md shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Create Post</h2>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Content
              </label>
              <textarea
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
                onClick={handleCreatePost}
              >
                Create
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md focus:outline-none"
                onClick={() => setOpenCreatePost(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {userData && (
        <div>
          {currentPosts.map(
            (post, index) =>
              post && (
                <div
                  key={index}
                  className="bg-white rounded-lg mb-6"
                  style={{ boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)" }}
                >
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
                        navigator(`/comment/${post._id}`, { state: { userData: JSON.stringify(userData) } });


                      }}
                    >
                      <FontAwesomeIcon icon={faComment} className="mr-2" />
                      Comment
                    </button>

                    {userData.id === post.postedBy && (
                      <button
                        className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md focus:outline-none hover:bg-red-600"
                        onClick={() => handleDeletePost(post._id)}
                      >
                        <FontAwesomeIcon icon={faTrash} className="mr-2" />
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              )
          )}
          {/* Pagination */}
          <div className="flex justify-center mt-4">
            {Array.from({
              length: Math.ceil(filteredPosts.length / postsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 rounded-md ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Confirm Delete Dialog */}
      {confirmDeleteId && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 w-1/3 rounded-md shadow-lg">
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to delete this post?
            </p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md focus:outline-none mr-2"
                onClick={confirmDelete}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md focus:outline-none"
                onClick={cancelDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
