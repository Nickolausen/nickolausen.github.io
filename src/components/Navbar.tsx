import ContactCard from "./ContactCard"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() 
{
    const navigation = [
        { key: 1, name: "N.M. portfolio", href: "#home", current: true },
        { key: 2, name: "Education", href: "#education", current: false },
        { key: 3, name: "Projects", href: "#projects", current: false },
        { key: 3, name: "University", href: "#university", current: false },
        { key: 4, name: "Contact Me", href: "#contact-me", current: false },
    ]

    /*
     Icon Website: https://iconmonstr.com/
    */
    const contact_tabs = [
        { item: ContactCard("https://github.com/Nickolausen", {width: 30, height: 30}, "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z")},
        { item: ContactCard("https://linkedin.com/in/nicholas-magi-23a5a2240", {width: 30, height: 30}, "M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z")},
        { item: ContactCard("#contact-me", {width: 30, height: 30}, "M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z")},
    ]

    return (
        <nav className="flex flex-row gap-10 p-5 px-20 sticky top-0 left-0 right-0 text-xl items-center">
            { 
                navigation.map((item) => {
                    let output
                    switch (item.name) 
                    {
                        case "N.M. portfolio":
                            output = <>
                                <a href={item.href} className={classNames(item.current ? '' : '') + ' text-4xl grow'}><span className="first-letter">N</span>.<span className="first-letter">M</span>. portfolio</a>
                                <small className="px-2 bg-yellow-300 rounded-lg">
                                    This site is currently work in progress!
                                </small>
                            </>
                            break
                        
                        case "Contact Me":
                            output = <>
                                <div className="flex flex-row gap-5">
                                    {
                                        contact_tabs.map(tab => tab.item)
                                    }
                                </div>
                            </>
                            break

                        default:    
                            output = <a href={item.href}>{item.name}</a>
                            break
                    }

                    return output
                }) 
            }
        </nav>
    )
}

export default Navbar