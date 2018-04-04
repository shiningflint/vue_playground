<template>
  <div class="page-content">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        title: "The title is important",
        description: "Contents are the truth, titles suck. You don't actually need to read the title."
      }
    }
  }
</script>
