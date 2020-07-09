import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './App.css'


@inject('FruitStore') //the same as the provider, our store
@observer //watchs the store when the data changes

class App extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const fruit = this.fruit.value;
    this.props.FruitStore.addFruit(fruit);
    this.fruit.value = '';
  }
  render() {
    const { FruitStore } = this.props;
    return (
      <div className="app-container">
        {/* as it's a get, we write the function without (), we access it as it's a prop */}
        <h2>You have { FruitStore.fruitCount } fruits!</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" placeholder="enter a fruit..." ref={input => this.fruit = input} />
          <button>Add a fruit</button>
        </form>

        <ul>
          { FruitStore.fruits.map((fruit, index) => (
            <li key={index}>🍊 {fruit}</li>
          ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
