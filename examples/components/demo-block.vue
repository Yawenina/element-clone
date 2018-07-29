<template>
  <div class="demo-block">
    <h3>{{ title }}</h3>
    <div class="demo-source">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "demo-block",
    props: {
      title: String,
    }
  }
</script>

<style scoped>

</style>