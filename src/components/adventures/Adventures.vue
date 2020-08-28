<template>
  <div class="aventuras-container">
    <adventure v-for="(adventure, index) in adventures" :key="adventure.id" :adventure="adventure" :index="index" @vacancy="modifyVacancy" />
   
  </div>
</template>

<script>
import { dateFilter } from "vue-date-fns";
import locale from "date-fns/locale/es";
import { mapState } from 'vuex';
import Adventure from '@/components/adventures/Adventure'

export default {
  name: 'Adventures',
  components: {Adventure},
  data() {
    return {
      adventures: [],
    };
  },
  computed: {
    ...mapState('users', ['token'])
  },
  created() {
    this.getAdventures();
  },
  filters: {
    date: dateFilter,
  },
  methods: {
    async getAdventures() {
      let config = {
        headers: {
          authorization:this.token
        }
      }
      try {
        const response = await this.axios.get("/adventures/list", config);
        this.adventures = response.data.data;
      } catch (error) {
        console.log(error.response);
      }
    },
    modifyVacancy(index) {
      this.adventures[index] = this.adventures[index] + 1;
    }
  },
};
</script>

<style>

</style>