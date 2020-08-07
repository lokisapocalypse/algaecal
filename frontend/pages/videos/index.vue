<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h1>Welcome to Our Video Library</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <b-list-group>
          <b-list-group-item v-for="video in videos" v-bind:key="video.id">{{ video.title }}</b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    axios.get('http://localhost:8080/videos').then(response => {
      console.log(response.data.data);
      this.videos = response.data.data;
    });
  },
  data() {
    return {
      videos: []
    };
  },
  methods: {
    onSubmit(){
      console.log('A form was submitted');
    },
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
