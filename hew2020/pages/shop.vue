<template>
  <v-layout>
    <v-container>
      <v-content>
        <h5 style="width: 100%;text-align: center;">詳細検索</h5>
        <h4 style="width: 100%;text-align: center;">ADVANCED SEARCH</h4>
        <v-flex xs4 md2>
          <v-select :items="items" v-model="value" label="label" outlined></v-select>
        </v-flex>
      </v-content>
      <v-content>
        <v-flex xs12 md3>
          <v-card>
            <v-card-text>ああ</v-card-text>
          </v-card>
        </v-flex>
      </v-content>
    </v-container>
  </v-layout>
</template>

<script>
export default {};
</script>

<style>
</style>