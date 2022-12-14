const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "smarthome01999@gmail.com", // generated ethereal user
        pass: "prrcadqxxuknyctj"  // generated ethereal password
    }
});

let sendEmail = (emailTemplate) =>{
    transporter.sendMail(emailTemplate, (err, info) => {
        if(err){
               console.log(err)
        }else{
              console.log('Email send:', info.response)
        }
        
    })
}

module.exports = { sendEmail };