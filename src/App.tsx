import './App.css'
import ListGroup from './components/ListGroup'

function App() {
  let items = ["New York", "London", "Dallas", "Little Rock", "Miami"];

  return (
    <>
      <ListGroup items={items} heading='Cities'/>
    </>
  )
}

export default App
