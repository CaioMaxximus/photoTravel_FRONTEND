import React, { Component, useState } from "react";
import api from '../../resources/api.js'
import PostCard from '../PostCard/PostCard'
import './style.css';

class PostsGallery extends Component {


    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {

        const posts = await api.get("/posts/all",);
        console.log(posts.data);
        this.setState({ posts: posts.data });

    }

    // renderGallery(post, index) {

    //     if (index % 2 == 0) {
    //         return <div id="column-two"> <div className='post-unit'> </div></div>;
    //     }
    //     else {
    //         return <div id="column-one"> <div className='post-unit'><PostCard props={post}></PostCard> </div></div>;
    //     }    

    // }

    render() {
        return <div id="posts-gallery-view">
            <div className="images-container">
                <div id="column-one">
                    {this.state.posts.map((post, index) => index % 2 !== 0 ? <PostCard props={post}></PostCard> : '')}

                </div>

                <div id="column-two">
                    {this.state.posts.map((post, index) => index % 2 === 0 ?  <PostCard props={post}></PostCard>: '')}
                </div>

            </div>
        </div>
    }


}

export default PostsGallery;