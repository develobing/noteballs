<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            ref="newNoteRef"
            class="textarea"
            placeholder="Add a new note"
            v-model="newNote"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            :disabled="!newNote"
            class="button is-link has-background-success"
            @click="addNote"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />
  </div>
</template>

<script setup>
/* Imports */
import { ref } from 'vue';
import Note from '@/components/notes/Note.vue';

/* Notes */
const newNote = ref('');
const newNoteRef = ref(null);

const notes = ref([
  {
    id: 'id1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit minus id sit distinctio facilis asperiores voluptate architecto. Quae, nisi possimus. Laborum modi quidem odio in repudiandae perspiciatis quia dolorum.',
  },

  {
    id: 'id2',
    content: 'This is a shorter note.',
  },
]);

const addNote = () => {
  let note = {
    id: Date.now().toString(),
    content: newNote.value,
  };

  notes.value.unshift(note);
  newNote.value = '';
  newNoteRef.value.focus();
};

const deleteNote = (id) => {
  console.log('deleteNote() - id', id);
  notes.value = notes.value.filter((note) => note.id !== id);
};
</script>
