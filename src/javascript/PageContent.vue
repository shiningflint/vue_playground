<template>
  <div class="page-content">
    <h1>Welcome to my blog!</h1>
    <ul>
      <li v-for="blog in blogs" :key="blog.id"><a href="#" @click.prevent="handleClick(blog, $event)">{{ blog.title }}</a></li>
    </ul>
  </div>
</template>

<script>
  import { EventBus } from './EventBus'
  export default {
    props: {
      goToPageDetail: {
        type: Function,
        required: true
      }
    },
    data: function() {
      return {
        description: "Contents are the truth, titles suck. You don't actually need to read the title.",
        blogs: []
      }
    },
    created() {
      const timeStamp = String(Date.now())
      this.blogs.push({ id: timeStamp, title: "first post", content: "the content for the first post" })

      EventBus.$on('post-new-blog', (newBlog) => {
        this.blogs.push({
          id: newBlog.id,
          title: newBlog.title,
          content: newBlog.content
        })
      })
      console.log(this.blogs)
    },
    methods: {
      handleClick(blog, e) {
        this.goToPageDetail(blog)
      }
    }
  }
</script>
