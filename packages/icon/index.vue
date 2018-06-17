<template>
  <i :class="'el-icon-' + name"></i>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  name: 'ElIcon',
  componentName: 'ElIcon'
})
export default class ElIcon extends Vue {
  @Prop()
  name?: string;
}
</script>

