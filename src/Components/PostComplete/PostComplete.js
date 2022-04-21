import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import {useParams} from "react-router-dom";
import Api from "../../resources/api"
import Loading from "../Loading/Loading";
import { useEffect } from "react";
import './style.css';
export default function PostComplete() {

    // const id = useLocation().pathname.split("/")[3];
    let {postId} = useParams();
    console.log(postId ,"id post")

    let [post, setPost] = useState([])

    useEffect(()=>{
        Api.get(`/posts/${postId}`).then((r) => {
            console.log(r)
            window.lista = r.data.tags
            setPost(r.data)
        }).catch(e => { alert("erro 404") })
    }, [])


    function show() {

        console.log("")
        if (post === []) {
            return <Loading></Loading>
        } else {
            return (<div id = "post-complete">
                <div id= "post-user-nickname">
                    <span>{post.ownerUser}</span>
                </div>
                <div id  = "post-user-image">
                    <img src={post.imageUrl} alt="" />
                </div>
                <div id = "post-user-likes">
                    {post.numLikes} LIKES
                </div>
                <div id = "post-user-tags">
                {Array(post.tags).map((e) => <div>  <button>{e}</button> </div>)}
                </div>
            </div>)
        }

    }


    return (<div >

        
        {show()
        }
    </div>)
}