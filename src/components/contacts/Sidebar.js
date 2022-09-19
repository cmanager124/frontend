import React from "react";
import user from '../Images/user.png'
import "./Sidebar.css"
import './Header.css'


function Sidebar() {
    return (
        <main>
            <div className="sidesection">
                <div className="content-container">
                    <div className="h1-tag">
                        <h1>LOGO</h1>
                    </div>
                    <div className="dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-dashboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 4h6v8h-6z"></path>
                            <path d="M4 16h6v4h-6z"></path>
                            <path d="M14 12h6v8h-6z"></path>
                            <path d="M14 4h6v4h-6z"></path>
                        </svg>
                        <p>Dashboard</p>
                    </div>
                    <div className="total-contacts">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-address-book" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z"></path>
                            <path d="M10 16h6"></path>
                            <circle cx="13" cy="11" r="2"></circle>
                            <path d="M4 8h3"></path>
                            <path d="M4 12h3"></path>
                            <path d="M4 16h3"></path>
                        </svg>
                        <p>Total contacts</p>
                    </div>
                </div>
                <div className="logout-container">
                    <div className="logout">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                            <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
                        </svg>
                        <p>LOG OUT</p>
                    </div>
                </div>
            </div>
            <header className='header_component'>
            <div className='header_text'>
                <p>Total Contacts</p>
            </div>
            <div className='second_cont'>
                <div className='search_container'>
                    <p><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="17.49px" height="17.49px" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="10" cy="10" r="7"></circle>
                        <line x1="21" y1="21" x2="15" y2="15"></line>
                        </svg></p>
                        <input type="text" placeholder='Search by Email Id.....' />
                </div>
                <div className='user_container'>
                    <h1><img src={user} alt="" /></h1>
                    <div className='user_detail'>
                        <p>Ram Darvin</p>
                        <p>Super Admin</p>
                    </div>
                </div>

            </div>
        </header>
        </main>
    )
}
export default Sidebar