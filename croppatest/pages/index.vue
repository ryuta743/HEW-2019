<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">Welcome to the Vuetify + Nuxt.js template</v-card-title>
        <v-card-text>
          <client-only>
            <croppa
              v-model="myCroppa"
              width="1000"
              height="400"
              canvas-color="transparent"
              :remove-button-size="30"
            ></croppa>
            <button @click="generateImage">画像作成</button>
            <br />
            <img class="output" :src="imgUrl" width="1000" height="400" />
            <button @click="upload">upload</button>
          </client-only>
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
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      myCroppa: null, //v-model croppa
      imgUrl: "", //アウトプットするurlってことかな
      blob:null
    };
  },
  methods: {
    generateImage: function() {
      var type = "image/jpeg";
      let url = this.myCroppa.generateDataUrl(type);
      if (!url) {
        alert("no image");
        return;
      }
      this.imgUrl = url;
      // DataURL のデータ部分を抜き出し、Base64からバイナリに変換
      var bin = atob(url.split(",")[1]);
      // 空の Uint8Array ビューを作る
      var buffer = new Uint8Array(bin.length);
      // Uint8Array ビューに 1 バイトずつ値を埋める
      for (var i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
      }
      // Uint8Array ビューのバッファーを抜き出し、それを元に Blob を作る
      this.blob = new Blob([buffer.buffer], { type: type });
      console.log(this.blob)
    },
    upload() {
      this.$store.dispatch("persona/uploadImage", {
        name: "test",
        file: this.blob
      });
    }
  },

  mounted() {
    Vue.use(Croppa);
  }
};
</script>
