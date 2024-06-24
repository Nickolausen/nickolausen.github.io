import profile_picture from '../assets/media/profile.jpg'
import Button from '../components/Button'

function InitialScreen() {
    return (
        <section id='home' className='lg:h-dvh grid sm:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 items-center'>
            <div className='lg:col-span-3 flex flex-col gap-3'>
                <div className='mt-5 sm:mt-0 text-4xl'>Hi! I'm</div>
                <div className='text-6xl lg:text-8xl'><span className='first-letter'>N</span>icholas <span className='first-letter'>M</span>agi</div>
                <div className='text-4xl'><span className='italic'>Aspirant</span> Web & Software Developer</div>
                <div className='text-xl lg:text-2xl text-gray-500'>Computer Science Undergraduate @ University of Bologna, IT</div>
                {/* <div className='grow'></div> */}
                <Button/>
            </div>
            <div className='order-first sm:order-last flex justify-center'>
                <img className='max-w-64 lg:max-w-96' src={profile_picture} alt="Profile Picture" />
            </div>
        </section>
    )
}

export default InitialScreen