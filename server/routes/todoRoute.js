const express = require('express');
const todoRouter = express.Router();
const {
    getAllTodo,
    checkTodo,
    addTodo,
    editTodo,
    deleteTodo
} = require('../controller/todo.controller');

todoRouter.get('/', getAllTodo);
todoRouter.patch('/check', checkTodo);
todoRouter.post('/', addTodo);
todoRouter.patch('/edit', editTodo);
todoRouter.delete('/delete/:id', deleteTodo);

module.exports = todoRouter;
