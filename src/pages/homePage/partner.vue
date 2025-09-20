<script setup>
import { cn } from "@/lib/utils";

const leftColumns = dataPartner.slice(0, 2);
const rightColumns = dataPartner.slice(2);
</script>

<template>
  <div class="">
    <div
      class="w-full bg-background-b1 rounded-[0_0_100px_100px] py-[100px] px-4 2xl:py-20 lg:py-15 md:py-10 sm:py-6 lg:rounded-[0_0_60px_60px] md:rounded-none"
    >
      <div class="w-full max-w-[1400px] mx-auto gap-5 relative">
        <p
          class="text-[36px] font-semibold text-background-b3 text-center max-w-[540px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:text-[32px] 2xl:max-w-[400px] xl:max-w-[320px] lg:static lg:max-w-[400px] md:text-[24px] sm:text-[20px] lg:translate-x-0 lg:translate-y-0 lg:top-0 lg:left-0 lg:mx-auto md:max-w-[350px] sm:max-w-[280px]"
        >
          Được tin dùng bởi nhiều doanh nghiệp BĐS
        </p>
        <div
          class="flex items-center justify-between md:justify-center md:gap-4 md:mt-6 sm:mt-5 sm:gap-3 md:flex-col"
        >
          <div class="flex gap-6 xl:gap-4 sm:gap-3 sm:w-full">
            <div
              v-for="(col, colIndex) in leftColumns"
              :key="colIndex"
              :class="
                cn(
                  'flex flex-col gap-6 xl:gap-4 sm:gap-3 sm:w-full',
                  colIndex === 1 && 'pt-11 md:pt-0'
                )
              "
            >
              <div
                v-for="(img, index) in col"
                :key="index"
                class="w-[186px] h-auto aspect-[186/105] bg-white rounded-lg flex items-center justify-center border border-[#E4E9F2] cursor-pointer transition-all ease-linear hover:shadow-lg xl:w-[160px] sm:w-full"
              >
                <img
                  :src="img"
                  alt=""
                  class="max-w-[140px] max-h-[70px] object-contain md:scale-75"
                />
              </div>
            </div>
          </div>
          <div class="flex gap-6 xl:gap-4 sm:gap-3 sm:w-full">
            <div
              v-for="(col, colIndex) in rightColumns"
              :key="colIndex"
              :class="
                cn(
                  'flex flex-col gap-6 xl:gap-4 sm:gap-3 sm:w-full',
                  colIndex === 0 && 'pt-11 md:pt-0'
                )
              "
            >
              <div
                v-for="(img, index) in col"
                :key="index"
                class="w-[186px] h-auto aspect-[186/105] bg-white rounded-lg flex items-center justify-center border border-[#E4E9F2] cursor-pointer transition-all ease-linear hover:shadow-lg xl:w-[160px] sm:w-full"
              >
                <img
                  :src="img"
                  alt=""
                  class="max-w-[140px] max-h-[70px] object-contain md:scale-75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dataPartner = [
  ["/images/VL.png", "/images/minh-trung.png"],
  ["/images/vietnamland.png", "/images/minh-trung.png"],
  ["/images/dien-phat.png", "/images/dat-viet.png"],
  ["/images/hung-thanh.png", "/images/dat-viet.png"],
];
</script>
