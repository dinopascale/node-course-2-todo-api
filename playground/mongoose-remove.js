const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then(result => { console.log(result) })

Todo.findByIdAndRemove('5b2a074d896d76ad3e0f54a9').then(todo => {
    console.log(todo);
})