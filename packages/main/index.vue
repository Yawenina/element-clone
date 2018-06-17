<template>
  <main class="el-main">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'ElMain',
  componentName: 'ElMain',
})
export default class ElMain extends Vue {

}
</script>

