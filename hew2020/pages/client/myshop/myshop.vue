<template>
  <v-container grid-list-xs style="min-height: 100vh;">
    <v-content>
      <v-card>
        <v-card-title primary-title>マイ工房管理画面</v-card-title>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs12 md12 v-if="!haveWorkshop">
              <v-btn color="info" style="width: 100%;height: 500px;"><h3>マイ工房設立</h3></v-btn>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-content>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
        haveWorkshop: false,
        }
    }
};
</script>

<style>
</style>