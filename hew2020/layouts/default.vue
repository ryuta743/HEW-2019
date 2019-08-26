<template>
  <v-app>
    <!-- ログインダイアログ -->
    <v-dialog
      v-model="loginDialog"
      scrollable
      :overlay="false"
      max-width="700px"
      transition="dialog-transition"
    >
      <v-card style="padding: 15px 15px 60px 15px;">
        <v-card-text style="text-align: center;padding: 20px;">
          <h2>ログイン</h2>
        </v-card-text>
        <form @submit.prevent>
          <v-text-field name="name" outlined label="メールアドレス"></v-text-field>
          <v-text-field name="password" outlined label="パスワード" type="password"></v-text-field>
          <v-btn color="success" @click="login" type="submit">ログイン</v-btn>
          <v-btn color="grey" dark @click="loginDialog = false">キャンセル</v-btn>
        </form>
      </v-card>
    </v-dialog>

    <!-- アラートダイアログ -->
    <v-dialog
      v-model="successDialog"
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-text style="text-align:center;">
          <v-icon size="50px" color="success">mdi-check</v-icon>
        </v-card-text>
        <v-card-text style="text-align: center;padding-bottom: 50px;">完了しました</v-card-text>
        <v-card-actions>
          <v-btn color="success" style="margin: 0 auto;" outlined @click="successDialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- ログアウトダイアログ -->
    <v-dialog
      v-model="logoutDialog"
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-text style="text-align:center;">
          <v-icon size="50px" color="error">mdi-close</v-icon>
        </v-card-text>
        <v-card-text style="text-align: center;padding-bottom: 50px;">ログアウトしてよろしいですか？</v-card-text>
        <v-card-actions>
          <v-btn color="error" style="margin: 0 auto;" outlined @click="logout">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- アカウント作成ダイアログ -->
    <v-dialog
      v-model="createADialog"
      scrollable
      persistent
      :overlay="false"
      max-width="900px"
      transition="dialog-transition"
    >
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">メールアドレス入力</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">その他必要情報の入力</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">Name of step 3</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-layout row wrap justify-center>
              <v-flex md10>
                <v-subheader>お使いのメールアドレスをご入力ください</v-subheader>
                <v-text-field placeholder="例：tenshoku@hal.co.jp" label id="id" outlined></v-text-field>
              </v-flex>
              <v-flex md10>
                <v-subheader>確認のため再度ご入力ください</v-subheader>
                <v-text-field placeholder="例：tenshoku@hal.co.jp" label id="id" outlined></v-text-field>
              </v-flex>
            </v-layout>

            <v-btn color="primary" @click="e1 = 2">確認</v-btn>

            <v-btn text @click="createADialog = false">キャンセル</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-layout row wrap justify-center>
              <v-flex md10>
                <v-subheader>国籍</v-subheader>
                <v-select
                  outlined
                  :items="items"
                  v-model="value"
                  label="label"
                ></v-select>
              </v-flex>
              <v-flex md11>
                <v-divider style="margin-top: 15px;"></v-divider>
              </v-flex>

              <v-flex md10>
                <v-subheader>性別</v-subheader>
                <v-layout row wrap>
                  <v-radio label="男性" value="value"></v-radio>
                  <v-radio label="女性" value="value"></v-radio>
                  <v-radio label="その他" value="value"></v-radio>
                </v-layout>
              </v-flex>

              
            </v-layout>

            <v-btn color="primary" @click="e1 = 3">確認</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

            <v-btn color="primary" @click="e1 = 1">OK</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-dialog>

    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar elevate-on-scroll :clipped-left="clipped" app>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <v-btn outlined>ここにlogo</v-btn>
      <v-tabs>
        <v-tab @click="$router.push('/')">TOP</v-tab>
        <v-tab @click="$router.push('/shop')">SHOP</v-tab>
        <v-tab>メニュー03</v-tab>
        <v-tab>メニュー04</v-tab>
      </v-tabs>

      <v-btn outlined @click="loginDialog = true" v-if="!isLogin">
        <v-icon color="success">mdi-check</v-icon>ログイン
      </v-btn>

      <v-btn outlined style="margin: ;" v-if="!isLogin" @click="createADialog = true">
        <v-icon color="success">mdi-account</v-icon>新規登録
      </v-btn>

      <v-badge left color="primary" v-if="isLogin">
        <span slot="badge">0</span>
        <v-btn outlined v-if="isLogin">
          <v-icon color="primary">mdi-cart</v-icon>カート
        </v-btn>
      </v-badge>

      <div v-if="isLogin">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" outlined>
              <v-icon color="primary">mdi-account</v-icon>アカウント
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" @click="logoutDialog = true">
              <v-icon>{{item.icon}}</v-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <nuxt />

    <v-footer style="height: 400px;" dark>
      <span>&copy; ここはフッター</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      logoutDialog: false,
      e1: 0,
      createADialog: false,
      isLogin: false,
      clipped: false,
      drawer: false,
      fixed: false,
      loginDialog: false,
      successDialog: false,
      items: [
        {
          icon: "mdi-account-box",
          title: "アカウント情報",
          to: "/"
        },
        {
          icon: "mdi-close",
          title: "ログアウト",
          to: "/"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },
  methods: {
    login() {
      this.isLogin = true;
      this.successDialog = true;
      this.loginDialog = false;
    },
    logout() {
      this.isLogin = false;
      this.successDialog = true;
      this.logoutDialog = false;
    }
  }
};
</script>
