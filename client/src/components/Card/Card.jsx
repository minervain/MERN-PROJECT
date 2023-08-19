import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePostAction } from '../../redux/actions/post'
import './card.css'

function Card({ post }) {
    const dispatch = useDispatch();

    console.log(post._id)
    const updatePost = (id) => {
        dispatch({ type: 'MODAL', payload: { open: true, updateId: id } })

    };

    const deletePost = (id) => {
        dispatch(deletePostAction(id));
    };

    return (
        <div className="card">
      <div className="card-title">{post?.title}</div>
      <div className="card-user">{post?.user}</div>
      <div className="card-description">{post?.description}</div>
      <div className="card-date">{post?.date}</div>
      <div className="card-actions">
        <div onClick={() => updatePost(post._id)}>DÜZENLE</div>
        <div onClick={() => deletePost(post._id)}>SİL</div>
      </div>
    </div>
    );
}

export default Card;
