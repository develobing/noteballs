<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNoteCount }}</td>
        </tr>
        <tr>
          <td>Number of Character (of all notes)</td>
          <td>{{ storeNotes.totalNumberOfCharacters }}</td>
        </tr>
      </tbody>
    </table>

    <input
      v-autofocus
      v-model="loveNoteballs"
      class="input"
      type="text"
      placeholder="Do you love noteballs?"
      maxlength="100"
    />
  </div>
</template>

<script setup>
/* Imports */
import { ref } from 'vue';
import { useStoreNotes } from '../stores/storeNotes';
import { vAutofocus } from '@/directives/vAutofocus';
import { useWatchCharacters } from '@/use/useWatchCharacters';

/* Store */
const storeNotes = useStoreNotes();

/* Love noteballs */
const loveNoteballs = ref('');
useWatchCharacters(loveNoteballs, 15);
</script>
