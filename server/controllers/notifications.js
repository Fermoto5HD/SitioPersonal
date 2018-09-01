'use strict';
var mongoose = require('mongoose');
var Notification = mongoose.model('notifications');

module.exports = {
	subscribe: function(req, res) {
		let body = JSON.parse(req.body)
		if (body) {
			let notification = new Notification(body);
			notification.save(function(err) {
				if (err) {
					res.status(500).send(err);
					return;
				};
				res.status(200).json({status: true, message: '¡Muchas gracias por tu mensaje! Pronto estaré leyendo y respondiendo tu consulta.'});
				return;
			})
		}

	}
};