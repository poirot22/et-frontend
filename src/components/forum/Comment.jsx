import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Comment() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [commentContent, setCommentContent] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage user login status
  const [user, setUser] = useState(null); // State to store the user data
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("usertoken");
    if (token) {
      setIsLoggedIn(true);
      //   get userData from url
      const urlsearchparams = new URLSearchParams(window.location.search);
      const userData = urlsearchparams.get("userData");
      // remove first and last character from userData
      const user = userData.slice(1, -1);
      setUser(user);
    }
  }, []);

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
    axios
      .post("http://localhost:9000/addComment/" + postId, {
        comment: newComment,
        postedBy: user,
      })
      .then((res) => {
        // Update the state to include the new comment
        console.log(res.data.Comment);
        toast.success("Comment added successfully!");
        setCommentContent([...commentContent, res.data.Comment]);
      });
    setNewComment("");
  };

  const handleDeleteComment = async (commentId) => {
    // Delete comment functionality
    axios
      .delete(`http://localhost:9000/deleteComment/${commentId}`)
      .then((res) => {
        console.log(res.data);
        toast.success("Comment deleted successfully!");
        setCommentContent(
          commentContent.filter((comment) => comment._id !== commentId)
        );
      });
  };

  const handleReply = async (commentId) => {
    // Find the comment object with the matching commentId
    
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
          {commentContent.length === 0 ? (
            <div className="w-full rounded-lg shadow-lg bg-white mt-8 p-6">
              <p className="text-lg text-gray-700">No comments</p>
            </div>
          ) : (
            <div className="w-full rounded-lg shadow-lg bg-white mt-8 p-6">
              <h3 className="text-2xl font-bold mb-4">Comments</h3>
              <ul className="space-y-4">
                {commentContent.map((comment) => (
                  <li
                    key={comment._id}
                    className="flex justify-between items-center"
                  >
                    <div className="flex-1">
                      <p className="text-gray-700">{comment.content}</p>
                      <p className="text-gray-500 text-sm">
                        Commented by: {comment.commentedBy}
                      </p>
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleReply(comment._id)}
                        className="text-blue-500 hover:text-blue-600 focus:outline-none transition-colors duration-300 ease-in-out"
                      >
                        Reply
                      </button>

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
          <p>
            Please Login to view comments.
          </p>
        </div>
      )}
    </div>
  );
}
