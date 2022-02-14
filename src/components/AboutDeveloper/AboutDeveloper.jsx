import React from "react";
import './AboutDeveloper.css';
import githubIcon from '../../images/Profile Icons/iconfinder_github_317712.png';
import hackerrankIcon from '../../images/Profile Icons/iconfinder_160_Hackerrank_logo_logos_4373234.png';
import codechefIcon from '../../images/Profile Icons/codechef-1324440139527402917_32.png';
import LinkedInIcon from '../../images/Profile Icons/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import MediumIcon from '../../images/Profile Icons/iconfinder_Circled_Medium_svg5_5279113.png';
import TwitterIcon from '../../images/Profile Icons/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';
import EmailIcon from '../../images/Profile Icons/email-24px.svg';
import locationIcon from '../../images/Icons _ Illustrations/location_on-24px.svg';
import companyIcon from '../../images/Icons _ Illustrations/business-24px.svg';
import blogIcon from '../../images/Icons _ Illustrations/insert_link-24px (1).svg';


const AboutDeveloper = ({data}) => {
    return (
        <div className="About">
            <div className="flex">
                <img src={data?.avatar_url} alt="profile picture" className="profile-pic" />
                <div className="developer-detail">
                    <span className="name">{data?.name}</span><br/>
                    <span className="bio" >{data?.bio}</span>
                    <div>
                        {data?.github_id && <a href={`https://github.com/${data?.github_id}`}><img src={githubIcon} alt="github icon" className="icon" /></a>}
                        {data?.hackerrank_id && <a href={`https://www.hackerrank.com/${data?.hackerrank_id}`}><img src={hackerrankIcon} alt="hackerrank icon" className="icon" /></a>}
                        {data?.codechef_id && <a href={`https://www.codechef.com/users/${data?.codechef_id}`}><img src={codechefIcon} alt="codechef icon" className="icon" /></a>}
                        {data?.linkedin_id && <a href={`https://www.linkedin.com/in/${data?.linkedin_id}`}><img src={LinkedInIcon} alt="linkedin icon" className="icon" /></a>}
                        {data?.medium_id && <a href={`https://medium.com/@${data?.medium_id}`}><img src={MediumIcon} alt="medium icon" className="icon" /></a>}
                        {data?.twitter_id && <a href={`https://twitter.com/${data?.twitter_id}`}><img src={TwitterIcon} alt="twitter icon" className="icon" /></a>}
                        {data?.email && <a href={`mailto:${data?.email}`}><img src={EmailIcon} alt="gmail icon" className="icon" /></a>}
                    </div>
                    <div className="moreDetails">
                        {data?.location && <><img src={locationIcon} alt="location" className="icon" /><span className="minorHeadings">{data?.location}</span></>}
                        {data?.company && <><img src={companyIcon} alt="location" className="icon" /><span className="minorHeadings">{data?.company}</span></>}
                        {data?.blog && <><img src={blogIcon} alt="location" className="icon" /><span className="minorHeadings">{data?.blog}</span></>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutDeveloper;