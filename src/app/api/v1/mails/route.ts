import {NextRequest, NextResponse} from "next/server";
import {createTransporter, sendMail} from "@/server/nodemailer";


export async function POST (req: NextRequest){

    const data = await req.json();
    const transporter = createTransporter();

    sendMail(transporter, data)
        .then((response) => {
            return NextResponse.json({
                status: true,
                message: response,
                display: "Email sent"
            },
                {status: 200}
                )})
        .catch(error => {
            console.log(error)
            return NextResponse.json({
                status: false,
                message: error,
                display: "Error sending the email"
            },
                {status: 500})
        });

}


