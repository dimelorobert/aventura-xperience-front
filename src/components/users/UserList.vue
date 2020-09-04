<template>
  <div class="container">
    <div class="users-container">
      <table class="center" data-vertable="ver2">
        <thead>
          <tr class="row100 head">
            <th class="column100 column1" data-column="column1">Nombre</th>
            <th class="column100 column2" data-column="column2">Apellido</th>
            <th class="column100 column3" data-column="column3">Ciudad-País</th>
            <th class="column100 column4" data-column="column4">Email</th>
            <th class="column100 column5" data-column="column5">Password</th>
            <th class="column100 column6" data-column="column6">Último cambio de password</th>
            <th class="column100 column7" data-column="column7">Última Modificacion</th>
            <th class="column100 column8" data-column="column8">creación cuenta</th>
          </tr>
        </thead>
      </table>
      <!-- <user v-for="(user, index) in userList" :key="user.id" :user="user" :index="index" /> -->
    </div>
  </div>
</template>

<script>
import { dateFilter } from "vue-date-fns";
import locale from "date-fns/locale/es";
import { mapState, mapActions } from "vuex";
//import user from "./UserByID";

export default {
  name: "Users",
  components: {  },
  data() {
    return {
      user: [],
    };
  },
  computed: {
    //...mapState("usersMod", ["token","userList"]),
  },
  created() {
    //this.getUserList();
  },
  filters: {
    date: dateFilter,
  },
  methods: {
    //...mapActions("usersMod", ["getUserList"]),
  },
};
</script>

<style scoped>
.container {
  background: url("http://localhost:8080/media/sand.png");
  background-position: 60rem 60rem;
  background-repeat: no-repeat, no-repeat;
}
.aventuras-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 1rem;
}

.center { 
	margin: 0 auto;
}
.container-table100 {
  width: 100%;
  min-height: 100vh;
  background: #d1d1d1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 33px 30px;
}

.wrap-table100 {
  width: 1300px;
}
th,
td {
  font-weight: unset;
  padding-right: 20px;
  border-radius: .25rem;
  text-align: center;
}

.column100 {
  width: 130px;
  padding-left: 25px;
}

.column100.column1 {
  width: 265px;
  padding-left: 42px;
}

.row100.head th {
  padding-top: 24px;
  padding-bottom: 20px;
}

.row100 td {
  padding-top: 18px;
  padding-bottom: 14px;
}

.table100.ver2 td {
  font-family: Montserrat-Regular;
  font-size: 14px;
  color: #808080;
  line-height: 1.4;
}

.table100.ver2 th {
  font-family: Montserrat-Medium;
  font-size: 12px;
  color: #fff;
  line-height: 1.4;
  text-transform: uppercase;

  background-color: #050023;
}

.table100.ver2 .row100:hover td {
  background-color: #fe285a;
  color: #fff;
}

.table100.ver2 .hov-column-ver2 {
  background-color: #fe285a;
  color: #fff;
}

.table100.ver2 .hov-column-head-ver2 {
  background-color: #484848 !important;
}

.table100.ver2 .row100 td:hover {
  background-color: #ff4a74;
  color: #fff;
}
.table100.ver2 tbody tr:nth-child(even) {
  background-color: #eaf8e6;
}

.table100.ver2 td {
  font-family: Montserrat-Regular;
  font-size: 14px;
  color: #808080;
  line-height: 1.4;
}

.table100.ver2 th {
  font-family: Montserrat-Medium;
  font-size: 12px;
  color: #fff;
  line-height: 1.4;
  text-transform: uppercase;

  background-color: #050023;
}

.table100.ver2 .row100:hover td {
  background-color: #fe285a;
  color: #fff;
}

.table100.ver2 .hov-column-ver2 {
  background-color: #fe285a;
  color: #fff;
}

.table100.ver2 .hov-column-head-ver2 {
  background-color: #484848 !important;
}

.table100.ver2 .row100 td:hover {
  background-color: #ff567d;
  color: #fff;
}


</style>
