<script setup>
import ArrowIcon from "@/assets/icons/arrow_slider.svg";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { ref } from "vue";

const testimonials = [
  {
    name: "Ông Mẫn Bá Tuyền",
    role: "CEO Công ty cổ phần Tập đoàn Đầu tư Việt Long",
    quote: `Tôi đã ứng dụng thử nhiều phần mềm quản lý doanh nghiệp khác, tuy nhiên chỉ có Landoffice đáp ứng được nhu cầu chuyên biệt của ngành môi giới BĐS. Hệ thống số hóa một cách thống nhất giúp tôi quản lý hiệu quả kinh doanh, tinh chỉnh chiến lược kịp thời và gắn kết được đội ngũ tư vấn viên cũng như môi giới.`,
    image: "/images/customer.jpg",
    highlight: "80%",
    highlightText: "hiệu quả công việc được cải thiện",
  },
  {
    name: "Bà Trần Thị Hạnh",
    role: "Giám đốc điều hành Công ty BĐS Hạnh Phát",
    quote: `Trước đây, đội ngũ chúng tôi gặp khó khăn trong việc quản lý giỏ hàng và theo dõi giao dịch. Từ khi sử dụng Landoffice, mọi thứ trở nên rõ ràng và minh bạch hơn rất nhiều. Giao diện dễ dùng, dữ liệu tập trung và tính năng quản lý khách hàng cực kỳ hiệu quả.`,
    image: "/images/customer.jpg",
    highlight: "65%",
    highlightText: "giảm thời gian xử lý giao dịch",
  },
];

const swiperRef = ref(null);

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

const nextSlide = () => {
  if (swiperRef.value) {
    swiperRef.value.slideNext();
  }
};

const prevSlide = () => {
  if (swiperRef.value) {
    swiperRef.value.slidePrev();
  }
};
</script>

<template>
  <div class="py-[100px] px-4 2xl:py-20 md:py-10 sm:py-6">
    <div class="max-w-[1200px] mx-auto relative">
      <h2
        class="hidden mb-5 text-[36px] leading-[140%] tracking-[-3%] text-center font-semibold xl:text-[32px] md:text-[24px] sm:text-[20px] md:block"
      >
        Phản hồi khách hàng
      </h2>
      <swiper
        @swiper="onSwiper"
        :slides-per-view="1"
        :space-between="50"
        :modules="[Pagination]"
        :pagination="{ clickable: true }"
        ref="swiperRef"
        class="customer-slider relative"
      >
        <swiper-slide v-for="(item, idx) in testimonials" :key="idx">
          <div class="flex gap-10 justify-between md:flex-col md:gap-1">
            <div class="flex items-center gap-3">
              <div
                class="relative w-[444px] h-auto aspect-[444/571] rounded-lg overflow-hidden xl:w-[350px] md:w-22 md:min-w-22 md:h-22"
              >
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="hidden md:block">
                <p class="ont-semibold text-background-b3 text-xl">
                  {{ item.name }}
                </p>
                <p class="mt-2 text-base text-secondary-blue lg:text-sm">
                  {{ item.role }}
                </p>
              </div>
            </div>

            <div
              class="flex-1 pt-[96px] pl-15 max-w-[635px] relative xl:pt-10 lg:pl-2 lg:pt-8 md:max-w-full"
            >
              <img
                src="/images/vector.png"
                alt=""
                class="w-[180px] h-auto absolute top-[20px] left-0 z-[-1] xl:w-[140px] xl:top-[0px] lg:w-[120px]"
              />
              <div
                class="text-[40px] font-bold text-primary-2 mb-2 lg:flex lg:gap-3 lg:items-center md:mb-6"
              >
                {{ item.highlight }}
                <span
                  class="text-g1 text-[20px] font-normal ml-2 lg:text-base lg:block"
                >
                  {{ item.highlightText }}
                </span>
              </div>
              <p
                class="text-g1 text-base mb-6 min-h-[250px] max-w-[500px] xl:min-h-[200px] md:max-w-full md:mb-5 md:min-h-[120px]"
              >
                {{ item.quote }}
              </p>
              <div class="flex items-center justify-between gap-5">
                <div class="md:hidden">
                  <p
                    class="text-2xl font-semibold text-background-b3 lg:text-xl"
                  >
                    {{ item.name }}
                  </p>
                  <p class="mt-2 text-base text-secondary-blue lg:text-sm">
                    {{ item.role }}
                  </p>
                </div>
                <div
                  class="flex gap-5 py-1 pl-8 border-l border-border lg:gap-5 lg:pl-4 md:border-none md:pl-0"
                >
                  <div
                    class="slide-action w-13 h-13 rounded cursor-pointer flex items-center justify-center border border-primary-2 transition-all ease-linear hover:bg-primary-2"
                    @click="prevSlide"
                  >
                    <ArrowIcon />
                  </div>
                  <div
                    class="slide-action w-13 h-13 rounded cursor-pointer flex items-center justify-center border border-primary-2 transition-all ease-linear hover:bg-primary-2 transform-[rotate(180deg)]"
                    @click="nextSlide"
                  >
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
