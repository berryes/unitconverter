<template>
    <main>
      <p class="outcome">{{outcome}} {{to}}</p>
  
      From <input type="number" v-model="rawInput" v-on:change="inputChange" >
      <select  v-model="from" v-on:change="inputChange">
          <option>Meter</option>
          <option>Kilometer</option>
          <option>Centimeter</option>
          <option>Millimeter</option>
          <option>Micrometer</option>
          <option>Nanometer</option>
          <option>Mile</option>
          <option>Yard</option>
          <option>Foot</option>
          <option>Inch</option>
      </select>
  
      To <input disabled>
      <select v-model="to" v-on:change="inputChange">
          <option>Meter</option>
          <option>Kilometer</option>
          <option>Centimeter</option>
          <option>Millimeter</option>
          <option>Micrometer</option>
          <option>Nanometer</option>
          <option>Mile</option>
          <option>Yard</option>
          <option>Foot</option>
          <option>Inch</option>
      </select>
      <br>
      <button class="viseversa" v-on:click="viseVersa">🔄</button>
  
    </main>
  </template>