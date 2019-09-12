const sgMail = require("@sendgrid/mail");

const sendgridAPIKey =
	"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";

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: "m.naveedashfaq@gmail.com",
		subject: "Thanks for joining",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
	});
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to:email,
        from:'m.naveedashfaq@gmail.com',
        subject: "Delete your Account Sorry to See you go",
        text:`Goodbye, ${name}. I hope to see you sometime soon`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}