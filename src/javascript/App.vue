<template>
  <div class="app-wrapper">
    <nav>
      <button type="button" name="button" @click="goToPage">Go to Page</button>
      <button type="button" name="button" @click="goToForm">Go to Form</button>
    </nav>
    <keep-alive>
      <page-content v-if="page === 'page'" :goToPageDetail="goToPageDetail"></page-content>
    </keep-alive>
    <form-content v-if="page === 'form'" @changeTitle="title = $event"></form-content>
    <post-detail v-if="page === 'page-detail'" :blog="selectedBlog"></post-detail>
  </div>
</template>

<script>
  import PageContent from './PageContent.vue'
  import PostDetail from './PostDetail.vue'
  import FormContent from './FormContent.vue'

  export default {
    data: function() {
      return {
        page: "page",
        title: "The title is important",
        selectedBlog: {}
      }
    },
    components: {
      PageContent,// in the template, this automatically translates to <page-content>
      FormContent,
      PostDetail
    },
    methods: {
      goToPage: function(e) {
        return this.page = 'page'
      },
      goToForm: function(e) {
        return this.page = 'form'
      },
      goToPageDetail(blog) {
        this.selectedBlog = blog
        this.page = 'page-detail'
        return
      }
    }
  }
</script>
