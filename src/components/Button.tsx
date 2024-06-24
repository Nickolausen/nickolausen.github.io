import styles from './Button.module.css'

type Props = {
    classNames?: string,
    text?: string,
    onClickHandler?: React.MouseEventHandler<HTMLButtonElement>
}

function Button({classNames, text, onClickHandler}: Props): JSX.Element
{
    return <>
        <button onClick={onClickHandler} className={classNames + " " + styles.btn + " text-l text-white p-4 px-5 rounded-lg white uppercase self-start"}>{text}</button>
    </>
}

export default Button