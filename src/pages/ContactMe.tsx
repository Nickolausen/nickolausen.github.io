// import { useState } from "react"
import Button from "../components/Button"
import './ContactMe.module.css'

// const [mailData, setMailData] = useState({})

// function sendMail() 
// {

// }

function ContactMe() 
{
    return <>
        <section id="contact-me" className="pt-20 flex flex-wrap flex-col content-center justify-center">
            <h1 className="text-5xl font-bold uppercase text-center">Let's keep in touch!</h1>
            <form className="mt-10 p-10 flex flex-col gap-5 shadow-2xl rounded-lg">
                <div className="flex flex-col sm:flex-row justify-between">
                    <div>
                        <label htmlFor="first_name">First Name</label><br></br>
                        <input className="w-full border-slate-300" id="first_name" type="text"></input>
                    </div>
                    <div className="mt-3 sm:mt-0">
                        <label htmlFor="surname">Last Name</label><br></br>
                        <input className="w-full border-slate-300" id="surname" type="text"></input>
                    </div>
                </div>
                <div>
                    <label htmlFor="first_name">Email</label>
                    <input className="w-full border-slate-300" id="first_name" type="email"></input>
                </div>
                <div>
                    <label htmlFor="first_name">Message</label>
                    <input className="w-full min-h-64 border-slate-300" id="first_name" type="text"></input>
                </div>
                <div className="text-center">
                    <Button text={"Send Message"}></Button>
                </div>
            </form>
        </section>
    </>
}

export default ContactMe