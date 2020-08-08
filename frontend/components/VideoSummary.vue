<template>
  <b-col cols="4">
    <b-card>
      <b-link :to="'/videos/' + this.id">
        <b-img :src="thumbnail" fluid></b-img>
      </b-link>

      <b-card-text><h5>{{ this.title }}</h5></b-card-text>
      <b-card-text>{{ this.description }}</b-card-text>
    </b-card>
  </b-col>
</template>

<script>
import axios from 'axios';

export default {
  computed: {
    videoLink() {
      return '//fast.wistia.net/embed/iframe/' + this.videoId;
    }
  },
  created() {
    axios.get('http://fast.wistia.net/oembed?url=http://home.wistia.com/medias/' + this.videoId + '?embedType=async&videoWidth=300').then(response => {
      this.thumbnail = response.data.thumbnail_url;
    });
  },
  data() {
    return {
      thumbnail: ''
    };
  },
  props: ['id', 'videoId', 'title', 'description']
};
</script>

<style scoped>
  .col-4 {
    padding-bottom: 20px;
  }
</style>