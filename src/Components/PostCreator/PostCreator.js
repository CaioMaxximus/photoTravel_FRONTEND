import React, {useState} from  'react'



/// a consertar de classes e id
export default function PostCreator(){


    let [tags, setTags] = useState([]);
    let [tagString , setTagString] = useState("");

    function tagsMarker(e){

        console.log(e.target.value)
        setTagString(e.target.value);
        let local_tags = tagString.split(" ");
        let exit = []
        for (var i = 0 ; i <= local_tags.length; i++){
            exit.push(local_tags[i]);

        } 
        setTags(exit);
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
                    tagsMarker(e)}
                 value = {tagString}
                ></textarea>
                <div id = "tags-area">{tags.map(tag => <button className = "tag-miniature-creation">{tag}</button>)}</div>
            </div>
        </div>
    </div>)
}
