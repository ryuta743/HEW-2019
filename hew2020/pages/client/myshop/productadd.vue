<template>
  <v-container grid-list-xs style="min-height: 80vh;">
    <v-content v-if="check ==0">
      <v-card>
        <v-card-title primary-title>新規登録商品情報入力</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-flex xs12 md5>
            <h3 style="padding-bottom: 10px;">登録商品イメージ</h3>
            <v-file-input label="File input" filled prepend-icon="mdi-camera"></v-file-input>
          </v-flex>
          <v-divider style="padding-bottom: 20px;"></v-divider>

          <h3 style="padding-bottom: 10px;">登録商品名</h3>
          <v-layout row wrap>
            <v-flex xs12 md5>
              <v-text-field label="商品名(日本)" outlined></v-text-field>
            </v-flex>
            <v-flex xs12 md5>
              <v-text-field label="商品名(英語)" outlined></v-text-field>
            </v-flex>
          </v-layout>
          <v-divider style="padding-bottom: 20px;"></v-divider>
          <v-flex xs5 md3>
            <h3 style="padding-bottom: 10px;">販売価格</h3>
            <v-layout row wrap align-center>
              <v-text-field label="価格" outlined type="number"></v-text-field>
              <h2>円</h2>
            </v-layout>
          </v-flex>
          <v-divider style="padding-bottom: 20px;"></v-divider>
          <h3 style="padding-bottom: 10px;">在庫数</h3>
          <v-layout row wrap align-center>
            <v-flex xs5 md2>
              <v-text-field type="number" label="初期在庫数" outlined></v-text-field>
            </v-flex>
            <h2>個</h2>
            <v-flex xs0 md1></v-flex>
            <v-flex xs5 md2>
              <v-text-field type="number" label="安全在庫数" outlined></v-text-field>
            </v-flex>
            <h2>個</h2>
          </v-layout>
          <v-divider style="padding-bottom: 20px;"></v-divider>
          <v-flex xs12 md12>
            <h3 style="padding-bottom: 10px;">商品説明</h3>
            <v-text-field outlined label="商品説明"></v-text-field>
          </v-flex>
          <v-divider style="padding-bottom: 20px;"></v-divider>
          <h3 style="padding-bottom: 10px;">
            商品につけるタグ
            <span style="font-size: 15px;color: #999;">(4つまで)</span>
          </h3>
          <v-layout row wrap>
            <v-flex xs10 md10>
              <v-text-field outlined label="追加タグ" v-model="formData.tag"></v-text-field>
            </v-flex>
            <v-flex xs1 md1>
              <v-btn color="info" style="width: 100%;height: 55px;" outlined @click="addTag">追加</v-btn>
            </v-flex>
            <v-flex xs12 md12>
              <v-subheader>追加中のタグ</v-subheader>
              <v-layout row wrap>
                <v-flex xs6 md12>
                  <v-chip
                    @click="formData.tags.splice(index,1)"
                    class="ma-2"
                    color="primary"
                    label
                    text-color="white"
                    v-for="(item, index) in formData.tags"
                    :key="index"
                  >
                    <v-icon left>mdi-backspace</v-icon>
                    {{item}}
                  </v-chip>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-layout row wrap justify-end>
            <v-flex xs12 md1>
              <v-btn color="info" style="width: 100%;" @click="check = 1">確認</v-btn>
            </v-flex>
            <v-flex xs12 md1>
              <v-btn style="width: 100%;" @click="$router.push('/client/myshop/myshop')">キャンセル</v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-content>
    <v-content v-if="check == 1">
      <v-card>
        <v-card-title primary-title>登録内容確認</v-card-title>
        <v-card-text>
          <v-simple-table>
            <tbody>
              <tr>
                <td>商品名(日)</td>
                <td>すごい陶器</td>
              </tr>
              <tr>
                <td>商品名(英)</td>
                <td>GreatThing</td>
              </tr>
              <tr>
                <td>販売価格</td>
                <td>5500円</td>
              </tr>
              <tr>
                <td>初期在庫数</td>
                <td>50個</td>
              </tr>
              <tr>
                <td>安全在庫数</td>
                <td>10個</td>
              </tr>
              <tr>
                <td>商品説明</td>
                <td>これは素晴らしい商品です</td>
              </tr>
              <tr>
                <td>タグ</td>
                <td>陶器・焼き物・食器</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-layout row wrap justify-end>
            <v-flex xs12 md1>
              <v-btn color="info" style="width: 100%;" @click="check = 2">登録</v-btn>
            </v-flex>
            <v-flex xs12 md1>
              <v-btn style="width: 100%;" @click="check = 1">戻る</v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-content>
    <v-content v-if="check == 2">
      <v-card>
        <v-card-text>
          <v-layout row wrap align-center justify-center>
            <h3>
              <v-icon color="success">mdi-check-circle</v-icon>
            </h3>
            <h3>登録が完了しました</h3>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-layout row wrap justify-center>
            <v-btn color="success" @click="$router.push('/client/myshop/myshop')">OK</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-content>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      check: 0,
      formData: {
        tag: "",
        tags: ["陶器"]
      }
    };
  },
  methods: {
    addTag() {
      if (this.formData.tag != "") {
        if (this.formData.tags.length < 4) {
          this.formData.tags.push(this.formData.tag);
          this.formData.tag = "";
        }
      }
    }
  }
};
</script>

<style>
</style>