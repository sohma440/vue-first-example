<template>

  <div>

    <h2>Input Text</h2>
    <v-text-field
      v-model="inputText"
      label="Type here"
    ></v-text-field>
    <p>text: {{ inputText }}</p>
  </div>

</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      inputText: ""
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
