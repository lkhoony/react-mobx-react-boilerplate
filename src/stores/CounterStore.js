import { observable, action, makeObservable, computed } from 'mobx'

// export default class CounterStore{
//
//   constructor (rootStore) {
//     this.rootStore = rootStore;
//   }
//
//   @observable number = 0;
//
//   @action increase = () => {
//     this.number++;
//   }
//
//   @action decrease = () => {
//     this.number--;
//   }
// }

export default class CounterStore{

  constructor (initialData) {

    // constructor에 inital Data를 받아서 초기화 > root에서 받아줄듯
    this.number = initialData.number;

    makeObservable(this,{
      number : observable,
      increase : action,
      decrease : action,
      double : computed
    })
  }

  number = 0;

  increase = () => {
    this.number++;
  }

  decrease = () => {
    this.number--;
  }

  get double() {
    return this.number * 2;
}
}