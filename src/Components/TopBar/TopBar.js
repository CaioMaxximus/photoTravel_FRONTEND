import React, { useState } from 'react'
import { NavLink, useRouteMatch, Link, useHistory } from 'react-router-dom';
import './style.css'

const sortIcon = require("../../assets/icons/sort_FILL0_wght400_GRAD0_opsz48.svg")
const logo = require('../../assets/images/InfiteTravelLogoNotBackground.png')


export default function TopBar(props) {


    let [search_opt, setSearchOpt] = useState("posts");
    let [visibility, setVisibility] = useState("none");
    let [searchArea, setSearchArea] = useState("");
    const match = useRouteMatch()
    const path = props.path
    const history = useHistory();
    console.log(props, "TOP BAR")
    console.log(window.location.href.replace(/\/[a-zA-Z]+$/, ""))

    function search() {
        // api.get(`posts/search/tags/${searchArea}`).then(r=>{
        //     console.log(r)
        // })
        let searchParameter = searchArea.replace(" ", "%")
        history.replace("/app/gallery/posts/search/" + searchArea + "sort");
        window.reload()

    }
    let [actualStateSearch, setActualStateSearch] = useState("likes");


    return <div id="top-elements">

        <div id="header">
            <div id="logo">
                <img src={logo} alt="InfiniteTravelLogo"></img>
            </div>

            <div id="search-bar">
                <div id="search-options"
                    onMouseOver={() => setVisibility("grid")}
                    onMouseOut={() => setVisibility("none")}>
                    {search_opt}
                    <ul style={{ display: visibility }}>
                        <li ><button onClick={function () { setSearchOpt("users"); setVisibility("none") }}>users</button></li>
                        <li ><button onClick={function () { setSearchOpt("posts"); setVisibility("none") }}>posts</button></li>
                    </ul>
                </div>
                <div id="top-options">
                    <div id="search-options-gallery">
                        <div>
                            <p>{actualStateSearch}</p>
                            <img src={sortIcon} alt="sort_icon" />
                        </div>
                        <ul>
                            <button onClick={function () { setActualStateSearch("date") }}><li>Date</li></button>
                            <button onClick={function () { setActualStateSearch("likes") }}><li>Likes</li></button>
                        </ul>
                    </div>
                </div>
                <div id="form-search">

                    <form>
                        <input type="text" placeholder="Search.." value={searchArea} onChange={(e) => setSearchArea(e.target.value)} />

                        <button id="search-buton" onClick={() => search()}>
                            Search
                        </button>
                    </form>
                </div>



            </div>
            <div id="tools-bar">
                <nav>
                    <ul className="menu">
                        <li>
                            <NavLink to={`${path}/perfil`}   ><button>Home</button></NavLink>
                        </li>
                        <li>
                            <NavLink to={`${path}/gallery/posts`} ><button >Gallery</button></NavLink>
                        </li>
                        <li><button>About</button>
                            <ul>
                                <li>
                                    <NavLink to="/we"><button>Who are we?</button></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact"><button>Contact</button></NavLink>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </nav>
            </div>

        </div>
    </div>

}