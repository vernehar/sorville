let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

const timestamp = moment().valueOf()

document.querySelector('#create-note').addEventListener('click', function(e){
    
    const uuid = uuidv4();
    notes.push({
        id: uuid,
        title:'',
        body:'',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    renderNotes(notes, filters)
    location.assign('/edit.html#'+uuid)
})



document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', function(e){
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
    }
    renderNotes(notes, filters)

})



