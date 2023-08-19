import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import './navbar.css';
import { useDispatch } from 'react-redux';

function Navbar() {
    const dispatch = useDispatch();

    const logoutFunc = () => {
        localStorage.clear();
        window.location = './auth';
    };

    const openModal = () => {
        dispatch({ type: 'MODAL', payload: true });
    };

    return (
        <div className='contain'>
            <div>POST PAYLAŞ</div>
            <div className='container-d'>
                <input type='text' placeholder='Ara...' />
                <div onClick={openModal} className='post'>Post Oluştur</div>
                <BiLogOut onClick={logoutFunc} className='logo' />
            </div>
        </div>
    );
}

export default Navbar;
