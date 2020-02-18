export const state = () =>({
    mail_data: null,
})

export const getters = {
    mail_data: state => state.mail_data
}

export const mutations = {
    setMail_data(state,{mail_data}){
        state.mail_data = mail_data;
    }
}

export const actions = {
    async　reply_mail({commit},{mail_data}){
        const to = mail_data.to
        const subject = mail_data.subject;
        const mail = mail_data.mail_text;
        console.log('ここからだ')
        console.log(mail)
        const reply_mail =  await this.$axios.$get(`/api/send_mail?to=${to}&subject=${subject}&mail=${mail}`)
        console.log(reply_mail)
    },
}