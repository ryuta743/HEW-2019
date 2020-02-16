import moment from '~/plugins/moment';

export const state = () =>({
    review_data: null,
})

export const getters = {
    review_data: state => state.review_data
}

export const mutations = {
    setReview_data(state,{review_data}){
        state.review_data = review_data;
    }
}

export const actions = {
    async　product_review({commit},{review_data}){
        const product_id = review_data.product_id;
        const user_id = review_data.user_id;
        const review_point = review_data.review_point;
        const review_text = review_data.review_text;
        const now = moment().format('YYYY-MM-DD')
        console.log('ここから')
        console.log(product_id)
        console.log(user_id)
        console.log(review_point)
        console.log(review_text)
        console.log(now)
        console.log('正都天才');
        const reviews_res = await this.$axios.$get(`http://133.18.194.128:5000/review/post_review?product_id=${product_id}&user_id=${user_id}&review_point=${review_point}&review_text=${review_text}&now=${now}`);
        console.log(reviews_res)
    },
    async　get_reviews({commit},{get_review_data}){
        const product_id = get_review_data.product_id;
        console.log('お前がナンバーワンだカカロット');
        console.log(product_id)
        const reviews = await this.$axios.$get(`http://133.18.194.128:5000/review/get_review?product_id=${product_id}`);
        console.log(reviews)
        commit('setReview_data', reviews)
    },
}