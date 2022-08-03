<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newPostParams: { body: "" },
      status: "",
      errors: [],
    };
  },
  methods: {
    createPost: function () {
      axios
        .post("/posts", this.newPostParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/posts");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });
    },
  },
};
</script>

<template>
  <div class="posts-new">
    <img v-if="status" :src="`http://http.dog/${status}.jpg`" />
    <form v-on:submit.prevent="createPost()">
      <h1>Create Post</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="newPostParams.title" />
      </div>
      <div>
        <label>Body:</label>
        <input
          type="text"
          v-model="newPostParams.body"
          maxlength="140"
          :class="{ exceededMax: 140 - newPostParams.body.length === 0 }"
        />
        <small :class="{ exceededMax: 140 - newPostParams.body.length === 0 }">
          {{ 140 - newPostParams.body.length }} more characters
        </small>
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" v-model="newPostParams.image" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style>
.exceededMax {
  color: white;
  background-color: red;
  border: 3px, black;
}
</style>
