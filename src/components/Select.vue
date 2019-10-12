<template>
  <div>
    <h2>Select</h2>
    <select v-model="selected">
      <option
        disabled
        value='None'
      >Please select one</option>
      <option
        v-for="item in itemList"
        v-bind:key="item.key"
      >{{item.value}}</option>
    </select>
    <p>Selected: {{ selected }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      selected: "",
      itemList: [
        { key: "a", value: "A" },
        { key: "b", value: "B" },
        { key: "c", value: "C" },
        { key: "d", value: "D" }
      ]
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
