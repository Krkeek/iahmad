import {validateForm} from "./valdiateForm";
import {FormData} from "../../declarations";


export const sendEmail =  async (formData: FormData) =>{

    const isValid = validateForm(formData);
    if (isValid.status){
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
                message: e
            }
        }

    }
    else {
        return isValid
    }

}