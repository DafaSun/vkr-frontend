import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import Home from "./pages/home";
import './App.css'

import AdminIndex from "./pages/admin/IndexAdmin";

import MaidIndex from "./pages/maid/IndexMaid";

import ManagerIndex from "./pages/manager/IndexManager";

import NurseIndex from "./pages/nurse/IndexNurse";
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

                <Route path="/nurse" element={<NurseIndex />} />
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
