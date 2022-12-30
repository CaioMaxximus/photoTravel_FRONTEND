import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, useRouteMatch } from 'react-router-dom';
import './style.css'
const heartIcon = require('../../assets/icons/6166.jpg')

export default function PostCard(props) {

    console.log(props)
    const { imageUrl, ownerUser, numLikes, id } = props.props;
    console.log(props.props);
    console.log(imageUrl);
    console.log(ownerUser)
    const match = useRouteMatch();
    // const name_id = `post-card-${id}`


    return <div className="post_card">
        <header>
                <p>{numLikes}</p><img src={heartIcon}></img>
        </header>
        <Link to={`/app/gallery/post/${id}`} replace={true}
            onClick={() => { setTimeout(() => { window.location.reload() }, 1) }}
        ><img src={imageUrl} />
        </  Link>
        <footer><p>by : {ownerUser}</p> </footer>
    </div>
}
