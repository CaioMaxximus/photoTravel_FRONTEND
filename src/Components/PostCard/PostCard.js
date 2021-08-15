import React  from 'react';
import './style.css'

export default function postCard(props){

    let {imageUrl} = props.props;
    console.log(props.props);
    console.log(imageUrl);



    return  <div className = "post_card">
        <header>
            <div>
                <p>numero de likes</p>
            </div>
        </header>
        <img src= {imageUrl} />
        <footer>by : user_nick</footer>
    </div>
}
