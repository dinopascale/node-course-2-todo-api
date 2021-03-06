const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '5b2919ee34202e39bca1d902';
const id = '5b291d113beeb0eb854743de';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => { console.log('Todos ', todos) });

// Todo.findOne({
//     _id: id
// }).then((todo) => { console.log('Todo ', todo) });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo by Id', todo)
// }).catch(e => console.log(e))

User.findById(id).then(user => {
    if (!user) {
        return console.log('Id not found')
    }
    console.log('User by Id', user)
}).catch(e => console.log(e))