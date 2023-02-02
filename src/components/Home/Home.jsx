import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal';
import './Home.css'
import group1 from '../../images/Rectangle 6.png'
import group2 from '../../images/Rectangle 6 (1).png'
import group3 from '../../images/Rectangle 6 (2).png'


export default function Home({ setModal }) {
    const [loggedIn, setLoggedIn] = useState(false)
    const [posts, setPosts] = useState([]);
    const [isFollowed, setFollow] = useState(false)


    useEffect(() => {
        fetch('https://dummyjson.com/posts?limit=15')
            .then((res) => res.json())
            .then((res) => {
                console.log(res.posts)
                setPosts(res.posts);
            })

        if (localStorage.getItem('user')) {
            setLoggedIn(true);
        }
    }, [])

    return (
        <>
            <div className='header'>
                <div className="img">
                </div>
                <div className="img-heading">
                    <h1>Computer Engineering</h1>
                </div>
                <div className="img-text">
                    <p>142,765 Computer Engineers follow this</p>
                </div>
            </div>
            <div className="content-bar px-0 d-flex">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link nav-show" aria-current="page" href="#">All Posts({posts.length})</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Article</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Event</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Education</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Job</a>
                    </li>
                </ul>
                
                <span className='btns'>
                    <button className='custom-btn btn mx-3'>Write a Post <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-caret-down-fill " viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg></button>
                    {!loggedIn && <button className='btn btn-primary'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        </svg> Join Group</button>}
                    {loggedIn && <button className='leaveBtn'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.24917 12.2908L8.54167 13.5833L13.125 9L8.54167 4.41667L7.24917 5.70917L9.61417 8.08333H0.75V9.91667H9.61417L7.24917 12.2908ZM15.4167 0.75H2.58333C1.56583 0.75 0.75 1.575 0.75 2.58333V6.25H2.58333V2.58333H15.4167V15.4167H2.58333V11.75H0.75V15.4167C0.75 16.425 1.56583 17.25 2.58333 17.25H15.4167C16.425 17.25 17.25 16.425 17.25 15.4167V2.58333C17.25 1.575 16.425 0.75 15.4167 0.75Z" fill="#6A6A6B" />
                        </svg>

                        Leave Group</button>}
                </span>

            </div>
            <div className="content-container">
                <div className="content">
                    {posts.map((post, i) => (

                        <div className="card my-2" key={i}>

                            <img className="card-img-top" src="https://images.unsplash.com/photo-1668545813330-ab91df2ab5a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="Card image cap" />
                            <div className="card-body">
                                <span>
                                    <h5 className="card-title">{post.title}</h5>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="card-title bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg></span>

                                <p className="card-text">{post.body}</p>
                                <span className='card-profile'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                        </svg>
                                        Sarthak Kamra
                                    </span>
                                    <span className='profile-side'>
                                        <span className='mx-4'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                            </svg>
                                            1.4k views
                                        </span>
                                        <button className='btn btn-secondary share-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
                                                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                                            </svg>
                                        </button>
                                    </span>
                                </span>
                            </div>
                        </div>
                    ))
                    }
                </div>
                <div className="content-sidebar">
                    <div className="location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <input type="text" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                        </svg>
                    </div>
                    <div className='location-info'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                        </svg>
                        <span>
                            Your location will help us serve better and extend a personalised experience.
                        </span>
                    </div>
                    <div id='groups-heading'>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z" fill="black" />
                        </svg>
                        <span>
                            Recommended Groups</span>
                    </div>
                    <div className="groups">
                        <div className="group">
                            <img src={group1} alt="" />
                            <span>
                                <strong>Leisure</strong></span>
                            <button type='button' className={`btn btn-${isFollowed === true ? 'dark' : 'secondary'}`} onClick={
                                () => {
                                    isFollowed === false ? setFollow(true) : setFollow(false)
                                }
                            }>
                                {
                                    isFollowed === false ? 'Follow' : 'Followed'
                                }
                            </button>
                        </div>
                        <div className="group">
                            <img src={group2} alt="" />
                            <span>
                                <strong>Leisure</strong></span>
                            <button className='btn btn-secondary float-end'>Follow</button>
                        </div>
                        <div className="group">
                            <span>
                                <img src={group3} alt="" />
                                <strong>Leisure</strong></span>
                            <button className='btn btn-secondary float-end'>Follow</button>
                        </div>

                    </div>
                    <div className='float-end'>

                        <a href="" >See More..</a>
                    </div>
                </div>
            </div>

        </>
    )
}
