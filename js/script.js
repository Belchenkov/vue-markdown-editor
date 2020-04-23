// New VueJS instance
new Vue({
  el: '#notebook',
  data () {
    return {
      content: '**Bold** *Italic* [link]' + '(http://vuejs.org/)',
    }
  },
  computed: {
    notePreview () {
      // Markdown rendered to HTML
      return marked(this.content)
    },
  },
})