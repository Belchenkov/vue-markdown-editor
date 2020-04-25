// New VueJS instance
new Vue({
  el: '#notebook',
  data () {
    return {
      content: localStorage.getItem('content') || 'You can write in **markdown**',
      notes: JSON.parse(localStorage.getItem('notes')) || [],
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
      return this.notes.find(note => note.id === this.selectedId)
    },
  },
  methods: {
    saveNotes () {
      localStorage.setItem('notes', JSON.stringify(this.notes))
      console.log('Notes saved!', new Date());
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
    notes: {
      handler: 'saveNotes',
      // Watch each note's properties inside the array
      deep: true
    }
  },
})