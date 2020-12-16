import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {autorun, makeAutoObservable, observable, computed, action} from 'mobx'

let runningId = 0;
// class Person{
//   id = runningId++;

//   name;
//   constructor(name){
//     this.name = name

//     makeAutoObservable(this,{
//       id: false
//     })

//     // makeObservable(this, {
//     //   name: observable,
//     //   updateName: action,
//     //   coolName: computed
//     // })
    
//   }
//   updateName(name){
//     this.name = name
//   }

//   get coolName() {
//     return `${this.name} is Cool`
//   }
// }
class Person{
  id = runningId++;
  
  @observable
  name;
  constructor(name){
    this.name = name

    makeAutoObservable(this,{
      id: false
    })

    // makeObservable(this, {
    //   name: observable,
    //   updateName: action,
    //   coolName: computed
    // })
    
  }

  @action
  updateName(name){
    this.name = name
  }

  @computed
  get coolName() {
    return `${this.name} is Cool`
  }
}

const person = new Person('sagar')

autorun(()=>{
  console.log(`${person.coolName}`)
})

person.updateName('Sagar Pawar')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
