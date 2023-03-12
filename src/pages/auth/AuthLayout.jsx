import React from "react";
import { Outlet } from "react-router-dom";
import './AuthLayout.scss'

const AuthLayout = () =>{
    return(
        <div className="row justify-content-center auth-layout align-items-center m-0">
            <div className="col-3">
                <div className="card form-box">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout;