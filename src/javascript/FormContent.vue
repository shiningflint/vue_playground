<template>
  <div class="page-content">
    <h1>Form title is here</h1>
    <form class="form">
      <div>
        <label>
          <p>Title</p>
          <input type="text" name="page-title" v-model="titleInput" placeholder="Insert title here">
        </label>
      </div>
      <div>
        <label>
          <p>Content</p>
          <textarea name="name" rows="8" cols="80" v-model="contentInput" placeholder="Insert content here"></textarea>
        </label>
      </div>
      <button type="button" name="button" @click="handleClick">Post</button>
    </form>
  </div>
</template>

<script>
  import { EventBus } from './EventBus'
  export default {
    props: {
      goToPage: {
        type: Function,
        required: true
      }
    },
    data: function() {
      return {
        titleInput: "",
        contentInput: ""
      }
    },
    methods: {
      handleClick() {
        const blogItem = {
          id: Date.now(),
          title: this.titleInput === "" ? "No Title" : this.titleInput,
          content: this.contentInput === "" ? "No Content" : this.contentInput
        }
        EventBus.$emit('post-new-blog', blogItem)
        this.resetInput()
        this.goToPage()
      },
      resetInput() {
        this.titleInput = ""
        this.contentInput = ""
      }
    }
  }
</script>
