<template>
  <v-container grid-list-xs>
    <v-content style="height: 100vh;">
      <v-card>
        <v-card-text>
          <v-icon size="20px" color="success">mdi-check-circle</v-icon>
          <div>
            <tr>
              <p>お届け先情報：</p>
              <td>{{checkdata.sei}}</td>
              <td>{{checkdata.mei}}　</td>
              <td>{{checkdata.country}}　</td>
              <td>{{checkdata.address_01}}</td>
              <td>{{checkdata.address_02}}</td>
              <td>{{checkdata.address_03}}</td>
              <td>{{checkdata.address_04}}</td>
              <td>{{checkdata.address_05}}　</td>
              <td>{{buytype[checkdata.buy_type]}}</td>
            </tr>
            <tr>
              <p>クレジットカード情報：</p>
              <td>{{creditdata.carednum}}</td>
              <td>{{creditdata.year}}</td>
              <td>{{creditdata.month}}</td>
              <td>{{creditdata.cardsec}}</td>
            </tr>
          </div>
          <hr>
        </v-card-text>
        <v-card-actions>
          <v-layout row wrap justify-end>
            <v-btn color="success" @click="$router.push('/')">OK</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-content>
  </v-container>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';

export default {
  data(){
    return{
      buytype :["銀行振り込み","クレジットカード","AmazonPay"],
      
    }
  },
  methods: {
    ...mapActions('buy',['buycheck'])
  },
  computed: {
    ...mapGetters('buy',['checkdata','creditdata']),
    ...mapGetters(['loginuserdata']),
    ...mapGetters('products',['productdetails'])
  }
};
</script>

<style>
</style>