import './App.css';
import Message from './components/message'

const myMessage = "Аэродинамика - это для тех кто, не умее строить мощные моторы."

function App() {
  return (
    <Message message={myMessage} />
  )
}

export default App;
