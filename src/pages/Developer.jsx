import React, { useEffect, useState } from "react";
import AboutDeveloper from "../components/AboutDeveloper/AboutDeveloper";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/Navbar";
import Title from "../components/Title/Title";
import Bar from "../components/Bar/Bar";
import DeveloperProfileArrow from '../images/Icons _ Illustrations/north_east-24px.svg';
import { getDeveloperByIdAPI } from "../services/developers.service";

const Developer = () => {
    const [data, setData] = useState(null);

    const getDeveloperData = (id) => {
        getDeveloperByIdAPI(id).then(res => setData(res.data.data));
    }

    useEffect(() => {
        const id = window.location.href.split('/')[3];
        getDeveloperData(id);
    }, []);

    const handleOnClick = (link) => {
        window.open(link);
    }

    const getTimeInFormat = (time) => {
        const res = new Date(time);
        return res.toDateString();
    }

    return (
        <div>
            <NavBar />
            <AboutDeveloper data={data} />
            <Title titleText={'Github Repositories'}/>
            <Bar />
            {data?.repos && data?.repos.map((item, index) => {
                return (
                    <>
                        <div className="github-repo-display" key={index}>
                            <div className="repo-heading">
                                <div className="developer-name">
                                    {item?.name}
                                    <button onClick={() => handleOnClick(item?.html_url)} className="linkButton" ><img src={DeveloperProfileArrow} alt="profile link arrow"/></button>
                                </div>
                                <div className="updatedTimeDisplay">Updated on {getTimeInFormat(item?.updated_at)}</div>
                            </div>
                            <div className="project-description">
                                {item?.description}
                            </div>
                        </div>
                        <Bar/>
                    </>
                )
            })}
            <Footer />
        </div>
    )
}

export default Developer;