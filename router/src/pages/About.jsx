import React from 'react';
import { Link, Outlet } from "react-router-dom";

function About() {
    return (
        <div>
            <h1>ABOUT</h1>
            <hr />
            <Link to='employee ' className='link-sub'>Çalışanlar Hakkında </Link>
            <Link to='company' className='link-sub'>Şirket Hakkında </Link>

            <Outlet />
        </div>
    )
}

export default About
