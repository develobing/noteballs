<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>

    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>

      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>

      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModal">Cancel</button>
        <button class="button is-danger" @click="handleDelete">Delete</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
/* Imports */
import { ref, onMounted, onUnmounted } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { onClickOutside } from '@vueuse/core';

/* Props */
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },

  noteId: {
    type: String,
    required: true,
  },
});

/* Emits */
const emit = defineEmits(['update:modelValue']);

/* Store */
const storeNotes = useStoreNotes();

/* Close modal */
const modalCardRef = ref(null);
const closeModal = () => emit('update:modelValue', false);
onClickOutside(modalCardRef, closeModal);

const handleKeyboard = (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
};

/* Delete Note */
const handleDelete = () => {
  storeNotes.deleteNote(props.noteId);
  closeModal();
};

/* Keyboard stroke */
onMounted(() => {
  document.addEventListener('keydown', handleKeyboard);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyboard);
});
</script>
