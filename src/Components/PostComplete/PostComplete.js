import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom";
import api from "../../resources/api.js"
import Loading from "../Loading/Loading";
import { useEffect } from "react";
import './style.css';

const likeLogo = require("../../assets/icons/favorite_FILL0_wght400_GRAD0_opsz48.svg")
export default function PostComplete() {

    // const id = useLocation().pathname.split("/")[3];
    let { postId } = useParams();

    let [post, setPost] = useState([])
    let [numLikes, setNumLikes] = useState(0)

    useEffect(() => {

        const token = localStorage.getItem("user-local-token");

        api.get(`/posts/${postId}`).then((r) => {
            console.log(r)
            window.lista = r.data.tags
            setPost(r.data)
            setNumLikes(r.data.numLikes)
        }).catch(e => { alert("erro 404") })


        api.get(`/posts/likes/${postId}`,
            { headers: { "Authorization": `Bearer ${token}` } }).
            then((res) => {
                let $btn = document.getElementById("post-like-btn")
                $btn.style.backgroundColor = "red";
                console.log(res.data)

            }).catch(e =>{
                console.log("like doesnt exist")
            })

    }, [])

    useEffect(() => {
        document.getElementById("post-num-likes").innerHTML = numLikes

    }, [numLikes])

    function show() {

        console.log("show")
        console.log(post.likes)

        if (post === []) {
            return <Loading></Loading>
        } else {

            let numLikes = post.numLikes;
            return (<div id="post-complete">
                <div id="post-user-nickname">
                    <span>{post.ownerUser}</span>
                </div>
                <div id="post-user-image">
                    <img src={post.imageUrl} alt="" />
                </div>
                <div id="post-user-likes">
                    <div id="container-likes" ><span id="post-num-likes">{numLikes}</span> LIKES</div>
                    <div id="post-like-btn">
                        <button onClick={() => { like() }}>
                            <img src={likeLogo} alt="" />
                        </button>
                    </div>
                </div>
                <div id="post-user-tags">
                    {Array(post.tags).map((e) => <div>  <button>{e}</button> </div>)}
                </div>
            </div>)
        }

    }

    function like() {
        let token = localStorage.getItem("user-local-token");
        api.post(`/posts/likes/${postId}`, {},
            { headers: { "Authorization": `Bearer ${token}` } }).
            then(function (r) {
                console.log(r);
                let $btn = document.getElementById("post-like-btn")
                if (r.data) {
                    $btn.style.backgroundColor = "blue"
                    setNumLikes(numLikes + 1)
                    console.log(numLikes, "----------")
                } else {
                    $btn.style.backgroundColor = "transparent"
                    setNumLikes(numLikes - 1)
                }
            })
            .catch(e => console.log(e))
    }

    return (<div >


        {show()
        }
    </div>)
}