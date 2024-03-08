import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Bugs() {
  const [bugs, setBugs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResolved, setShowResolved] = useState(true);
  const [resolvedBugs, setResolvedBugs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/getAllBugs")
      .then((res) => {
        setBugs(res.data.bugs);
      })
      .catch((error) => {
        console.error("Error fetching bugs:", error);
      });
  }, []);
  const handleBugResolved = (id) => {
    axios.put(`http://localhost:9000/resolveBug/${id}`)
      .then((res) => {
        const updatedBugs = bugs.map(bug => {
          if (bug._id === id) {
            return { ...bug, resolved: true };
          }
          return bug;
        });
        setBugs(updatedBugs); 
        setResolvedBugs([...resolvedBugs, id]);
      })
      .catch((error) => {
        console.error("Error updating bug status:", error);
      });
  };

  const handleUndoResolved = (id) => {
    axios.put(`http://localhost:9000/unresolveBug/${id}`)
      .then((res) => {
        setResolvedBugs(resolvedBugs.filter(bugId => bugId !== id));
        const updatedBugs = bugs.map(bug => {
          if (bug._id === id) {
            return { ...bug, resolved: false };
          }
          return bug;
        });
        setBugs(updatedBugs);
      })
      .catch((error) => {
        console.error("Error updating bug status:", error);
      });
  };

  const filteredBugs = bugs.filter(bug => {
    const searchTermMatch = bug.bug.toLowerCase().includes(searchTerm.toLowerCase());
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
          <div key={bug.id} className={`rounded p-4 mb-4 flex justify-between items-center ${bug.resolved ? 'bg-green-100' : 'bg-red-100'}`}>
            <div>
              <p className="text-lg font-semibold mb-2">{bug.bug}</p>
              <p className="text-sm text-gray-600">Reported On: {new Date(bug.reportedOn).toLocaleString()}</p>
            </div>
            {!bug.resolved && (
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => handleBugResolved(bug._id)}>Mark Resolved</button>
            )}
            {bug.resolved && (
              <div className="flex justify-end">
                <span className="text-green-500 mt-2">&#x2714;</span>
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded ml-4 hover:bg-gray-400" onClick={() => handleUndoResolved(bug._id)}>Undo</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
