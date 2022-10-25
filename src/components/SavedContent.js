import React, { useEffect } from 'react';
import Navbar from './Navbar';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router';

const SavedContent = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('showList')) == null) {
            alert("You have not saved any posts... 🗅\nYou are readirected to the Home page 🔗\nThank You 😊")
            navigate('/')
        }
    }, [])

    const jj = (event, param) => {
        // console.log(event)
        const arr = [...JSON.parse(localStorage.getItem('showList'))]
        for (let i = 1; i < arr.length; i++) {
            if (arr[i].id == param.id) {
                arr.splice(i, 1);
                localStorage.setItem('showList', JSON.stringify(arr));
                alert("This post has been deleted successfully ❌")
                window.location.reload()
            }
        }
    }

    return (
        <div>
            <Navbar data={'Saved Contents'} />

            <div className='main-container'>

                <div className='post-card-container'>
                    {Object.keys(JSON.parse(localStorage.getItem('showList'))).map((id, index) => {
                        return (
                            <div className='per-post-div-1' key={id} >
                                {JSON.parse(localStorage.getItem('showList'))[id] != null ?
                                    <div className='post-cards-1'>
                                        <button onClick={event => jj(event, JSON.parse(localStorage.getItem('showList'))[id])} className='save-btn'><DeleteIcon /></button>   {/* Size:--- sx={{ fontSize: 35 }}*/}
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