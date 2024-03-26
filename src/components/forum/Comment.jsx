import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Comment() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [commentContent, setCommentContent] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage user login status
  const [user, setUser] = useState(null); // State to store the user data
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("usertoken");
    if (token) {
      setIsLoggedIn(true);

      const { userData } = location.state;

      // Parse userData if it's a string
      const parsedUserData =
        typeof userData === "string" ? JSON.parse(userData) : userData;

      // Now you can access parsedUserData properties and set the user state
      console.log("User data:", parsedUserData);
      setUser(parsedUserData);
    }
  }, [location.state]);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/getPostById/${postId}`)
      .then((res) => {
        setPost(res.data.post);
        const commentRequests = res.data.post.comments.map((comment) =>
          axios.get(`http://localhost:9000/getCommentById/${comment}`)
        );
        Promise.all(commentRequests)
          .then((responses) => {
            const newComments = responses.map(
              (response) => response.data.comment
            );
            setCommentContent(newComments);
          })
          .catch((err) => {
            console.error("Error fetching comments:", err);
          });
      })
      .catch((err) => {
        console.error("Error fetching post:", err);
      });
  }, [postId]);

  const handleAddComment = async () => {
    if (!isLoggedIn) {
      toast.error("Please log in to add a comment.");
      return;
    }

    axios
      .post(`http://localhost:9000/addComment/${postId}`, {
        comment: newComment,
        postedBy: user.id, // Assuming user object has a 'name' property
      })
      .then((res) => {
        // Update the state to include the new comment
        console.log(res.data.comment);
        toast.success("Comment added successfully!");
        setCommentContent([...commentContent, res.data.comment]);
      })
      .catch((err) => {
        console.error("Error adding comment:", err);
        toast.error("Failed to add comment.");
      });
    setNewComment("");
  };

  const handleDeleteComment = async (commentId) => {
    axios
      .delete(`http://localhost:9000/deleteComment/${commentId}`)
      .then((res) => {
        console.log(res.data);
        toast.success("Comment deleted successfully!");
        setCommentContent(
          commentContent.filter((comment) => comment._id !== commentId)
        );
      })
      .catch((err) => {
        console.error("Error deleting comment:", err);
        toast.error("Failed to delete comment.");
      });
  };

  return (
    <div className="w-full min-h-screen p-4">
      {isLoggedIn ? (
        <>
          {/* Post content */}
          <div className="w-full rounded-lg shadow-lg bg-white">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <span className="mr-2">Posted by: {post.postedBy}</span>
                <span>|</span>
                <span className="ml-2">
                  {new Date(post.postedOn).toLocaleString()}
                </span>
              </div>
              <p className="text-gray-700 whitespace-pre-line">
                {post.content}
              </p>
            </div>
          </div>

          {/* Comment input field */}
          <div className="w-full mt-8">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
              rows={4}
            ></textarea>
            <button
              onClick={handleAddComment}
              className="px-4 py-2 mt-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600 transition-colors duration-300 ease-in-out"
            >
              Add Comment
            </button>
          </div>

          {/* Comments */}
          {commentContent.length > 0 && (
            <div className="w-full rounded-lg shadow-lg bg-white mt-8 p-6">
              <h3 className="text-2xl font-bold mb-4">Comments</h3>
              <ul className="space-y-4">
                {commentContent.map((comment) => (
                  <li
                    key={comment?._id} // Added null check for comment._id
                    className="flex justify-between items-center"
                  >
                    <div className="flex-1">
                      {comment && comment.content && (
                        <p className="text-gray-700 whitespace-pre-line">
                          {comment.content}
                        </p>
                      )}
                      {comment && comment.postedBy && (
                        <p className="text-sm text-gray-500">
                          Posted by: {comment.postedBy}
                        </p>
                      )}
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleDeleteComment(comment._id)}
                        className="text-red-500 hover:text-red-600 focus:outline-none transition-colors duration-300 ease-in-out"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <div className="w-full min-h-screen flex items-center justify-center">
          <p>Please Login to view comments.</p>
        </div>
      )}
    </div>
  );
}
