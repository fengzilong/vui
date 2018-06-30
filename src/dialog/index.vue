<template>
    <div v-if="show" class="vui-dialog__mask">

      <div class="vui-dialog" :style="'width:' + width + ';'">
        <!-- header -->
        <div class="vui-dialog__header">
          {{ title }}
        </div>

        <!-- close -->
        <div class="vui-dialog__close" @click="onClose">
          <vui-icon type="close"></vui-icon>
        </div>

        <!-- body -->
        <div class="vui-dialog__body">
          <slot></slot>
        </div>

        <!-- footer -->
        <div class="vui-dialog__footer">
          <vui-button type="text" size="small" rounded
            @click="onCancel"
          >
            {{ cancelText }}
          </vui-button>

          <vui-button type="primary" size="small" rounded
            @click="onConfirm"
          >
            {{ confirmText }}
          </vui-button>
        </div>
      </div>

    </div>
</template>

<script>
  import props from './props'
  import events from './events'
  import vuiIcon from '../icon/index.vue'
  import vuiButton from '../button/index.vue'

  export default {
    components: {
      vuiIcon,
      vuiButton,
    },
    props,
    methods: {
      onClose() {
        this.$emit( 'update:show', false )
        this.$emit( events.CLOSE )
      },

      onCancel() {
        this.$emit( events.CANCEL )
      },

      onConfirm() {
        this.$emit( events.CONFIRM )
      },
    }
  }
</script>

<style lang="less">
  @primary-color: #333;
  @padding: 30px;

  .vui-dialog {
    position: absolute;
    margin-top: 100px;
    margin-bottom: 100px;
    width: 400px;
    border: solid 1px #f2f2f2;
    background-color: #fff;
    box-shadow: 2px 2px 45px -6px rgba(0,0,0,.1);
    border-radius: 3px;

    &__mask {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      background-color: rgba(255,255,255,.4);
      display: flex;
      justify-content: center;
    }

    &__header {
      padding: @padding @padding 10px;
      font-weight: bold;
      position: relative;
      margin-bottom: 20px;

      &::after {
        position: absolute;
        content: '';
        display: block;
        width: 20px;
        border: solid 1px #333;
        bottom: 0;
        left: @padding;
      }
    }

    &__close {
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
      color: #999;
      transition: transform ease-in-out .2s;

      &:hover {
        color: #666;
        transform: scale(1.5);
      }
    }

    &__body {
      padding: 0 @padding;
      word-break: break-all;
    }

    &__footer {
      padding: 22px @padding;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;
    }
  }
</style>
