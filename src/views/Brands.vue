<script setup>
import { ref } from 'vue';
import {getBrands} from '../services/http'

let data = ref()
let error = ref()

      data = getBrands().data
      error = getBrands().error

</script>

<template>
    
<select>
        <option v-for="(item, index) in data" :key="index" :value="item.id">{{ item.Name }}</option>
</select>
</template>

<style scoped>
    
</style>