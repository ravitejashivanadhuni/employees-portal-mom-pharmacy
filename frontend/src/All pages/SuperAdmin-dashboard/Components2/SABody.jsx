import React from 'react';
import './SABody.css';
import adminImage from '../../../assets/admin1.jpg';
import SAHeader from './SAHeader';
const SABody = () => {
  const adminDetails = {
    name: 'Ram',
    adminType: 'Super Admin',
    email: 'Ram@info.com',
    phone: '+91 78595 47890',
    // status: 'Active',
    pendingLeaveRequests: 5,
    totalEmployees: 50,
  };
  const tagline = adminDetails.role !== 'N/A' 
    ? `"Lead with Ease, Succeed with Pride: Your Admin Powerhouse" -${adminDetails.name}!`
  
    : 'Making a difference every day!';
  return (
    <>
    <SAHeader />
    <div className="sa-body-container">
      <section className="sa-details">
        <h2 className="sa-details-title">Details of Admin</h2>
        <div className="saadmin1-header">
        <img src={adminImage} alt="admin1" className="saadmin1-image" />
        <p className="saadmin1-tagline">{tagline}</p>
      </div>
        <div className="sa-details-card">
          <p className="sa-details-item">
            <span className="sa-details-label">Name:</span> {adminDetails.name}
          </p>
          <p className="sa-details-item">
            <span className="sa-details-label">Admin Type:</span> {adminDetails.adminType}
          </p>
          <p className="sa-details-item">
            <span className="sa-details-label">Email:</span> {adminDetails.email}
          </p>
          <p className="sa-details-item">
            <span className="sa-details-label">Phone:</span> {adminDetails.phone}
          </p>
        </div>
      </section>
      <div className='status1_Admin1 sa-details1'> 
        <p className="sa-details-title1" >
            <span >Status</span>
          </p>
          <div className='sa-details-card1'>
            <p className="sa-details-item1">
            <span className="sa-details-label1">Pending Leave Requests:</span> {adminDetails.pendingLeaveRequests}
          </p>
          <p className="sa-details-item1">
            <span className="sa-details-label1">Total Employees:</span> {adminDetails.totalEmployees}
          </p></div>
          </div>
    </div></>

  );
};

export default SABody;