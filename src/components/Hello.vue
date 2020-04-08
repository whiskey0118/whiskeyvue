<template>
  <div id="app">
      <router-link to="/foo">Go to Foo{{name}}}</router-link>
  </div>


</template>

<script>
    import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    methods:{
      a:(stringtest) =>{
          console.log(stringtest)}
    }
}

axios({
    url:'http://123.207.32.32:8000/home/multidata'
}).then(res => {
    console.log(res);
})

</script>

<!-- Add "scoped" attribute to limit CSS to this  only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
