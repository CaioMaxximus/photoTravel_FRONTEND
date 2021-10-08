import React, { useState } from 'react'
import './style.css'
import PostsGallery from '../../Components/PostGallery/PostsGallery.js'
import { Switch, Route, useRouteMatch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import PostCard from '../../Components/PostCard/PostCard';

function Gallery(prop) {

    let [actualStateSearch, setActualStateSearch] = useState("likes");
    const match = useRouteMatch();

    return (
            <div id="gallery-page">

                <Switch>
                    <Route  exact path={`${match.path}`}>
                        <div id="top-options">
                            <div id="search-options-gallery">
                                <ul>Sort by: {actualStateSearch}
                                    <button onClick={function () { setActualStateSearch("date") }}><li>Date</li></button>
                                    <button onClick={function () { setActualStateSearch("likes") }}><li>Likes</li></button>
                                </ul>
                            </div>

                        </div>
                        <div id="gallery-view">
                            <PostsGallery apiLink={`post/?mode=${actualStateSearch}`}></PostsGallery>
                        </div>
                    </Route>
                    <Route path={`${match.path}/:postId`}>
                        
                    </Route>
                </Switch>


                {/* <div className="images-container">
            <div className="column-image">
                <img src="https://images.unsplash.com/photo-1584627404349-0bb529b998b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Sung_jin_cho_ " />
                <img src="https://images.unsplash.com/photo-1593508195009-6b96d40ccca1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="Gontran_Insnard_photo" />
                <img src="https://images.unsplash.com/photo-1551734044-8cf6396c8639?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="Toni_osmudson_photo" />
            </div>
            <div className="column-image">
                <img src="https://images.unsplash.com/photo-1570466153480-ad80ec511246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="David hurley photo" />
                <img src="https://images.unsplash.com/photo-1596878276660-83aa67eb1a24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt="Daniel_plan_photo" />
                <img src="https://images.unsplash.com/photo-1571578237363-d5df63ee95bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Urip_dunker_photo" />
                <img src="https://images.unsplash.com/photo-1596766527230-ca7533a12371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="Cinesconpe_creative_photo" />

            </div>

        </div> */}
            </div>
    )
}

export default Gallery