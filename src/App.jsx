
import './App.css'
import Todo from './components/Todo.jsx'
import Todotitle from './components/Todotitle.jsx'
import Popup from './components/Popup.jsx'
import {useState} from 'react'
import Counter from './components/Counter.jsx'


function App() {

  function tooglePopup(){
      setPopupOpen(true)
    console.log("Delete button clicked")
  }


  /**
   * create a counter component 
   * create the count with a default value of 0
   * create a button that increments the count by 1 when clicked
   * create a button that decrements the count by 1 when clicked
   * create a button that resets the count to 0 when clicked
   * render your counter component in the App component
   */
  const [popupOpen, setPopupOpen] = useState(true);



  return(
    <>

    <Counter />




    <Todotitle task="My Todo List"/>
    {<Todotitle task="My Todo List is ready" />}

    <div>
      <input type="text" onChange={(event) => console.log(event.target.value)} />
      <button onClick={() => setPopupOpen(true)}>Add to do</button>
    </div>
  
  {popupOpen && <Popup title="Are you 1000000 sure?" />}


    <h1>My Todo</h1>
    <Todo tooglePopup = {tooglePopup} task="Learn React" description="Deep dive into React concepts" />
    <Todo tooglePopup={tooglePopup} task="Build a Todo App" description="Create a simple Todo application"/>
    <Todo tooglePopup={tooglePopup} task="Deploy the App" description="Deploy the Todo app to a hosting service"/>
    
  
</>
  );
}

export default App
