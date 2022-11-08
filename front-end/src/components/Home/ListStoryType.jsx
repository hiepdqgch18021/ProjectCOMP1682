import React, { useState, useEffect } from 'react'
import "./home.css"
import axios from "axios";
import { Link } from 'react-router-dom';

const ListStoryType = () => {

    const url = process.env.REACT_APP_URL_AXIOS;
    const [TypeData, setTypeData] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(url + '/admin/getAllTypes'
                    // {
                    //     headers: {
                    //         token: `Bearer ${token}`,
                    //         accept: 'application/json'
                    //     }
                    // }
                );
                console.log(res);
                setTypeData(res.data);
            } catch (err) {
                console.log(err);

            }
        })()
    }, []);
    return (
        <>

            <div className="list-topic">
                <nav className="navbar bg-light">
                    <div className="container-fluid">
                        <h5>
                            <span>List Type Of Story</span>
                        </h5>
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
                {TypeData.map((t, index) => (
                    <div className="topic-element" key={t._id}>

                        <div className='btn-topic-element'>

                            <div className="topic-name">
                                <span className='font-extrabold  from-green-300 via-blue-500 to-purple-600'>
                                    {index + 1}{" : "}
                                </span>
                                <span>{t.type}</span>
                            </div>
                            <div className="topic-amount">
                                <span> 138k story </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default ListStoryType