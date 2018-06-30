<template>
  <div class="vui-button-group" :class="[ rounded ? 'is-rounded' : '' ]">
    <slot></slot>
  </div>
</template>

<script>
  import props from './props'

  export default {
    props,
    created() {
      this.isButtonGroup_ = true
    }
  }
</script>

<style lang="less">
  .vui-button-group {
    display: flex;

    .vui-button {
      display: block;

      &:not(:first-child) {
          border-left: none;
          border-radius: 0;
      }

      &:first-child {
        border-radius: 0;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-child {
        border-radius: 0;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }

    &.is-rounded {
      .vui-button {
        &:first-child {
          border-radius: 0;
          border-top-left-radius: 36px;
          border-bottom-left-radius: 36px;
        }

        &:last-child {
          border-radius: 0;
          border-top-right-radius: 36px;
          border-bottom-right-radius: 36px;
        }
      }
    }
  }
</style>
