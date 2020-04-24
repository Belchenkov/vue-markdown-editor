// New VueJS instance
new Vue({
  el: '#notebook',
  data () {
    return {
      content: localStorage.getItem('content') || 'You can write in **markdown**',
      notes: [],
    }
  },
  computed: {
    notePreview () {
      // Markdown rendered to HTML
      return marked(this.content);
    },
    addButtonTitle () {
      return this.notes.length + ' note(s) already'
    },
  },
  created () {
  },
  methods: {
    saveNote () {
      localStorage.setItem('content', this.content);
      this.reportOperation('saving');
    },
    reportOperation (opName) {
      console.log('The', opName, 'operation was completed!')
    },
    addNote () {
      const time = Date.now();

      const note = {
        id: String(time),
        title: 'New note ' + (this.notes.length + 1),
        content: '**Hi!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!',
        created: time,
        favorite: false,
      };

      this.notes.push(note);
    },
  },
  watch: {
    content: 'saveNote'
  },
})