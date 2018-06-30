<template>
  <i class="vui-iconfont" :class="'vui-icon-' + type"></i>
</template>

<script>
  import props from './props'

  export default {
    props
  }
</script>

<style>


@font-face {font-family: "vui-iconfont";
src: url('//at.alicdn.com/t/font_716820_9bjy9q44hw5.eot?t=1529931549878'); /* IE9*/
src: url('//at.alicdn.com/t/font_716820_9bjy9q44hw5.eot?t=1529931549878#iefix') format('embedded-opentype'), /* IE6-IE8 */
url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
url('//at.alicdn.com/t/font_716820_9bjy9q44hw5.ttf?t=1529931549878') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
url('//at.alicdn.com/t/font_716820_9bjy9q44hw5.svg?t=1529931549878#vui-iconfont') format('svg'); /* iOS 4.1- */
}

.vui-iconfont {
font-family:"vui-iconfont" !important;
font-style:normal;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

.vui-icon-dropdown:before { content: "\e65f"; }

.vui-icon-close:before { content: "\e606"; }

.vui-icon-search:before { content: "\e6a4"; }

.vui-icon-right:before { content: "\e6f8"; }

.vui-icon-left:before { content: "\e720"; }

.vui-icon-up:before { content: "\e749"; }

.vui-icon-down:before { content: "\e74a"; }


</style>
