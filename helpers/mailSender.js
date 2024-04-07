const config = require("../_config");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const MAIL_PASS = config.MAW_PASS;
const MAIL_HOST = config.MAW_HOST;
const MAIL_FROM = config.MAIL_MAW;
const MAIL_TO = config.MAIL_TO;
const PORT = "";
const SEND_GRID_API = config.SEND_GRID_API;

exports.priceMailSender = (priceProps) => {
	const { name, date, mail, phone, formOffer } = priceProps;

	const mailFrom = MAIL_FROM;
	const mailTo = MAIL_TO;
	const subject = "Prośba o wycenę usług";

	// const selfSignedConfig = {
	// 	host: MAIL_HOST,
	// 	port: PORT,
	// 	secure: true, // użwa TLS
	// 	auth: {
	// 		user: MAIL_FROM,
	// 		pass: MAIL_PASS,
	// 	},
	// 	tls: {
	// 		// nie przerywa przy błędnym certyfikacie
	// 		rejectUnauthorized: false,
	// 	},
	// };
	// const transport = nodemailer.createTransport(selfSignedConfig);

	const transport = nodemailer.createTransport(
		sendgridTransport({
			auth: {
				api_key: `${SEND_GRID_API}`,
			},
		}),
	);

	transport
		.sendMail({
			to: `${mailTo}`,
			from: `${mailFrom}`,
			subject: `${subject}`,
			html: `<html>\n  <head><h3>Zapytanie ze strony www.mawex-biuro.pl, z dnia: ${date}.</h3>\n</head>\n  <body>\n <p>Użytkownik: ${name}<br/>\n </p>\n <p>eMail: ${mail} <br/>\n </p>\n <p>telefon: ${phone} <br/>\n </p>\n </p> <p> Prośba o ofertą dla: ${formOffer}<br/>\n </p>\n <h4>Pozdrawiamy, Mawex Server <br/>\n </h4>\n</body>\n</html>`,
		})
		.then((data) => {
			return data;
		})
		.catch((err) => {
			console.log(err);
			return err;
		});
};

exports.formMailSender = (formProps) => {
	const { mail, name, date, content, phone } = formProps;

	const mailFrom = MAIL_FROM;
	const mailTo = MAIL_TO;
	const subject = "Formularz kontaktowy ze strony mawex-biuro.pl";

	// const selfSignedConfig = {
	// 	host: MAIL_HOST,
	// 	port: PORT,
	// 	secure: true, // użwa TLS
	// 	auth: {
	// 		user: MAIL_FROM,
	// 		pass: MAIL_PASS,
	// 	},
	// 	tls: {
	// 		// nie przerywa przy błędnym certyfikacie
	// 		rejectUnauthorized: false,
	// 	},
	// };
	// const transport = nodemailer.createTransport(selfSignedConfig);

	const transport = nodemailer.createTransport(
		sendgridTransport({
			auth: {
				api_key: `${SEND_GRID_API}`,
			},
		}),
	);

	transport
		.sendMail({
			to: `${mailTo}`,
			from: `${mailFrom}`,
			subject: `${subject}`,
			html: `<html>\n  <head><h4>Mail od: ${mail}</h4>\n</head>\n  <body>\n  <p>Imię: ${name}  <br/>\n </p>\n <p>Telefon: ${phone}  <br/>\n </p>\n <p>data wysłania: ${date}  <br/>\n </p>\n <p>treść zpytania: ${content}  <br/>\n </p>\n <h4>Miłego dnia! <br/>\n </h4>\n</body>\n</html>`,
		})
		.then((data) => {
			return data;
		})
		.catch((err) => {
			console.log(err);
			return err;
		});
};

exports.reservationMailSender = (reservationProps) => {
	const { mail, name, phone, car, reservationFrom, reservationTo, date } = reservationProps;

	const mailFrom = MAIL_FROM;
	const mailTo = MAIL_TO;
	const subject = "Zapytanie dotyczące rezerwacji";

	// const selfSignedConfig = {
	// 	host: MAIL_HOST,
	// 	port: PORT,
	// 	secure: true, // użwa TLS
	// 	auth: {
	// 		user: MAIL_FROM,
	// 		pass: MAIL_PASS,
	// 	},
	// 	tls: {
	// 		// nie przerywa przy błędnym certyfikacie
	// 		rejectUnauthorized: false,
	// 	},
	// };
	// const transport = nodemailer.createTransport(selfSignedConfig);

	const transport = nodemailer.createTransport(
		sendgridTransport({
			auth: {
				api_key: `${SEND_GRID_API}`,
			},
		}),
	);

	transport
		.sendMail({
			to: `${mailTo}`,
			from: `${mailFrom}`,
			subject: `${subject}`,
			html: `<html>\n
				<head><h4>Zapytanie od: ${mail}</h4>\n</head>\n  <body>\n
				<p>Imię: ${name}  <br/>\n </p>\n
				<p>Telefon: ${phone}  <br/>\n
				</p>\n <p>wysłane: ${date}  <br/>\n
				</p>\n <p>rezerwacja pojazdu: ${car}  <br/>\n </p>\n
				</p>\n <p>rezerwacja od: ${reservationFrom}  <br/>\n </p>\n
				</p>\n <p>rezerwacja do: ${reservationTo}  <br/>\n </p>\n
				<h4>Miłego dnia! <br/>\n </h4>\n</body>\n</html>`,
		})
		.then((data) => {
			return data;
		})
		.catch((err) => {
			console.log(err);
			return err;
		});
};
