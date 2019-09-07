<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-text>
          <client-only>
            <croppa
              v-model="myCroppa"
              placeholder="画像を選択"
              :width=1000
              :height=400
              canvas-color="#000"
              :file-size-limit="700000"
              :remove-button-size="30"
            ></croppa>
            <v-card-text>
              <v-btn color="info" @click="generateImage">トリミング</v-btn>
              <v-btn color="primary" @click="upload">アップロード!</v-btn>
            </v-card-text>
          </client-only>
          <v-divider></v-divider>
          <v-card-text　v-if="imgUrl">
            <h2 style="padding-bottom: 10px;">トリミング後の画像</h2>
            <img class="output" :src="imgUrl" width="1000" height="400" />
            <img src="https://firebasestorage.googleapis.com/v0/b/tenshoku-9b0c8.appspot.com/o/images%2Ftest3?alt=media&token=3747dfca-14b7-4476-b20d-7d23f993aa49" width="1000" height="400" alt="">
          </v-card-text>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import Vue from "vue";
import Croppa from "vue-croppa";
import "vue-croppa/dist/vue-croppa.css";

export default {
  data() {
    return {
      myCroppa: null, //v-model croppa
      imgUrl: null, //アウトプットするurlってことかな
      blob: null,
      uploadedName:null,
      uploadedImg: null
    };
  },
  methods: {
    generateImage: function() {
      var type = "image/jpeg";
      let compressionRate = 0.2
      let url = this.myCroppa.generateDataUrl(type,compressionRate);
      if (!url) {
        alert("画像が選択されていません");
        return;
      }
      this.imgUrl = url;
      // DataURL のデータ部分を抜き出し、Base64からバイナリに変換してる
      var bin = atob(url.split(",")[1]);
      // 空の Uint8Array ビューを作る
      var buffer = new Uint8Array(bin.length);
      // Uint8Array ビューに 1 バイトずつ値を埋める
      for (var i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
      }
      // Uint8Array ビューのバッファーを抜き出し、それを元に Blob を作る
      this.blob = new Blob([buffer.buffer], { type: type });
      console.log(this.blob);
    },
    upload() {
      if(this.imgUrl == null){
        alert('画像をトリミングしてください')
        return
      }
      this.$store.dispatch("persona/uploadImage", {
        name: "test3",
        file: this.blob
      }).then(url => {
            // アップロード完了処理 (ローカルメンバに保存したり)
            app.uploadedImg = url//アップロードしたURLを返してもらってる
            console.log(app.uploadedImg)
          })
      setTimeout(() => {
        alert("アップロードに成功しました")
      }, 2000);     
    }
  },

  mounted() {
    Vue.use(Croppa);
  }
};
</script>
