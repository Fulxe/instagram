const { model, Schema } = require('mongoose');

const PostSchema = new Schema({
    description: String,
    userId: String,
    userName: String,
    userProfile: String,
    like: {
        default:0
    },
    images: [String]
})

const PostModel = model('Post', PostSchema);

module.exports = PostModel