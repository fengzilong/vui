<template>
  <div class="vui-select" :class="[ isOpened ? 'is-opened' : '' ]" ref="select">
    <div
      class="vui-select__inputwrap"
      @click="onOpen"
    >
      <input
        class="vui-select__input"
        :class="[
          'is-size-' + size,
        ]"
        type="text"
        :value="selected"
        :placeholder="placeholder"
        readonly
      />

      <div class="vui-select__icon">
        <vui-icon type="dropdown"></vui-icon>
      </div>
    </div>

    <div v-if="isOpened" class="vui-select__options">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import props from './props'
  import vuiIcon from '../icon/index.vue'

  export default {
    components: {
      vuiIcon,
    },

    props,

    data() {
      return {
        selected: '',
        isOpened: false,
      }
    },

    created() {
      this.$on( 'vui.option.selected', target => {
        this.selected = target.label || target.$el.innerText
        this.isOpened = false
      } )
    },

    mounted() {
      this._handle = this._handle.bind( this )
      document.addEventListener( 'click', this._handle, true )
    },

    destroyed() {
      document.removeEventListener( 'click', this._handle, true )
    },

    methods: {
      onOpen() {
        this.isOpened = true
      },

      _handle( e ) {
        const container = this.$refs.select
        if ( container && !container.contains( e.target ) ) {
          this.isOpened = false
        }
      },
    },
  }
</script>

<style lang="less">
  @import '../variables.less';

  .vui-select {
    display: inline-block;
    position: relative;

    &__inputwrap {
      position: relative;
      display: inline-block;
      cursor: pointer;
    }

    &.is-opened &__input {
      border: solid 1px @primary-color;
    }

    &__input {
      border: solid 1px #ddd;
      padding: 0 10px;
      outline: none;
      box-sizing: border-box;
      cursor: pointer;

      &::placeholder {
        color: #ccc;
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

    &__icon {
      position: absolute;
      display: block;
      right: 5px;
      top: 50%;
      transform: translate3d(0,-50%,0);
      color: #ddd;
    }

    &.is-opened &__icon {
      color: @primary-color;
    }

    &__options {
      position: absolute;
      min-width: 100%;
      box-sizing: border-box;
      background-color: #fff;
      border: solid 1px @primary-color;
      border-top: none;
    }
  }
</style>
