<template>
  <appHeader v-if="currentRouteName" />
  <router-view />
  <appFooter v-if="currentRouteName" />
</template>
<script>
import appFooter from "@/components/Layout/appFooter.vue";
import appHeader from "@/components/Layout/appHeader.vue";
export default {
  name: "home",
  components: {
    appFooter,
    appHeader,
  },
  computed: {
    currentRouteName() {
      if (this.$route.name === "404") {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
