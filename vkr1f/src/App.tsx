import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import Home from "./pages/home";
import './App.css'

import AdminIndex from "./pages/admin/IndexAdmin";

import ManagerIndex from "./pages/manager/IndexManager";
import ManagerTour from "./pages/manager/Tour/TourManager.tsx";
import ManagerUsualTour from "./pages/manager/Tour/UsualTourManager.tsx";
import ManagerSocialTour from "./pages/manager/Tour/SocialTourManager.tsx";
import ManagerPlacement from "./pages/manager/PlacementManager.tsx";
import ManagerHotel from "./pages/manager/HotelManager.tsx";
import ManagerInfo from "./pages/manager/InfoManager.tsx";
import ManagerRegistration from "./pages/manager/RegistrationManager.tsx";

import NurseIndex from "./pages/nurse/IndexNurse";
import NurseReports from "./pages/nurse/ReportsNurse.tsx";
import NurseEmployees from "./pages/nurse/EmployeesNurse.tsx";
import NurseTherapy from "./pages/nurse/TherapyNurse.tsx";
import NurseAddCourseProcedure from "./pages/nurse/AddCourseProcedureNurse.tsx";
import NurseAddOneProcedure from "./pages/nurse/AddOneProcedureNurse.tsx";

import ReportsIndex from "./pages/reports/IndexReport";

import UserIndex from "./pages/user/IndexUser";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<AuthPage />} />
                <Route path="/" element={<Home />} />

                <Route path="/admin" element={<AdminIndex />} />

                <Route path="/manager" element={<ManagerIndex />} />
                <Route path="/manager/tour" element={<ManagerTour />} />
                <Route path="/manager/tour/social" element={<ManagerSocialTour />} />
                <Route path="/manager/tour/tour" element={<ManagerUsualTour />} />
                <Route path="/manager/hotel" element={<ManagerHotel />} />
                <Route path="/manager/placement" element={<ManagerPlacement />} />
                <Route path="/manager/registration" element={<ManagerRegistration />} />
                <Route path="/manager/info" element={<ManagerInfo />} />

                <Route path="/nurse" element={<NurseIndex />} />
                <Route path="/nurse/reports" element={<NurseReports />} />
                <Route path="/nurse/employees" element={<NurseEmployees />} />
                <Route path="/nurse/therapy" element={<NurseTherapy />} />
                <Route path="/nurse/therapy/add-one-procedure" element={<NurseAddOneProcedure />} />
                <Route path="/nurse/therapy/add-course-procedure" element={<NurseAddCourseProcedure />} />

                <Route path="/reports" element={<ReportsIndex />} />

                <Route path="/user" element={<UserIndex />} />

            </Routes>
        </Router>
    );
}

export default App
