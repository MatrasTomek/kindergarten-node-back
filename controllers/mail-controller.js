const mailer = require("../helpers/mailSender");

exports.priceMail = (request, response, next) => {
	try {
		const { name, formOffer, phone, mail } = request.body;

		// HANDLE SEND EMAIL TO USER
		const priceProps = {
			name: `${name}`,
			date: new Date().toLocaleDateString(),
			mail: `${mail}`,
			phone: `${phone}`,
			formOffer: `${formOffer}`,
		};

		mailer.priceMailSender(priceProps);

		response.status(200).json({
			message: "Twoje zgłoszenie zostało wysałne.",
		});
	} catch (error) {
		response.status(500).json({
			error,
			message: "Przepraszamy błśd po stronie serwera, spróbuj jescze raz za kilka minut.",
		});
	}
};

exports.formMail = (request, response, next) => {
	try {
		const { mail, name, content, phone } = request.body;

		// HANDLE SEND EMAIL TO USER
		const fromProps = {
			date: new Date().toLocaleDateString(),
			name: `${name}`,
			phone: `${phone}`,
			mail: `${mail}`,
			content: `${content}`,
		};

		mailer.formMailSender(fromProps);

		response.status(200).json({
			message: "Twoje zgłoszenie zostało wysałne.",
		});
	} catch (error) {
		response.status(500).json({
			error,
			message: "Przepraszamy błśd po stronie serwera, spróbuj jescze raz za kilka minut.",
		});
	}
};

exports.reservationMail = (request, response, next) => {
	try {
		const { mail, name, phone, car, reservationFrom, reservationTo } = request.body;

		const reservationProps = {
			date: new Date().toLocaleDateString(),
			mail: `${mail}`,
			name: `${name}`,
			phone: `${phone}`,
			car: `${car}`,
			reservationFrom: `${reservationFrom}`,
			reservationTo: `${reservationTo}`,
		};

		mailer.reservationMailSender(reservationProps);

		response.status(200).json({
			message: "Twoje zgłoszenie zostało wysałne.",
		});
	} catch (error) {
		response.status(500).json({
			error,
			message: "Przepraszamy błśd po stronie serwera, spróbuj jescze raz za kilka minut.",
		});
	}
};
