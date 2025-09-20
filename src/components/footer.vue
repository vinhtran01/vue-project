<template>
  <div class="w-full sm:mt-8">
    <div class="w-full max-w-[1430px] mx-auto px-4">
      <div
        class="flex items-center justify-between py-10 border-b border-border flex-wrap gap-4 sm:flex-col sm:items-start sm:py-0 sm:border-none"
      >
        <router-link to="/" class="p-[10px]">
          <img src="/images/logo-ft.png" alt="" class="w-[198px]" />
        </router-link>
        <div class="flex items-center gap-13 lg:gap-5 sm:flex-col sm:gap-3">
          <router-link
            to="tel:0000.000.000"
            class="w-[270px] flex items-center gap-4 rounded-lg bg-[#00B15C1F]"
          >
            <div
              class="w-14 h-14 rounded-lg flex items-center justify-center bg-primary-2"
            >
              <img src="/images/phone.png" alt="" />
            </div>
            <div class="flex flex-col">
              <p class="text-sm text-g3">Hotline</p>
              <p class="text-g1 text-base font-medium">0000.000.000</p>
            </div>
          </router-link>
          <router-link
            to="mailto:landoffice@gmail.com"
            class="w-[270px] flex items-center gap-4 rounded-lg bg-[#00B15C1F]"
          >
            <div
              class="w-14 h-14 rounded-lg flex items-center justify-center bg-primary-2"
            >
              <img src="/images/email.png" alt="" />
            </div>
            <div class="flex flex-col">
              <p class="text-sm text-g3">Email</p>
              <p class="text-g1 text-base font-medium">landoffice@gmail.com</p>
            </div>
          </router-link>
        </div>
        <div class="flex items-center gap-3 lg:hidden">
          <router-link to="" class="w-9 h-9">
            <img src="/images/fb.png" alt="" class="w-full h-full" />
          </router-link>
          <router-link to="" class="w-9 h-9">
            <img src="/images/in.png" alt="" class="w-full h-full" />
          </router-link>
          <router-link to="" class="w-9 h-9">
            <img src="/images/x.png" alt="" class="w-full h-full" />
          </router-link>
        </div>
      </div>
      <div
        class="flex justify-between gap-5 py-10 sm:py-6 md:grid md:grid-cols-2 sm:grid-cols-1"
      >
        <div class="flex flex-col gap-4 w-full max-w-[340px]">
          <p class="text-[18px] text-g1 font-medium max-w-[300px]">
            Giải pháp ERP toàn diện cho doanh nghiệp BĐS
          </p>
          <p class="text-base text-g3">
            Chuyên nghiệp - Hiệu quả - Bảo mật - Phân quyền
          </p>
        </div>
        <div class="flex flex-col gap-4 w-full max-w-[340px]">
          <p class="text-[18px] text-g1 font-medium">Về chúng tôi</p>
          <ul class="flex flex-col list-disc pl-6 gap-2">
            <li
              v-for="(item, idx) in router"
              :key="idx"
              class="marker:text-g3 text-sm"
            >
              <router-link
                :to="item.to"
                class="text-base text-g3 hover:text-primary-2 transition-all ease-linear"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-6 w-full max-w-[325px]">
          <div class="flex flex-col gap-4">
            <p class="text-[18px] text-g1 font-medium">Trụ sở chính</p>
            <ul class="flex flex-col list-disc pl-6 gap-2">
              <li class="marker:text-g3 text-sm">
                <p
                  class="text-base text-g3 hover:text-primary-2 transition-all ease-linear"
                >
                  A14 Ng. 20 P. Huy Du, Cầu Diễn, Nam Từ Liêm, Hà Nội 100000
                </p>
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-4">
            <p class="text-[18px] text-g1 font-medium">Giờ làm việc</p>
            <ul class="flex flex-col list-disc pl-6 gap-2">
              <li class="marker:text-g3 text-sm">
                <p
                  class="text-base text-g3 hover:text-primary-2 transition-all ease-linear"
                >
                  T2 - T6: 8h00 - 17h30
                </p>
              </li>
              <li class="marker:text-g3 text-sm">
                <p
                  class="text-base text-g3 hover:text-primary-2 transition-all ease-linear"
                >
                  T7: 8h00 - 12h00
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mt-3 w-full p-4 bg-background-b1 flex flex-col items-center gap-4"
    >
      <div
        class="w-full max-w-[1400px] mx-auto flex justify-between items-center gap-4 flex-wrap md:justify-center sm:flex-col"
      >
        <p class="text-base text-g2 sm:order-3 md:text-sm">
          © 2025 landoffice, All Rights Reserved
        </p>
        <div
          class="flex items-center gap-8 md:gap-[4px_20px] flex-wrap sm:justify-center"
        >
          <router-link
            to=""
            class="text-g2 transition-all ease-linear hover:text-primary-2 md:text-sm"
          >
            Chính sách bảo mật
          </router-link>
          <router-link
            to=""
            class="text-g2 transition-all ease-linear hover:text-primary-2 md:text-sm"
          >
            Điều khoản sử dụng
          </router-link>
          <router-link
            to=""
            class="text-g2 transition-all ease-linear hover:text-primary-2 md:text-sm"
          >
            Cookie policy
          </router-link>
        </div>
        <div class="hidden items-center gap-3 lg:flex">
          <router-link to="" class="w-9 h-9">
            <img src="/images/fb.png" alt="" class="w-full h-full" />
          </router-link>
          <router-link to="" class="w-9 h-9">
            <img src="/images/in.png" alt="" class="w-full h-full" />
          </router-link>
          <router-link to="" class="w-9 h-9">
            <img src="/images/x.png" alt="" class="w-full h-full" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = [
  {
    name: "Giới thiệu công ty",
    to: "/",
  },
  {
    name: "Tính năng",
    to: "/",
  },
  {
    name: "Bảng giá",
    to: "/",
  },
  {
    name: "Demo phần mềm",
    to: "/",
  },
  {
    name: "Hỗ trợ khách hàng",
    to: "/",
  },
];
</script>
