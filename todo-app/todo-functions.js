//Get data from localStorage

const fetchData = function(){
    const todosJSON = localStorage.getItem('todos')

if (todosJSON !== null){
    return JSON.parse(todosJSON)
}else{
    return []
}
}

//save todos to localStorage

const saveTodos = function(){
    localStorage.setItem('todos', JSON.stringify(todosObj))
}

//Change status

const changeStatus = function(id){
    todoIndex = todosObj.findIndex(function(todo){
        return todo.id === id
    })
    
    if (todoIndex > -1){
    todosObj[todoIndex].status = !todosObj[todoIndex].status
    }
}

//Remove todo

const removeTodo = function(id){
    const todoIndex = todosObj.findIndex(function(todo){
        
        return todo.id === id
    })

    if (todoIndex > -1){
        console.log(status)
        todosObj.splice(todoIndex, 1)
    }

}

//render todos

const renderTodos = function(todos,filters){
  
    const filteredTodos = todos.filter(function(todo){
        if (filters.hideCompleted === false){
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        }
        else if (filters.hideCompleted === true){
            
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && todo.status === false
        }
        
    })

         let todoCount = filteredTodos.filter(function(object){
            return !object.status
         })
         document.querySelector('#todos').appendChild(generateSummaryDOM(todoCount))

        filteredTodos.forEach(function(todo){
            document.querySelector('#todos').appendChild(generateTodoDOM(todo))
        })        
    
}

//generateTodoDOM

const generateTodoDOM = function(todo){

    const mainEl = document.createElement('div')
    const removeButton = document.createElement('button')
    const checkbox = document.createElement('input')
    const TodoEl = document.createElement('span')
    removeButton.textContent = 'x'

    

    TodoEl.textContent = todo.text

    checkbox.setAttribute('type','checkbox')
    mainEl.appendChild(checkbox)
    
    mainEl.appendChild(TodoEl)
    mainEl.appendChild(removeButton)

    removeButton.addEventListener('click',function(){
        removeTodo(todo.id)
        saveTodos(todosObj)
        renderTodos(todosObj, filters)
    })
    checkbox.checked = todo.status
    checkbox.addEventListener('change', function(e){
        
        changeStatus(todo.id)
        saveTodos(todosObj)
        renderTodos(todosObj, filters)

    })
    
    return mainEl
    
}
//generateSummaryDOM

const generateSummaryDOM = function(todoCount){
    

    document.querySelector('#todos').innerHTML = ''
    const newParagraph = document.createElement('p')
    newParagraph.textContent = `You have ${todoCount.length} things to do`
    return newParagraph

}