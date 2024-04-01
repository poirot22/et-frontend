import React, { useState, useEffect } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export default function Bugs() {
  const [bugs, setBugs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResolved, setShowResolved] = useState(true);
  const [resolvedBugs, setResolvedBugs] = useState([]);

  useEffect(() => {
    axios
      .get("https://et-server-cyan.vercel.app/getAllBugs")
      .then((res) => {
        setBugs(res.data.bugs);
      })
      .catch((error) => {
        console.error("Error fetching bugs:", error);
      });
  }, []);

  const handleBugResolved = (id, email) => {
    axios
      .put(`https://et-server-cyan.vercel.app/resolveBug/${id}`)
      .then((res) => {
        const updatedBugs = bugs.map((bug) => {
          if (bug._id === id) {
            return { ...bug, resolved: true };
          }
          return bug;
        });
        setBugs(updatedBugs);
        setResolvedBugs([...resolvedBugs, id]);
        sendEmail(
          email,
          "Bug Resolved",
          `We are pleased to inform you that the issue you reported has been successfully resolved. Your diligence in reporting this bug has been invaluable to us, and we extend our sincere gratitude for your contribution.

          Should you encounter any further issues or require assistance, please do not hesitate to contact us. We are committed to ensuring the continued quality and reliability of our services.
          
          Thank you once again for your cooperation and support.`
        );
      })
      .catch((error) => {
        console.error("Error updating bug status:", error);
      });
  };

  const handleUndoResolved = (id, email) => {
    axios
      .put(`https://et-server-cyan.vercel.app/unresolveBug/${id}`)
      .then((res) => {
        setResolvedBugs(resolvedBugs.filter((bugId) => bugId !== id));
        const updatedBugs = bugs.map((bug) => {
          if (bug._id === id) {
            return { ...bug, resolved: false };
          }
          return bug;
        });
        setBugs(updatedBugs);
        sendEmail(
          email,
          "Bug Status Update",
          `We are writing to inform you that the status of your reported bug has been temporarily placed on hold. Our team is diligently reviewing the issue to ensure thorough resolution and will provide further updates accordingly.

          Thank you for your patience and understanding as we work to address this matter promptly.`
        );
      })
      .catch((error) => {
        console.error("Error updating bug status:", error);
      });
  };

  const sendEmail = (toEmail, subject, message) => {
    const templateParams = {
      to_email: `${toEmail}@cvr.ac.in`, // Use {email}@cvr.ac.in format
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_4h24m6f",
        "template_rkm6ne3",
        templateParams,
        "2fjwtkkub4ypg6Z8x"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://et-server-cyan.vercel.app/deleteBug/${id}`)
      .then((res) => {
        setBugs(bugs.filter((bug) => bug._id !== id));
        toast.success("Bug deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting bug:", error);
        toast.error("Error deleting bug");
      });
  };

  const filteredBugs = bugs.filter((bug) => {
    const searchTermMatch = bug.bug
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const resolvedMatch = showResolved ? true : !bug.resolved;
    return searchTermMatch && resolvedMatch;
  });

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Bugs</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by description"
          className="px-4 py-2 border border-gray-300 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <label className="ml-4">
          <input
            type="checkbox"
            checked={showResolved}
            onChange={(e) => setShowResolved(e.target.checked)}
          />
          <span className="ml-2">Show Resolved</span>
        </label>
      </div>
      <div>
        {filteredBugs.map((bug) => (
          <div
            key={bug._id}
            className={`rounded p-4 mb-4 flex justify-between items-center ${
              bug.resolved ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {bug.id}
            <div>
              <p className="text-lg font-semibold mb-2">{bug.bug}</p>
              <p className="text-sm text-gray-600">
                Reported On: {new Date(bug.reportedOn).toLocaleString()}
              </p>
            </div>
            <div className="flex">
              {!bug.resolved && (
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => handleBugResolved(bug._id, bug.id)}
                >
                  Mark Resolved
                </button>
              )}
              {bug.resolved && (
                <div className="flex justify-end">
                  <span className="text-green-500 mt-2">&#x2714;</span>
                  <button
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded ml-4 hover:bg-gray-400"
                    onClick={() => handleUndoResolved(bug._id, bug.id)}
                  >
                    Undo
                  </button>
                </div>
              )}
              <button
                className="px-4 py-2 bg-red-500 text-white rounded ml-4 hover:bg-red-600"
                onClick={() => handleDelete(bug._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
