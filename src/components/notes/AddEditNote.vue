<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark `">
    <label class="label has-text-white" v-if="label">{{ label }}</label>

    <div class="field">
      <div class="control">
        <textarea
          v-autofocus
          ref="textareaRef"
          class="textarea"
          maxlength="100"
          :value="modelValue"
          :placeholder="placeholder"
          @input="$emit('update:modelValue', $event.target.value)"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';

/* Props */
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },

  label: {
    type: String,
  },

  placeholder: {
    type: String,
    default: 'Type something...',
  },

  bgColor: {
    type: String,
    default: 'success',
  },
});

/* Emits */
const emit = defineEmits(['update:modelValue']);

const textareaRef = ref(null);

const focusTextarea = () => {
  textareaRef.value.focus();
};

defineExpose({ focusTextarea });
</script>
