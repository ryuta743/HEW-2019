<template>
  <v-container>
    <v-content>
      <h5 style="width: 100%;text-align: center;">登録情報</h5>
      <h4 style="width: 100%;text-align: center;padding: 0 0 5px 0;">REGISTRATION INFORMATION</h4>
      <v-card>
        <v-simple-table>
          <tbody>
            <tr>
              <td>お名前</td>
              <td>{{item.name}}</td>
            </tr>
            <tr>
              <td>登録メールアドレス</td>
              <td>{{item.mail}}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-content>
    <v-content>
      <h5 style="width: 100%;text-align: center;">アカウントメニュー</h5>
      <h4 style="width: 100%;text-align: center;padding: 0 0 5px 0;">ACOUNT MENU</h4>
      <v-card>
        <v-card-text>
          <v-layout row wrap justify-center>
            <v-btn x-large color="success" outlined style="margin: 0 5px 0 5px;">
              <v-icon>mdi-star-circle</v-icon>お気に入り商品
            </v-btn>
            <v-btn x-large color="success" outlined style="margin: 0 5px 0 5px;">
              <v-icon>mdi-star-circle-outline</v-icon>お気に入り工房
            </v-btn>
            <v-btn x-large color="success" outlined style="margin: 0 5px 0 5px;">
              <v-icon>mdi-format-list-bulleted</v-icon>購入履歴
            </v-btn>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-content>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      item: {
        name: "寺田神",
        mail: "terada_manji@hal.co.jp"
      }
    };
  }
};
</script>

<style>
</style>