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
  </div>
</template>

<script setup>
/* Imports */
import { useStoreNotes } from '../stores/storeNotes';

/* Store */
const storeNotes = useStoreNotes();
</script>
