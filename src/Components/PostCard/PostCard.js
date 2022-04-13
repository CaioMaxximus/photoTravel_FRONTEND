import React  from 'react';
import { Link , useRouteMatch } from 'react-router-dom';
import './style.css'

export default function PostCard(props){

    console.log(props)
    const {imageUrl , nickname , numLikes} = props.props;
    const id = props.id;
    console.log(props.props);
    console.log(imageUrl);
    const match = useRouteMatch();
    const name_id = `post-card-${id}`


    return  <div className = "post_card" key ={name_id}>
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
