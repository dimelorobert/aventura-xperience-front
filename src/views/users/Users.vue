<template>
  <div class="users">
    <vue-headful
      title="Lista de usuarios || Aventura-Xperience"
      description="Tu aventura empieza aquí"
    />
    <h1>Lista de Usuarios</h1>
    <router-link :to="`/users/${user.id}`" v-for="user in users" :key="user.id">
      <button>ver usuario {{user.id}}</button>
    </router-link>
    <br />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { dateFilter } from "vue-date-fns";
import locale from "date-fns/locale/es";
import user from "@/components/users/User";

export default {
  name: "Users",
  components: { user },
  data() {
    return {};
  },

  filters: {
    date: dateFilter,
  },
  created() {
    this.getUsers();
  },
  computed: {
    ...mapState("usersMod", ["users"]),
  },
  methods: {
    ...mapActions("usersMod", ["getUsers"]),
  },
};
</script>

<style scoped>
</style>
