import React from "react";
import '../sass_styles/style.scss'
import { useNavigate } from 'react-router-dom'


function Nav() {

    const navigate = useNavigate()



    return (
        <div className="app_header">
            <h1>My Pantry</h1>
            <nav>
                <li href="#" onClick={() => navigate("/")}><a>Home</a></li>
                <li href="#" onClick={() => navigate("/pantry")}><a>Pantry</a></li>
                <li href="#" onClick={() => navigate("/grocery")}><a >Grocery</a></li>
                <li href="#" onClick={() => navigate("/recipes")}><a >Recipes</a></li>
                <li href="#" onClick={() => navigate("/ingredients")}><a >Ingredients</a></li>
            </nav>
        </div>

    )
}

export default Nav