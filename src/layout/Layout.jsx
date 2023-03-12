import React, {useState} from 'react';
import './Layout.scss';
import TopHeader from './TopHeader';
import Footer from './Footer';
import LeftSideBar from './LeftSideBar';
import { Outlet } from "react-router-dom";

const Layout =()=>{
    
    return(
        <div className="container-fluid">
            <div className="main-header">
                <div className="col-12">
                    <TopHeader />
                </div>
            </div>
            <div className="main-section">
                <div className="left-menu">
                    <LeftSideBar/>
                </div>
                <div className="main-box">
                    <Outlet />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Layout;