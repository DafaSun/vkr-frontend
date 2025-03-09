import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import Home from "./pages/home";
import './App.css'

import AdminIndex from "./pages/admin/IndexAdmin";

import MaidIndex from "./pages/maid/IndexMaid";

import ManagerIndex from "./pages/manager/IndexManager";
import ManagerTherapy from "./pages/manager/TherapyManager.tsx";
import ManagerPlacement from "./pages/manager/PlacementManager.tsx";
import ManagerBooking from "./pages/manager/BookingManager.tsx";
import ManagerNutrition from "./pages/manager/NutritionManager.tsx";

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

                <Route path="/maid" element={<MaidIndex />} />

                <Route path="/manager" element={<ManagerIndex />} />
                <Route path="/manager/therapy" element={<ManagerTherapy />} />
                <Route path="/manager/booking" element={<ManagerBooking />} />
                <Route path="/manager/placement" element={<ManagerPlacement />} />
                <Route path="/manager/nutrition" element={<ManagerNutrition />} />

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
