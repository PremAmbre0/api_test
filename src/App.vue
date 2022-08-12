<template>
  <v-app>
    <div id="nav">
      <router-link to="/templates"> templates</router-link>
      <router-link to="/datasets"> datasets</router-link>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: {
  },
  computed: {
  }
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  display: flex;
  justify-content: space-around;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>