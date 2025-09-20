<script setup lang="ts">
import { cn } from "@/lib/utils";
import { useField } from "vee-validate";
import { useAttrs, type VNodeChild } from "vue";

const props = withDefaults(
  defineProps<{
    name: string;
    rules?: any;
    icon?: VNodeChild;
    placeholder?: string;
    className?: string;
    rows?: number;
  }>(),
  {
    icon: null,
    placeholder: "",
    className: "",
    rows: 3,
    rules: null,
  }
);
const { value, handleBlur } = useField<string>(props.name, props.rules);

const attrs = useAttrs();
</script>

<template>
  <div
    :class="
      cn(
        'w-full relative rounded-lg border border-border focus-within:border-primary-2',
        icon && 'pl-12',
        cn(className)
      )
    "
  >
    <span v-if="icon" class="absolute top-3 left-4 z-10"
      ><component :is="icon"
    /></span>
    <textarea
      v-model="value"
      @blur="handleBlur"
      :class="
        cn('w-full outline-none bg-transparent pr-4 pt-3', !icon && 'pl-4')
      "
      :placeholder="placeholder"
      :rows="rows"
      v-bind="attrs"
    />
  </div>
</template>
