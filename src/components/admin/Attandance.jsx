import React, { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

export default function AttendanceComponent() {
  const [excelData, setExcelData] = useState(null);
  const [notSent, setNotSent] = useState(false);
  const [notSentData, setNotSentData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      console.log(jsonData);
      setExcelData(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  const handleSend = () => {
    console.log("Sending data:", excelData);
    // Here you can perform further actions, such as sending the data to a server
    if (excelData === null) {
      toast.error("No data to send");
      return;
    }
    axios
      .post("https://et-server-cyan.vercel.app/addAttendance", excelData)
      .then((res) => {
        console.log(res);
        if (res.data.notSent.length > 0) {
          setNotSent(true);
          setNotSentData(res.data.notSent);
        }
        toast.success("Attendance data added successfully");

        // Check attendance and send emails if attendance is less than 75%
        excelData.forEach((row) => {
          const { id, attendance } = row; // Assuming there's an 'attendance' field in your data
          if (attendance < 75 && notSentData.includes(id)===false){
            // Send email using EmailJS
            sendEmail(
              `${id}@cvr.ac.in`,
              "Attendance Reminder",
              `Your attendance is below 75%. Please ensure attendance is maintained.`
            );
          }
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to add attendance data");
      });
  };

  const sendEmail = (toEmail, subject, message) => {
    const templateParams = {
      to_email: toEmail,
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

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <input
          type="file"
          onChange={handleFileUpload}
          className="p-8 border border-dotted border-gray-400 rounded-lg cursor-pointer text-gray-600 hover:text-gray-700 hover:border-gray-700"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-6"
        >
          Send
        </button>
      </div>
      {excelData && (
        <>
          {/* toggle */}

          <div>
            <h2 className="text-lg font-bold mb-2">Attendance Data:</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    {Object.keys(excelData[0]).map((key, index) => (
                      <th key={index} className="px-4 py-2">
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="border border-e-black">
                  {excelData.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border border-gray-300">
                      {Object.values(row).map((value, colIndex) => (
                        <td key={colIndex} className="px-4 py-2">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      {notSent && (
        <>
          {notSentData && notSentData.length > 0 && (
            <>
              <h2 className="text-lg font-bold mt-4">Not Sent Data:</h2>
              <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2">ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notSentData.map((data, index) => (
                      <tr key={index} className="border border-gray-300">
                        <td className="px-4 py-2">{data}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
