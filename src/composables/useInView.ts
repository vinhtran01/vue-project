import { onMounted, onUnmounted, ref } from "vue";

const useInView = (elementId: string, rootMargin = "0px") => {
  const isInView = ref(false);
  const observer: IntersectionObserver | null = null;

  onMounted(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView.value = entry.isIntersecting;
      },
      { rootMargin }
    );

    observer.observe(element);
  });

  onUnmounted(() => {
    if (observer && document.getElementById(elementId)) {
      observer.unobserve(document.getElementById(elementId));
    }
  });

  return isInView;
};

export default useInView;
