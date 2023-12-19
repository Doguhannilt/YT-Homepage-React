import React, { useEffect, useState } from 'react';
import '../styles/main.css';

const VideoRender = () => {
    const [videos, setVideos] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('./Data/videos.json');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const displayVideos = async () => {
        const payload = await fetchData();
        setVideos(payload);
    };

    useEffect(() => {
        displayVideos();
    }, []);

    return (
        <div className="video-grid">
            {videos.map((video) => (
                <div className="preview-div" key={video.id}>
                    <div>
                        <img src={video.img} className="image-preview" alt="" />
                    </div>
                    <div className="video-info-grid">
                        <div className="channel-picture">
                            <img className="icon-class" src={video.icons} alt="" />
                        </div>
                        <div className="video-info">
                            <div>
                                <p className="video-title">{video.video_title}</p>
                            </div>
                            <div>
                                <p className="video-author">{video.video_author} &#10003;</p>
                            </div>
                            <div>
                                <p className="video-stats">{video.video_stats} &#183; {video.upload} months ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VideoRender;
