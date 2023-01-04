const PostModel = "./post-model.js"

exports.getPosts = async (req, res) => {
    const posts = await PostModel.find();

    res.status('200').json(posts)
}

exports.createPost = async (req, res) => {
    try {
        await PostModel.create(req.body)

        res.status('200').json({ message: 'success' })
    } catch (err) {
        res.status('400').json({ message: 'failed' })
    }
}