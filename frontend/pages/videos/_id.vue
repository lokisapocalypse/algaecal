<template>
    <div class="container-fluid">
        <iframe :src="videoLink" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="310" height="174"></iframe>
        <div>{{ this.video.description }}</div>
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