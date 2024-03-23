import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../Signup/Signup";
import Signin from "../SignIn/Signin";

function AuthPage(props) {
    return (
        <div>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>
        </div>
    );
}

export default AuthPage;
