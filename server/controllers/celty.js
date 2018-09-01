'use strict';
const nodemailer = require('nodemailer');
var mongoose = require('mongoose');
var Contact = mongoose.model('contact');

module.exports = {
	send: function(req, res) {
		/* Generate test SMTP service account from ethereal.email */
		/* Only needed if you don't have a real mail account for testing */
		if (req._body) {
			console.log(req.body); 
			if (!req.body.kimi_no_na_wa) {
				res.status(500).json({status: "error", message: "Por favor ingresá tu nombre."});
				return;
			}
			if (!req.body.email) {
				res.status(500).json({status: "error", message: "Por favor ingresá tu dirección de e-mail."});
				return;
			}
			if (!req.body.subject) {
				res.status(500).json({status: "error", message: "Por favor ingresá el motivo del contacto."});
				return;
			}
			if (!req.body.message) {
				res.status(500).json({status: "error", message: "Por favor ingresá el mensaje."});
				return;
			}
		} else {
			res.status(500).json({status: "error", message: "No se están enviando correctamente los campos."});
			return;
		}

		var contact = new Contact({
	        name: req.body.kimi_no_na_wa,
	        phone: null,
	        email: req.body.email,
	        subject: req.body.subject,
	        message: req.body.message
	    });
		contact.save(function(err) {
			if (err) res.send(err);
			res.status(200).json({status: true, message: '¡Muchas gracias por tu mensaje! Pronto estaré leyendo y respondiendo tu consulta.'});
			return;
		})
	},
	send_new: function(req, res) {
		/* Generate test SMTP service account from ethereal.email */
		/* Only needed if you don't have a real mail account for testing */
		if (req._body) {
			console.log(req.body); 
			if (!req.body.kimi_no_na_wa) {
				res.status(500).json({status: "error", message: "Por favor ingresá tu nombre."});
				return;
			}
			if (!req.body.email) {
				res.status(500).json({status: "error", message: "Por favor ingresá tu dirección de e-mail."});
				return;
			}
			if (!req.body.subject) {
				res.status(500).json({status: "error", message: "Por favor ingresá el motivo del contacto."});
				return;
			}
			if (!req.body.message) {
				res.status(500).json({status: "error", message: "Por favor ingresá el mensaje."});
				return;
			}
		} else {
			res.status(500).json({status: "error", message: "No se están enviando correctamente los campos."});
			return;
		}

		var contact = new Contact({
	        name: req.body.kimi_no_na_wa,
	        phone: null,
	        email: req.body.email,
	        subject: req.body.subject,
	        message: req.body.message
	    });
		contact.save(function(err) {
			if (err) res.send(err);
			res.json({ message: 'Contact item created!' });
			return;
		})
		nodemailer.createTestAccount((err, account) => {
			/* create reusable transporter object using the default SMTP transport */
			let transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				port: 465,
				secure: true, /* true for 465, false for other ports */
				auth: {
					/*type: 'OAuth2',
					user: 'hamonsender@fermoto5hd-web.iam.gserviceaccount.com',
					serviceClient: '108480708319302716587',
					privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCVzJTn1aNk72N/\n/JyyDULG6XWWV+58LxThovuRD6mRAkB+mAbLEXSD9J5S+RNydkdNjkQEi49UgQmA\ntA8U76DdpSPjPiAJis+zaXebFePLpa/4bhqZ2W0E0JmkccbrLSpzfM7Oz4uP6Qmb\nYFD2n78twAD8vcF1zcSDhQ0hnBKK287BvKkko6F3Oif26W8amUjPWh5MsBo7y8rc\noRR0nDfCD6J/NbWStSuNvglHPE9lyI/Ks9J5oA9+QWDsmpAJqGpzif0ERNX5KiLr\nao6EzHakf5SxpqKdnfzIujT2MyWAjv6W2lRnubHXNOe2CVY39mg48nFtFJmVTqIS\nYV4GvjJ1AgMBAAECggEAMHVYXDDjpQS90srUo9KfXfpq1AJI/zo5zo4rRC9lYqfw\nViN22x0f7Inm5590d4wkn8WcYj4FVUhS2yQkVtj32IuR8vKHaZ7Sds7w5qXrpVbJ\neJuhllBcMHkMosI9n5liSK7Ate000A6KUY2UU1u0/CdHCnuWCDZS0lrptwwmgW1/\n3qDaihk6Eg7lhRkq3jSBbubRQd2EGx1rNUQi39PCL3RcK2dm+qfXpjq55MYggLR2\n3us4r7beby+6gb7FYFerjbdECQ4jTILMezmARZoJPlrnh2BiyieGImRMVNs8ghwg\n1x+YcTnppyeZ3jJu7KA5hEgvjXnfdQremOsx3kbKRwKBgQDQoT6pkLx3E1has6AD\n3ir7yOHmxjfxdakaZ3pUBJplMst0WZEhuXG6MbTo1PggDCYAHUxRjoAc/jJeTTVp\nGJBNeCLZGceUjPfe3mhDVlvbz3ZIE15U97H/upYKHbilOmQvzu5AxXo/+mX8EoaP\nzH1ovWtcKSqMcPKxsqSx9qwrFwKBgQC3z8LFQt6GFGQ4CzUVrcnH5DQGweZvrxVr\nuTJqJhAn1P//CFLOR6H/+orGy0vkQa8sQG5AmcqtMaur3/OmYcXy6E1YO9+6//cc\nDS2gIpivKX0HfxyCuWCQnXNOMaD5aH7Np6h1/QNB6UE2OsXn1lFxqM0XSTKz10wh\nf5Z7GrHWUwKBgER7+b7dtQ/9eK5lcmxynHeETKtde/W2Iul4+E3mKOx5TRIHaL3C\nSxPMx076wex7MGovM+M9vM5Hny8XdyXlm1Di08WiUcJwt9kf9ufLzGGOa4xjVz7b\nBEIm9KOjd/48+bA75De821FvF9U0G5nOjYg5Tam2FbJ+TRyJwMhuabvHAoGAC7Ci\n6ni+Pji9xvKvhZlv486XoHZkeWXhLuCwXB/flyjsvwOAgK39l5IPkWUMho/G3EGc\nwW8GfM1T5bJwhHxjYndzs9DbAcGVrasI485Pd5Rj5z4mSgoQIiJhWu+9FR+YMOwg\nwqA8vMxg4VoLjBsNQvVBVeHJ37YpmVfL8jhYZxECgYAQoixN5trJBmBcaLm6UPvi\n5jNEH+Cf2YE5FF77wl76PZ04s9rDyihknLfFAYIgXxF2q/EX3h/WMGqFSjH6q8Id\nTCEiIrVVvw/VHDPpZMgmcFzp948qvnTlAV/ZaC59dsSj/0Po0L2TaQ5OdDImR2ZJ\nAAzj5xTzFjeWdEpghkx6bg==\n-----END PRIVATE KEY-----\n'
					*/
					type: 'OAuth2',
					user: 'Fermoto5.HD@gmail.com',
					clientId: '265287931403-sod5imqjs1f40pdhabsl2n90ngi9hd6r.apps.googleusercontent.com',
					clientSecret: 'pLZoaY_-flTPeWaY2KMS6TJK',
					refreshToken: '1/FXTaDnovOjpLEUj13B_qYstybZv8XCLzZFDAHDzj4Rrc_WAs5pViGA2I188toZAM',
					accessToken: 'ya29.Glu_BEq43LIcbhOndAVkYRBdOgJIH_Y7xGmGl5fBRj-YyBZQtQeEaBJBdb4HS8bL4GoTMadtfonl_2MA4ECf5BOtA3EezrYJfAyBjEV5jS6c_frDgP4FC_673fZE',
					expires: 3600
				}
			});

			/* setup email data with unicode symbols */
			let mailOptions = {
				from: '"'+req.body.kimi_no_na_wa+'" <'+req.body.email+'>', /* sender address */
				to: 'Fermoto5HD@outlook.com', /* list of receivers */
				subject: '[Sitio personal] Contacto: '+req.body.subject, /* Subject line */
				text: 'Ya hay mailing en node! Texto plano.', /* plain text body */
				html: { path: 'mailing/generic.html' }
			};

			/* send mail with defined transport object */
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
						return console.log(error);
				}
				console.log('Message sent: %s', info.messageId);
				res.status(200).json({status: "ok", message: '¡Muchas gracias por tu mensaje! En la semana nos pondremos en contacto con vos.'});
				return;
			});
		});
	},
	upload: function(req, res) {
		res.status(200).json({
			status: true,
			message: 'WIP!'
		});
		return;
	}
};


var readHTMLFile = function(path, callback) {
	fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
		if (err) {
			throw err;
			callback(err);
		}
		else {
			callback(null, html);
		}
	});
};