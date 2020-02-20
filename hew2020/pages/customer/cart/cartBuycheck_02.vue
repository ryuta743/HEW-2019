<template>
  <v-container grid-list-xs style="padding: 50px 0 50px 0;">
    <v-content style="height: 100vh;">
      <v-card>
        <v-card-text id="box">
          <v-icon size="20px" color="success">mdi-check-circle</v-icon>
          <div>
            <h2>購入者情報</h2>
            <!-- <p>購入者名：{{checkdata[0].sei}}{{checkdata[0].mei}}</p> -->
            <p>お電話番号:{{checkdata[0].tel}}</p>
            <p>メールアドレス：{{checkdata[0].mail}}</p>
            <p>合計金額：:{{goukei}}円</p>
            <br>
            <h2>お届け先情報</h2>
            <tr>
              <td>{{checkdata[0].country ? checkdata[0].country:''}}</td>
              <td>{{checkdata[0].address_01 ? checkdata[0].address_01:''}}</td>
              <td>{{checkdata[0].address_02 ? checkdata[0].address_02:''}}</td>
              <td>{{checkdata[0].address_03 ? checkdata[0].address_03:''}}</td>
              <td>{{checkdata[0].address_04 ? checkdata[0].address_04:''}}</td>
              <td>{{checkdata[0].address_05 ? checkdata[0].address_05:''}}</td>
            </tr>
            <br><br>
            <h2>購入情報</h2>
            <p>{{buytype[checkdata[0].buy_type]}}</p>
            <p v-if="checkdata[0].buy_type==1">カード番号:{{checkdata[1].card_num}}</p>
            <p v-if="checkdata[0].buy_type==1">カード有効期限(年):{{years[checkdata[1].year]}}</p>
            <p v-if="checkdata[0].buy_type==1">カード有効期限(月):{{months[checkdata[1].month]}}</p>
            <p v-if="checkdata[0].buy_type==1">セキュリティ番号:{{checkdata[1].card_sec}}</p>
          </div>
          <hr>
          <br>
          <div id="item_box0">
            <h1>購入商品確認</h1>
              <br>
              <div id="item_box">
                <v-card id="buy_product" flat v-for="(item, index) in getcartdata" :key="index" >
                  <div id="product_img">
                    <v-lazy-image :src="item.product_img" style="width: 100%;object-fit: cover;height: 100%;vertical-align:bottom"/>
                  </div>
                  <v-card-text style="heigh: 150px;" id="moji">
                    <div id="product_name">{{item.product_name}}</div>
                    <div id="product_price">¥{{item.price}}</div>
                  </v-card-text>
                </v-card>
              </div>
              <!-- <p>商品名：{{getcartdata[0].product_name}}</p>
              <p>購入される個数：{{getcartdata[0].count}}個</p>
              <p>単価：{{getcartdata[0].price}}円</p> -->
          </div>
          <hr>
          <v-card-actions>
            <v-layout row wrap justify-end>
              <v-btn color="success" @click="buyReq">OK</v-btn>
              <v-btn color="red" style="color: #fff;" @click="$router.push('/customer/cart/cart')">キャンセル</v-btn>
            </v-layout>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-content>
  </v-container>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';

export default {
  mounted() {
    for(var i = 0; i<this.getcartdata.length; i++){
      this.goukei += this.getcartdata[i].price * this.getcartdata[i].count
    }
    console.log(this.goukei)
  },
  data(){
    return{
      buytype :["銀行振り込み","クレジットカード","AmazonPay"],
      years:['20年','21年','22年','23年','24年','25年','26年','27年','28年','29年','30年'],
      months:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      goukei : 0,
    }
  },
  methods: {
    async buyReq(){
      var buydata = [
        {
          // name : this.checkdata[0].sei + this.checkdata[0].mei,
          tel : this.checkdata[0].tel,
          mail : this.checkdata[0].mail,
          country  : this.checkdata[0].country,
          postalcode : this.checkdata[0].address_01,
          address : this.checkdata[0].address_02 + this.checkdata[0].address_03　+　this.checkdata[0].address_04+this.checkdata[0].address_05,
          buy_type : this.checkdata[0].buy_type,
          total : this.goukei,
        },
        {
          cartdata : this.getcartdata,
        },
        {
          user_data : this.loginuserdata,
        }
      ]
      try{
        await this.insert_buy({buydata})
        if(this.buy_data === 7){
          this.$router.push(`/customer/cart/cartBuy_end`)
        }
      }catch(e){
        console.log('エラー発生')
        console.log(e)
      }
    },

    ...mapActions('buy',['insert_buy'])
  },
  computed: {
    ...mapGetters('buy',['checkdata','buy_data']),
    ...mapGetters(['loginuserdata']),
    ...mapGetters('products',['productdetails']),
    ...mapGetters('carts',['getcartdata']),
  }
};
</script>

<style>
  #box{
    width:1185px;
  }
  #item_box{
    display: flex;
    min-height: 500px;
    background-color: aqua;
    flex-wrap: wrap;
    padding-bottom: 50px;
  }
  #item_box0{
    padding-bottom: 30px;
  }
  #buy_product{
    width: 300px;
    height: 300px;
    margin: 0 40px 90px 40px; 
  }
  #moji{
    font-size: 15px;
  }
  #product_hr{
    margin-top: 1px;
  }
</style>