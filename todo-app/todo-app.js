
let todosObj = fetchData()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todosObj,filters)

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todosObj, filters)
    
})

document.querySelector('#new-todo').addEventListener('submit', function(e){
    e.preventDefault()
    todosObj.push({
        id: uuidv4(),
        text: e.target.elements.newTodo.value,
        status: false
    })
    renderTodos(todosObj, filters)
    saveTodos()
    e.target.elements.newTodo.value = ''

})

document.querySelector('#hideCompleted').addEventListener('change', function(e){
    
    if (filters.hideCompleted === false){
        filters.hideCompleted = true
    }
    else{
        filters.hideCompleted = false
    }

   
    renderTodos(todosObj, filters)
})
