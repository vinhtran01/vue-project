<script setup lang="ts">
import { cn } from "@/lib/utils";
import { useField } from "vee-validate";
import { useAttrs, type VNodeChild } from "vue";

const props = withDefaults(
  defineProps<{
    name: string;
    rules?: any;
    type?: string;
    icon?: any;
    placeholder?: string;
    className?: string;
  }>(),
  {
    type: "text",
    placeholder: "",
    className: "",
    icon: null,
    rules: null,
  }
);

const { value, handleBlur } = useField(props.name, props.rules);

const attrs = useAttrs();
</script>

<template>
  <div
    :class="
      cn(
        'w-full relative h-12 rounded-lg border border-border focus-within:border-primary-2',
        icon && 'pl-12',
        className
      )
    "
  >
    <span v-if="icon" class="absolute top-1/2 left-4 -translate-y-1/2 z-10">
      <component :is="icon" />
    </span>
    <input
      :type="type"
      v-model="value"
      @blur="handleBlur"
      :class="
        cn(
          'w-full h-12 outline-none bg-transparent pr-4',
          !icon && 'pl-4',
          props.type === 'number' &&
            '[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
        )
      "
      :placeholder="placeholder"
      v-bind="attrs"
    />
  </div>
</template>
