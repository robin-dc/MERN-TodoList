const express = require('express');
const todoRouter = express.Router();
const {
    getAllTodo,
    getSingleTodo,
    addTodo,
    editTodo,
    deleteTodo
} = require('../controller/todo.controller');

todoRouter.get('/', getAllTodo);
todoRouter.get('/:id', getSingleTodo);
todoRouter.post('/', addTodo);
todoRouter.patch('/:id', editTodo);
todoRouter.delete('/:id', deleteTodo);

module.exports = todoRouter;
