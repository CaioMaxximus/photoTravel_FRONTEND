import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import {useParams} from "react-router-dom";
import Api from "../../resources/api"
import Loading from "../Loading/Loading";
import { useEffect } from "react";
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
            return (<div id = "complete-post">
                <div id= "user-post-nickname">
                    <span>{post.ownerUser}</span>
                </div>
                <div id  = "user-post-image">
                    {/* <img src={post.imageUrl} alt="" /> */}
                </div>
                <div id = "user-post-likes">

                </div>
                <div id = "user-post-tags">
                {Array(post.tags).map((e) => <div>{e} </div>)}
                </div>
                carregado 
            </div>)
        }

    }


    return (<div>

        sa
        {show()
        }
    </div>)
}