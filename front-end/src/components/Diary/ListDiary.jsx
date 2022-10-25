import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { NavLink } from "reactstrap";

const ListDiary = () => {

    const url = process.env.REACT_APP_URL_AXIOS;
    const [diaryData, setDiaryData] = useState([])
    const token = localStorage.getItem('jwtLogin')

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(url + '/diary/getAllDiary',
                    {
                        headers: {
                            token: `Bearer ${token}`,
                            accept: 'application/json'
                        }
                    }
                );
                console.log(res);
                setDiaryData(res.data);
            } catch (err) {
                console.log(err);
            }
        })()
    }, []);

    return (
        <div className="list-topic">
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <form className="d-flex form-search-topic" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </form>
                </div>
            </nav>
            {diaryData.map((d) => (
                <div className="topic-element">
                    <div className='btn-topic-element'>
                        <NavLink href={`/DiaryDetail/${d._id}`}>
                            <div className="topic-name">
                                <span>{d.diaryTitle}</span>
                            </div>
                            <div className="topic-amount">
                                <span> {d.createdAt}</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            ))
            }
            <div className="btn-add-diary">
                <NavLink href="/DiaryForm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </NavLink>
            </div>
        </div>
    )
}

export default ListDiary