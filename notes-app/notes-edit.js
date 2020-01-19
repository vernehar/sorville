const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const lastEditedElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function(note){
    return note.id === noteId
})

if(note === undefined){
    
    location.assign('/index.html')
}

lastEditedElement.textContent =  getLastEdited(note)


titleElement.value = note.title
document.querySelector('#note-body').value = note.body

titleElement.addEventListener('input', function(e){
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    lastEditedElement.textContent = getLastEdited(note)
    saveNotes(notes)
    titleElement.value = note.title
 
})

bodyElement.addEventListener('input', function(e){
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    lastEditedElement.textContent = getLastEdited(note)
    saveNotes(notes)
    bodyElement.value = note.body
    
})

removeElement.addEventListener('click', function(e){
    removeNote(noteId)
    saveNotes(notes)
    location.assign('/index.html')

})

window.addEventListener('storage', function(e){
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)

        let note = notes.find(function(note){
            return note.id === noteId
        })
        
        if(note === undefined){
            
            location.assign('/index.html')
        }
        titleElement.value = note.title
        bodyElement.value = note.body 

    }
})


