import axios from 'axios'

export default {
    state: {
        users: [],
        user: {}
    },
    getters: {
        users: state => state.users,
        user: state => state.user
    },
    mutations: {
        SET_USERS:   (state, users) => state.users = users,
        SET_USER:   (state, user) => state.user = user,
        CLEAR_USER: (state, user) => state.user = user
    },
    actions: {
        getUsers: async({commit}) => {
            const res = await axios.get(`http://localhost:3000/users`)
            if(res.status === 200) {
                commit('SET_USERS', res.data)
            }
        },
        getUser: async({commit}, id) => {
            const res = await axios.get(`http://localhost:3000/users/?id=${id}`)
            if(res.status === 200) {
                commit('SET_USER', res.data)
            }
        },
        addUser: async({dispatch}, user) => {
            const res = await axios.post(`http://localhost:3000/users`, user)
            if(res.status === 201) {
                dispatch('getUsers')
            }
        },
        clearUser: ({commit}) => {
            commit('CLEAR_USER', {})
        }
    }
}