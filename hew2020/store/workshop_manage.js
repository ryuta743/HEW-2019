import moment from '~/plugins/moment';

export const state = () => ({
    workshop_data: null,
})

export const getters = {
    workshop_data: state => state.workshop_data,
}

export const mutations = {
    setWorkshop(state, {val}) {
        state.workshop_data = val;
    }
}

export const actions = {
    async getShopdata({ commit },{ wsid }) {
        console.log('受け取ったデータ:' + wsid)
        try {
            const ws_inf = await this.$axios.$get(`http://133.18.194.128:5000/workshopManage/getShopdata?shop_id=${wsid}`);
            console.log('取ってきたデータ:' + ws_inf)
            console.log({ws_inf})
            commit('setWorkshop',{ws_inf})
        } catch (error) {
            if(error.response.status === 403){
                throw new Error("You don't have workshop")
            }
        }
        return true;
    }
}