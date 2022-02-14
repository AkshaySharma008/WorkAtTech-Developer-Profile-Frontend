// Home page, basically we use the reusable components here in pages.
import React, { useCallback, useEffect, useState } from "react";
import Bar from "../components/Bar/Bar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Title from "../components/Title/Title";
import DeveloperIcon from '../images/Icons _ Illustrations/account_circle-24px.svg';
import DeveloperProfileArrow from '../images/Icons _ Illustrations/north_east-24px.svg';
import { getAllDevelopersAPI } from "../services/developers.service";
import './styles.css';
import { useNavigate } from "react-router-dom";
import AddDeveloperModal from "../components/AddDeveloperModal/AddDeveloperModal";
import SearchIcon from '../images/Icons _ Illustrations/search-24px.svg';


const Home = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [filteredData, setFilteredData] = useState('');

    const getAllDevelopers = () => {
        getAllDevelopersAPI().then(res => {
            setData(res.data.data);
            setFilteredData(res.data.data);
        });
    }

    const handleOnClick = (data) => {
        navigate(`/${data}`);
    }

    useEffect(() => {
        getAllDevelopers();
    }, []);

    const handleAddDeveloperBtn = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const sortData = useCallback(() =>{
        const res = data.filter(item => {
            return item?.id.toLowerCase().includes(inputValue.toLowerCase())
        })
        setFilteredData(res);
    }, [inputValue, data]);

    const handleSearch = (e) => {
        setInputValue(e?.target?.value);
        sortData(inputValue);
    }

    return (
        <div>
            <Header/>
            <Title titleText={"Explore developer profiles"} />
            <Bar/>
            <div className="searchBar-box">
                <div className="search-container">
                    <input className="searchBar-input" placeholder="Search for Username" onChange={handleSearch} />
                    <img className="searchBar-icon" src={SearchIcon} alt="search icon" />
                </div>
            </div>
            <div className="list-container flex-items">
            { !inputValue && data && data.map((item, index) => {
                return (
                        <div className="item" key={index}>
                            <img src={item?.avatar_url} alt="icon" className="avatar-icon"/>
                            <div className="developer-name">{item?.id}</div>
                            <button onClick={() => handleOnClick(item?.id)} className="linkButton" ><img src={DeveloperProfileArrow} alt="profile link arrow"/></button>
                        </div>
                )
            })}
             { inputValue && filteredData && filteredData.map((item, index) => {
                return (
                        <div className="item" key={index}>
                            <img src={item?.avatar_url} alt="icon" className="avatar-icon"/>
                            <div className="developer-name">{item?.id}</div>
                            <button onClick={() => handleOnClick(item?.id)} className="linkButton" ><img src={DeveloperProfileArrow} alt="profile link arrow"/></button>
                        </div>
                )
            })}
            </div>
            <Bar/>
            <div className="add-developer">
                <div className="add-developer-title">{ data?.length === 0 ? 'No developers added yet' : 'Could not find what you are looking for?'}</div>
                <div className="align-center">
                    <button className="add-developer-btn" onClick={handleAddDeveloperBtn}>Add Developer Info</button>
                </div>
            </div>
            <AddDeveloperModal modalOpen={showModal} closeModal={closeModal} callBack={getAllDevelopers}/>
            <Footer/>
        </div>
    )
};

export default Home;