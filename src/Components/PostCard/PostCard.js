import React  from 'react';
import { NavLink } from 'react-router-dom';
import { Link , useRouteMatch } from 'react-router-dom';
import './style.css'

export default function PostCard(props){

    console.log(props)
    const {imageUrl , nickname , numLikes, id} = props.props;
    console.log(props.props);
    console.log(imageUrl);
    const match = useRouteMatch();
    // const name_id = `post-card-${id}`


    return  <div className = "post_card">
        <header>
            <div>
                <p>{numLikes}</p>
            </div>
        </header>
        <Link to = {`/app/gallery/post/${id}`} replace = {true}
            onClick = {() =>{setTimeout(() => {window.location.reload()},1) }}
        ><img src= {imageUrl} />
        </  Link>
        <footer>by : {nickname}</footer>
    </div>
}
