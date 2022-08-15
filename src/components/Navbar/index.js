import { FaBookReader, FaSeedling, FaDog, FaLaptopCode, FaWalking, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const Navbar = ({setReproduction, mute, setMute}) => {

    const videoContent = [
        {
          id: '9aJsVTBDeyA',
          name: 'Study with me',
          icon: <FaBookReader/>
        },
        {
          id: 'b4AkjHqDDK8',
          name: 'Nature',
          icon: <FaSeedling/>
        },
        {
          id: 'Q2nrqFQ5YyQ',
          name: 'Animal',
          icon: <FaDog/>
        },
        {
          id: 'jF9kUaxHtB4',
          name: 'Code with me',
          icon: <FaLaptopCode/>
        },
        {
          id: 'sPtuOcFmLOs',
          name: 'Walk with me',
          icon: <FaWalking/>
        },
      ]

    const handleOnClick = (n) => {

        setReproduction(videoContent[n])

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
                            <span>{video.name}</span>
                        </div>
                    )
                })}

                <div>
                    <div className="navbar-icon" onClick={() => setMute(!mute)}>
                        {mute ? <FaVolumeMute/> : <FaVolumeUp/>}
                    </div>


                </div>
            </div>
        
        </div>
    )
}

export default Navbar;