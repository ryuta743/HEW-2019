<template>
  <div id="workshop_body">
    <v-container grid-list-xs style="min-height: 100vh;width: 15%;" id="workshop_nav">
      <ul>
        <li @click="$router.push('/client/myshop/myshop')">
          <v-icon>mdi-home</v-icon> 管理ツールトップ
        </li>
        <li @click="$router.push('/client/myshop/orderlist')">
          <v-icon>mdi-format-list-checks</v-icon> 注文一覧
        </li>
        <li @click="$router.push('/client/myshop/sales')">
          <v-icon>mdi-chart-bar</v-icon> 売上一覧
        </li>
        <li @click="$router.push('/client/myshop/sales_trend')">
          <v-icon>mdi-chart-arc</v-icon> 売上傾向表
        </li>
        <li @click="$router.push('/client/myshop/products')">
          <v-icon>mdi-format-list-bulleted</v-icon> 商品一覧・在庫状況
        </li>
        <li @click="$router.push('/client/myshop/discount')" class="check">
          <v-icon>mdi-cash-usd</v-icon> セット割引
        </li>
        <li @click="$router.push('/client/myshop/productadd')">
          <v-icon>mdi-plus</v-icon> 新規商品登録
        </li>
        <li @click="$router.push('/client/myshop/productdel')">
          <v-icon>mdi-close</v-icon> 商品編集・削除
        </li>
        <li @click="$router.push('/client/myshop/chat')">
          <v-icon>mdi-chat</v-icon> チャットメッセージ
        </li>
      </ul>
    </v-container>
    <v-container grid-list-xs style="max-height: 85vh;width: 85%;overflow-y: scroll;">
      <v-btn color="info" icon :loading="loading" v-if="loading" large></v-btn>
      <v-content v-if="!loading">
        <div id="sub_title">
          <h3>
            <v-icon>mdi-cash-usd</v-icon>
            セット割引一覧
          </h3>
        </div>
        <div id="controller">
            <v-btn color="success" text @click="$router.push('/client/myshop/discount_add')"><v-icon>mdi-plus</v-icon>セット割引を追加する</v-btn>
        </div>
        <div id="sets">
            <v-simple-table>
            <thead>
                <tr>
                    <th style="color: #111;">　</th>
                    <th style="color: #111;">セット名</th>
                    <th style="color: #111;">割引率</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in sales" :key="index">
                    <td style="color: #111;"><v-btn color="info" outlined>詳細</v-btn></td>
                    <td style="color: #111;">{{item.sale_name}}</td>
                    <td style="color: #111;">{{item.rate + '%'}}</td>
                </tr>
            </tbody>
            </v-simple-table>
        </div>
      </v-content>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      loading: true,
      shop_id: 1,
    };
  },
  async mounted() {
    await this.getSale({ wsid: this.shop_id });
    this.loading = false
  },
  methods: {
    ...mapActions("workshop_manage", ["getShopdata", "getOrderlist","getSale"])
  },
  computed: {
    ...mapGetters("workshop_manage", ["sales"])
  }
};
</script>

<style>
#workshop_body {
  display: flex;
  width: 100%;
}

#workshop_nav {
  border: 1.2px solid #dee5ec;
  background-color: #ffffff;
}

#workshop_nav ul {
  list-style: none;
}

#workshop_nav li {
  font-size: 12px;
  cursor: pointer;
  color: #777777;
  margin-bottom: 30px;
}

#workshop_nav li:hover {
  cursor: pointer;
  color: rgb(66, 185, 0);
}
#workshop_nav li.check {
  color: rgb(66, 185, 0);
}

#sub_title {
  box-sizing: border-box;
  padding: 20px;
  border-bottom: 1.2px solid #e6e6e6;
  margin-bottom: 10px;
}

#sets{
  width: 100%;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
}

#controller{
  padding: 15px 0;
}
</style>