// New VueJS instance
new Vue({
  el: '#notebook',
  data () {
    return {
      content: localStorage.getItem('content') || 'You can write in **markdown**',
      notes: [],
      selectedId: null
    }
  },
  computed: {
    notePreview () {
      // Markdown rendered to HTML
      return this.selectedNote ? marked(this.selectedNote.content) : '';
    },
    addButtonTitle () {
      return this.notes.length + ' note(s) already'
    },
    selectedNote () {
      // We return the matching note with selectedId
      return this.notes.find(note => note.id === this.selectedId)
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
    selectNote (note) {
      this.selectedId = note.id
    }
  },
  watch: {
    content: 'saveNote'
  },
})