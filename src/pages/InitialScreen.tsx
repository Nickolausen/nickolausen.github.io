import profile_picture from '../assets/media/profile.jpg'
import Button from '../components/Button'


function InitialScreen() {
    return (
        <section id='home' className='h-dvh grid grid-cols-4 place-content-center'>
            <div className='col-span-3 ps-10 flex flex-col gap-3'>
                <div className='text-4xl'>Hi! I'm</div>
                <div className='text-8xl'><span className='first-letter'>N</span>icholas <span className='first-letter'>M</span>agi</div>
                <div className='text-4xl'><span className='italic'>Aspirant</span> Web & Software Developer</div>
                <div className='text-2xl text-gray-500'>Computer Science Undergraduate @ University of Bologna, IT</div>
                <div className='grow'></div>
                <Button/>
            </div>
            <div>
                <img src={profile_picture} alt="Profile Picture" />
            </div>
        </section>
    )
}

export default InitialScreen