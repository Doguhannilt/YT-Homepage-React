import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from "./components/header.jsx";
import Sidebar from './components/Sidebar.jsx';
import VideoRender from './components/VideoRender.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <Sidebar />
    <VideoRender />

  </React.StrictMode>,
)
