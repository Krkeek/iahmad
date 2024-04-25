import {validateForm} from "./valdiateForm";
import {FormData} from "../../declarations";
//Client Side

export const sendEmail =  async (formData: FormData) =>{
    const isValid = validateForm(formData);
    if (isValid){
        try{
            const response = await fetch('/api/v1/mails',{
                method: "POST",
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message

                }),
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type":"application/json"
                }

            })
            return await response.json();

        }
        catch (e){
            console.log(e)

            return {
                status: false,
                display: 'Error fetching',
                message: e
            }
        }

    }
    else {
        return {
            status: false,
            display: 'Missing input',
            message: ''
        }
    }

}