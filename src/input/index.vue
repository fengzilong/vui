<template>
  <div>
    <input
      class="vui-input"
      :class="[
        'is-size-' + size,
        rounded ? 'is-rounded' : ''
      ]"
      :style="{
        width: width
      }"
      type="text"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
  import props from './props'

  export default {
    props,
  }
</script>

<style lang="less">
  @import '../variables.less';

  .vui-input {
    border: solid 1px #ddd;
    padding: 0 10px;
    outline: none;
    box-sizing: border-box;

    &::placeholder {
      color: #ccc;
    }

    &:focus {
      border: solid 1px @primary-color;
    }

    &.is-rounded {
      border-radius: 36px;
      padding: 0 17px;
    }

    &.is-size-small {
      height: 32px;
    }

    &.is-size-medium {
      height: 37px;

    }

    &.is-size-large {
      height: 44px;
    }
  }


</style>
