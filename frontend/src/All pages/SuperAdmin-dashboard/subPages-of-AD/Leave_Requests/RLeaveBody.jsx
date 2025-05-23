import React, { useState } from 'react';
import './RLeaveBody.css';
import SAHeader from '../../Components2/SAHeader';

const RLeaveBody = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    {
      name: 'John Doe',
      dateFrom: '2025-06-01',
      dateTo: '2025-06-05',
      type: 'Sick Leave',
      reason: 'Flu',
      status: 'Pending',
      appliedDate:'30-2-15'
    },
    {
      name: 'Jane Smith',
      dateFrom: '2025-06-10',
      dateTo: '2025-06-12',
      type: 'Casual Leave',
      reason: 'Family Trip',
      status: 'Pending',
      appliedDate:'30-2-15'
    },
    {
      name: 'Sam Brown',
      dateFrom: '2025-06-15',
      dateTo: '2025-06-16',
      type: 'Personal',
      reason: 'Appointment',
      status: 'Pending',
      appliedDate:'30-2-15'
    },
  ] );
    const handleApprove = (index) => {
    const updatedRequests = [...leaveRequests];
    updatedRequests[index].status = 'Approved';
    setLeaveRequests(updatedRequests);
  };

  const handleReject = (index) => {
    const updatedRequests = [...leaveRequests];
    updatedRequests[index].status = 'Rejected';
    setLeaveRequests(updatedRequests);
  };


  return (
    <>
    <SAHeader />
    <div className="rl-body-container">
      <h2 className="rl-title">Leave Requests</h2>
      <div className="rl-table-wrapper">
        <table className="rl-table">
          <thead>
            <tr>
              <th className="rl-table-header">Name</th>
              <th className="rl-table-header">Date From</th>
              <th className="rl-table-header">Date To</th>
              <th className="rl-table-header">Type of Leave</th>
              <th className="rl-table-header">Reason</th>
              <th className="rl-table-header">Status</th>
              <th className="rl-table-header">Applied Date</th>
              <th className="rl-table-header">Action</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((request, index) => (
              <tr key={index} className="rl-table-row">
                <td className="rl-table-cell">{request.name}</td>
                <td className="rl-table-cell">{request.dateFrom}</td>
                <td className="rl-table-cell">{request.dateTo}</td>
                <td className="rl-table-cell">{request.type}</td>
                <td className="rl-table-cell">{request.reason}</td>
                <td className="rl-table-cell">{request.status}</td>
                <td className="rl-table-cell">{request.appliedDate}</td>
                <td className="rl-table-cell1">
                  <button
                    className="rl-action-button rl-approve-button"
                    onClick={() => handleApprove(index)}
                    disabled={request.status !== 'Pending'}
                  >
                    Approve
                  </button>
                  <button
                    className="rl-action-button rl-reject-button"
                    onClick={() => handleReject(index)}
                    disabled={request.status !== 'Pending'}
                  >
                    Reject
                  </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default RLeaveBody;