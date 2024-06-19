import profile_picture from '../assets/media/profile.jpg'

function InitialScreen() {
    return (
        <div className="grid grid-cols-4 gap-9 items-center mx-20 h-full">          
            <img src={profile_picture}></img>
            <div className="col-span-2">
                <div className='text-3 sm:text-2xl md:text-6xl'>Hi! I'm</div>
                <div className='mt-1 text-3 sm:text-2xl md:text-9xl'>
                    <span className="first-letter">N</span>icholas <span className="first-letter">M</span>agi <br></br>
                </div>
                <div className='mt-5 text-3xl'>Computer Science undergraduate @ University of Bologna, IT</div>
                <div className='mt-5 text-5xl'><span className='italic'>Aspirant</span> Web & Software Developer</div>
            </div>
        </div>
    )
}

export default InitialScreen