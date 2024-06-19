function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() 
{
    const navigation = [
        { name: "Home", href: "#", current: true },
        { name: "About Me", href: "#about-me", current: false },
        { name: "Education", href: "#education", current: false },
        { name: "Work Experience", href: "#work-experience", current: false },
        { name: "Contact Me", href: "#contact-me", current: false },
    ]
    return (
        <nav className="flex flex-row gap-10 p-5 sticky top-0 text-xl">
            { navigation.map(item => (
                <a href={item.href} className={classNames(item.current ? 'underline' : '')}>{item.name}</a>
            )) }
        </nav>
    )
}

export default Navbar