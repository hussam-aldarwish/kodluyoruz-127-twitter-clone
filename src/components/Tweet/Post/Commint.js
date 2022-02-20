import React from 'react';
import { BsChat } from 'react-icons/bs';
import { BiRepost } from 'react-icons/bi';
import { FiHeart, FiUpload} from 'react-icons/fi';

import './Post.scss';



export function Commint() {
    return (
        <div className="post">
            <div className="post-avatar">
                <img src="https://pbs.twimg.com/profile_images/1409753050336616450/FySzLooq_400x400.jpg" className="avatar" alt=""/> 
            </div>
            <div className="post-body">
               <div className="post-header">
                    <div className="post-headerText"> 
                         <h3> FC Barcelona 
                         <span className="username"> @FCBarcelona . 14h</span>    
                         </h3>
                     </div>
                     <div className="post-headerDescription">
                      <h5> Ansu Fati <br /> #DreamTeen</h5>
                     </div> 
               </div>  
               <div className="post-footer"> 
                   <BsChat  fontSize="18px" className="message" />
                   <BiRepost fontSize="22px" className="retweet"  />
                   <FiHeart fontSize="18px" className="heart" />
                   <FiUpload  fontSize="18px" className="share" />
               </div>
            </div>
        </div>
    )
}
