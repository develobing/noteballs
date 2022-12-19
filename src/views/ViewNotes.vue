<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      label="Add a note"
      placeholder="Add a new note"
    >
      <template #buttons>
        <button
          :disabled="!newNote"
          class="button is-link has-background-success"
          @click="addNote"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
/* Imports */
import { ref } from 'vue';
import Note from '@/components/notes/Note.vue';
import AddEditNote from '@/components/notes/AddEditNote.vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { useWatchCharacters } from '@/use/useWatchCharacters';

/* Store */
const storeNotes = useStoreNotes();

/* Notes */
const newNote = ref('');
const addEditNoteRef = ref(null);

const addNote = () => {
  if (!newNote.value.trim()) return;

  storeNotes.addNote(newNote.value);
  newNote.value = '';
  addEditNoteRef.value.focusTextarea();
};

/* Watch characters */
useWatchCharacters(newNote);
</script>
