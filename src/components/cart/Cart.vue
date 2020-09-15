<template>
  <div v-if="cart.length" class="cart">
    <h2>{{cart.length}} añadidos al carrito</h2>

    <table class="paleBlueRows">
      <thead>
        <tr>
          <th>Aventura</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Acción</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="carty in cart" :key="carty.id">
          <td>{{carty.name}}</td>
          <td>{{carty.quantity}}</td>
          <td>{{carty.price}}€</td>
          <td>sumar</td>
          <td>
            <button @click.prevent="removeAdventureFromCart">Eliminar</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>
            <strong>Total</strong>
          </td>
          <td></td>
          <td> {{totalCost}}</td>
          <td>
            boton
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
  <div v-else>
    <p>Carrito vacio</p>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";
import adventure from "@/components/adventures/Adventure.vue";
export default {
  components: {
    adventure,
  },
  data() {
    return {
      fields: ["Nombre", "Cantidad", "Precio", "Acción"],
      showButton: false,
      purchase: {
        adventure_id: "",
        quantity: "",
        total_price: "",
        status: "",
      },
    };
  },
  computed: {
    ...mapState("cartMod", ["cart"]),
    ...mapGetters("cartMod", ["totalCost"]),
  },
  methods: {
    ...mapMutations("cartMod", ["removeAdventureFromCart"]),
  },
};
</script>

<style>
</style>