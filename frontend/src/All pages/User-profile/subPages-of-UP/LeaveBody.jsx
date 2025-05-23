import React, { useState } from 'react';
import './LeaveBody.css';
import Header from '../Components1/Header';

const LeaveBody = () => {
  const [formData, setFormData] = useState({
    fromDate: '',
    toDate: '',
    type: '',
    reason: '',
    status: 'all',
  });

  const [errors, setErrors] = useState({
    fromDate: '',
    toDate: '',
    type: '',
    reason: '',
  });

  const [leaveHistory, setLeaveHistory] = useState([
    {
      from: '2025-05-01',
      to: '2025-05-03',
      type: 'Sick Leave',
      reason: 'Fever',
      status: 'Approved',
      appliedDate: '2025-04-25',
    },
    {
      from: '2025-04-15',
      to: '2025-04-16',
      type: 'Casual Leave',
      reason: 'Personal',
      status: 'Rejected',
      appliedDate: '2025-04-10',
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field when user starts typing
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = () => {
    // Validate required fields
    const newErrors = {
      fromDate: formData.fromDate ? '' : 'From Date is required',
      toDate: formData.toDate ? '' : 'To Date is required',
      type: formData.type ? '' : 'Type is required',
      reason: formData.reason ? '' : 'Reason is required',
    };

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with submission
    const newLeave = {
      from: formData.fromDate,
      to: formData.toDate,
      type: formData.type,
      reason: formData.reason,
      status: 'Pending',
      appliedDate: new Date().toISOString().split('T')[0],
    };
    setLeaveHistory([newLeave, ...leaveHistory]);
    setFormData({
      fromDate: '',
      toDate: '',
      type: '',
      reason: '',
      status: 'all',
    });
    setErrors({
      fromDate: '',
      toDate: '',
      type: '',
      reason: '',
    });
  };

  return (
    <>
    <Header />
    <div className="UPleave-container">
      <h2 className="UPleavebodysection-title">Apply for Leave</h2>
      <div className="UPleave-form">
        <div className="UPform-group">
          <label htmlFor="fromDate">From Date:</label>
          <input
            type="date"
            id="fromDate"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleChange}
            required
          />
        </div>
       <div className='UPfromdate'> {errors.fromDate && <span className="UPerror-message">{errors.fromDate}</span>}</div>
        <div className="UPform-group">
          <label htmlFor="toDate">To Date:</label>
          <input
            type="date"
            id="toDate"
            name="toDate"
            value={formData.toDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className='UPtodate'> {errors.toDate && <span className="UPerror-message">{errors.toDate}</span>}</div>
        <div className="UPform-group">
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Personal">Personal</option>
          </select>
         
        </div>
         <div className='UPtype-of-leave'>{errors.type && <span className="UPerror-message">{errors.type}</span>}</div>
        <div className="UPform-group">
          <label htmlFor="reason">Reason for Leave:</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Enter reason for leave"
            required
          />
          
        </div>
        <div className='UPreason-for-leave'>{errors.reason && <span className="UPerror-message">{errors.reason}</span>}</div>
        <button onClick={handleSubmit} className="UPsubmit-btn">
          Submit
        </button>
      </div>

      <div className="UPstatus-section">
        <h3>Status:</h3>
        <div className="UPstatus-options">
          <label>
            <input
              type="radio"
              name="status"
              value="all"
              checked={formData.status === 'all'}
              onChange={handleChange}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="pending"
              checked={formData.status === 'pending'}
              onChange={handleChange}
            />
            Pending
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="approved"
              checked={formData.status === 'approved'}
              onChange={handleChange}
            />
            Approved
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="rejected"
              checked={formData.status === 'rejected'}
              onChange={handleChange}
            />
            Rejected
          </label>
        </div>
      </div>

      <h2 className="UPleavebodysection-title">Leave History</h2>
      <div className="UPleave-history">
        <table>
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Type</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Applied Date</th>
            </tr>
          </thead>
          <tbody>
            {leaveHistory
              .filter((leave) =>
                formData.status === 'all' ? true : leave.status.toLowerCase() === formData.status
              )
              .map((leave, index) => (
                <tr key={index}>
                  <td>{leave.from}</td>
                  <td>{leave.to}</td>
                  <td>{leave.type}</td>
                  <td>{leave.reason}</td>
                  <td>{leave.status}</td>
                  <td>{leave.appliedDate}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default LeaveBody;