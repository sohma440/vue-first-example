<template>

  <div>
    <h2>Input text</h2>
    <p>input: <input
        type="text"
        v-model="inputText"
      ></p>
    <p>text: {{ inputText }}</p>
  </div>

</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      inputText: "init text"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
