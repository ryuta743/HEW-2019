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
    <v-container grid-list-xs style="min-height: 100vh;width: 85%;">
      <v-btn color="info" icon :loading="loading" v-if="loading" large></v-btn>
      <v-content v-if="!loading">
        <v-card>
          <v-card-title primary-title>マイ工房管理画面{{workshop_data.shop_name}}</v-card-title>
          <v-card-text>
            <v-switch label="工房を持っている" v-model="haveWorkshop"></v-switch>
          </v-card-text>
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

<style>
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

</style>