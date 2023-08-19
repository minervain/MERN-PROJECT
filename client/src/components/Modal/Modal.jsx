import React, { useState } from 'react'
import './style.css'
import {AiOutlineClose} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { createPostAction } from '../../redux/actions/post';

function Modal() {
    const dispatch=useDispatch();
    const [postData,setPostData]=useState({user:'',title:'',description:''})


    const postFunc=(e)=>{
        setPostData({...postData,[e.target.name]:e.target.value})
    }

    const modalKapat=()=>{
        dispatch({type:'MODAL',payload:false})
    }

    const postOlustur=()=>{

        dispatch(createPostAction(postData))
        dispatch({type:'MODAL',payload:false})
    }
    return (
        <div className='containn'>
            <div className='container-modal'>
            <h1>POST </h1>
            <div onClick={modalKapat}> <AiOutlineClose/> </div>
            <div className='inputS'>

                <input value={postData.user} onChange={postFunc} name='user' type="text" placeholder='user' className='i'/>
                <input value={postData.title} onChange={postFunc} name='title' type="text"  placeholder='title ' className='i'/>
                <input value={postData.description} onChange={postFunc} name='description' type="text"  placeholder='description' className='i'/>
            </div>
            <div onClick={postOlustur} className='postO'>POST OLUŞTUR</div>
            </div>
        </div>
    )
}

export default Modal