import {FormData} from "../../declarations";
//Client Side

export const validateForm = (formData: FormData) => !(formData.name === '' || formData.email === '' || formData.subject === '' || formData.message === '');