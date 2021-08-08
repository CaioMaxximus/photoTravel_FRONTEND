import React  from 'react';

export default function postCard(props){

    let user_nick, imageUrl = {props}



    return  <div className = "post_card">
        {/* <header>${post_name}</header> */}
        <img src= {imageUrl} alt={ user_nick}/>
        {/* <footer>by : {user_nick}</footer> */}
    </div>
}