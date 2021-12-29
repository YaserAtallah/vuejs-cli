<template>
  <div class="home">
    <notFound />
  </div>
</template>

<script>
// @ is an alias to /src
import notFound from "@/components/404.vue";

export default {
  name: "404",
  components: {
    notFound,
  },
};
</script>
