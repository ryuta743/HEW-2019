<template>
  <v-layout row wrap style="padding-top: 100px;">
    <h5 style="width: 100%;text-align: center;">ランダムモール</h5>
    <h4 style="width: 100%;text-align: center;">RANDOM MALL</h4>
    <h4 style="width: 100%;text-align: center;padding-bottom: 10px;">
      <v-btn color="info" style="border-radius: 300px;" @click="get_workshopReq">
        <v-icon>mdi-reload</v-icon>
      </v-btn>
    </h4>
    <!-- <v-flex xs12 md6 v-for="(item, index) in items" :key="index" @click="$router.push(`/customer/workshop/${item.title}`)"> -->
    <v-flex xs12 md6 v-for="(item, index) in items" :key="index" @click="get_workshop_dataReq">
      <v-hover v-slot:default="{ hover }">
        <v-card>
          <v-img :src="item.src" />
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out black lighten-4 v-card--reveal display-3 white--text target"
              style="height: 100%;"
            >
              <div>
                <div style="text-align: center;padding-bottom: 5px;font-size: 40px;">{{item.title}}</div>
                <!-- <v-flex xs12 md12 style="font-size: 20px;">{{ item.description }}</v-flex> -->
                <v-layout row wrap justify-center>
                  <v-flex md3 v-for="(product, index) in item.products" :key="index" style="padding: 5px;">
                    <v-card style="padding: 3px;" hover>
                      <v-img :src="product.src" />
                    </v-card>
                  </v-flex>
                </v-layout>
              </div>
            </div>
          </v-expand-transition>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';

export default {
  async mounted() {
    await this.get_workshopReq();
  },
  data() {
    return {
      items: [
        {
          shop_id: null,
          title: null,
          // title: "宮崎ガラス細工",
          src: "https://picsum.photos/500/300?random=3",
          description: "ここに説明が入ります",
          products: [
            {
              src: "https://picsum.photos/500/300?random=5"
            },
            {
              src: "https://picsum.photos/500/300?random=6"
            },
            {
              src: "https://picsum.photos/500/300?random=7"
            }
          ]
        },
        {
          shop_id: null,
          title: null,
          src: "https://picsum.photos/500/300?random=3",
          description: "ここに説明が入ります",
          products: [
            {
              src: "https://picsum.photos/500/300?random=5"
            },
            {
              src: "https://picsum.photos/500/300?random=6"
            },
            {
              src: "https://picsum.photos/500/300?random=7"
            }
          ]
        },
        {
          shop_id: null,
          title: null,
          src: "https://picsum.photos/500/300?random=3",
          description: "ここに説明が入ります",
          products: [
            {
              src: "https://picsum.photos/500/300?random=5"
            },
            {
              src: "https://picsum.photos/500/300?random=6"
            },
            {
              src: "https://picsum.photos/500/300?random=7"
            }
          ]
        },
        {
          shop_id: null,
          title: null,
          src: "https://picsum.photos/500/300?random=4",
          description: "ここに説明が入ります",
          products: [
            {
              src: "https://picsum.photos/500/300?random=5"
            },
            {
              src: "https://picsum.photos/500/300?random=6"
            },
            {
              src: "https://picsum.photos/500/300?random=7"
            }
          ]
        }
      ]
    };
  },
  methods:{
    async get_workshopReq(){
      try{
        await this.shop_count()
        console.log(this.shop_countdata.count_data)
      }catch(e){
        console.log('エラー発生')
        console.log(e)
      }
      var random_id = []
      for(var i=0; i<4;){
        var min = 1 ;
        var max = this.shop_countdata.count_data;
        var randam = Math.floor( Math.random() * (max + 1 - min) ) + min ;
        if(random_id.indexOf(randam) === -1){
          random_id.push(randam)
          i++
        }
      }
      try{
        await this.mall_init()
        await this.random_mall({random_id})
        console.log(this.mall)
        // 0
        this.items[0].shop_id = this.mall[0][0].shop_id
        this.items[0].title = this.mall[0][0].shop_name
        this.items[0].src = this.mall[0][0].shop_img
        this.items[0].description = this.mall[0][0].shop_description
        console.log(this.items[0].description)
        // 1
        this.items[1].shop_id = this.mall[1][0].shop_id
        this.items[1].title = this.mall[1][0].shop_name
        this.items[1].src = this.mall[1][0].shop_img
        this.items[1].description = this.mall[1][0].shop_description
        // 2
        this.items[2].shop_id = this.mall[2][0].shop_id
        this.items[2].title = this.mall[2][0].shop_name
        this.items[2].src = this.mall[2][0].shop_img
        this.items[2].description = this.mall[2][0].shop_description
        // 3
        this.items[3].shop_id = this.mall[3][0].shop_id
        this.items[3].title = this.mall[3][0].shop_name
        this.items[3].src = this.mall[3][0].shop_img
        this.items[3].description = this.mall[3][0].shop_description
      }catch(e){
        console.log('エラー発生')
        console.log(e)
      }
    },

    async get_workshop_dataReq(){
      try{
        
      }catch(e){
        console.log('エラー発生！！')
        console.log(e)
      }
    },

    ...mapActions('work_shop',['random_mall','mall_init','shop_count']),
  },
  computed:{
    ...mapGetters('work_shop',['mall','shop_countdata']),
  }
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  top: 0;
  bottom: 0;
  justify-content: center;
  opacity: 0.99;
  position: absolute;
  width: 100%;
}

.target {
  cursor: pointer;
}

.reload {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>