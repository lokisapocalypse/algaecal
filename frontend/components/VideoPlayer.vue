<template>
  <div class="container">
    <b-col md="8">
      <b-card>
        <h4>Video Player</h4>
        <iframe :src="videoLink" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>

        <b-card-text><h5>{{ this.video.title }}</h5></b-card-text>
        <b-card-text>{{ this.video.description }}</b-card-text>
      </b-card>
    </b-col>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  computed: {
    videoLink() {
      return '//fast.wistia.net/embed/iframe/' + this.video.video_id;
    }
  },
  created() {
    axios.get('http://localhost:8080/videos/' + this.$route.params.id).then(response => {
      this.video = response.data.data;
    });
  },
  data() {
    return {
      video: {}
    };
  }
};
</script>