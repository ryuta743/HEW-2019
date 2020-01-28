<template>
  <v-layout row wrap id="product_body">
    <div id="bread_list"> <!-- パンくずリスト -->
      <div class="bread"><v-icon>mdi-home</v-icon>トップ</div>
      <div class="bread">></div>
      <div class="bread">ショップ</div>
      <div class="bread">></div>
      <div class="bread">工房名</div>
    </div>
    <div id="product_infos">
      <div id="product_img">
        <v-lazy-image width="100%" height="500px" alt="商品画像" />
      </div>
      <div id="product_details">
        <div id="product_titles">
          <div id="product_title">{{productdetails ? productdetails.product_name:''}}</div>
          <div id="product_rate">
            <v-rating
                color="yellow darken-3"
                background-color="grey darken-1"
                v-model="item.rating"
                readonly
                half-increments
            ></v-rating>
            <p>(12)</p>
          </div>
        </div>
        <div id="product_description">
          {{ productdetails ? productdetails.product_detail:'' }}
        </div>
        <div id="product_tags">
          <div class="product_tag">甲冑</div>
          <div class="product_tag">重い</div>
        </div>
        <div id="product_price">{{ productdetails ? exprice(productdetails.price):'' }} 円 <span>(税抜)</span></div>
      </div>
    </div>
  <v-container grid-list-xs>
    <v-content>
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>back
      </v-btn>
      <v-card>
        <v-card-text>
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
                <v-layout row wrap>
                  <v-flex xs12 md2>
                    <v-btn color="success" style="width: 100%;">
                      <v-icon>mdi-cart</v-icon>カートに追加
                    </v-btn>
                  </v-flex>
                  <v-flex xs12 md2>
                    <v-btn color="yellow darken-4" dark outlined style="width: 100%;">
                      <v-icon>mdi-star</v-icon>お気に入りに追加
                    </v-btn>
                  </v-flex>
                  <v-flex xs12 md2>
                    <v-btn color="info" dark outlined style="width: 100%;" @click="circleOpen">
                      <v-icon>mdi-flattr</v-icon>360°
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <v-subheader>この商品を評価する</v-subheader>
          <v-rating></v-rating>
          <v-layout row wrap justify-center>
            <v-flex xs9 md11>
              <v-text-field label placeholder="商品レビュー" outlined></v-text-field>
            </v-flex>
            <v-flex xs2 md1>
              <v-btn color="success" style="height: 55px;width: 100%;">送信</v-btn>
            </v-flex>
          </v-layout>
          <v-divider />
        </v-card-text>
        <v-card-text v-for="(item, index) in reviews" :key="index">
          {{item.name}}
          <v-layout row wrap align-center>
            <v-rating
              v-model="item.rating"
              color="yellow darken-3"
              background-color="grey darken-1"
              readonly
              size="19px"
            />
            ({{item.rating}})
          </v-layout>
          {{item.review}}
          <v-divider style="margin-top: 5px;"></v-divider>
        </v-card-text>
      </v-card>

      <v-dialog v-model="circle" persistent :overlay="false" transition="dialog-transition">
        <v-card style="background-color: #999;">
          <v-layout row wrap align-center>
            <v-flex xs12 md3>
              <v-card-text style="background-color: #999;">
                <div id="fyu_7u5u1lu09a" class="fyu_container fyu_vertical"></div>
              </v-card-text>
            </v-flex>
            <v-flex xs12 md9 style="background-color: #999;">
              <v-card-text style="text-align: center;background-color: #999;color: white;">
                <v-icon color="primary" size="50px">mdi-flattr</v-icon>
              </v-card-text>
              <v-card-text style="color: #555;font-size: 28px;text-align: center;color: white;background-color: #999;">
                ドラッグで写真を回してください!<br>
                Drag to rotate the photo!
              </v-card-text>
              <v-card-text style="color: #555;font-size: 28px;text-align: center;color: white;background-color: #999;">
                <v-btn color="info" @click="reload">close</v-btn>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-dialog>
    </v-content>
  </v-container>
  </v-layout>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';

export default {
  head() {
    return {
      script: [{ src: "https://fyu.se/embed?v=2.0" }]
    };
  },

  mounted() {
    this.getproductdetailreq()
  },

  data() {
    return {
      circle: false,
      item: {
        title: "",
        rating: 4.5,
        tags: ["陶器", "食卓"],
        description: "とてもいい品です",
        creater: "ゆう工房"
      },
      reviews: [
        {
          name: "寺田神",
          review: "この商品を買ったその日から、僕の人生は変わりました。",
          rating: 5.0
        },
        {
          name: "寺田神アンチ",
          review: "とてもいい",
          rating: 4.0
        }
      ]
    };
  },
  methods:{
    
    async getproductdetailreq(){
      var p_data = {
        product_id : this.$route.params.product
      }
      console.log(p_data);

      try{
        await this.getproductdetails({p_data})
      }catch(e){
        console.log('エラー発生')
        console.log(e)
      }
    },

    circleOpen(){
      this.circle = true
      FYU.add("7u5u1lu09a", "fyu_7u5u1lu09a", { nologo: 1 });
    },
    reload() {
        this.$router.go({path: this.$router.currentRoute.path, force: true});
    },
    exprice(val){
      return val.toLocaleString();
    },
    ...mapActions('products',['getproductdetails'])
  },
  computed: {
    ...mapGetters('products',['productdetails'])
  }
};
</script>

<style scoped>

.sawarabi{
  font-family: "Sawarabi Mincho";
}

#bread_list{
  display: flex;
  align-items: flex-end;
  margin: 20px 0;
  width: 100%;
  height: 30px;
  border-bottom: 1.2px solid #e1e1e1;
}

.bread{
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 14px;
  cursor: pointer;
  width: 80px;
  color: #444444;
}

a {
  text-decoration: none;
}

#product_body{
  width: 1100px;
  margin: 0 auto;
}

#product_infos{
  width: 100%;
  height: 600px;
  display: flex;

}

#product_img{
  width: 500px;
  height: 500px;
}

#product_details{
  box-sizing: border-box;
  padding:0px 20px;
  width: 600px;
  height: 600px;
  background-color: #444444;
}

#product_titles{
  display: flex;
  width: 100%;
  height: 110px;
}

#product_title{
  display: flex;
  box-sizing: border-box;
  padding-left: 40px;
  font-size: 30px;
  align-items: center;
  width: 50%;
  height: 110px;
}

#product_rate{
  display: flex;
  justify-content: flex-end;
  font-size: 30px;
  align-items: center;
  width: 50%;
  height: 110px;
  font-size: 11px;
}

#product_rate p{
  margin-top: 23px;
}

#product_description{
  width: 100%;
  height: 150px;
}

#product_tags{
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 50px;
  border-bottom: 1.2px solid #999999;
}

.product_tag{
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  height: 20px;
  margin: 0 10px 15px 10px;
  background-color: #999999;
  border-radius: 2px;
  font-size: 12px;
}

#product_price{
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0 0 40px;
  width: 100%;
  height: 100px;
  font-size: 30px;
}

#product_price span{
  font-size: 12px;
  padding-top: 10px;
  margin-left: 10px;
}

</style>