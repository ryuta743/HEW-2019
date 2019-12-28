import moment from '~/plugins/moment';

export const state = () => ({
    workshop_data: {},
    orderlist: [],
})

export const getters = {
    workshop_data: state => state.workshop_data,
    loading: state => state.loading,
    orderlist: state => state.orderlist,
}

export const mutations = {
    setWorkshop(state, val) {
        state.workshop_data = val;
    },
    setOrderlist(state,val){
        state.orderlist = val
    }
}

export const actions = {
    async getShopdata({ commit },{ wsid }) {
        console.log('受け取ったデータ:' + wsid)
        try {
            const ws_inf = await this.$axios.$get(`http://133.18.194.128:5000/workshopManage/getShopdata?shop_id=${wsid}`);
            console.log('取ってきたデータ:' + ws_inf)
            console.log({ws_inf})
            commit('setWorkshop',ws_inf[0])
        } catch (error) {
            if(error.response.status == 403){
                throw new Error("You don't have workshop")
            }
        }
    },
    async getOrderlist({ commit },{ wsid }) {
        console.log('受け取ったデータ:' + wsid)
        try {
            const ws_inf = await this.$axios.$get(`http://133.18.194.128:5000/workshopManage/getOrderlist?shop_id=${wsid}`);
            commit('setOrderlist',ws_inf)
            console.log(ws_inf)
        } catch (error) {
            if(error.response.status === 403){
                throw new Error("You don't have workshop")
            }
        }
    }
}