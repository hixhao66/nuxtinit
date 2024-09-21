<template lang='pug'>
.back
    span.text  天使
</template>
  
  <script setup>
  </script>
  
  <style lang='scss'>
  .back{
background: red;
  }
  .text {

      font-size: 48px;
      font-weight: bold;
      background: linear-gradient(to bottom, #ffffff, #f0fff0, #a8ff78, #78ffd6, #32ff7e, #ff61d2, #ff99cc, #f0fff0, #fff);
      background-size: 100% 400%;  // 確保背景高度大於 100%
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 1px black;  // 黑色邊框
      animation: gradientShift 4s ease infinite;
      text-shadow: 0 0 6px rgba(255, 255, 255, 0.6), 
                   0 0 12px rgba(255, 255, 255, 0.4), 
                   0 0 18px rgba(255, 255, 255, 0.2),
                   0 0 24px rgba(255, 255, 255, 0.5);  // 發光效果
      display: inline-block;
  }
  
  @keyframes gradientShift {
      0% {
          background-position: 50% 0%;  // 漸層開始位置為頂部
      }
      50% {
          background-position: 50% 100%;  // 漸層移動到底部
      }
      100% {
          background-position: 50% 0%;  // 返回到頂部
      }
  }
  </style>
  