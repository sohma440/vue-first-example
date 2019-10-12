<template>
  <div>
    <h2>Counter</h2>
    {{count}}
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="indigo"
      @click="increment"
    >
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="indigo"
      @click="decrement"
    >
      <v-icon dark>mdi-minus</v-icon>
    </v-btn>
  </div>

</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count = this.count + 1;
    },
    decrement() {
      this.count = this.count - 1;
    }
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
