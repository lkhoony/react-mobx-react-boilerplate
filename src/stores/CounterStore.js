import { observable, action, makeObservable, computed } from 'mobx'

// initial Counter의 초기값

export const initialCounter = {
  number : 0
};

export default class CounterStore {

  constructor (initialData) {

    console.log(initialData);
    // constructor에 inital Data를 받아서 초기화 > root에서 받아줄듯
    this.number = initialData.number

    makeObservable(this, {
      number: observable,
      increase: action,
      decrease: action,
      double: computed
    })
  }

  number = 0;

  increase = () => {
    this.number++
  }

  decrease = () => {
    this.number--
  }

  get double () {
    return this.number * 2
  }
}
