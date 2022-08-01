<script>
import axios from "axios";
export default {
  data: function () {
    return {
      posts: [],
    };
  },
  created: function () {
    this.indexPosts();
  },
  methods: {
    indexPosts: function () {
      axios.get("/posts.json").then((response) => {
        this.posts = response.data;
        console.log("All Posts:", this.posts);
      });
    },
  },
};
</script>

<template>
  <div v-for="post in posts" v-bind:key="post.id">
    <router-link :to="`/posts/${post.id}`">
      <h1>{{ post.title }}</h1>
      <img :src="post.image" alt="An Image" />
    </router-link>
    <p>
      {{ post.body }}
    </p>
    <hr />
  </div>
</template>

<style>
img {
  max-width: 200px;
  max-height: 300px;
}
</style>
