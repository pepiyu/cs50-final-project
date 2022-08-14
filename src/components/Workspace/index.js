
const Workspace = () => {

    const youtube = '9aJsVTBDeyA'

    const src = `https://www.youtube.com/embed/${youtube}?start=11&amp;autoplay=1&amp;mute=0&amp;controls=0&amp;start=10&amp;origin=https%3A%2F%2Flifeat.io&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=0&amp;enablejsapi=1&amp;widgetid=3`

    return (
        <div className="video-player" style={{width: "100vw", height: "100vh", position: "absolute"}}>
            <div style={{width: "100%", height: "100%"}}>
                <iframe frameborder="0" 
                allowfullscreen="1" 
                allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                title="Las Cataratas del Niagara en 4K - Vistas Increíbles y Música Relajante" 
                width="100%" 
                height="100%" 
                src={src} id="widget4"></iframe>
            </div>
        </div>

    )
}

export default Workspace;
