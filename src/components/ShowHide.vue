<template>

  <div>
    <h2>Show/Hide</h2>
    <label for="checkbox">Show/Hide</label>
    <input
      type="checkbox"
      id="checkbox"
      v-model="seen"
    >
    <p v-if="seen">Now you see me</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      seen: false
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
