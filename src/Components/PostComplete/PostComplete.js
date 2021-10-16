import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import Api from "../../resources/api"
import Loading from "../Loading/Loading";
export default function PostComplete({ postId }) {

    const id = useLocation().pathname.split("/")[3];
    let [post, setPost] = useState("");

    async function getPost() {
        await Api.get("/posts/{id}").then((r) => {
            setPost(r.body)
        }).catch(e => { alert("erro 404") })
    }

    function show() {

        console.log("")
        if (post === "") {
            return <Loading></Loading>
        } else {
            return (<div>
                post
            </div>)
        }

    }


    getPost();
    return (<div>

        sa
        {show()
        }
    </div>)
}