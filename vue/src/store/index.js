import {creatStore} from "vuex"

const store = creatStore({
    state: {
        user: {
            data: {name:'zura'},
            token: null
        }
    },
    getters: {},
    actions: {},
    mutations: {},
    modules: {}
})


export default store;