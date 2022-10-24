import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router';
import DeleteIcon from '@mui/icons-material/Delete';


const SavedContent = () => {
    const navigate = useNavigate();
    const goTo = (event, param) => {
        console.log(param)
        navigate(`${param}`)
    }
    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem('all-post')));
    }, [])
    return (
        <div>
            <Navbar data={'Saved Contents'} />
            <div className='main-container'>

                <div className='side-menu'>
                    <table className='side-menu-table'>
                        <tr>
                            <td onClick={event => goTo(event, '/')} className='side-menu-table-row'>Home</td>
                        </tr>
                        <tr>
                            <td onClick={event => goTo(event, '/savedContent')} className='side-menu-table-row'>Saved Content</td>
                        </tr>
                        <tr>
                            <td onClick={event => goTo(event, '/about')} className='side-menu-table-row'>About</td>
                        </tr>
                    </table>
                </div>
                <div className='post-card-container'>
                    {Object.keys(JSON.parse(localStorage.getItem('all-post'))).map((id, index) => {
                        return (
                            <div className='per-post-div-1' key={id} >
                                {JSON.parse(localStorage.getItem('all-post'))[id] != null ?
                                    <div className='post-cards-1'>
                                        <button className='save-btn'><DeleteIcon sx={{ fontSize: 35 }} /></button>
                                        <p className='post-title'> userId - {JSON.parse(localStorage.getItem('all-post'))[id].userId} : {JSON.parse(localStorage.getItem('all-post'))[id].title} </p>
                                        <p className='post-body'>👉 {JSON.parse(localStorage.getItem('all-post'))[id].body}</p>
                                        <hr />
                                    </div>
                                    : null
                                }
                            </div>
                        )
                    })}
                </div>
                {/* <h1>{JSON.parse(localStorage.getItem('post'))[0].title}</h1> */}
            </div>
        </div>
    )
}

export default SavedContent