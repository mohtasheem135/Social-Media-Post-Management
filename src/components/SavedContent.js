import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router';
import DeleteIcon from '@mui/icons-material/Delete';


const SavedContent = () => {
    const navigate = useNavigate();
    const goTo = (event, param) => {
        console.log(param)
        navigate(`${param}`)
    }

    const jj = (event, param) => {
        const arr = [...JSON.parse(localStorage.getItem('showList'))]
        for (let i = 1; i < arr.length; i++) {
            if (arr[i].id == param.id) {
                arr.splice(i, 1);
                localStorage.setItem('showList', JSON.stringify(arr));
                window.location.reload()
            }
        }
    }

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
                    {Object.keys(JSON.parse(localStorage.getItem('showList'))).map((id, index) => {
                        return (
                            <div className='per-post-div-1' key={id} >
                                {JSON.parse(localStorage.getItem('showList'))[id] != null ?
                                    <div className='post-cards-1'>
                                        <button onClick={event => jj(event, JSON.parse(localStorage.getItem('showList'))[id])} className='save-btn'><DeleteIcon sx={{ fontSize: 35 }} /></button>
                                        <p className='post-title'> userId - {JSON.parse(localStorage.getItem('showList'))[id].userId} : {JSON.parse(localStorage.getItem('showList'))[id].title} </p>
                                        <p className='post-body'>👉 {JSON.parse(localStorage.getItem('showList'))[id].body}</p>
                                        <hr />
                                    </div>
                                    : null
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SavedContent