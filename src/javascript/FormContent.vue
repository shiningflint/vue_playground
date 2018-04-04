<template>
  <div class="page-content">
    <h1>{{ formTitle }}</h1>
    <form class="form">
      <input type="text" name="page-title" value="">
      <button type="submit" name="button">{{ submitBtn }}</button>
    </form>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        formTitle: "Form title is here",
        submitBtn: "Update the damn form"
      }
    }
  }
</script>
