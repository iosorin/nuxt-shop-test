import Vuex from 'vuex';

import modules from './modules';
console.log('modules', modules);

let store;
const initStore = () => {
    return store || (store = new Vuex.Store({
        modules,
        actions: {
            init ({ commit }) {
                console.log('init');
                // resets state of all the modules
                // Object.keys(modules).forEach((moduleName) => {
                //     commit(`${moduleName}/RESET`);
                // });
            }
        }
    }));
};

export default initStore;
