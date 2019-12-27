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
        <li @click="$router.push('/client/myshop/sales')"><v-icon>mdi-chart-bar</v-icon> 売上一覧</li>
        <li @click="$router.push('/client/myshop/sales_trend')"><v-icon>mdi-chart-arc</v-icon> 売上傾向表</li>
        <li @click="$router.push('/client/myshop/products')" class="check">
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
        <div id="sub_title">
          <h3><v-icon>mdi-format-list-bulleted</v-icon>商品一覧・在庫状況</h3>
        </div>

      　<v-card>
            <v-card-text>
                
            <v-layout row wrap>
              <v-flex
                xs12
                md4
                v-for="(item, index) in products"
                :key="index"
                style="padding: 0 10px 20px 10px;"
              >
                <v-card hover>
                  <v-card-text>
                      在庫：{{item.num}}個
                      <v-btn color="success" icon @click="item.num++"><v-icon>mdi-plus</v-icon></v-btn>
                      <v-btn color="red" icon @click="item.num--"><v-icon>mdi-minus</v-icon></v-btn>
                      <v-chip color="red" v-if="item.num < item.warning" dark>安全在庫{{item.warning - item.num}}個不足</v-chip>
                  </v-card-text>
                  <v-img :src="item.src" @click="$router.push(`/customer/product/${item.title}`)"></v-img>
                  <v-card-text style="font-weight: bold;height: 10px;" @click="$router.push(`/customer/product/${item.title}`)">{{item.title}}</v-card-text>
                  <v-card-text style="height : 10px;" @click="$router.push(`/customer/product/${item.title}`)">
                    <v-layout row wrap align-center @click="$router.push(`/customer/product/${item.title}`)">
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
                  </v-card-text @click="$router.push(`/customer/product/${item.title}`)">
                  <v-card-text style="height: 8px;">¥{{item.price}}</v-card-text>
                  <v-card-text @click="$router.push(`/customer/product/${item.title}`)">
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
                </v-card>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-content>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          title: "陶器01",
          src: "https://picsum.photos/id/11/500/300",
          rating: 4.5,
          price: 3000,
          tags: ["陶器", "食卓"],
          creater: "ゆう工房",
          num: 32,
          warning: 10
        },
        {
          title: "やばいこけし",
          src: "https://picsum.photos/id/11/500/300",
          rating: 2.5,
          price: 3000,
          tags: ["陶器", "食卓"],
          creater: "サバンナ工房",
          num: 12,
          warning: 10
        },
        {
          title: "話題の組紐",
          src: "https://picsum.photos/id/11/500/300",
          rating: 4.9,
          price: 3000,
          tags: ["陶器", "食卓"],
          creater: "北九州組み紐工房",
          num: 10,
          warning: 10
        },
        {
          title: "組紐",
          src: "https://picsum.photos/id/11/500/300",
          rating: 4.0,
          price: 3000,
          tags: ["陶器", "食卓"],
          creater: "ここに出品工房情報",
          num: 67,
          warning: 10
        },
        {
          title: "組紐",
          src: "https://picsum.photos/id/11/500/300",
          rating: 3.5,
          price: 3000,
          tags: ["陶器", "食卓"],
          creater: "ここに出品工房情報",
          num: 32,
          warning: 10
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