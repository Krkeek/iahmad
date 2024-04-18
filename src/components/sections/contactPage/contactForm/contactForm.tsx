'use client'
import styles from './contactForm.module.css'
import {useState} from "react";
import {sendEmail} from "@/lib/sendEmail";
import {Notification, FormData} from "../../../../../declarations";

export default function ContactForm(){

    const [notification, setNotification] = useState<Notification>({
        status: undefined,
        message: ""
    })
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const editFormData = (inputValue: string, newValue: string) =>{
       setFormData((prevState)=>({
           ...prevState,
               [inputValue]: newValue

       }))
    }

    const handleSubmit =  async () =>{
            if (!buttonDisabled){
                setButtonDisabled(true);
                try {
                    const response = await sendEmail(formData);

                    setNotification({
                        status: response.status,
                        message: response.display
                    })
                    setTimeout(() => {
                        setNotification({
                            status: undefined,
                            message: ""
                        })
                    }, 2000)
                    setButtonDisabled(false)
                }
                catch (e){
                    console.log(e)
                }
            }


    }

    return(
        <>
            <div className={`${styles.Container}`}>
                <input onChange={(event) => editFormData("name", event.target.value)} className={`${styles.Input}`} type={"text"} placeholder={'Name'} required/>
                <input onChange={(event) => editFormData("email", event.target.value)} className={`${styles.Input}`} type={"email"} placeholder={'Email address'} required/>
                <input onChange={(event) => editFormData("subject", event.target.value)} className={`${styles.Input}`} type={"text"} placeholder={'Subject'} required/>
                <textarea onChange={(event) => editFormData("message", event.target.value)} className={`${styles.Input} ${styles.TextArea}`} placeholder={'Message'} required/>
                <button style={ buttonDisabled ? {backgroundColor: "rgba(0, 0, 0, 0.5)"} : {backgroundColor: "black"}} disabled={buttonDisabled} onClick={handleSubmit} className={`${styles.Button}`}>Send</button>
                <p className={`${styles.NotificationDiv}`}>{notification.message}</p>
              </div>
</>
    );
}