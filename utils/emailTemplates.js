let resetPassword = (email, token) => {

     const emailTemplate = {
        from:"singhalh1999@gmail.com",
        to:email,
        subject:"password reset for " + email,
        text:
             "password Reset link " +
             "localhost: 5000/customers/" +
             "resetPassword/ " + token,
    }; 
    return emailTemplate;
}

 module.exports= { resetPassword };
 