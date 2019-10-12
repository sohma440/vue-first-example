<template>
  <div>
    <h2>Select</h2>
    <v-select
      v-model="selected"
      item-text="key"
      item-value="value"
      :items="itemList"
      label="select here"
      return-object
    />
    <p>Selected: {{ selected.value }}</p>
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
