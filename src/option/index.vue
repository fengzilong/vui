<template>
  <div class="vui-option" @click="onSelect">
    <slot></slot>
  </div>
</template>

<script>
  import props from './props'

  export default {
    props,

    methods: {
      onSelect() {
        if ( this.$parent ) {
          this.$parent.$emit( 'vui.option.selected', this )
        }
      },
    },
  }
</script>

<style lang="less">
  .vui-option {
    display: block;
    padding: 10px;
    cursor: pointer;
  }
</style>
