const {Schema, model} = require("../connection");


const PostSchema = new Schema({
    title : { type: String, required: true, unique: true },
    thumbnail: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    createdAt: {type: Date, default: Date.now}
});

module.exports = model('Post', PostSchema);