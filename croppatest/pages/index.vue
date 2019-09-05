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
            <croppa v-model="myCroppa" canvas-color="transparent"></croppa>
            <button @click="generateImage">画像作成</button>
            <br />
            <img class="output" :src="imgUrl" />
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
      imgUrl: "" //アウトプットするurlってことかな
    };
  },
  methods: {
    generateImage: function() {
      let url = this.myCroppa.generateDataUrl();
      if (!url) {
        alert("no image");
        return;
      }
      this.imgUrl = url;
    }
  },

  mounted() {
    Vue.use(Croppa);
  }
};
</script>
