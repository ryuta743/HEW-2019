<template>
  <div class="container">
    <div id="receipt">
      <div style="display: flex;">
        <h2 id="graphtitle" class="mincho">領収証</h2>
        <h3 id="number" class="mincho">No.</h3>
      </div>
      <div id="date" class="mincho"></div>
      <div id="send">
        <div id="customer_name" class="mincho">寺田隆太</div>
        <div style="width: 100px;font-weight: bold;" class="mincho">様</div>
      </div>
      <div id="paybox">
          <div class="mincho" style="width: 100px;text-align: center;font-weight: bold;">
              金額
          </div>
          <div id="money" class="mincho">
              ¥ 200,000-
          </div>
      </div>
    </div>
    <form style="width: 100%;">
      <div style="width: 100%;margin: 20px 0 20px 0;text-align: center;" class="no-print">
        <v-btn color="info" width="200px" @click="print">印刷</v-btn>
        <v-btn color="grey" width="200px" @click="$router.push('/client/myshop/sales')">キャンセル</v-btn>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ordernumber: this.$route.params.print,
      datacollection: null,
      options: {
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "(月)"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 15
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    if (process.client) {
      this.fillData();
    }
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [
          {
            label: "売上総額（千円）",
            data: [10, 20, 30, 40, 50, 30, 20, 30, 50, 50, 10, 30],
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderColor: "rgba(255, 159, 64, 1)",
            borderWidth: 1
          }
        ]
      };
    },
    print() {
      window.print();
    }
  }
};
</script>

<style>
#receipt {
  box-sizing: border-box;
  padding: 50px 100px;
}

#number {
  width: 300px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-top: 18px;
  border: 1.2px solid #222222;
  border-width: 0 0 1.2px 0;
  margin-left: 100px;
}

#graphtitle {
  font-size: 38px;
  width: 500px;
  text-align: center;
  border: 1.5px solid #222222;
  border-width: 0 0 1.5px 0;
}

.mincho {
  font-family: serif;
}

#date {
  width: 950px;
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
  width: 700px;
  border: 1.5px solid #222222;
  border-width: 0 0 1.5px 0;
}

#customer_name {
  font-weight: bold;
  width: 600px;
  font-size: 30px;
  text-align: center;
}

#paybox{
    display: flex;
    margin-top: 20px;
    width: 950px;
    height: 100px;
    border: 6px double #111111;
    background-color: antiquewhite;
    border-width: 6px 0;
}

#money{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 90px;
    font-size: 30px;
    font-weight: bold;
}

@media print {
  .no-print {
    display: none;
  }
}

@page {
  size: B5 landscape;
  margin: 0mm;
}
</style>
