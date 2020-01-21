export const state = () =>({
    data: null,
})

export const getters = {
    data: state => state.data
}

export const mutations = {
    setData(state,{data}){
        state.data = data;
    }
}

export const actions = {
    async select_product({commit},{payload}){
        console.log('お前は最強だ正都様');
        console.log(payload.product);
        const productname = await this.$axios.$get(`http://133.18.194.128:5000/product/select_product?pro_data=${payload.product}`);
        console.log('APIから戻ってきた');
        console.log(productname);
        commit("setData", {productname})
    },
}