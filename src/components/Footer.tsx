import styles from './Footer.module.css'

function Footer() 
{
    return <>
        <footer className={styles.footer + " mt-10 flex justify-center content-center p-20 text-white text-center"}>Handmade with &lt;3 by Nicholas Magi</footer>
    </>
}

export default Footer