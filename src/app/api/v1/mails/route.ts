import {NextRequest, NextResponse} from "next/server";
import {createTransporter, sendMail} from "@/server/nodemailer";



type Response  = {
    status: boolean,
    display: string,
    message: string
}

export async function POST (req: NextRequest){

    const data = await req.json();
    const transporter = createTransporter();
    try {
        await sendMail(transporter, data);
        return NextResponse.json<Response>({
            status: true,
            display: 'Email sent',
            message: " "
        },{status: 200});
    }
    catch (e){
        return NextResponse.json<Response>({
            status: false,
            display: 'Error sending the mail',
            message: " "+e
        }, {status: 500});

    }
}


