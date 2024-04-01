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
  const [currentPage, setCurrentPage] = useState(1); // State to manage the current page number
  const [commentsPerPage] = useState(5); // Number of comments per page
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
      .get(`https://et-server-cyan.vercel.app/getPostById/${postId}`)
      .then((res) => {
        setPost(res.data.post);
        const commentRequests = res.data.post.comments.map((commentId) =>
          axios.get(`https://et-server-cyan.vercel.app/getCommentById/${commentId}`)
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
  

  // Get current comments
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = commentContent.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddComment = async () => {
    if (!newComment) {
      return;
    }
  
    const commentData = {
      content: newComment,
      commentedBy: user.id,
      commentedOn: postId,
    };
  
    axios.post("https://et-server-cyan.vercel.app/addComment", commentData)
      .then((res) => {
        console.log(res.data);
        toast.success("Comment added successfully!");
        setNewComment("");
        setCommentContent([...commentContent, res.data.comment_added]);
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
        toast.error("Failed to add comment.");
      });
  
    console.log("Comment data:", commentData);
  };
  

  const handleDeleteComment = async (commentId) => {
    axios
      .delete(`https://et-server-cyan.vercel.app/deleteComment/${commentId}`)
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
          <div className="w-full rounded-lg shadow-md bg-white">
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
          {currentComments.length > 0 && (
            <div className="w-full rounded-lg shadow-lg bg-white mt-8 p-6">
              <h3 className="text-2xl font-bold mb-4">Comments</h3>
              <ul className="space-y-4">
                {currentComments.map((comment) => (
                  <div
                    key={comment?._id} // Added null check for comment._id
                    className="flex justify-between items-center m-2 shadow-md p-4 bg-gray-100 rounded-lg"
                  >
                    <div className="flex-1">
                      {comment && comment.content && (
                        <p className="text-gray-700 whitespace-pre-line">
                          {comment.content}
                        </p>
                      )}
                      {comment && comment.commentedBy && (
                        <p className="text-sm text-gray-500">
                          Posted by: {comment.commentedBy}
                        </p>
                      )}
                    </div>
                    {user && user.id === comment.commentedBy && (
                      <button
                        onClick={() => handleDeleteComment(comment._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-md focus:outline-none hover:bg-red-600 transition-colors duration-300 ease-in-out"
                      >
                        Delete
                      </button>
                    )  
                    }
                  </div>
                ))}
              </ul>
            </div>
          )}

          {/* Pagination */}
          {commentContent.length > commentsPerPage && (
            <div className="flex justify-center mt-4">
              {Array.from({ length: Math.ceil(commentContent.length / commentsPerPage) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-1 mx-1 bg-gray-200 text-gray-700 rounded-md focus:outline-none hover:bg-gray-300 transition-colors duration-300 ease-in-out ${
                    index + 1 === currentPage ? 'bg-gray-400' : ''
                  }`}
                >
                  {index + 1}
                </button>
              ))}
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
