<script>
import axios from "axios";
export default {
  data: function () {
    return {
      posts: [],
      currentPost: {},
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
  <div
    v-for="post in posts"
    v-bind:key="post.id"
    v-on:click="currentPost = post"
    :class="{ selected: post === currentPost }"
  >
    <router-link :to="`/posts/${post.id}`">
      <h1>{{ post.title }}</h1>
    </router-link>
    <img :src="post.image" alt="An Image" />
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
.selected {
  color: white;
  background-color: maroon;
  transition: background-color 2s ease;
}
</style>
