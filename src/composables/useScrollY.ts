import { ref, onMounted, onUnmounted } from "vue";

export function useScrollY(threshold = 0) {
  const isScrollY = ref(false);

  const handleScroll = () => {
    isScrollY.value = window.scrollY > threshold;
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return { isScrollY };
}
