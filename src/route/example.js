import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import App from "../App";
import SearchForm from "../component/SearchForm";
import "./../App.scss"
import { HomeOutlined, SearchOutlined } from "@ant-design/icons"


export default function BasicExample() {
    return (
        <BrowserRouter>
            <div className="navbar-div">
                <nav className="navbar-home">
                    <Link to="/"><HomeOutlined className="home-icon"/> Home</Link>
                </nav>
                <nav className="navbar-serach">
                    <Link to="search"><SearchOutlined className='search-Icon'/>Serach and Filet</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/search" element={<SearchForm />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

