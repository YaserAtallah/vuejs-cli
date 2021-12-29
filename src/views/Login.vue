<template>
  <appLogin />
</template>

<script>
// @ is an alias to /src
import appLogin from "@/components/guest/login.vue";

export default {
  name: "Login",
  components: {
    appLogin,
  },
};
</script>
