<template>
  <div id="Hello">
<!--      <router-link to="/foo">Go to Foo{{table_data}}</router-link>-->
<!--      <a v-bind:href="url">click me</a>-->
      <button @click="greet">   up</button>
      <p>The button above has been clicked {{ counter }} times.</p>
  </div>


</template>

<script>
    import axios from 'axios'

export default {
  props: {
    msg: String
  },
  data(){
      return{
          url: 'https://www.qq.com',
          table_data: null,
          counter:0,
          name: 'vue.js',
      }
  },
  methods:{
      get_table_data(){
          axios({url:'http://123.207.32.32:8000/home/multidata'})
              .then(({data: {data}}) => {
              this.table_data = data
          })
      },
      greet:(event)=>{
          alert('hello' + "this.name" + '!')
          if (event){
              alert(event.target.tagName)
          }
      }
  }
}

// axios({
//     url:'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//     console.log(res);
// })

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
