<script>
import axios from "axios";

export default {
  data: function () {
    return {
      post: {},
    };
  },
  created: function () {
    axios.get("/posts/" + this.$route.params.id + ".json").then((response) => {
      this.post = response.data;
    });
  },
  methods: {},
};
</script>

<template>
  <div class="posts-show">
    <div class="container">
      <h1>{{ post.title }}</h1>
      <img :src="post.image" alt="An Image" />
      <p>
        {{ post.body }}
      </p>
      <router-link to="/posts">Return to All Posts</router-link>
    </div>
  </div>
</template>

<style>
img {
  max-width: 200px;
  max-height: 300px;
}
</style>
