<template>
  <button
    class="vui-button"
    :class="[
      /* size */
      'is-size-' + finalSize,
      /* shape */
      rounded === true ? 'is-rounded': '',
      /* type */
      'is-type-' + finalType,
      loading || disabled ? 'is-disabled' : '',
      full ? 'is-full' : ''
    ]"
    @click="onClick"
  >
    <span v-if="loading" class="vui-button__loading is-dots"></span>
    <slot></slot>
  </button>
</template>

<script>
  import props from './props'
  import EVENTS from './events'

  export default {
    props,
    computed: {
      finalType() {
        if ( !this.$parent.isButtonGroup_ ) {
          return this.type
        }

        return this.$parent.type
      },
      finalSize() {
        if ( !this.$parent.isButtonGroup_ ) {
          return this.size
        }

        return this.$parent.size
      },
    },
    mounted() {
    },
    methods: {
      onClick( e ) {
        if ( this.disabled === true ) {
          return
        }

        this.$emit( EVENTS.CLICK, e )
      }
    }
  }
</script>


<style lang="less">
  @import '../variables.less';

  .vui-button {
    display: inline-block;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    box-sizing: border-box;
    outline: none;
    text-transform: uppercase;

    &__loading {
      display: inline-block;
      overflow: hidden;
      height: 1.3em;
      margin-top: -0.3em;
      line-height: 1.5em;
      vertical-align: text-bottom;
      font-family: Cousine;
      font-size: 16px;
      margin-right: 5px;

      &::after {
        display: inline-table;
        white-space: pre;
        text-align: left;
      }

      &.is-dots::after {
        content: "⠋\A⠙\A⠹\A⠸\A⠼\A⠴\A⠦\A⠧\A⠇\A⠏";
        animation: vui-button-spin 1s steps(10) infinite;
      }
    }

    &.is-rounded {
      border-radius: 36px;
    }

    &.is-size-small {
      height: 32px;
      line-height: 30px;
      padding: 0 16px;
      font-size: 13px;
      font-weight: 200;
    }

    &.is-size-medium {
      height: 37px;
      line-height: 35px;
      padding: 0 22px;
      font-size: 13px;
      font-weight: 200;
    }

    &.is-size-large {
      height: 44px;
      line-height: 42px;
      padding: 0 30px;
      font-size: 15px;
      font-weight: 200;
    }

    &.is-disabled {
      cursor: not-allowed;
    }

    &.is-type-primary {
      background-color: @primary-color;
      color: #fff;
      border: solid 1px @primary-color;

      &.is-disabled {
        background-color: tint(@primary-color, 60%);
        color: #fff;
        border: solid 1px tint(@primary-color, 60%);
      }
    }

    &.is-type-normal {
      background-color: #f9f9f9;
      color: #333;
      border: solid 1px #ddd;

      &.is-disabled {
        background-color: tint(#f9f9f9, 60%);
        color: #999;
        border: solid 1px #ddd;
      }
    }

    &.is-type-outline {
      background-color: #fff;
      color: @primary-color;
      border: solid 1px @primary-color;

      &.is-disabled {
        color: #999;
        border: solid 1px #ddd;
      }
    }

    &.is-type-ghost {
      background-color: transparent;
      color: @primary-color;
      border: solid 1px @primary-color;

      &.is-disabled {
        color: #999;
        border: solid 1px #ddd;
      }
    }

    &.is-type-text {
      background-color: transparent;
      color: @primary-color;
      border: none;

      &.is-disabled {
        color: #999;
        border: none;
      }
    }

    &.is-type-dashed {
      background-color: #fff;
      color: @primary-color;
      border: dashed 1px @primary-color;

      &.is-disabled {
        color: #999;
        border: dashed 1px #ddd;
      }
    }

    &.is-full {
      display: block;
      width: 100%;
    }
  }

  @keyframes vui-button-spin { to { transform: translateY(-15.0em); } }
</style>
