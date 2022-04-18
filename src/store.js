import { action, observable, makeObservable } from 'mobx';
import { enableStaticRendering, MobXProviderContext} from 'mobx-react';
import { useMemo, useContext } from 'react';

enableStaticRendering(typeof window === "undefined");

let store = null;

const isServer = typeof window === "undefined";

class Store{

}




// =================================================
import { CounterStore } from './stores';

const useStore = () => {

  return { CounterStore }

}

export default useStore;
