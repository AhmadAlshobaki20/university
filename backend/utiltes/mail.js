const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

async function main(obj) {
    console.log(obj);
    try {
        console.log("success")
        await transporter.sendMail({
            from: 'ahmad.r.alshobaki@gmail.com',
            to: obj?.email,
            subject: "Verification Code",
            text: obj?.content,
            html: `<div>
                <a href=${obj?.url}>click here to activate your account${obj?.url}</a>
            </div>`,
        });
    } catch (error) {
        console.log(error)
    }
}


module.exports = main