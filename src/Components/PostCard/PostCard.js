import React  from 'react';
import { Link , useRouteMatch } from 'react-router-dom';
import './style.css'

export default function PostCard(props){

    const {imageUrl , nickname , id , numLikes} = props.props;
    console.log(props.props);
    console.log(imageUrl);
    const match = useRouteMatch();



    return  <div className = "post_card">
        <header>
            <div>
                <p>numero de likes</p>
            </div>
        </header>
        <Link to = {`${match.path}/${id}`}>
            <img src= {imageUrl} />
        </Link>
        <footer>by : {nickname}</footer>
    </div>
}
