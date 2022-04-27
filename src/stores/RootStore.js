import { action, makeObservable } from 'mobx'
import CounterStore, {initialCounter} from './CounterStore'
import { useMemo } from 'react'

let store = null

const isServer = typeof window === 'undefined'

console.log(isServer);

/**
 * store 초기값 설정
 * @type {{counterStore: {number: number}}}
 *
 * 각각의 store의 초기값 생성
 */
export const initialRoot = {
  counterStore : initialCounter
}

export class RootStore {

  // store 이곳에 추가
  counterStore

  constructor (initialData) {
    makeObservable(this, {
      hydrate: action
    })
    this.hydrate(initialData)
  }

  hydrate = initialData => {
    if (initialData) {
      console.log("initialize Store");
      console.log(initialData);
      this.counterStore = new CounterStore(initialData.counterStore);
    }
  };
}

export function initializeStore(initialData = initialRoot) {

  if (isServer) {
    return {
      rootStore: new RootStore(initialData)
    }
  }

  // Create the store once in the client
  if (store === null) {
    store = {
      rootStore: new RootStore(initialData)
    };
  }

  return store;
}

/**
 *
 * @param initialState
 * @return {{rootStore: RootStore}|{rootStore: RootStore}}
 *
 * server에서 state를 받아서 Mobx에 초기화가 필요하면 각 페이지에서 getInitialProps에서 state 초기화 가능
 */
export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}