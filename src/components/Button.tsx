import styles from './Button.module.css'

function Button(): JSX.Element
{
    return <>
        <button className={styles.btn + " text-l text-white p-4 px-5 rounded-lg white uppercase self-start"}>Download My CV</button>
    </>
}

export default Button