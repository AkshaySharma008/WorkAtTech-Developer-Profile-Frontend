import React from "react";
import "./AddDeveloperModal.css";
import Modal from "react-modal";
import Bar from '../Bar/Bar';
import githubIcon from '../../images/Profile Icons/iconfinder_github_317712.png';
import hackerrankIcon from '../../images/Profile Icons/iconfinder_160_Hackerrank_logo_logos_4373234.png';
import codechefIcon from '../../images/Profile Icons/codechef-1324440139527402917_32.png';
import LinkedInIcon from '../../images/Profile Icons/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import MediumIcon from '../../images/Profile Icons/iconfinder_Circled_Medium_svg5_5279113.png';
import TwitterIcon from '../../images/Profile Icons/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';

import {addDeveloperAPI} from '../../services/developers.service';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddDeveloperModal = ({ modalOpen, closeModal , callBack }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      borderRadius: "10px",
      width: "50%",
      overflow: "scroll",
      height: "70%"
    },
  };

  const values = {
      id: '',
      hackerrank_id: '',
      medium_id: '',
      linkedin_id: '',
      twitter_id: '',
      codechef_id: ''
  }

  const handleSubmitBtn = () => {
    if(!values.id) return;

    addDeveloperAPI(values).then(res => {
        toast.success('Added Successfully');
        callBack();
        closeModal();
    }).catch(err => {
        toast.error('Please try again');
        callBack();
        closeModal()
    })
  }
  const handleCancelBtn = () => {
    closeModal();
  }

  const handleOnChange = (value, fieldName) => {
    values[fieldName] = value;
  }

  return (
    <Modal isOpen={modalOpen} style={customStyles} >
      <div className="modal-inner">
        <label className="modal-label">Add Developer Profile</label>
       <Bar />
        <div className="inputField">
            <img src={githubIcon} alt="location" className="inputfield-Icon" /><span className="inputFieldName">{"Github Id*"}</span>
        </div>
        <input className="input" placeholder="Enter you Github ID" onChange={(e) => handleOnChange(e?.target?.value , 'id')}/>
        <div className="inputField">
            <img src={hackerrankIcon} alt="location" className="inputfield-Icon" /><span className="inputFieldName">{"Hackerrank Id"}</span>
        </div>
        <input className="input" placeholder="Enter you Hackerrank ID" onChange={(e) => handleOnChange(e?.target?.value , 'hackerrank_id')}/>
        <div className="inputField">
            <img src={codechefIcon} alt="location" className="inputfield-Icon" /><span className="inputFieldName">{"Codechef Id"}</span>
        </div>
        <input className="input" placeholder="Enter you Codechef ID" onChange={(e) => handleOnChange(e?.target?.value , 'codechef_id')}/>
        <div className="inputField">
            <img src={LinkedInIcon} alt="location" className="inputfield-Icon" /><span className="inputFieldName">{"LinkedIn Id"}</span>
        </div>
        <input className="input" placeholder="Enter you LinkedIn ID" onChange={(e) => handleOnChange(e?.target?.value , 'linkedin_id')}/>
        <div className="inputField">
            <img src={TwitterIcon} alt="location" className="inputfield-Icon" /><span className="inputFieldName">{"Twitter Id"}</span>
        </div>
        <input className="input" placeholder="Enter you Twitter ID" onChange={(e) => handleOnChange(e?.target?.value , 'twitter_id')}/>
        <div className="inputField">
            <img src={MediumIcon} alt="location" className="inputfield-Icon" /><span className="inputFieldName">{"Medium Id"}</span>
        </div>
        <input className="input" placeholder="Enter you Medium ID" onChange={(e) => handleOnChange(e?.target?.value , 'medium_id')}/>
        <Bar />
        <div className="flex-end">
            <button className="cancel" onClick={handleCancelBtn} type="reset">Cancel</button>
            <button className="submit btn" onClick={handleSubmitBtn} type="submit">Submit</button>
        </div>
      </div>
    </Modal>
  );
};

export default AddDeveloperModal;