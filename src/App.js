import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list:[]
    }
  }

  updateInput(key, value){
    this.setState({
      [key]: value
    });
  }

  addItem() {
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem
    };
    
    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);
    this.setState({list: updatedList})
  }

  render() {
    return (
      <div className="App">
      <div className="bg-text">
        <h1 className="app-title">To Do List</h1>
        <div>
          <h3>Add an item...</h3>
          <br/>
          <div id="div">
            <input
              type="text"
              placeholder="Type and item here..."
              value ={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}
            />
            <button onClick={() => this.addItem()}>Add</button>
          </div>
          <br/>
          <ul>
            {this.state.list.map(item =>{
              return(
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>X</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
