import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from './ProtectedRoutes'
import Dashboard from "../../pages/Dashboard";
import Editor from "../../pages/Editor";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
const AppRoutes = () => {
    return (
        <Routes>

            <Route
                path="/"
                element={
                    localStorage.getItem("token")
                        ? <Navigate to="/dashboard" />
                        : <Navigate to="/login" />
                }
            />
            


            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup />} />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/editor/:id"
                element={
                    <ProtectedRoute>
                        <Editor />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default AppRoutes;