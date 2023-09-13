import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store, ModuleTree} from 'vuex'

import auth from './auth';
import playlists from './playlists';
import tracks from './tracks';
import albums from './albums';

// define your typings for the store state

export interface IRootState {
  modules: ModuleTree<IRootState>
}

// define injection key
export const key: InjectionKey<Store<IRootState>> = Symbol()

export const store = createStore<IRootState>({
  modules: {
    auth,
    playlists,
    tracks,
    albums,
  }
})

export const useStore = () => {
  return baseUseStore(key)
}

