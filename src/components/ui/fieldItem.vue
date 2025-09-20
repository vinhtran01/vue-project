<script setup lang="ts">
import { cn } from "@/lib/utils";

const props = withDefaults(
  defineProps<{
    label?: string;
    required?: boolean;
    error?: string;
    className?: string;
  }>(),
  {
    label: "",
    required: false,
    error: "",
    className: "",
  }
);
</script>

<template>
  <div :class="cn('flex flex-col gap-1', cn(props.className))">
    <p class="text-base text-g1">
      {{ label }}
      <span v-if="props.required" class="text-secondary-red">*</span>
    </p>
    <slot />
    <p
      v-if="props.error"
      class="text-[12px] text-secondary-red italic mt-[2px]"
    >
      {{ props.error }}
    </p>
  </div>
</template>
