<template>
  <!-- Navigation -->
  <nav>
    <router-link to="/">Length</router-link> 
    <router-link to="/temp">Temperature</router-link>
    <router-link to="/area">Area</router-link>
    <router-link to="/volume">Volume</router-link>
    <router-link to="/weight">Weight</router-link>
    <router-link to="/time">Time</router-link>
  </nav>

  
<!--   Displaying the current View/route  -->  
 <router-view/>

 <footer>
   <p>Made by <a href="https://github.com/berryes" target="_blank">berryes</a></p>
   <p><a href="https://matrix.to/#/@berry:berryez.xyz" target="_blank">Matrix</a></p>
</footer>

</template>

<!-- 
  TODO:
  - use emits to  avoid recursion (faster load time, less bandwith wasted)
  - from child -> parent
  this.emit("some event", payload)
  emits:{
    some event: (payload)=>{
      ....
    }
  }

  ^^^^^^
  for some reason doesnt work.
-->
<script>
export default{
  data(){
    return{
      asdd: null
    }
  },  
  emits:{
    valuechange: (data)=>{
      console.log(data)
      return true
    }
  }
}
</script>


<style>

input{

  color: #000;
  background: #e5e6eb;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 1em;
  box-shadow: 2px 2px 5px #babecc,
              -5px -5px 10px #ffffff73;

  -moz-appearance: textfield;
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

}

button{
  margin: 25px 0 0 0;
  width: 100%;
  height: 50px;
  color: #000;
  font-size: 18px;
  font-weight: 600;
  background: #e5e6eb;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 1em;
  box-shadow: 2px 2px 5px #babecc,
              -5px -5px 10px #ffffff73;
}
select{

  color: #000;
  background: #e5e6eb;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 1em;
  box-shadow: 2px 2px 5px #babecc,
              -5px -5px 10px #ffffff73;
}


body{
  background-color: #E6E7EE;
}
#app {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

nav {
  margin-top: 2em;
  display: flex; 
  justify-content: center;
}
@media only screen and (max-width: 600px) {

  nav {
  margin-top: 2em;
  display: flex; 
  flex-direction: column;
}
}


nav a {
  margin-left: 1em;
  color: black;
  font-weight: bold;
  text-decoration: none;
  color: #c1c5c9;
   text-shadow: 
   -8px -8px 12px rgba(180, 167, 167, 0.4),
   8px 8px 12px rgba(0, 0, 0, 0.08);
   caret-color:#262626;
   outline: none;
  
}
nav a.router-link-exact-active {
  color: rgb(89, 190, 42);
  
}
footer p {
  margin-left: 1em;
}
footer {
  font-size: 1em;
  position: absolute;
  bottom: 1em;
  margin-left: 1em;
  align-content: flex-start;

  display: flex;
  justify-content: space-between;
}
  main{
      margin-top: 9em;
  }
  .outcome {
      font-size: 2em;
      color: #95989c
  }
  .viseversa{
      margin-top: 1em;
      height: 3em;
      width: 3em;
  }
</style>

