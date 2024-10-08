import styles from './Footer.module.css'

function Footer() 
{
    return <>
        <footer className={styles.footer + " border-t-2 mt-20 flex justify-center content-center p-20 text-center text-black bg-[--nav-bg]"}>
            <span>Handmade with <i className='fa fa-heart text-[--accent-color]'></i> by <a className='text-[--accent-color]' href='https://github.com/Nickolausen'>Nicholas Magi</a></span>
        </footer>
    </>
}

export default Footer