import React, {useState} from  'react'



/// a consertar de classes e id
export default function PostCreator(){


    let tags, setTags = useState([]);
    let tagString , setTagString = useState("");

    function tagsMarker(e){

        ;
        for (let tag in  tagString.split(" ")){
            tags.push(tag);
        } 
    }

    return (<div id = "post-creator">
        <div className = "content">
            <div id = "form">
                <label htmlFor="link">ImageLink:</label>
                <input name = "link" type="text" />
                <label htmlFor = "tags">Add some tags to you image..</label>
                <textarea name="" id="" cols="30" rows="10" 
                placeholder = "put each tag separated for space"
                 onChange ={(e)=>
                setTagString(e.target.value)}
                 value = {tagString}
                ></textarea>
                <div id = "tags-area">{tags}</div>
            </div>
        </div>
    </div>)
}
