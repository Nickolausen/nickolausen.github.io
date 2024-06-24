function ContactCard(link: string, size: any, path: string) 
{
    return <a href={link} target="_parent">
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size.width} 
            height={size.height} 
            viewBox="0 0 24 24">
                <path d={path}/>
        </svg>
    </a>
}

export default ContactCard