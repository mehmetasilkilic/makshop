import React from 'react'
import './newsletter.scss'
import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
    return (
        <div className="newsletter">
            <h2 className="title">Newsletter</h2>
            <div className="desc">Get timely updates from your favorite products.</div>
            <div className="inputContainer">
                <input placeholder="Your email" />
                <button>
                    <SendIcon />
                </button>
            </div>
        </div>
    )
}

export default Newsletter
