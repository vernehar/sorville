const todos = ['Wash dishes', 'Homework', 'Study','Go for a run','Buy a watch']

//1. Convert to an array of objects -> text and completed
//2. Create function to remove a todo by text value

const todosObj = [{
    text: todos[0],
    status: true
},{
    text: todos[1],
    status: false
},{
    text: todos[2],
    status: true
},{
    text: todos[3],
    status: true
},{
    text: todos[4],
    status: false
}]

const deleteTodo = function(note, noteText){
    const Index = note.findIndex(function(note){
        return note.text.toLowerCase() === noteText.toLowerCase()
    })
    if (Index > -1){
    console.log(Index)
    note.splice(Index,1)
    }
}

const getThingsToDo = function(list, state){
    return list.filter(function (todoList){
        return !todoList.status
        
    })
}

const sortTodos = function(todos){
    todos.sort(function(a, b){
        if (a.status > b.status){
            return 1
        }else if (b.status > a.status){
            return -1
        }
        else{
            return 0
        }

    })
}



console.log(getThingsToDo(todosObj, false))
sortTodos(todosObj)
console.log(todosObj)

//deleteTodo(todosObj, 'study')
//console.log(todosObj)