import React, { useState } from 'react'
import './style.css'



/// a consertar de classes e id
export default function PostCreator() {


    let [tags, setTags] = useState([]);
    let [tagString, setTagString] = useState("");
    let [actualTag, setActualTag] = useState("");

    function tagsMarker(e) {

        ///talvez nao precise de useState em tags
        let inp = e.target.value.split(" ");
        let len = inp.length - 1;
        setActualTag(inp[len])
        console.log({inp})
        console.log({tags })
        if(inp.length >  1){
            let local_tags = tags;
            local_tags.push(inp[0]);
            setTags(local_tags);
        }
        

        
    }

    return (<div id="post-creator">e

        {/* trocar por form talvez */}
        <div className="content">
            <div id="form">
                <label htmlFor="link">ImageLink:</label>
                <input name="link" type="text" />
                <label htmlFor="tags">Add some tags to you image..</label>
    
                    <div id = "tags-creator">
                        <div id="tags-area">{tags.map(tag => <button className="tag-miniature-creation">{tag}</button>)}</div>
                        <input type="text" onChange={(e) =>
                        tagsMarker(e)}
                        value={actualTag}/>
                    </div>
                
            </div>
            </div>
        </div>)
}
