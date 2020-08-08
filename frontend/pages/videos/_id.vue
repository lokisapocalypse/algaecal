<template>
    <div class="container-fluid">
      <VideoPlayer :id="this.$route.params.id" />
    </div>
</template>

<script>
import axios from 'axios';

import VideoPlayer from '@/components/VideoPlayer.vue';

export default {
  components: [
    VideoPlayer
  ]
};
</script>