import { CounterStore } from '.';

let store = null;

class RootStore {

  constructor() {
    // here you need bind other store to the RootStore. So you can use other store by used rootStore.XXXX
    this.CounterStore = new CounterStore(this);
  }

}

export function initRootStore(isServer) {
  if (isServer) {
    return new RootStore()
  } else {
    if (store === null) {
      store = new RootStore(isServer)
    }
    return store
  }
}