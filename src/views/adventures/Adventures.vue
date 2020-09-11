<template>
  <div class="adventures-view">
   <searchform/>
   <searchlist/>

  </div>
</template>

<script>
import adventureList from '@/components/adventures/AdventureList';
import searchform from '@/components/forms/search/SearchForm'
import searchlist from '@/components/forms/search/SearchList'


export default {
  name: "Adventures",
  components: { adventureList, searchform, searchlist },
  
};
</script>

<style scoped>

</style>
