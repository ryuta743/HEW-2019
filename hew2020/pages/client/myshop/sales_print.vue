<template>
  <div class="container">
    <h2 id="graphtitle" class="mincho">2020年度・月別売上総額表</h2>
    <div id="date" class="mincho">天職工房 2020年12月27日</div>
    <bargraph :chart-data="datacollection" :options="options" width="950mm" height="600mm"></bargraph>
    <form style="width: 100%;">
      <div style="width: 100%;margin: 20px 0 20px 0;text-align: center;" class="no-print">
        <v-btn color="info" width="200px" @click="print">印刷</v-btn>
        <a href="./sales"><v-btn color="grey" width="200px">キャンセル</v-btn></a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
            data: [10, 15, 6, 22, 11, 49, 32],
            backgroundColor: ['#f87979', '#aa4c8f', '#38b48b', '#006e54', '#c1e4e9', '#89c3eb', '#c3d825'],
            borderColor: 'transparent' // ★この行追加
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
a{
  text-decoration: none;
}

#graphtitle {
  width: 950px;
  text-align: center;
}

#date {
  width: 950px;
  text-align-last: right;
  color: #666666;
  font-size: 13px;
}

.mincho {
  font-family: serif;
}

.container {
  font-family: "ヒラギノ明朝 ProN W6", "HiraMinProN-W6", "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
  padding: 20px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.links {
  padding-top: 15px;
}

@media print {
  .no-print {
    display: none;
  }
}

@page {
  size: A4 landscape;
  margin: 0mm;
}
</style>
