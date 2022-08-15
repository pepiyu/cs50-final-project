import { useState, useEffect } from 'react';

const Workspace = ({reproduction, mute}) => {

    const [ytSrc, setYtSrc] = useState('')
    
    useEffect(() => {
    
        const isMute = mute ? '1' : '0';
        const src = `https://www.youtube.com/embed/${reproduction.id}?start=11&autoplay=1&mute=${isMute}&controls=0&start=10&origin=https%3A%2F%2Flifeat.io&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=0&enablejsapi=1&widgetid=3`
        setYtSrc(src)
    }, [ytSrc, mute])
    return (
        <div className="video-player" style={{width: "100vw", height: "100vh", position: "absolute"}}>
            <div style={{width: "100%", height: "100%"}}>
                <iframe frameBorder="0" 
                allowFullScreen="1" 
                allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                width="100%" 
                height="100%" 
                src={ytSrc} id="widget4"></iframe>
            </div>
        </div>

    )
}

export default Workspace;
