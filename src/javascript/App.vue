<template>
  <div class="app-wrapper">
    <nav>
      <button type="button" name="button" @click="goToPage">Go to Page</button>
      <button type="button" name="button" @click="goToForm">Go to Form</button>
    </nav>
    <page-content v-if="page === 'page'"></page-content>
    <form-content v-if="page === 'form'"></form-content>
  </div>
</template>

<script>
  import PageContent from './PageContent.vue'
  import FormContent from './FormContent.vue'

  export default {
    data: function() {
      return {
        page: 'page'
      }
    },
    components: {
      'page-content': PageContent,
      'form-content': FormContent
    },
    methods: {
      goToPage: function(e) {
        console.log("going to page")
        return this.page = 'page'
      },
      goToForm: function(e) {
        console.log("going to form")
        return this.page = 'form'
      }
    }
  }
</script>
