import React, { useEffect } from 'react'

import './Live.css'

function Live() {

    useEffect(() => {
        const videoElement = document.getElementById('video-stream');
        videoElement.src = "http://localhost:5000/video";

        return () => {
            videoElement.src = "";
        };
    }, []);

    return (
        <div className="live-video-container">
            <h1 className="live-video-title">CassiaShield Live</h1>
            <div className="live-video-wrapper">
                <img id="video-stream" src="" alt="Live Video Feed" className="live-video" />
            </div>
        </div>
    )
}

export default Live