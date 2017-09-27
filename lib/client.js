'use strict';

const request = require('request-promise');

class Client {
	constructor(options) {
		this.options = options || {
			endpoints: {
				pictures: 'http://api.platzigram.com/picture',
				users: 'http://api.platzigram.com/user',
				auth: 'http://api.platzigram.com/auth'
			}
		};
	}

	getPicture(id) {
		let opts = {
			method: 'GET',
			uri: `${this.options.endpoints.pictures}/${id}`,
			json: true
		};

		return Promise.resolve(request(opts));
	}

	savePicture(picture, token) {
		let opts = {
			method: 'POST',
			uri: `${this.options.endpoints.pictures}/`,
			body: picture,
			headers: {
				'Authorization': `Bearer ${token}`
			},
			json: true
		};

		return Promise.resolve(request(opts));
	}

	likePicture(id) {
		let opts = {
			method: 'POST',
			uri: `${this.options.endpoints.pictures}/${id}/like`,
			json: true
		};

		return Promise.resolve(request(opts));
	}

	listPictures() {
		let opts = {
			method: 'GET',
			uri: `${this.options.endpoints.pictures}/list`,
			json: true
		};

		return Promise.resolve(request(opts));
	}

	listPicturesByTag(tag) {
		let opts = {
			method: 'GET',
			uri: `${this.options.endpoints.pictures}/tag/${tag}`,
			json: true
		};

		return Promise.resolve(request(opts));
	}

	saveUser(user) {
		let opts = {
			method: 'POST',
			uri: `${this.options.endpoints.users}/`,
			body: user,
			json: true
		};

		return Promise.resolve(request(opts));
	}

	getUser(username) {
		let opts = {
			method: 'GET',
			uri: `${this.options.endpoints.users}/${username}`,
			json: true
		};

		return Promise.resolve(request(opts));
	}

	auth(username, password) {
		let opts = {
			method: 'POST',
			uri: `${this.options.endpoints.auth}/`,
			body: {
				username,
				password
			},
			json: true
		};

		return Promise.resolve(request(opts));
	}
}

module.exports = Client;
