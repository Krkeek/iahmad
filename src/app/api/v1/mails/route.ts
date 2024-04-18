import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";
import {FormData} from '../../../../../declarations'


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
                )
        })
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


const createTransporter =  () => {
    return nodemailer.createTransport({
        host: "outlook.office365.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: "iahmad_portfolio@hotmail.com",
            pass: "KgU%r&ii66je%B",
        },
        tls: { rejectUnauthorized: false }
    });

}

const sendMail = async (transporter: any, data:FormData) =>{
    const { name, email, subject, message} = data;
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: 'iahmad_portfolio@hotmail.com', // sender address
        to: "ahmadhijazi_me@hotmail.com", // list of receivers
        subject: `${subject}`, // Subject line
        html: `
<b>Sender:</b> ${name}<br>
<b>Email:</b> ${email}<br>
<b>Subject:</b> ${subject}<br>
<b>Message:</b><br>
<p>${message}</p>
`,
    });

}