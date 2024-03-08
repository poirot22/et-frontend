import React, { useEffect, useState } from 'react';

export default function AttendanceContent({ userData }) {
    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        setAttendance(userData.attendance);
    }, [userData]);

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto max-w-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Attendance</h2>
            <div>
                {attendance.map((attendanceValue, index) => (
                    <div key={index} className={`mb-2 ${attendanceValue < 75 ? 'text-red-500' : 'text-green-500'}`}>
                        Week {index * 4 + 4}: <span className="font-semibold">{attendanceValue}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
