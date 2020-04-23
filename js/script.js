// New VueJS instance
new Vue({
  el: '#notebook',
  data () {
    return {
      content: 'This is a note.',
    }
  },
  computed: {
    notePreview () {
      // Markdown rendered to HTML
      return marked(this.content);
    },
  },
  methods: {
    saveNote () {
      localStorage.setItem('content', this.content);
      this.reportOperation('saving');
    },
    reportOperation (opName) {
      console.log('The', opName, 'operation was completed!')
    },
  },
  watch: {
    content: 'saveNote'
  },
})