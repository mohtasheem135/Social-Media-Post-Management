import React, { useEffect, useState } from 'react';
import "../styles/styles.css";
import Select from 'react-select';
import Navbar from './Navbar';
import SaveAltIcon from '@mui/icons-material/SaveAlt';


const Home = () => {
    const [posts, setPosts] = useState({});
    const [selectedOption, setSelectedOption] = useState(null)

    useEffect(() => {
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
        var showList = [];
        showList.push(param);
        showList = showList.concat(JSON.parse(localStorage.getItem('showList') || '[]'));
        // console.log(showList);
        localStorage.setItem("showList", JSON.stringify(showList));
        // console.log(JSON.parse(localStorage.getItem('showList')))
        alert("Saved the page successfully 💾")
    }

    return (
        <div>
            <Navbar data={'Home'} />
            <div className='main-container'>
                <Select
                    styles={{
                        container: () => ({
                            position: "fixed",
                            boxSizing: "border-box",
                            marginLeft: "0px",
                            marginTop: '63px',
                            width: '120px',
                        }),
                        menu: () => ({
                            position: "absolute",
                            background: 'white',
                        }),
                        option: (provided, state) => ({
                            ...provided,
                            borderBottom: '1px dotted pink',
                            color: state.isSelected ? 'red' : 'blue',
                            // paddingLeft: 85,
                            width: '120px',
                            paddingTop: 10,
                            textAlign: 'center',

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
                                        <button className='save-btn' onClick={event => jj(event, posts[id])}><SaveAltIcon /></button>
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