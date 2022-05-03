import React, { useContext, useEffect } from 'react'
import { Store } from './StoreProvider'

const ListOfToDo = () => {

  const {state, dispatch} = useContext(Store)

  useEffect(()=> {
        let listOfNotes = fetchAllNotes().then(
            notes=>{
                console.log(notes);
             let action = {
                 type: 'get-notes',
                 payload: notes
                } 
            dispatch(action)  
            }
        )
  }, [])

  const fetchAllNotes = async()=>{
      let response = await fetch(`http://localhost:8081/api/get/notes`)
      let data = await response.json()
      return data
  }


  const onCheckbox = (event, note) => {
      const checked = event.currentTarget.checked
      dispatch({
          type: 'update-note',
          payload: {
              ...note,
              done: checked
          }
      })
  }

  const onDelete = (note)=> {
     dispatch({
         type: 'remove-note',
         payload: note 
     })
  }

  return (
    <div>
        <h1>Actions pending to be done</h1>
        <ul>
            {state.listOfNotes.map(note => {
                return <li style ={ note.done? {textDecoration: 'line-through'}: {}} key={note.id}> 
                {note.title} <br />
                {note.message} <br />
                <input onChange={(event) => onCheckbox(event, note)} type="checkbox" checked={note.done} />
                <button onClick={()=> onDelete(note)}>Delete</button>
                </li>
            })}
        </ul>
    </div>
  )
}

export default ListOfToDo