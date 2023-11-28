const mongoose = require('mongoose');

const writerSchema = new mongoose.Schema({
    writerName: {
        type: String,
        required: true
    },
    writerSurname: {
        type: String,
        required: true
    },
    writerEmail: {
        type: String,
        required: true
    },
    // posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
}, {
    timestamps: true
});


const Writer = mongoose.model('Writer', writerSchema);

module.exports = Writer;