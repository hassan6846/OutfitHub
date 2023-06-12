const mailer=require("nodemailer");
//sendmail
const  sendmail=async(option)=>{
    const transporter=mailer.createTransport({
        // put bellow in env file
        host:"smtp.gmail.com",
        port:557,
        service:"",
        auth:{},
        
    })
    const mailOption={
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    }
    await transporter.sendMail(mailOption);
}

module.exports=sendmail