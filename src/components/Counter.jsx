import { useState } from 'react'

function Counter() {
 const [array, setArray] = useState([])

 return(
            <div>
                
           <h1>{array.length}</h1>
           <button onClick={() => setArray((prevArray) => [...prevArray,  '+ 1'])}>
                increment
           </button>
           <button onClick={() => setArray((prevArray) => [...prevArray, '- 1'])}>
                decrement
           </button>

            </div>
        )




    }

   /** const initialUser = { name: 'John', age: 30, email: 'john@gmail.com' }
    const [user, setUser] = useState(initialUser)

    return (
        <div>
            <h1 className="count">{user.name}, {user.age}, {user.email}</h1>
            <button onClick={() =>
            /**
             * 1. use a callback within setUser to access the previous state
             * 2. use the spread operator to copy the previous state
             * 3. update the age property by incrementing it by 1
             * 
             
                setUser((prevUser) => ({ 
                    ...prevUser, age: prevUser.age + 1,
                    }))}>
                        
                Increment
            </button>
            <button onClick={() => setUser((prevUser) => ({ ...prevUser, age: prevUser.age - 1 }))}>
                Decrement
            </button>
            <button onClick={() => setUser(initialUser)}>Reset</button>
        </div>*/
    

    


export default Counter
