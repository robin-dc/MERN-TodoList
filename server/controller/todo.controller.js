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

const getSingleTodo = asyncHandler(async(req, res) => {
    try {

    } catch (error) {
        res.status(500)
        throw new Error(error.message || "Internal server error please try again")
    }
})

const addTodo = asyncHandler(async(req, res) => {
    try {
        const todo = req.body.text

        const newTodo = await Todo.create({
            todo: todo,
            isDone: false
        })
        res.status(201).json(newTodo)
    } catch (error) {
        res.status(500)
        throw new Error(error.message || "Internal server error please try again")
    }
})

const editTodo = asyncHandler(async(req, res) => {
    try {

    } catch (error) {
        res.status(500)
        throw new Error(error.message || "Internal server error please try again")
    }
})

const deleteTodo = asyncHandler(async(req, res) => {
    try {

    } catch (error) {
        res.status(500)
        throw new Error(error.message || "Internal server error please try again")
    }
})

module.exports = {
    getAllTodo,
    getSingleTodo,
    addTodo,
    editTodo,
    deleteTodo
}
