import nodemailer from "nodemailer";
export const emailSend = async (to,subject,html) => {
    const transport = nodemailer.createTransport({
                service:'gmail',
                port:465,
                auth:{
                    user:process.env.EMAIL,
                    pass:process.env.EMAIL_PASSWORD
                }
            });
    try{
       transport.sendMail( {
                from:process.env.EMAIL,
                to:to,
                subject:subject,
                html:html
            });
   }
   catch(error){
        console.log("ERROR:"," something went wrong",error)
   }
} 