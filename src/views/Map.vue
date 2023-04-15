<template>
  <div>
    <div class="container">
      <div class="chat">
        <el-image class="img"  :src="src"/>
        <div class="name">Amy</div>
        <div class="message">Hi, how are you?</div>
      </div>

      <div class="chat">
        <el-image class="img" :src="src"/>
        <div class="name">Bob</div>
        <div class="message">Thanks for asking. How about you?</div>
      </div>

      <div class="chat">
        <el-image class="img" :src="src"/>
        <div class="name">Amy</div>
        <div class="message">I'm doing well, thanks!</div>
      </div>

      <div class="chat">
        <el-image class="img" :src="src"/>
        <div class="name">Bob</div>
        <div class="message">That's great to hear!</div>
      </div>

      <div class="chat">
        <el-image class="img" :src="src"/>
        <div class="name">Amy</div>
        <div class="message">I'm doing well, thanks!</div>
      </div>

      <div class="chat">
        <el-image class="img" :src="src"/>
        <div class="name">Amy</div>
        <div class="message">I'm doing well, thanks!</div>
      </div>

      <div class="chat">
        <el-image class="img" :src="src"/>
        <div class="name">Amy</div>
        <div class="message">I'm doing well, thanks!</div>
      </div>


    </div>
  </div>
</template>

<script setup>
import useStore from "../store/store";
const store = useStore()
const src =
    'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.img{
  width: 17rem;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 12px 0;
  text-align: center;
  width: 50%;
  box-sizing: border-box;
  vertical-align: top;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.chat {
  background-color: #fff;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  display: block;
}

.chat .name {
  font-weight: bold;
  margin-bottom: 5px;
}

.chat .message {
  margin-left: 20px;
}

@media (max-width: 768px) {
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .container{
    display: block;
  }
  .chat{
    margin-right: 10px;
  }
  .img{
    margin-right: 40px;
  }
}
</style>