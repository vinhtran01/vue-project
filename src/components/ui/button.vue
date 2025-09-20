<!-- Button.vue -->
<template>
  <button
    data-slot="button"
    :class="cn(buttonVariants({ variant, size, class: className }))"
    v-bind="attrs"
  >
    <slot />
  </button>
</template>

<script setup>
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useAttrs } from "vue";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none bg-primary text-white shadow-[var(--shadow-btn)] hover:bg-primary/90 h-13 text-lg rounded-md px-6",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-[var(--shadow-btn)] hover:bg-primary/90",
        outline:
          "border border-primary-2 bg-transparent text-[#07DC76] hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-13 px-4 py-2 ",
        sm: "h-8 rounded-md gap-1.5 px-3",
        lg: "h-13 text-lg rounded-md px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

defineProps({
  variant: {
    type: String,
    default: "default",
  },
  size: {
    type: String,
    default: "default",
  },
  className: {
    type: String,
    default: "",
  },
});

const attrs = useAttrs();
</script>
