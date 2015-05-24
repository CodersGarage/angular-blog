'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
	title: String,
	authors: [],
	tags: [],
	content: String,
	cover: String,
	date: { type: Date, default: Date.now },
	dateCreated: { type: Date, default: Date.now },
	dateModified: { type: Date, default: Date.now },
	featured: Boolean,
	published: { type: Boolean, default: true },
	gameCard: {
		enabled: { type: Boolean, default: false },
		publisher: String,
		developer: String,
		gameName: String,
		platforms: [],
		price: String,
		website: String,
		social: {
			facebook: String,
			twitter: String,
			youtube: String
		},
		releaseDate: Date,
		relevantGameIds: []
	}
});

module.exports = mongoose.model('Post', PostSchema);