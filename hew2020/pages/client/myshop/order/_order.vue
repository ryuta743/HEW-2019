<template>
　<div id="workshop_body">
    <v-container grid-list-xs style="min-height: 100vh;width: 15%;" id="workshop_nav">
      <ul>
        <li @click="$router.push('/client/myshop/myshop')">
          <v-icon>mdi-home</v-icon> 管理ツールトップ
        </li>
        <li @click="$router.push('/client/myshop/orderlist')" class="check">
          <v-icon>mdi-format-list-checks</v-icon> 注文一覧
        </li>
        <li @click="$router.push('/client/myshop/sales')"><v-icon>mdi-chart-bar</v-icon> 売上一覧</li>
        <li @click="$router.push('/client/myshop/sales_trend')"><v-icon>mdi-chart-arc</v-icon> 売上傾向表</li>
        <li @click="$router.push('/client/myshop/products')">
          <v-icon>mdi-format-list-bulleted</v-icon> 商品一覧・在庫状況
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
    <v-container grid-list-xs style="min-height: 85vh;width: 85%;overflow-y: scroll;">
      <v-content>
        <v-toolbar color="info">
          <v-toolbar-title style="color: white;">注文詳細 注文No.{{$route.params.order}}</v-toolbar-title>
          <div class="flex-grow-1"></div>
          <v-btn color="grey" dark @click="$router.push('/client/myshop/orderlist')">注文一覧へ戻る</v-btn>
        </v-toolbar>
        <v-card>
          <v-card>
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs12 md6>
                  注文者名
                  <h4>{{orderInfo.orderName}}</h4>
                </v-flex>
                <v-flex xs12 md6>
                  お届け先住所
                  <h4>{{orderInfo.address}}</h4>注文日
                  <h4>{{orderInfo.date}}</h4>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
          <v-card-text>
            <v-card-title primary-title>注文商品</v-card-title>
            <v-card-text>
              <v-simple-table>
                <thead>
                  <tr>
                    <th style="color: #111;">商品名</th>
                    <th style="color: #111;">個数</th>
                    <th style="color: #111;">梱包状態</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in products" :key="index">
                    <td>{{item.name}}</td>
                    <td>{{item.num}}</td>
                    <td>
                      <v-checkbox v-model="item.check"></v-checkbox>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card-text>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-layout row wrap justify-center v-if="orderInfo.isCheck">
              <v-btn color="success" @click="dialog = true">発送完了</v-btn>
              <v-btn color="white" @click="$router.push(`/client/myshop/order_print/${$route.params.order}`)">領収書発行</v-btn>
              <v-btn color="white" @click="$router.push(`/client/myshop/delivery/${$route.params.order}`)">納品書</v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-content>
      <v-dialog
        v-model="dialog"
        scrollable
        :overlay="false"
        max-width="500px"
        transition="dialog-transition"
      >
        <v-card>
          <v-card-text style="text-align: center;">
            <v-icon color="info" size="55px">mdi-help</v-icon>
          </v-card-text>
          <v-card-text style="text-align: center;">発送完了状態にしますか？</v-card-text>
          <v-card-actions>
            <v-layout row wrap justify-center>
              <v-btn color="success" @click="complete_dialog = true">はい</v-btn>
              <v-btn @click="dialog = false">いいえ</v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="complete_dialog"
        scrollable
        persistent
        :overlay="false"
        max-width="600px"
        transition="dialog-transition"
      >
        <v-card>
          <v-card-text style="text-align: center;">
            <v-icon color="success" size="55px">mdi-check</v-icon>
          </v-card-text>
          <v-card-text style="text-align: center;">発送完了状態にしました</v-card-text>
          <v-card-actions>
            <v-layout row wrap justify-center>
              <v-btn color="success" @click="$router.push('/client/myshop/orderlist')">OK</v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
　</div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      complete_dialog: false,
      orderInfo: {
        orderName: "Xavier",
        date: 20190828,
        address: "~~~~",
        isCheck: true
      },
      products: [
        {
          name: "陶器01",
          num: 2
        },
        {
          name: "陶器02",
          num: 1
        },
        {
          name: "陶器03",
          num: 1
        }
      ]
    };
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

#sub_title{
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  border-bottom: 1.2px solid #e6e6e6;
  margin-bottom: 10px;
}
</style>