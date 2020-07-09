import { observable, action, computed } from 'mobx';

class FruitStore {
  @observable fruits = [] //anything that's observable, these are the props or data you want to keep track of. initialized empty array

  @action addFruit = (fruit) => {
    this.fruits.push(fruit)
  }

  @computed get fruitCount () { // working with our data, we want to filter for example or a count, any time that I want to access the data to calculate something and want to reflect this information in real time.
    return this.fruits.length;
  }
}

const store = new FruitStore();
export default store; // we're exporting the only instance of the fruitstore.