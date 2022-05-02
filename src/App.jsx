import Form from './components/Form'
import ListOfToDo from './components/ListOfToDo'
import StoreProvider from './components/StoreProvider'


function App() {

  return (
    <StoreProvider>
       <h1 style={{backgroundColor: "lightblue"}}>My To-Do list</h1>
       <Form></Form>
       <ListOfToDo></ListOfToDo>
    </StoreProvider>
  )
}

export default App
