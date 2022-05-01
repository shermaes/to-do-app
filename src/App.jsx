import './App.css'
import ListOfToDo from './components/ListOfToDo'
import StoreProvider from './components/StoreProvider'


function App() {

  return (
    <StoreProvider>
       <h1>Hello from my app</h1>
       <ListOfToDo></ListOfToDo>
    </StoreProvider>
  )
}

export default App
