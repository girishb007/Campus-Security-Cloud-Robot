import React, { Component } from 'react';

import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterShareButton,  
  TwitterIcon,
  EmailShareButton,
  EmailIcon

} from 'react-share';
import { toast, ToastContainer } from 'react-toastify';
import QR from "./QR.jpg"
import {saveAs} from "file-saver";




export default class Social extends Component {
  render() {
    const shareUrl = 'https://i.ibb.co/GJYGKZr/QR.png';
    const handleClick = ()=>{
      let url = "https://i.ibb.co/GJYGKZr/QR.png"
      saveAs(url, "QR");
     }
    return (
      <div
        style={{
          background: '#0000',
          height: '100vh',
          width: '100%',
        }}
      >
        <div className="container p-2 center9">
    
                <ToastContainer autoClose={3000}  />
        <h1>Download or Share the Payment QR code</h1>
        <div>
        <img style={{ width: 400, height: 400 }}
        src={QR}/>
        </div>
        <FacebookShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <TwitterShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
        <EmailShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>
        <div className="App">
         <button className="btn btn-dark m-3"  onClick={handleClick}>Dowload image</button>
     </div>
      </div>
      </div>
      
              

    );
  }
}
