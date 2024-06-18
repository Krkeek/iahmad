'use client'
import styles from './contactForm.module.css'
import React, {useState} from "react";
import {sendEmail} from "@/lib/sendEmail";
import {Notification, FormData} from "../../../../../declarations";
import {useParams} from "next/navigation";
import {useTranslation} from "@/app/i18n/client";

export default function ContactForm(){

    const params = useParams<{ lng: string }>()
    // @ts-ignore
    const { t } = useTranslation(params.lng,'contactPage')



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
    const [buttonDisabled, setButtonDisabled] = useState(true);

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
                    console.log(response)

                    if (response.display !== "Missing input"){
                        setFormData({
                            name: '',
                            email: '',
                            subject: '',
                            message: ''
                        })
                    }


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
                <input value={formData.name} onChange={(event) => editFormData("name", event.target.value)} className={`${styles.Input}`} type={"text"} placeholder={t('Name')} required/>
                <input value={formData.email} onChange={(event) => editFormData("email", event.target.value)} className={`${styles.Input}`} type={"email"} placeholder={t('EmailAddress')} required/>
                <input value={formData.subject} onChange={(event) => editFormData("subject", event.target.value)} className={`${styles.Input}`} type={"text"} placeholder={t('Subject')} required/>
                <textarea value={formData.message} onChange={(event) => editFormData("message", event.target.value)} className={`${styles.Input} ${styles.TextArea}`} placeholder={t('Message')} required/>
                <button style={ buttonDisabled ? {backgroundColor: "rgba(0, 0, 0, 0.5)"} : {backgroundColor: "black"}} disabled={buttonDisabled} onClick={handleSubmit} className={`${styles.Button}`}>{t('Send')}</button>
                <p className={`${styles.NotificationDiv}`}>{notification.message}</p>
              </div>
</>
    );
}