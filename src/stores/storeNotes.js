import { defineStore } from 'pinia';

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit minus id sit distinctio facilis asperiores voluptate architecto. Quae, nisi possimus. Laborum modi quidem odio in repudiandae perspiciatis quia dolorum.',
        },

        {
          id: 'id2',
          content: 'This is a shorter note.',
        },
      ],
    };
  },

  actions: {
    addNote(content) {
      const note = {
        id: Date.now().toString(),
        content,
      };

      this.notes.unshift(note);
    },

    updateNote(id, content) {
      const note = this.notes.find((note) => note.id === id);
      note.content = content;
    },

    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },

  getters: {
    getNote(state) {
      return (id) => {
        return state.notes.find((note) => note.id === id);
      };
    },

    totalNoteCount(state) {
      return state.notes.length;
    },

    totalNumberOfCharacters(state) {
      return state.notes.reduce((acc, note) => acc + note.content.length, 0);
    },
  },
});
