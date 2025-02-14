import React, { useState } from 'react'
import "./Sidebar.css"
import {assets} from "../../assets/assets"

const Sidebar = () => {
    const[extended,setExtended] = useState(false)

  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt=" menu" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="plus" />
                {extended?<p>New Chat</p>:null}
            </div>
           {extended? 
            <div className="recent">
                <p className="recent-tittle"></p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="message " />
                    <p> What is react ...</p>

                </div>
            </div>
            :null
           }

        </div>
        <div className="bottom">
            <div className="bottom-item  recent-entry">
                <img src={assets.question_icon} alt="question" />
                {extended?<p> Help</p>:null}
            </div>
            <div className="bottom-item  recent-entry">
                <img src={assets.history_icon} alt="question" />
                {extended?<p> Activity</p>:null}
            </div>
            <div className="bottom-item  recent-entry">
                <img src={assets.setting_icon} alt="question" />
                {extended? <p> settings</p>:null}
            </div>

        </div>

    </div>
  )
}

export default Sidebar