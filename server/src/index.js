const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json())
const todos = new Map();

let ID = randomID();
todos.set(ID, {
    todo: 'Learn Programming',
    checked: false,
    ID: ID
})
ID = randomID();
todos.set(ID, {
    todo: 'Go out',
    checked: false,
    ID: ID
})

app.get('/todos', (req, res) => {
    res.json({
        'todos': Array.from(todos.entries()),
    });
});

app.post('/createtodo', (req, res) => {
    const todo = req.body;
    todo.ID = randomID();
    console.log(todo);
    todos.set(todo.ID, todo);
    save();
    res.json(todo);
});

app.post('/edittodo/:id', (req, res) => {
    const todoID = Number(req.params.id);
    if (!todos.has(todoID)) {
        res.json({
            success: false,
            message: 'Todo not Found',
        });
        return;
    }
    let todo = todos.get(todoID);
    todo = req.body;
    todo.ID = todoID;
    todos.set(todoID, todo);
    save();
    res.json({
        success: true,
        todo: todo,
        message: 'Todo Edited Successfully',
    });
});

app.get('/deletetodo/:id', (req, res) => {
    const todoID = Number(req.params.id);
    if (!todos.has(todoID)) {
        res.json({
            success: false,
            message: 'Todo Deletion Failed',
        });
        return;
    }
    todos.delete(todoID);
    save();
    res.json({
        success: true,
        message: 'Todo Deleted Successfully',
    });

});

function save() {
    //Databse Integration
}

function load() {
    //Databse Integration
}

function randomID() {
    return Math.floor(Math.random() * 9999999);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Express app Listening at ' + PORT);
})