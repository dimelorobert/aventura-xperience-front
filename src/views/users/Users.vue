<template>
  <div class="container">
    <div class="users-container">
     <h1>{{$route.params.id}}user</h1>
        
        
      
  
    </div>
  </div>
</template>

<script>
import { dateFilter } from "vue-date-fns";
import locale from "date-fns/locale/es";

import User from '@/components/users/User.vue'

export default {
  name: "Users",
  components: { User },
  
  filters: {
    date: dateFilter,
  },

};
</script>

<style scoped>



</style>
