<template>
  <div class="container">
    <div id="receipt">
      <div style="display: flex;">
        <h2 id="graphtitle" class="mincho">納品書</h2>
        <h3 id="number" class="mincho">No.　　0002</h3>
      </div>
      <div id="date" class="mincho"></div>
      <div id="send" style="margin-bottom:10px;">
        <div id="customer_name" class="mincho">加藤正都</div>
        <div style="width: 100px;font-weight: bold;" class="mincho">様</div>
      </div>
      <div class="mincho" style="margin-bottom: 20px;">2019年　　12月　　27日</div>
      <div class="mincho">
        下記の通り納品いたしました
        <table border="1" style="border-collapse: collapse">
            <tr>
                <th class="mincho" style="width: 300px;">品名</th>
                <th class="mincho" style="width: 75px;">数量</th>
                <th class="mincho" style="width: 75px;">単価</th>
                <th class="mincho" style="width: 190px;">金額</th>
            </tr>
            <tr>
                <td class="mincho" style="width: 300px;">{{items[0] ? items[0].product_name:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[0] ? items[0].count:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[0] ? items[0].price:''}}</td>
                <td class="mincho" style="width: 190px;text-align: end;">{{items[0] ? items[0].price * items[0].count:''}}</td>
            </tr>
            <tr>
                <td class="mincho" style="width: 300px;">{{items[1] ? items[1].product_name:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[1] ? items[1].count:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[1] ? items[1].price:''}}</td>
                <td class="mincho" style="width: 190px;text-align: end;">{{items[1] ? items[1].price * items[1].count:''}}</td>
            </tr>
            <tr>
                <td class="mincho" style="width: 300px;">{{items[2] ? items[2].product_name:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[2] ? items[2].count:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[2] ? items[2].price:''}}</td>
                <td class="mincho" style="width: 190px;text-align: end;">{{items[2] ? items[2].price * items[2].count:''}}</td>
            </tr>
            <tr>
                <td class="mincho" style="width: 300px;">{{items[3] ? items[3].product_name:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[3] ? items[3].count:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[3] ? items[3].price:''}}</td>
                <td class="mincho" style="width: 190px;text-align: end;">{{items[3] ? items[3].price * items[3].count:''}}</td>
            </tr>
            <tr>
                <td class="mincho" style="width: 300px;">{{items[4] ? items[4].product_name:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[4] ? items[4].count:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[4] ? items[4].price:''}}</td>
                <td class="mincho" style="width: 190px;text-align: end;">{{items[4] ? items[4].price * items[4].count:''}}</td>
            </tr>
            <tr>
                <td class="mincho" style="width: 300px;">{{items[5] ? items[5].product_name:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[5] ? items[5].count:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[5] ? items[5].price:''}}</td>
                <td class="mincho" style="width: 190px;text-align: end;">{{items[5] ? items[5].price * items[5].count:''}}</td>
            </tr>
            <tr>
                <td class="mincho" style="width: 300px;">{{items[6] ? items[6].product_name:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[6] ? items[6].count:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[6] ? items[6].price:''}}</td>
                <td class="mincho" style="width: 190px;text-align: end;">{{items[6] ? items[6].price * items[6].count:''}}</td>
            </tr>
            <tr>
                <td class="mincho" style="width: 300px;">{{items[7] ? items[7].product_name:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[7] ? items[7].count:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[7] ? items[7].price:''}}</td>
                <td class="mincho" style="width: 190px;text-align: end;">{{items[7] ? items[7].price * items[7].count:''}}</td>
            </tr>
            <tr>
                <td class="mincho" style="width: 300px;">{{items[8] ? items[8].product_name:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[8] ? items[8].count:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[8] ? items[8].price:''}}</td>
                <td class="mincho" style="width: 190px;text-align: end;">{{items[8] ? items[8].price * items[8].count:''}}</td>
            </tr>
            <tr>
                <td class="mincho" style="width: 300px;">{{items[9] ? items[9].product_name:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[9] ? items[9].count:''}}</td>
                <td class="mincho" style="width: 75px;text-align: end;">{{items[9] ? items[9].price:''}}</td>
                <td class="mincho" style="width: 190px;text-align: end;">{{items[9] ? items[9].price * items[9].count:''}}</td>
            </tr>
            <tr>
                <td style="height: 60px;text-align: center;" class="mincho">
                    合計金額
                </td>
                <td colspan="3" style="text-align: end;">{{sumAll()}}</td>
            </tr>
        </table>
        <div style="display: flex;align-items: flex-end;">
            <div style="width: 70px;height: 70px;border: 1.2px solid #111;margin-top: 10px;"></div>
            <div class="mincho" style="margin-left: 10px;">天職工房</div>
        </div>
    　</div>
    </div>
    <form style="width: 100%;">
      <div style="width: 100%;margin: 20px 0 20px 0;text-align: center;" class="no-print">
        <v-btn color="info" width="200px" @click="print">印刷</v-btn>
        <v-btn color="grey" width="200px" @click="$router.push('/client/myshop/orderlist')">キャンセル</v-btn>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
        items:[
            {
                user_name: '桒畑 天',
                count: 4,
                price: 1200,
                product_name: '砂岩模様のこだわりプレート'
            },{
                user_name: '桒畑 天',
                count: 4,
                price: 1200,
                product_name: '砂岩模様のこだわりプレート'
            },{
                user_name: '桒畑 天',
                count: 4,
                price: 1200,
                product_name: '砂岩模様のこだわりプレート'
            },{
                user_name: '桒畑 天',
                count: 4,
                price: 1200,
                product_name: '砂岩模様のこだわりプレート'
            },{
                user_name: '桒畑 天',
                count: 4,
                price: 1200,
                product_name: '砂岩模様のこだわりプレート'
            },{
                user_name: '桒畑 天',
                count: 4,
                price: 1200,
                product_name: '砂岩模様のこだわりプレート'
            }
        ]
    };
  },
  mounted() {
  },
  methods: {
    sumAll(){
        var sum = 0;
        this.items.forEach(element => {
            sum += element.price;
        })
        return sum;
    },
    print() {
      window.print();
    }
  }
};
</script>

<style scoped>
table td{
    box-sizing: border-box;
    padding: 5px;
    height: 50px;
}

#receipt {
  box-sizing: border-box;
  padding: 50px 100px;
}

#number {
  width: 250px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-top: 18px;
  border: 1.2px solid #222222;
  border-width: 0 0 1.2px 0;
  margin-left: 100px;
}

#graphtitle {
  font-size: 38px;
  width: 300px;
  text-align: center;
  border: 1.5px solid #222222;
  border-width: 0 0 1.5px 0;
}

.mincho {
  font-family: serif;
}

#date {
  width: 550px;
  text-align-last: right;
  color: #666666;
  font-size: 13px;
}

.container {
  font-family: "ヒラギノ明朝 ProN W6", "HiraMinProN-W6", "HG明朝E",
    "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
  padding: 20px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.links {
  padding-top: 15px;
}

#send {
  margin-top: 50px;
  display: flex;
  align-items: center;
  width: 550px;
  border: 1.5px solid #222222;
  border-width: 0 0 1.5px 0;
}

#customer_name {
  font-weight: bold;
  width: 550px;
  font-size: 30px;
  text-align: center;
}

@media print {
  .no-print {
    display: none;
  }
}

@page {
  size: A4;
  margin: 0mm;
}
</style>
