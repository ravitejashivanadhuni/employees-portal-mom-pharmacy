// // src/App.js
// import './App.css';
// import logo from './assets/logo.png';

// import { EmployeeProvider } from './All pages/User-profile/Components1/EmployeeContext';
// import Header from './All pages/User-profile/Components1/Header';
// import Body from './All pages/User-profile/Components1/Body';
// import LeaveBody from './All pages/User-profile/subPages-of-UP/LeaveBody';

// function App() {
//   return (
//     <EmployeeProvider>
//       <div className="App">
//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//         </header> */}

//         {/* User Profile Section */}
//         <div
//           style={{
//             fontFamily: 'DM Sans',
//             backgroundColor: 'aliceblue',
//             minHeight: '100vh',
//           }}
//         >
//           <Header />
//           <main style={{ padding: '20px' }}>
//             <Body />
//           </main>


//         </div>

//         {/* Apply for Leave Section */}
//         <div
//           style={{
//             fontFamily: 'DM Sans',
//             backgroundColor: '#f0f4f8',
//             minHeight: '100vh',
//           }}
//         >
//           <Header />
//           <main style={{ padding: '20px' }}>
//              <Routes>
//             <Route path="/" element={<Body />} /> {/* Home/User Profile page */}
//             <Route path="/apply-for-leave" element={<LeaveBody />} /> {/* Apply for Leave page */}
//             <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect for unmatched routes */}
//           </Routes>
//           </main>
//         </div>
//       </div>
//     </EmployeeProvider>
//   );
// }

// export default App;





import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './All pages/User-profile/Components1/Header';
import Body from './All pages/User-profile/Components1/Body';
import LeaveBody from './All pages/User-profile/subPages-of-UP/LeaveBody';
import { EmployeeProvider } from './All pages/User-profile/Components1/EmployeeContext';
import RegistrationPage from './All pages/Authentication/register/register';
import LoginPage from './All pages/Authentication/login/login';
import LandingPageBody from './All pages/Landing-page/body';
import { useLocation } from 'react-router-dom';
import Contact from './All pages/Landing-page/contactus';
import SAHeader from './All pages/SuperAdmin-dashboard/Components2/SAHeader';
import SABody from './All pages/SuperAdmin-dashboard/Components2/SABody';
import RLeaveBody from './All pages/SuperAdmin-dashboard/subPages-of-AD/Leave_Requests/RLeaveBody'
import MABody from './All pages/SuperAdmin-dashboard/subPages-of-AD/Manage_Admins/MABody';
import LMBody from './All pages/Admin2Dashboard/Components3/LMBody';
import RLeaveBodyLM from './All pages/Admin2Dashboard/subPages-of-LM/Leave_Requests_LM/RLeaveBodyLM';
import SVBody from './All pages/Admin3Dashboard/Components4/SVBody';

// import BackgroundImage from './assets/backgroundimage.png';

function App() {
  const location = useLocation();

  
  return (
    <EmployeeProvider >
      <div
        style={{
          fontFamily: "'DM Sans', Arial, sans-serif",
          minHeight: '100vh',
          // backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* <Header /> */}
        <main style={{  textAlign: 'center' }}>
          <Routes>
            <Route path = "/user-dashboard-header" element={<Header />}/>
            {/* <Route path = "/landing-page-header" element={<LandingPageHeader />} /> */}
            <Route path = "/" element={<LandingPageBody />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path="/employee-dashboard" element={<Body />} />
            <Route path="/apply-for-leave" element={<LeaveBody />} /> 
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/employee-dashboard" element={<div>Employee Dashboard</div>} />
            {/* <Route path="/super-admin-dashboard" element={<div>Super Admin Dashboard</div>} /> */}
            <Route path="/supervisor-dashboard" element={<SVBody />} />
            <Route path="/leave-manager-dashboard" element={<LMBody />} />
            <Route path="/leave-manager-LR" element={<RLeaveBodyLM />} />
            <Route path="/super-admin-dashboard" element={<SABody />} />
            <Route path="/leave-requests" element={<RLeaveBody />} />
            <Route path="/manage-admins" element={<MABody />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
            {/* LM body */}
          </Routes>
        </main>
      </div>
    </EmployeeProvider>
  );
}

export default App;