import React, { Component, useState } from "react";
import api from '../../resources/api.js'
import PostCard from '../PostCard/PostCard'
import './style.css';

class PostsGallery extends Component {


    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {

        const posts = await api.get("/posts/all",);
        console.log(posts.data);
        this.setState({ posts: posts.data });

    }

    render() {
        return <div id="posts-gallery-view">
            <div className="images-container">
                {this.state.posts.map((post) => <div className = "post-unit"><PostCard props={post}></PostCard></div>)}

            </div>
        </div>
    }


}

export default PostsGallery;