<script setup lang="ts">
import CloseIcon from "@/assets/icons/close-modal.svg";
import { cn } from "@/lib/utils";
import { useClickOutside } from "@/composables/useClickOutside";
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    isOpen?: boolean;
    title?: string;
    className?: string;
    overlayClassName?: string;
  }>(),
  {
    isOpen: false,
    title: "",
    className: "",
    overlayClassName: "",
  }
);
const emit = defineEmits<{
  (e: "close"): void;
}>();

const boxRef = ref<HTMLElement | null>(null);
useClickOutside(boxRef, () => {
  emit("close");
});
</script>
<template>
  <div
    v-if="props.isOpen"
    :class="
      cn(
        'bg-[#00000060] z-[999] fixed top-0 left-0 h-full w-full overflow-auto transform transition duration-300 ',
        overlayClassName
      )
    "
  >
    <div
      class="py-12 overflow-y-auto min-h-full flex justify-center items-center px-4"
    >
      <div
        ref="boxRef"
        :class="
          cn(
            'bg-white block rounded-lg px-10 py-8 max-w-lg w-full mx-auto   outline-none md:px-4 md:py-5',
            className
          )
        "
      >
        <div class="flex mb-4 justify-end">
          <div
            @click="emit('close')"
            class="cursor-pointer"
            aria-label="Close modal"
          >
            <CloseIcon />
          </div>
        </div>
        <div class="flex flex-col items-center gap-7">
          <h2
            v-if="props.title"
            class="text-center text-2xl font-semibold text-g1 md:text-xl"
          >
            {{ props.title }}
          </h2>
          <div class="w-full"><slot /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
