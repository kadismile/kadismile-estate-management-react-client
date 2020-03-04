import React, { useState, useEffect } from 'react';

function Testing(props) {

  const [count, setCount] = useState(0);
  let [data, changeName] = useState({
    name: '',
    age: 24
  });  
  const [myArray, setArray] = useState([])

  const manageState = (e) => {
    return changeName( {...data, name: e.target.value})
  }

  const setItems = () => {
    setArray([...myArray, {
      id: myArray.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }


  useEffect(() => { 
    console.log("it has updated____")
  }, []);


  return (
    <div className="row"> 
    <br/>
    <br/>
    <br/>
  <h1> Testing this .... {data.name}</h1>
  <h1> Testing this .... {count}</h1>



      <form>
        {/* <input className="form-control" onChange={(e)=> changeName( {...data, name: e.target.value})} placeholder="Enter text" /> */}
        <input className="form-control" onChange={(e)=> manageState(e)} placeholder="Enter text" />
      </form>


      <ul>
    
        { myArray.map( item => (
          <li key={item.id}> {item.value} </li>
        ))}
      
      </ul>

    <button type="button" onClick={() => setCount(prevState => prevState + 1)} class="btn btn-primary">Add</button>
    <button type="button" onClick={setItems} class="btn btn-primary">Add Numbers</button>
    
    
    </div>
  );
}

export default Testing;