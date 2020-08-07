<template>
  <div class="container">
    <div>
      <b-card>
        <b-alert variant="danger" :show="this.error.length">{{ error }}</b-alert>

        <b-card-text>
          <h1>User Login</h1>
        </b-card-text>

        <LoginForm
          v-on:failedLogin="showFailedLogin"
        />
      </b-card>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  components: {
    LoginForm
  },
  data() {
    return {
      error: ''
    };
  },
  methods: {
    showFailedLogin(username) {
      this.error = 'Sorry, that username is not found.';
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand',
  'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
