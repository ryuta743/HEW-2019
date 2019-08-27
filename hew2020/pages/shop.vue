<template>
  <v-layout>
    <v-container>
      <v-content>
        <h5 style="width: 100%;text-align: center;">詳細検索</h5>
        <h4 style="width: 100%;text-align: center;">ADVANCED SEARCH</h4>

        <v-layout row wrap justify-center style="padding-top: 10px;">
          <v-flex xs12 md6>
            <form @submit.prevent>
              <v-layout row wrap>
                <v-text-field outlined label="検索"></v-text-field>
                <v-btn type="submit" color="info" style="height: 55px;">検索</v-btn>
              </v-layout>
            </form>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs4 md2 style="margin-right: 5px;">
            <v-subheader>検索対象</v-subheader>
            <v-select :items="items" label="商品" outlined></v-select>
          </v-flex>
          <v-flex xs4 md2 style="margin-right: 5px;">
            <v-subheader>生地</v-subheader>
            <v-select :items="items" label="未指定" outlined></v-select>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-content>
      <v-content>
        <v-layout row wrap>
          <v-flex
            xs12
            md4
            v-for="(item, index) in products"
            :key="index"
            style="padding: 0 10px 20px 10px;"
          >
            <v-card hover @click="$router.push('/shop')">
              <v-card-text style="font-weight: bold;">- {{item.title}} -</v-card-text>
              <v-img :src="item.src"></v-img>
              <v-card-text>
                <v-layout row wrap align-center>
                  <v-rating
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    v-model="item.rating"
                    readonly
                    half-increments
                  ></v-rating>
                  ({{item.rating}})
                </v-layout>
              </v-card-text>
              <v-card-text>{{item.creater}}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-content>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          title: "美しい日本刀",
          src: "https://picsum.photos/id/11/500/300",
          rating: 4.0,
          creater: "ここに出品工房情報"
        },
        {
          title: "やばいこけし",
          src: "https://picsum.photos/id/11/500/300",
          rating: 2.5,
          creater: "ここに出品工房情報"
        },
        {
          title: "話題の組紐",
          src: "https://picsum.photos/id/11/500/300",
          rating: 4.9,
          creater: "ここに出品工房情報"
        },
        {
          title: "組紐",
          src: "https://picsum.photos/id/11/500/300",
          rating: 4.0,
          creater: "ここに出品工房情報"
        },
        {
          title: "組紐",
          src: "https://picsum.photos/id/11/500/300",
          rating: 3.5,
          creater: "ここに出品工房情報"
        },
        {
          title: "組紐",
          src: "https://picsum.photos/id/11/500/300",
          rating: 3.5,
          creater: "ここに出品工房情報"
        },
        {
          title: "やばいこけし",
          src: "https://picsum.photos/id/11/500/300",
          rating: 5.0,
          creater: "ここに出品工房情報"
        },
        {
          title: "やばいこけし",
          src: "https://picsum.photos/id/11/500/300",
          rating: 5.0,
          creater: "ここに出品工房情報"
        }
      ]
    };
  }
};
</script>

<style>
.target {
  cursor: pointer;
}
</style>