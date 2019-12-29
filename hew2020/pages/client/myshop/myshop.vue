<template>
  <div id="workshop_body">
    <v-container grid-list-xs style="min-height: 100vh;width: 15%;" id="workshop_nav" v-if="haveWorkshop">
      <ul>
        <li @click="$router.push('/client/myshop/myshop')" class="check"><v-icon>mdi-home</v-icon> 管理ツールトップ</li>
        <li @click="$router.push('/client/myshop/orderlist')"><v-icon>mdi-format-list-checks</v-icon> 注文一覧</li>
        <li @click="$router.push('/client/myshop/sales')"><v-icon>mdi-chart-bar</v-icon> 売上一覧</li>
        <li @click="$router.push('/client/myshop/sales_trend')"><v-icon>mdi-chart-arc</v-icon> 売上傾向表</li>
        <li @click="$router.push('/client/myshop/products')"><v-icon>mdi-format-list-bulleted</v-icon> 商品一覧・在庫状況</li>
        <li @click="$router.push('/client/myshop/productadd')"><v-icon>mdi-plus</v-icon> 新規商品登録</li>
        <li @click="$router.push('/client/myshop/productdel')"><v-icon>mdi-close</v-icon> 商品編集・削除</li>
        <li @click="$router.push('/client/myshop/chat')"><v-icon>mdi-chat</v-icon> チャットメッセージ</li>
      </ul>
    </v-container>
    <v-container grid-list-xs style="width: 85%;">
      <v-btn color="info" icon :loading="loading" v-if="loading" large></v-btn>
      <v-content v-if="!loading">
        <div id="sub_title">
          <h3>
            <v-icon>mdi-home</v-icon>
            工房管理ツールトップ
            <!-- <v-switch label="工房を持っている" v-model="haveWorkshop"></v-switch> -->
          </h3>
        </div>
        <v-card>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 md12 v-if="!haveWorkshop">
                <v-btn
                  color="info"
                  style="width: 100%;height: 500px;"
                  @click="$router.push('/client/myshop/create')"
                >
                  <h3>マイ工房設立</h3>
                </v-btn>
              </v-flex>
              <v-flex xs12 md12 v-if="haveWorkshop">              
                <div id="ws_background">
                  <h3>あなたの工房</h3>
                  <div id="imgs">
                    <div id="header_img">
                    <v-lazy-image style="width: 700px;" src="https://firebasestorage.googleapis.com/v0/b/hackmdbase-57369.appspot.com/o/tenshokuheader.jpg?alt=media&token=8f7e8a3a-b5e2-497e-9110-c251ad18c8aa"></v-lazy-image>
                    </div>
                    <div id="ws_icon">
                      <v-lazy-image :src=workshop_data.shop_img style="width: 100px;"></v-lazy-image>
                    </div>
                  </div>                 
                </div>         
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-content>
    </v-container>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  data() {
    return {
      loading: true,
      haveWorkshop: true,
      shop_id: 1
    };
  },
  async mounted() {
    await this.getShopdata({wsid:this.shop_id})
    this.loading = false
  },
  methods:{
    ...mapActions('workshop_manage',['getShopdata'])
  },
  computed:{
    ...mapGetters('workshop_manage',['workshop_data'])
  }
};
</script>

<style scoped>
#sub_title {
  box-sizing: border-box;
  padding: 20px;
  border-bottom: 1.2px solid #e6e6e6;
  margin-bottom: 10px;
}

#workshop_body{
  display: flex;
  width: 100%;
}

#workshop_nav{
  border: 1.2px solid #DEE5EC;
  background-color: #ffffff;
}

#workshop_nav ul{
  list-style: none;
}

#workshop_nav li{
  font-size: 12px;
  cursor: pointer;
  color: #777777;
  margin-bottom: 30px;
}

#workshop_nav li:hover{
  cursor: pointer;
  color: rgb(66,185,0);
}
#workshop_nav li.check{
  color: rgb(66,185,0);
}

#ws_background{
  margin: 0 auto;
  width: 700px;
  height: 750px;
}

#imgs{
  width: 700px;
  position: relative;
}

#header_img{
  border-radius: 5px;
  width: 700px;
  height: 250px;
  overflow: hidden;
  z-index: 1;
  background-color: #efefef;
}

#ws_icon{
  background-color: #e6e6e6;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 300px;
  overflow: hidden;
  z-index: 2;
}

.v-lazy-image {
  opacity: 0;
  transition: opacity .4s;
}
.v-lazy-image-loaded {
  opacity: 1;
}

</style>