<script setup>
import HomeIcon from "@/assets/icons/home.svg";
import TypeIcon from "@/assets/icons/type.svg";
import IntegrationIcon from "@/assets/icons/integration.svg";
import SolutionIcon from "@/assets/icons/solution.svg";
import TwitterX from "@/assets/icons/TwitterX.svg";
import Telegram from "@/assets/icons/Telegram.svg";
import LinkedIn from "@/assets/icons/LinkedIn.svg";
import CloseIcon from "@/assets/icons/close.svg";
import BarIcon from "@/assets/icons/bar.svg";
import { cn } from "@/lib/utils";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useScrollY } from "@/composables/useScrollY";

const hash = ref("");
const isOpen = ref(false);

const { isScrollY } = useScrollY(50);

const handleHashChange = () => {
  hash.value = window.location.hash;
};

onMounted(() => {
  handleHashChange();
  window.addEventListener("hashchange", handleHashChange);
});

onUnmounted(() => {
  window.removeEventListener("hashchange", handleHashChange);
});

const handleClick = (url) => {
  hash.value = url;
};
</script>

<template>
  <div
    class="w-full z-50 fixed top-0 bg-transparent mt-4 px-4 xl:mt-2 lg:px-3 lg-small:!px-2"
  >
    <div
      :class="
        cn(
          'max-w-[1910px] relative px-[55px] mx-auto flex items-center justify-between pt-[30px] pb-5 rounded-2xl transition-all duration-300 xl:px-6  xl:!py-5 lg:px-4 lg:!py-3  lg-small:rounded-xl',
          isScrollY &&
            '!py-5 bg-[url(/images/bg-header.png)] bg-cover bg-[#042921] bg-center '
        )
      "
    >
      <span
        class="absolute left-[10px] top-1/2 -translate-y-1/2 items-center justify-center cursor-pointer hidden lg-small:flex"
        @click="isOpen = !isOpen"
      >
        <BarIcon />
      </span>
      <div class="w-[198px] lg:w-[174px] lg-small:mx-auto">
        <img src="/images/logo.png" alt="" className="w-full" />
      </div>
      <div
        :class="
          cn(
            'p-1 bg-[image:var(--bg-menu--nav)] backdrop-blur-[20px] bg-cover bg-no-repeat  border border-[#ffffff51] rounded-[60px] lg-small:fixed lg-small:bg-[image:none] lg-small:bg-[#00000060] lg-small:w-[100vw] lg-small:h-[100vh] lg-small:top-0 lg-small:left-0 lg-small:z-50 lg-small:rounded-none lg-small:backdrop-blur-none lg-small:pt-20 lg-small:pl-4',
            isOpen ? 'lg-small:block' : 'lg-small:hidden'
          )
        "
      >
        <div
          class="flex items-center gap-0 lg-small:flex-col lg-small:w-[250px] lg-small:items-start lg-small:bg-white lg-small:rounded-lg lg-small:p-2"
        >
          <router-link
            v-for="(item, index) in router"
            :to="item.url"
            :key="{ index }"
            :class="
              cn(
                'nav-item text-background-b1 text-base py-[10px] px-6 rounded-[50px]  flex gap-[6px] items-center  cursor-pointer hover:bg-[image:var(--bg-nav)] transition-all ease-linear duration-200 xl:py-[6px] xl:px-4 lg-small:w-full lg-small:py-[10px] lg-small:px-3 lg-small:gap-3 lg-small:text-g4',
                hash === item.url
                  ? cn(
                      'nav-active border border-[#FFFFFF29]  !text-white font-bold bg-[image:var(--bg-nav)] lg-small:bg-primary-2  lg-small:rounded'
                    )
                  : cn(
                      'font-medium lg-small:border-b lg-small:border-border  lg-small:rounded-none lg-small:last:border-none'
                    )
              )
            "
            @click="
              {
                handleClick(item.url);
                isOpen = false;
              }
            "
          >
            <component :is="item.icon" /> {{ item.text }}
          </router-link>
        </div>
        <div
          class="w-10 h-10 hidden bg-white mt-6 rounded-full justify-center items-center cursor-pointer lg-small:flex"
          @click="isOpen = !isOpen"
        >
          <CloseIcon />
        </div>
      </div>
      <div class="flex gap-3 items-center xl:gap-2 lg:hidden">
        <div
          v-for="(item, index) in social"
          :key="{ index }"
          className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-[#FFFFFF29] bg-[image:var(--bg-social)] hover:bg-[image:var(--bg-nav)] hover:text-white transition-all ease-linear duration-200 xl:w-8 xl:h-8"
        >
          <component :is="item.icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const router = [
  {
    icon: HomeIcon,
    text: "Trang chủ",
    url: "/",
  },
  {
    icon: TypeIcon,
    text: "Loại hình BĐS",
    url: "#real-estate-type",
  },
  {
    icon: IntegrationIcon,
    text: "Tích hợp",
    url: "#system-diagram",
  },
  {
    icon: SolutionIcon,
    text: "Giải pháp",
    url: "#pain-points",
  },
];

const social = [
  {
    icon: TwitterX,
    url: "#",
  },
  {
    icon: Telegram,
    url: "#",
  },
  {
    icon: LinkedIn,
    url: "#",
  },
];
</script>
