<template>
  <b-form @submit.prevent="onSubmit">
    <b-form-group
      id="input-group-1"
      label-for="input-1"
        >
      <b-form-input
        id="input-1"
        v-model="form.username"
        type="text"
        required
        placeholder="Enter username"
      ></b-form-input>
    </b-form-group>

    <b-button :disabled="form.username.length < 3" pill type="submit" variant="algae">Login</b-button>
  </b-form>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      form: {
        username: ''
      },
    };
  },
  methods: {
    onSubmit() {
      axios.get('http://localhost:8080/users').then(response => {
        let matchedUser = false;

        response.data.data.forEach(user => {
          if (user.username === this.form.username) {
            matchedUser = true;
            this.$store.commit('auth/login');
            this.$router.push('/videos');
          }
        });

        // reaching this point indicates a failed login
        if (!matchedUser) {
          this.$emit('failedLogin', this.form.username);
        }
      });
    }
  }
};
</script>