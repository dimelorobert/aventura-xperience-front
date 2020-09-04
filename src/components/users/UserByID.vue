<template>
  <div class="users-container">
    <div class="table100 ver2 m-b-110">
      <table class="center" data-vertable="ver2">
        <tbody>
          <tr class="row100">
            <td class="column100 column1" data-column="column1">{{user.name}}</td>
            <td class="column100 column2" data-column="column2">{{user.surname}}</td>
            <td class="column100 column3" data-column="column3">{{user.city}} - {{user.country}}</td>
            <td class="column100 column4" data-column="column4">{{user.email}}</td>
            <td class="column100 column5" data-column="column5">{{user.password}}</td>
            <td class="column100 column6" data-column="column6">{{user.last_password_update}}</td>
            <td class="column100 column7" data-column="column7">{{user.modify_date}}</td>
            <td class="column100 column8" data-column="column8">{{user.creation}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { dateFilter } from "vue-date-fns";
import locale from "date-fns/locale/es";
import { mapState, mapActions } from "vuex";
export default {
  name: "User",
  props: {
    user: Object,
    index: Number,
  },
  data() {
    return {
      staticFolder: process.env.VUE_APP_STATIC,
    };
  },
  computed: {
    ...mapState("usersMod", ["userDB"]),
  },

  methods: {
    ...mapActions("usersMod", ["getUser"]),
  },
  created() {
    this.getUser();
  },
};
</script>

<style>
.aventuras-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
[Table]*/ table {
  width: 100%;
  background-color: #fff;
}

th,
td {
  font-weight: unset;
  padding-right: 20px;
  border-radius: 0.25rem;
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
/* -----------TABLE FX-----------------*/
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

/*==================================================================
[ Ver2 ]*/
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

/* ------------------------- */
.container-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.btn-light {
  color: #000000;
  background-color: transparent;
}

.btn-light:hover {
  color: #ffffff;
  background-color: #fe285a;
}
.btn-dark {
  color: #ffffff;
  background-color: #fe285a;
}
.btn-dark:hover {
  color: #000000;
  background-color: transparent;
}

/*estilos disponible*/
.green {
  color: rgb(0, 99, 0);
}

.red {
  color: rgb(160, 0, 0);
}
</style>