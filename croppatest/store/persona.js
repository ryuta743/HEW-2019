import firebase from '~/plugins/firebase'
import 'firebase/storage';
const firestorage = firebase.storage()

export const actions = {
    uploadImage: (context, payload) => {
        return new Promise((resolve, reject) => {
            // firestorage にファイルをアップロード
            const uploadTask = firestorage
                .ref('images/' + payload.name)
                .put(payload.file)
        })
    }
}