<template>
  <div v-if="adventures.length" class="adventure-list-dashboard">
    <div class="image-create-adventure">
      <img src="@/assets/img/mascot-aventura-xperience.jpg" alt />

      <!-- MODAL -->
      <div class="modal-vue">
        <!-- button show -->
        <button class="btn-dark" @click="showModal = true">Crear aventura</button>

        <!-- overlay -->
        <div class="overlay" v-if="showModal" @click="showModal = false"></div>

        <!-- modal -->
      </div>

      <div class="show-window">
        <!-- VENTANA SHOW -->
        <div class="modal" v-if="showModal">
          <p class="close" @click="showModal = false">
            <i class="far fa-times-circle" />
          </p>
          <adventurecreate></adventurecreate>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <p>No hay aventuras para mostrar</p>
  </div>
</template>
.

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import adventurecreate from '@/components/adventures/AdventureCreate.vue'

export default {
  name: "AdventureListDashboard",
components:{
  adventurecreate
},
  data() {
    return {
      showModal:false,
    };
  },

  created() {
    this.getAdventures();
  },
  computed: {
    ...mapState("adventuresMod", ["adventures"]),
  },
  methods: {
    ...mapActions("adventuresMod", ["getAdventures"]),
  },
};
</script>

<style scoped>
.image-create-adventure {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.image-create-adventure img {
  max-width: 100%;
  width: 250px;
}

.container-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-dark {
  color: #ffffff;
  background-color: #fe285a;
  padding: .5rem 1.5rem;
}
.btn-dark:hover {
  color: #000000;
  background-color: transparent;
}
.overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.show-window {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.modal {
  position: relative;
  width: 20rem;
  z-index: 9999;
  margin: 0 auto;
  bottom: 50vh;
  padding: 20px 30px;
  background-color: #fff;
}

.recovery-text {
  font-size: 0.9rem;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
}
</style>