const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	id: {
		type: Number,
		required: true
	},
    featured: {
		type: Boolean,
		default: false
	},
	title: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
	imageUrl: {
		type: String,
		required: true
	},
    newsSite: {
		type: String,
		required: true
	},
    summary: {
		type: String,
		required: true
	},
    publishedAt: {
		type: String,
		required: true
	},
	updatedAt: {
		type: String,
		required: false
	},
    launches: {
        type: Object,
		required: true
    },
    events: {
        type: Object,
		required: true
    }
});

mongoose.model('Article', articleSchema);