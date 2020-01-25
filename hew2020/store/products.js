export const state = () =>({
    data: null,
    productdetails: null,
})

export const getters = {
    data: state => state.data,
    productdetails: state => state.productdetails,
}

export const mutations = {
    setData(state,data){
        state.data = data;
        console.log(data)
    },

    setProductdetails(state,productdetails){
        state.productdetails = productdetails;
    },
}

export const actions = {
    async select_product({commit},{payload}){
        console.log('お前は最強だ正都様');
        console.log(payload.product);
        const productname = await this.$axios.$get(`http://133.18.194.128:5000/product/get_product?pro_data=${payload.product}`);
        console.log('APIから戻ってきた');
        console.log(productname);
        commit("setData", productname)
    },

    async getproductdetails({commit},{p_data}){
        console.log('頑張れ正都！！');
        console.log(p_data.product_id);
        const product_details = await this.$axios.$get(`http://133.18.194.128:5000/product/get_details?id_data=${p_data.product_id}`);
        console.log('おかえり');
        console.log(product_details[0],[0])
        commit('setProductdetails',product_details[0])
    },
}