const mongoose = require('mongoose');
var mongoose_delete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    slug: { type: String, slug: 'name' },
},{
    timestamps: true,
});

// Add plugins
mongoose.plugin(slug);

Course.plugin(mongoose_delete, { overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);