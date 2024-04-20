import {FormData} from "../../declarations";
//Client Side

export const validateForm = (formData: FormData) =>{

   if (formData.name === '' || formData.email === '' || formData.subject === '' || formData.message === ''){
       return {
           status: false,
           display: "Missing input"
       }
   }
   else {
       return {
           status: true,
           display: undefined
       }
   }

}