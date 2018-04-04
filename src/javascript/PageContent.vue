<template>
  <div class="page-content">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
  export default {
    props: ['title'],
    data: function() {
      return {
        description: "Contents are the truth, titles suck. You don't actually need to read the title."
      }
    }
  }
</script>
