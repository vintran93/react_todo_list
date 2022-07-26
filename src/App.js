import React, { Component } from 'react'
import { todos } from "./data.js";

class App extends Component {
    
  constructor(props){
    super(props);

    this.state = {
      newItem: '',
      list: todos
    }
  } 
  
  updateInput(key, value){
    // update react state
    this.setState({
      [key]: value
    })
  }

  addItem(){
    //create item with unique id
    const newItem ={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }

    //copy of current list of items
    const list = [...this.state.list];

    // add new item to list
    list.push(newItem);

    // update state with new list and reset newItem input
    this.setState({
      list,
      newItem: ''
    })
  }

  deleteItem(id){
    // current copy of list of items
    const list = [...this.state.list];

    // filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList})
  }

  render() {
      return (
        <div>
          Add An Item
          <br/>
          <input
            type='text'
            placeholder='Add item here...'
            value={this.state.newItem}
            onChange={(e) => this.updateInput('newItem', e.target.value)}
          />
          <button
            onClick={() => this.addItem()}
          >Add</button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>X</button>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
}

export default App;

// import "./App.css";
// import React, { useState } from "react";
// const App = () => {
//   const [list, setList] = useState([]);
//   const [value, setValue] = useState("");

//   const changeHandler = (e) => {
//     setValue(e.target.value);
//   };

//   const submitHandler = () => {
//     setList([...list, value]);
//     setValue("");
//   };

//   const deleteHandler = (item) => {
//     setList(list.filter((ele) => ele != item));
//   };

//   return (
//     <div className="App">
//       <input type="text" value={value} onChange={changeHandler} />{" "}
//       <button onClick={submitHandler}>Add</button>
//       <hr />
//       <ul>
//         {list.length > 0 &&
//           list.map((item) => {
//             return <li onClick={() => deleteHandler(item)}>{item}</li>;
//           })}
//       </ul>
//     </div>
//   );
// };

// export default App;