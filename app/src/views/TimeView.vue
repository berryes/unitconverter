<template>
    <main>
      <p class="outcome">{{outcome}}</p>
      <p>{{rawInput}} {{from}} ➡ {{to}}</p>
  
      From <input type="number" v-model="rawInput" v-on:change="inputChange" >
      <select  v-model="from" v-on:change="inputChange">
        <option>Second</option>
        <option>Millisecond</option>
        <option>Microsecond</option>
        <option>Nanosecond</option>
        <option>Picosecond</option>
        <option>Minute</option>
        <option>Hour</option>
        <option>Day</option>
        <option>Week</option>
        <option>Month</option>
        <option>Year</option>
      </select>
  
      To 
      <select v-model="to" v-on:change="inputChange">
        <option>Second</option>
        <option>Millisecond</option>
        <option>Microsecond</option>
        <option>Nanosecond</option>
        <option>Picosecond</option>
        <option>Minute</option>
        <option>Hour</option>
        <option>Day</option>
        <option>Week</option>
        <option>Month</option>
        <option>Year</option>
      </select>
      <br>
      <button class="viseversa" v-on:click="viseVersa">🔄</button>
  
    </main>
  </template>
  
  <script>
  import convert from 'convert';
  
  export default {
      data(){
          return{
              rawInput: "", // could be 123 , 1,340,234.02, 
              parsedInput: null, // float
              from: null, // mm, m , km, cm ..
              to: null, // km y feet in ...
              outcome: 0, // any integer
          }
      },
      methods:{
          inputChange(){
  
              /* this.$emit("valuechange",123123) */
              
              // in case no correct input was made
              if(!this.rawInput || !this.from ||!this.to){
                  this.outcome = 0  ; return}
  
              this.outcome = convert(this.rawInput, this.from.toLowerCase()).to(this.to.toLowerCase())
          },
          viseVersa(){
            if(!this.from || !this.to) return;
              const to = this.to
              const from = this.from
              this.from = to
              this.to = from  
              if(!this.rawInput) return
              this.outcome = convert(this.rawInput, this.from.toLowerCase()).to(this.to.toLowerCase())

          }
      }
  }
  </script>