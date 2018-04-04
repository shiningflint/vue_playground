<template>
  <div class="page-content">
    <h1>{{ formTitle }}</h1>
    <form class="form">
      <input type="text" name="page-title" v-model="titleInput">
      <button type="button" name="button" @click="handleClick">{{ submitBtn }}</button>
      <p>{{ titleInput }}</p>
    </form>
  </div>
</template>

<script>
  export default {
    props: {
      changeTitle: {
        type: Function,
        required: true
      }
    },
    data: function() {
      return {
        formTitle: "Form title is here",
        submitBtn: "Update the page title",
        titleInput: ""
      }
    },
    methods: {
      handleClick() {
        this.changeTitle(this.titleInput)
        this.resetInput()
      },
      resetInput() {
        this.titleInput = ""
      }
    }
  }
</script>
