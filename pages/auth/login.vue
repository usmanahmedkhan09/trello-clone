<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="w-1/4 bg-white  rounded-2xl shadow-md">
      <div class="w-40 mx-auto">
        <img src="~/images/Trello-logo.png" alt="" />
      </div>
      <form class="p-5 text-center" @submit.prevent="login">
        <input
          v-model="auth.email"
          type="text"
          placeholder="Email"
          class="focus:ring-0 w-full rounded-2xl shadow-inner bg-gray-100 border-0"
        />
        <input
          v-model="auth.password"
          type="password"
          placeholder="Password"
          class=" focus:ring-0 w-full mt-3 rounded-2xl shadow-inner bg-gray-100 border-0"
        />
        <button
          type="submit"
          class="bg-gradient-to-r from-blue-400 to-blue-800 mt-3 rounded-2xl
                text-white font-medium shadow-inner bg-gray-100 border-0 w-1/2 h-10 mx-auto"
        >
          login
        </button>
        <div class="font-medium mt-3 ">
          <span class="text-gray-500"> Not a member?</span>
          <span class="text-blue-600">Signup now</span>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  layout: "auth",
  data() {
    return {
      auth: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["onAuthStateChangedAction"]),
    login() {
      this.$fire.auth
        .signInWithEmailAndPassword(this.auth.email, this.auth.password)
        .then(result => {
          // console.log(result);
          this.onAuthStateChangedAction(result);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped></style>
