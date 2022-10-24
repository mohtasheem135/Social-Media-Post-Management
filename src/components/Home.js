import React, { useEffect, useState } from 'react';
import "../styles/styles.css";
import Select from 'react-select';
import Navbar from './Navbar';
import { useNavigate } from 'react-router';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const Home = () => {

    const [posts, setPosts] = useState({});
    const [selectedOption, setSelectedOption] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        // localStorage.removeItem('all-post')
        const getData = async () => {
            const url = `https://jsonplaceholder.typicode.com/posts`;

            try {
                const resp = await fetch(url);
                const data = await resp.json();
                setPosts(data);
                // console.log(data)
            } catch (err) {
                console.error(err);
            }
        }

        getData()
    }, [])

    const getDataa = async (userId) => {
        console.log(userId.value)
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId.value}`;

        try {
            const resp = await fetch(url);
            const data = await resp.json();
            setPosts(data);
            console.log(data)
        } catch (err) {
            console.error(err);
        }
    }

    const options = [
        { value: '1', label: 'user 1' },
        { value: '2', label: 'user 2' },
        { value: '3', label: 'user 3' },
        { value: '4', label: 'user 4' },
        { value: '5', label: 'user 5' },
        { value: '6', label: 'user 6' },
        { value: '7', label: 'user 7' },
        { value: '8', label: 'user 8' },
        { value: '9', label: 'user 9' },
        { value: '10', label: 'user 10' },
    ];


    const handleChange = (selectedOption) => {
        console.log(selectedOption)
        setSelectedOption(selectedOption)
        const value = selectedOption.value
        getDataa({ value })

    }



    const jj = (event, param) => {

        console.log(event)
        let oldData = JSON.parse(localStorage.getItem('all-post'))
        // localStorage.setItem('all-post', JSON.stringify({0: param}));
        localStorage.setItem('all-post', JSON.stringify([...oldData, param]));
        console.log(JSON.parse(localStorage.getItem('all-post')))



    }
    const goTo = (event, param) => {
        console.log(param)
        navigate(`${param}`)
    }

    return (
        <div>
            <Navbar data={'Home'} />
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
                <Select
                    styles={{
                        container: () => ({
                            position: "fixed",
                            boxSizing: "border-box",
                            marginLeft: "190px",
                            marginTop: '67px',
                        }),
                        menu: () => ({
                            position: "absolute",
                            background: 'white'
                        }),
                        option: (provided, state) => ({
                            ...provided,
                            borderBottom: '1px dotted pink',
                            color: state.isSelected ? 'red' : 'blue',
                            padding: 20,
                            // background: 'white'
                        }),
                    }}
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    placeholder="All Users"

                />

                <div className='post-card-container'>
                    {Object.keys(posts).map((id, index) => {
                        return (
                            <div className='per-post-div-1' key={id} >
                                {posts[id].userId ?
                                    <div className='post-cards-1'>
                                        <button className='save-btn' onClick={event => jj(event, posts[id])}><SaveAltIcon sx={{ fontSize: 35 }} /></button>
                                        <p className='post-title'> userId - {posts[id].userId} : {posts[id].title} </p>
                                        <p className='post-body'>👉 {posts[id].body}</p>
                                        <hr />
                                    </div>
                                    : null
                                }
                            </div>
                        )
                    })}
                </div>
                {/* <button onClick={print}>PRINT</button> */}
            </div>
        </div>
    )
}

export default Home