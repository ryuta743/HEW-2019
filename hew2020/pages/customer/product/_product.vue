<template>
  <v-container>
    <v-content>
      <v-card>
        <v-card-text>
          <v-flex xs12 md12>
            <img src="https://picsum.photos/1500/600?random=1" alt style="width: 100%;" />
          </v-flex>
          <v-flex xs12 md12>
            <v-card>
              <v-card-title primary-title>{{$route.params.product}}</v-card-title>
              <v-card-text style="height: 8px;">
                <v-layout row wrap align-center>
                  <v-rating
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    v-model="item.rating"
                    readonly
                    size="19px"
                    half-increments
                  ></v-rating>
                  ({{item.rating}})
                </v-layout>
              </v-card-text>
              <v-card-text>
                  出品工房:
                <nuxt-link :to="`../workshop/${item.creater}`">{{item.creater}}</nuxt-link>
              </v-card-text>
              <v-card-text style="font-weight: bold;">{{item.description}}</v-card-text>
              <v-card-text>
                関連づけられたタグ:
                <v-chip
                  class="ma-2"
                  color="primary"
                  label
                  text-color="white"
                  v-for="(item, index) in item.tags"
                  :key="index"
                >
                  <v-icon left>mdi-label</v-icon>
                  {{item}}
                </v-chip>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="success">
                  <v-icon>mdi-cart</v-icon>カートに追加する
                </v-btn>
                <v-btn color="yellow darken-4" dark outlined>
                  <v-icon>mdi-star</v-icon>お気に入りに追加する
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-card-text>
      </v-card>
    </v-content>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      item: {
        title: "",
        rating: 4.5,
        tags: ["陶器", "食卓"],
        description: "とてもいい品です",
        creater: "ゆう工房"
      }
    };
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>