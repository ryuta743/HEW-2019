export const state = () =>({
    loginuserdata: null,
})

export const getters = {
    loginuserdata: state => state.loginuserdata
}

export const mutations = {
    setLoginuserdata(state,sessiondata){
        state.loginuserdata = sessiondata;
        console.log(state.loginuserdata.user_id)
    }
}

export const actions = {
    // nuxtServerInit ({ commit }, { req }) {
    //     console.log(req.session.loginuserdata);
    //     if (req.session && req.session.loginuserdata) {
    //       commit('setLoginuserdata', req.session.loginuserdata)
    //     }
    // },
    async login({commit},{payload}){
        const data = payload;
        const kekka = await this.$axios.$get(`http://133.18.194.128:5000/account/loginuser?mail=${data.mail}&password=${data.password}`);
        const id = kekka[0].user_id
        const sessiondata = await this.$axios.$post(`/api/sessionin`,{id})
        console.log(sessiondata);
        commit('setLoginuserdata',sessiondata)
    },
}
  
  
  