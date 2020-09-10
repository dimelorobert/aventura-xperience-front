<template>
  <div class="adventures-view">
    <adventure-list/>
  </div>
</template>

<script>
import adventureList from '@/components/adventures/AdventureList';


export default {
  name: "Adventures",
  components: { adventureList },
  
};
</script>

<style scoped>

</style>
