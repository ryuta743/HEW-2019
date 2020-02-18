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
    async　new_user_mail({commit},{payload}){
        const to = payload.mail
        const subject = payload.name+'様の新規登録が完了しました';
        const mail = '天職へようこそ！！'+payload.name+'様の登録が完了いたしましたのでご連絡させていただきました。何かご不明な点や質問などございましたら、サイトのお問い合わせまたはコンタクトからご連絡ください。';
        console.log('ここからだ')
        console.log(mail)
        const reply_mail =  await this.$axios.$get(`/api/send_mail?to=${to}&subject=${subject}&mail=${mail}`)
        console.log(reply_mail)
    },
}