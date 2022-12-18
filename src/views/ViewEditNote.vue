<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef"
      label="Edit Note"
      placeholder="Edit note"
      bgColor="link"
    >
      <template #buttons>
        <button class="button is-light" @click="$router.push('/')">
          Cancel
        </button>
        <button
          :disabled="!noteContent"
          class="button is-link has-background-link"
          @click="handleSaveClicked"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/* Imports */
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStoreNotes } from '@/stores/storeNotes';
import AddEditNote from '@/components/notes/AddEditNote.vue';

/* Router */
const route = useRoute();
const router = useRouter();

/* Store */
const storeNotes = useStoreNotes();

/* Refs */
const noteId = route.params.id;
const note = storeNotes.getNote(noteId);
const addEditNoteRef = ref(null);
const noteContent = ref(note.content);

/* Methods */
const handleSaveClicked = () => {
  storeNotes.updateNote(noteId, noteContent.value);
  router.push('/');
};
</script>
