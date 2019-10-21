<template>
  <div class="hello">
    <h1>hello world</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  created(){
    console.log("this is helloworld!")
  }
};
</script>

