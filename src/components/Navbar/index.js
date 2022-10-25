import { FaBookReader, FaSeedling, FaDog, FaLaptopCode, FaWalking, FaVolumeUp, FaVolumeMute, FaClock, FaRegListAlt } from "react-icons/fa";

const Navbar = ({setReproduction, mute, setMute, setTimerVisible, setToDoListVisible}) => {

    const videoContent = [
        {
          id: ['9aJsVTBDeyA','a3dGN1K_Y0E','6MsRcPRP0DU','RYc4ouHyEvM'],
          name: 'Study with me',
          icon: <FaBookReader/>
        },
        {
          id: ['b4AkjHqDDK8','IjJ_uuLn0PQ'],
          name: 'Nature',
          icon: <FaSeedling/>
        },
        {
          id: ['Q2nrqFQ5YyQ','HjvIAJMbXi4','_E4RmEMKANQ'],
          name: 'Animal',
          icon: <FaDog/>
        },
        {
          id: ['jF9kUaxHtB4','Pn2mzyU52yI','Nxb57R-HK1I','jUoYSqxmulw'],
          name: 'Code with me',
          icon: <FaLaptopCode/>
        },
        {
          id: ['sPtuOcFmLOs','vWeMvNMA7Co'],
          name: 'Walk with me',
          icon: <FaWalking/>
        },
      ]

    const handleOnClick = (n) => {

        const random = Math.floor(Math.random() * videoContent[n].id.length);

        setReproduction({id: videoContent[n].id[random], name: videoContent[n].name})

    }
       

    return (
        <div className="navbar box">
            <div className="navbar-title">
                <h2>Scene</h2>
            </div>
            <div className="navbar-content">
                {videoContent.map((video, n) => {
                    return (
                        <div className="navbar-item" key={n} onClick={() => handleOnClick(n)}>
                            <div className="navbar-icon">
                                {video.icon}
                            </div>
                            <span className="navbar-text">{video.name}</span>
                        </div>
                    )
                })}

                <hr className="divisor"></hr>

                <div>
                    <div className="navbar-item" onClick={() => setMute(!mute)}>
                        <div className="navbar-icon" >
                            {mute ? <FaVolumeMute/> : <FaVolumeUp/>}
                        </div>
                        <span className="navbar-text">{mute ? "Mute" : "On"}</span>
                    </div>

                    


                </div>

                <div className="navbar-item" onClick={() => setTimerVisible(true)}>
                    <div className="navbar-icon">
                        <FaClock/>
                    </div>
                    <span className="navbar-text">Timer</span>
                </div>

                <div className="navbar-item" onClick={() => setToDoListVisible(true)}>
                    <div className="navbar-icon">
                        <FaRegListAlt/>
                    </div>
                    <span className="navbar-text">To-do</span>
                </div>

            </div>
        
        </div>
    )
}

export default Navbar;