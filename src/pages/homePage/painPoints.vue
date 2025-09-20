<script setup>
import { cn } from "@/lib/utils";
import CloseIcon from "@/assets/icons/Close Square.svg";
import CheckedIcon from "@/assets/icons/Checked Square.svg";
</script>

<template>
  <div
    class="w-full bg-[url(/images/bg_painpoint.jpg)] bg-[top_center] bg-cover bg-no-repeat pt-[270px] pb-[100px] md:py-[60px] sm:py-6 sm:bg-[#042921] sm:bg-[center_calc(-500px)]"
    id="pain-points"
  >
    <div class="w-full max-w-[1310px] px-4 mx-auto">
      <div class="relative">
        <div
          class="text-[36px] text-center text-white font-semibold leading-[140%] tracking-[-3%] xl:text-[32px] md:text-[24px] sm:text-[20px] sm:max-w-[221px] sm:mx-auto"
        >
          Giải quyết triệt để
          <span class="uppercase text-[#FF5A5A]">pain points</span> của bạn
        </div>
        <div
          class="uppercase text-[130px] leading-[140%] tracking-[5%] text-pain_points font-bold absolute left-1/2 -translate-x-1/2 bottom-[-20px] whitespace-nowrap xl:text-[100px] md:text-[80px] md:hidden xl:bottom-[-10px] md:bottom-[-5px]"
        >
          pain points
        </div>
      </div>
      <div
        class="mt-15 grid grid-cols-2 gap-10 lg:gap-6 md:grid-cols-1 lg:mt-10 sm:mt-5 sm:gap-5"
      >
        <div
          v-for="(item, index) in data"
          :key="index"
          class="w-full flex flex-col gap-4 sm:gap-1"
        >
          <div
            :class="
              cn(
                'flex flex-col gap-[6px]',
                index === 1 && 'order-2 md:order-[0]'
              )
            "
          >
            <div
              :class="
                cn(
                  'flex items-center gap-4 p-[6px] rounded-[60px] sm:gap-2',
                  index === 0 ? cn('bg-secondary-red') : cn('bg-primary-2')
                )
              "
            >
              <span
                class="w-13 h-10 rounded-[50px] flex items-center justify-center bg-white sm:w-8 sm:h-6"
              >
                <img :src="item.icon" alt="" class="w-7 h-7 sm:!w-5 sm:!h-5" />
              </span>
              <div
                class="text-[20px] text-white font-semibold whitespace-nowrap lg:text-base sm:text-sm"
              >
                {{ item.title }}
              </div>
            </div>

            <div
              :class="
                cn(
                  'p-6 rounded-2xl bg-[#FFFFFF1F] flex flex-col gap-5 border-t-2 sm:rounded-xl',
                  index === 0
                    ? cn('border-secondary-red')
                    : cn('border-primary-2')
                )
              "
            >
              <div
                v-for="(el, idx) in item.content"
                class="flex items-start gap-3 text-white"
                :key="idx"
              >
                <span class="min-w-6">
                  <span className="min-w-6">
                    <CloseIcon v-if="index === 0" />
                    <CheckedIcon v-else />
                  </span>
                </span>
                {{ el }}
              </div>
            </div>
          </div>
          <div
            class="w-full rounded-3xl min-h-[337px] relative h-full sm:min-h-[229px] sm:rounded-xl"
          >
            <img
              :src="item?.image"
              alt=""
              class="rounded-3xl w-full h-full sm:rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const data = [
  {
    icon: "/images/icon_pain-ponts1.png",
    image: "/images/img_pain-ponts1.png",
    title: "Pain Points của bạn",
    content: [
      "Quản lý giỏ hàng phân tán, cập nhật chậm, dễ sai sót",
      "Booking thủ công, khó kiểm soát trạng thái giữ chỗ và giao dịch",
      "Không quản lý được hoa hồng, KPI, team sales phức tạp",
      "Khó chăm sóc khách hàng và quản lý data lịch sử giao dịch",
      "Thiếu kết nối nội bộ, chia sẻ giỏ hàng và thông tin chậm",
    ],
  },
  {
    icon: "/images/icon_pain-ponts2.png",
    image: "/images/img_pain-ponts2.png",
    title: "LANDOFFICE giải quyết như thế nào?",
    content: [
      "Tập trung toàn bộ giỏ hàng, dự án, sản phẩm, người đứng tên trên một hệ thống duy nhất, cập nhật real-time, giảm rủi ro nhầm lẫn",
      "Quy trình booking online minh bạch, giữ chỗ, duyệt giao dịch và cập nhật trạng thái tự động",
      "Tính hoa hồng tự động, quản lý KPI, bảng công, thưởng phạt và rút tiền nhanh chóng – minh bạch, rõ ràng",
      "CRM tích hợp: lưu trữ khách hàng tiềm năng, giao dịch, lịch sử chăm sóc, hỗ trợ remarketing hiệu quả",
      "Mạng xã hội nội bộ: chia sẻ giỏ hàng, tin tức dự án, sự kiện công ty, tạo kết nối đội ngũ nhanh chóng",
    ],
  },
];
</script>
