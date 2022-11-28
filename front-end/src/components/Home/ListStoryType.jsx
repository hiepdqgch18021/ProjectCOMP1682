import React, { useState, useEffect } from 'react'
import "./home.css"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const url = process.env.REACT_APP_URL_AXIOS;
const token = localStorage.getItem('jwtLogin');

const ListStoryType = () => {

    const [TypeData, setTypeData] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(url + '/admin/getAllTypes',
                    {
                        headers: {
                            token: `Bearer ${token}`,
                            accept: 'application/json'
                        }
                    }
                );
                setTypeData(res.data);
            } catch (err) {
                console.log(err);
            }
        })()
    }, []);
    const [valueSearch, setValueSearch] = useState('')

    return (
        <>
            <div className="sidebar mt-24">
                <div className="sidebarWrapper">
                    <span>List Type Of Story</span>

                    <div className="sidebarListItem">
                        <input
                            className="form-control me-2 sidebarListItemText"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={e => setValueSearch(e.target.value)}
                            value={valueSearch}
                        />

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search sidebarIcon" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </div>
                    </div>

                    <ul className="sidebarList">

                        {TypeData.map((t, index) => {
                            if (t.type.toLowerCase().startsWith(valueSearch.toLowerCase()) || valueSearch === "") {
                                return (

                                    <li className="sidebarListItem" onClick={() => navigate(`/StoryTypeDetail/${t.type}`)}>
                                        <span className="sidebarIcon">{index + 1}{"  "}</span>
                                        <span className="sidebarListItemText">{t.type}</span>
                                    </li>
                                );
                            }
                        }
                        )}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default ListStoryType;


export const getStoryType = (type) => async dispatch => {
    await axios.get(url + `/admin/getAllTypes/${type}`,
        {
            headers: {
                token: `Bearer ${token}`,
                accept: 'application/json'
            }
        })
        .then(res => {
            const storyTypes = res.data.map((storyType) => ({
                type: storyType.type,
            }))
            dispatch({ type: 'GET_TYPE_BY_NAME', payload: storyTypes })
        })
        .catch((err) => console.log("get Story type by name error", err))
}










