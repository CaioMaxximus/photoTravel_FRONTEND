import React, { useState } from 'react'
import api from '../../resources/api';
import './style.css'




/// a consertar de classes e id
export default function PostCreator() {


    let [tags, setTags] = useState([]);
    let [imageUrl, setimageUrl] = useState("");

    let [tagString, setTagString] = useState("");
    let [actualTag, setActualTag] = useState("");
    let [creatorDisplay, setCreatorDisplay] = useState("none");


    async function createPost() {

        const $token = localStorage.getItem("user-local-token");
        console.log("aqui");
        await api.post("/posts", { tags, imageUrl } ,{headers : {Authorization : `Bearer ${$token}`}}).then(r => {
            console.log("response");
        }).catch(e => {
            alert(e);
        })
        console.log("aqui2");
    }

    function tagsMarker(e) {

        ///talvez nao precise de useState em tags
        let inp = e.target.value.split(" ");
        let len = inp.length - 1;
        setActualTag(inp[len])
        console.log({ inp })
        console.log({ tags })
        if (inp.length > 1) {
            let local_tags = tags;
            local_tags.push(inp[0]);
            setTags(local_tags);
        }



    }

    function changeVisibility() {
        if (creatorDisplay == "none") {
            setCreatorDisplay("flex");
        }
        else {
            setCreatorDisplay("none");
        }
    }


    return (<div id="post-creator">
        {/* trocar por form talvez */}
        <div id="form-creator" >
            <div id="post-creator-img-link">
                <label htmlFor="link">ImageLink:</label>
                <input name="link" value={imageUrl} type="text" onChange={(e) => setimageUrl(e.target.value)} />

            </div>
            <div id="post-creator-img">
                <img src={imageUrl} alt="" />

            </div>
            <div id="tags-creator"  >
                <label htmlFor="tags">Add some tags to you image..</label>

                <div id="tags-area">{tags.map(tag => <button className="tag-miniature-creation">{tag}</button>)}</div>
                <input type="text" onChange={(e) =>
                    tagsMarker(e)}
                    value={actualTag} />
            </div>
            <button onClick={() => { createPost() }}>create post</button>

        </div>
        <button id="visibilty-creator-changer-btn" onClick={() => changeVisibility()} >create</button>



        <div>
        </div>
    </div>)
}
