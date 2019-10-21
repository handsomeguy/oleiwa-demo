<template>
  <div class="test">
    <h1>test world</h1>
  </div>
</template>

<script>
export default {
  name: "test",
  props: {
    msg: String
  },
  created(){
      console.log("this is test!")
  }
};
</script>

