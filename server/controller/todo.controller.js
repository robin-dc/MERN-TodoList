const asyncHandler = require('express-async-handler')
const Todo = require('../models/todo.model')

const getAllTodo = asyncHandler(async(req, res) => {
    try {
        const allTodo = await Todo.find({})
        res.status(200).json(allTodo)
    } catch (error) {
        res.status(500)
        throw new Error(error.message || "Internal server error please try again")
    }
})

const checkTodo = asyncHandler(async(req, res) => {
    try {
        const {id, isDone} = req.body

        if(!id){
            res.status(400)
            throw new Error('Required todo id')
        }
        const newTodo = await Todo.findByIdAndUpdate(
            {_id: id},
            {isDone: isDone},
            {new: true}
        )
        if(!newTodo){
            res.status(404)
            throw new Error('Invalid ID')
        }
        res.status(200).json(newTodo)
    } catch (error) {
        res.status(500)
        throw new Error(error.message || "Internal server error please try again")
    }
})

const addTodo = asyncHandler(async(req, res) => {
    try {
        const todo = req.body.text

        if(todo){
            const newTodo = await Todo.create({
                todo: todo,
                isDone: false
            })
            res.status(201).json(newTodo)
        }
        else{
            res.status(400)
            throw new Error('Required todo text')
        }
    } catch (error) {
        res.status(500)
        throw new Error(error.message || "Internal server error please try again")
    }
})

const editTodo = asyncHandler(async(req, res) => {
    try {
        const {id, text} = req.body

        if(text && id){
            const newTodo = await Todo.findByIdAndUpdate(
                {_id: id},
                {todo: text},
                {new: true}
            )
            if(!newTodo){
                res.status(404)
                throw new Error('Invalid ID')
            }
            res.status(200).json(newTodo)
        }
        else{
            res.status(400)
            throw new Error('Required id and todo text')
        }
    } catch (error) {
        res.status(500)
        throw new Error(error.message || "Internal server error please try again")
    }
})

const deleteTodo = asyncHandler(async(req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        const deleteTodo = await Todo.findByIdAndDelete({_id: id})
        if(!deleteTodo){
            res.status(404)
            throw new Error('Invalid ID')
        }
        res.status(200).json({
            message: "Deleted Successfully"
        })
    } catch (error) {
        res.status(500)
        throw new Error(error.message || "Internal server error please try again")
    }
})

module.exports = {
    getAllTodo,
    checkTodo,
    addTodo,
    editTodo,
    deleteTodo
}
