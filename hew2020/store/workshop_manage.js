import moment from '~/plugins/moment';

export const state = () => ({
    workshop_data: {},
    orderlist: [],
    details: []
})

export const getters = {
    workshop_data: state => state.workshop_data,
    loading: state => state.loading,
    orderlist: state => state.orderlist,
    details: state => state.details,
}

export const mutations = {
    setWorkshop(state, val) {
        state.workshop_data = val;
    },
    setOrderlist(state, val) {
        state.orderlist = val
    },
    setOrderdetail(state, val) {
        state.details = val
    }
}

export const actions = {
    async getShopdata({ commit }, { wsid }) {
        try {
            const ws_inf = await this.$axios.$get(`http://133.18.194.128:5000/workshopManage/getShopdata?shop_id=${wsid}`);
            commit('setWorkshop', ws_inf[0])
        } catch (error) {
            if (error.response.status == 403) {
                throw new Error("You don't have workshop")
            }
        }
    },
    async getOrderlist({ commit }, { wsid }) {
        try {
            const ws_inf = await this.$axios.$get(`http://133.18.194.128:5000/workshopManage/getOrderlist?shop_id=${wsid}`);
            commit('setOrderlist', ws_inf)
        } catch (error) {
            if (error.response.status === 403) {
                throw new Error("You don't have workshop")
            }
        }
    },
    async getOrderdetail({ commit }, { wsid, order_number }) {
        console.log('受け取ったデータ:' + wsid)
        try {
            console.log('aa')
            const ws_inf = await this.$axios.$get(`http://133.18.194.128:5000/workshopManage/getOrderdetail?shop_id=${wsid}&order_number=${order_number}`);
            if (ws_inf.length > 0) {
                for (var i = 0; ws_inf.length > i; i++) {
                    if (ws_inf[i].proccess == 1) ws_inf[i].proccess = true;
                };
            }
            commit('setOrderdetail', ws_inf)
            console.log(ws_inf)
        } catch (error) {
            if (error.response.status === 403) {
                throw new Error("You don't have workshop")
            }
        }
    }
}