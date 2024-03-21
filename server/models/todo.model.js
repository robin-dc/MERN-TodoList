const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
    todo: {
        type: String,
        required: [true, 'Please add a todo item']
    },
    isDone: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('Todo', TodoSchema)
