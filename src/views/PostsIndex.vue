<script>
import axios from "axios";
import moment from "moment";

export default {
  data: function () {
    return {
      posts: [],
      currentPost: {},
      titleFilter: "",
    };
  },
  created: function () {
    this.indexPosts();
  },
  methods: {
    indexPosts: function () {
      axios.get("/posts").then((response) => {
        this.posts = response.data;
        console.log("All Posts:", this.posts);
      });
    },
    relativeDate: function (date) {
      return moment(date).fromNow();
    },
    filterPosts: function () {
      return this.posts.filter((post) => {
        var lowerTitle = post.title.toLowerCase();
        var lowerTitleFilter = this.titleFilter.toLowerCase();
        return lowerTitle.includes(lowerTitleFilter);
      });
    },
  },
};
</script>

<template>
  <div>
    Search by title:
    <input v-model="titleFilter" list="title" type="text" />
    <datalist id="title">
      <option v-for="post in posts" :key="post.id">{{ post.title }}</option>
    </datalist>
  </div>
  <TransitionGroup name="list">
    <div
      v-for="post in filterPosts()"
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
      <p>Updated: {{ relativeDate(post.updated_at) }}</p>
      <p>Created: {{ relativeDate(post.created_at) }}</p>
      <hr />
    </div>
  </TransitionGroup>
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
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
