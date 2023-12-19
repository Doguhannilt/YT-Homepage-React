import React from 'react'

//CSS
import '../styles/sidebar.css';

//Images
import sidebarHome from '../images/sidebar-images/home.png';
import sidebarShorts from '../images/sidebar-images/shorts.png';
import sidebarSubs from '../images/sidebar-images/subscription.png';
import sidebarLibrary from '../images/sidebar-images/library.png';


const Sidebar = () => {
  return (
    <div className = "sidebar">
    <div className = "sidebar_icons_grid">
        <img className = "home_sidebar" src={sidebarHome}/>
        <p className = "home_text">Home</p>
    </div>
    <div className ="sidebar_icons_grid">
    <img className="shorts_sidebar" src={sidebarShorts} />
        <p className = "shorts_text">Shorts</p>
    </div>
    <div className = "sidebar_icons_grid">
        <img className = "subscriptions_sidebar" src={sidebarSubs}/>
        <p className = "subscriptions_text">Subscriptions</p>
    </div>
    <div className = "sidebar_icons_grid">
        <img className = "library_sidebar" src ={sidebarLibrary} />
        <p className = "library_text">Library</p>
    </div>
</div>

  )
}

export default Sidebar