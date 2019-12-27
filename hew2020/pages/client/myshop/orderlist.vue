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
    <v-container grid-list-xs style="max-height: 85vh;width: 85%;overflow-y: scroll;">
      <v-content>
        <div id="sub_title">
          <h3>注文一覧</h3>
        </div>
        <v-simple-table>
          <thead>
            <tr>
              <th style="color: #111;">注文No</th>
              <th style="color: #111;">注文者</th>
              <th style="color: #111;">注文日</th>
              <th style="color: #111;">処理状態</th>
              <th style="color: #111;"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td>{{item.orderno}}</td>
              <td>{{item.username}}</td>
              <td>{{item.date}}</td>
              <td>{{item.isCheck? '発送済み':'未発送'}}</td>
              <td>
                <v-btn
                  color="primary"
                  outlined
                  @click="$router.push(`order/${item.orderno}`)"
                >注文詳細をみる</v-btn>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-content>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          orderno: "0002",
          userid: "805",
          username: "Xavier",
          date: 20190812,
          isCheck: false
        },
        {
          orderno: "0001",
          userid: "805",
          username: "Xavier",
          date: 20190812,
          isCheck: true
        },
        {
          orderno: "0001",
          userid: "805",
          username: "Xavier",
          date: 20190812,
          isCheck: true
        },
        {
          orderno: "0001",
          userid: "805",
          username: "Xavier",
          date: 20190812,
          isCheck: true
        },
        {
          orderno: "0001",
          userid: "805",
          username: "Xavier",
          date: 20190812,
          isCheck: true
        },
        {
          orderno: "0001",
          userid: "805",
          username: "Xavier",
          date: 20190812,
          isCheck: true
        },
        {
          orderno: "0001",
          userid: "805",
          username: "Xavier",
          date: 20190812,
          isCheck: true
        },
        {
          orderno: "0001",
          userid: "805",
          username: "Xavier",
          date: 20190812,
          isCheck: true
        },
        {
          orderno: "0001",
          userid: "805",
          username: "Xavier",
          date: 20190812,
          isCheck: true
        },
        {
          orderno: "0001",
          userid: "805",
          username: "Xavier",
          date: 20190812,
          isCheck: true
        },
        {
          orderno: "0001",
          userid: "805",
          username: "Xavier",
          date: 20190812,
          isCheck: true
        },
        {
          orderno: "0001",
          userid: "805",
          username: "Xavier",
          date: 20190812,
          isCheck: true
        },
        {
          orderno: "0001",
          userid: "805",
          username: "Xavier",
          date: 20190812,
          isCheck: true
        },
        {
          orderno: "0001",
          userid: "805",
          username: "Xavier",
          date: 20190812,
          isCheck: true
        },
        {
          orderno: "0001",
          userid: "805",
          username: "Xavier",
          date: 20190812,
          isCheck: true
        },
        {
          orderno: "0001",
          userid: "805",
          username: "Xavier",
          date: 20190812,
          isCheck: true
        },
        {
          orderno: "0001",
          userid: "805",
          username: "Xavier",
          date: 20190812,
          isCheck: true
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
  box-sizing: border-box;
  padding: 20px;
  border-bottom: 1.2px solid #e6e6e6;
  margin-bottom: 10px;
}
</style>