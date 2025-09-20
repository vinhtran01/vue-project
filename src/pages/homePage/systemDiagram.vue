<script setup>
import { cn } from "@/lib/utils";
</script>

<template>
  <div
    class="pt-[100px] w-full bg-[#F8F9FB] rounded-[0_0_100px_100px] pb-[70px] mb-[-100px] px-4 relative z-10 lg:rounded-[0_0_60px_60px] md:rounded-none 2xl:py-20 xl:pb-[40px] lg-small:pb-0 lg:py-15 md:py-10 sm:py-6 md:px-0 xl:mb-[-150px] md:mb-0 md:overflow-hidden"
    id="system-diagram"
  >
    <div class="w-full max-w-[1310px] mx-auto">
      <div class="flex flex-col items-center gap-5 text-center relative z-10">
        <h2
          class="text-[36px] font-semibold px-4 text-background-b3 xl:text-[32px] md:text-[24px] sm:text-[20px]"
        >
          Giải pháp All-in-one - chỉ cần click chuột
        </h2>
        <p class="text-base max-w-[800px] sm:hidden">
          LANDOFFICE – Hệ thống quản lý BĐS toàn diện giúp doanh nghiệp quản lý
          nguồn lực thống nhất, đáp ứng mọi nghiệp vụ kinh doanh bất động sản,
          đồng thời cung cấp dữ liệu real-time để nhà quản lý đưa ra chiến lược
          kịp thời và hiệu quả.
        </p>
      </div>
      <div
        class="relative w-full mt-[-60px] 2xl:mt-[-20px] 2xl:w-[1000px] 2xl:mx-auto xl:scale-95 lg:scale-75 lg-small:scale-65 lg:mt-[-80px] lg:mb-[-70px] xl:origin-center lg:left-1/2 lg:-translate-x-1/2 md:scale-none md:left-0 md:translate-x-0 md:mt-0 md:mb-0 md:w-auto md:pt-5"
      >
        <div class="w-[966px] mx-auto 2xl:w-[680px] md:hidden">
          <img
            src="/images/img_system.png"
            alt="center"
            class="w-full h-auto z-[2] 2xl:hidden"
          />
          <img
            src="/images/img_system-small.png"
            alt="center"
            class="w-full h-auto z-[2] hidden 2xl:block"
          />
        </div>

        <div
          class="flex flex-col gap-[18px] md:w-[302px] md:mx-auto md:pt-[382px] md:relative"
        >
          <div
            class="w-[520px] h-[520px] hidden absolute top-0 left-1/2 -translate-x-1/2 md:block"
          >
            <img src="/images/bg_base.png" alt="" class="w-full h-full" />
            <img
              src="/images/line-top.png"
              alt=""
              class="top-[12%] absolute left-1/2 -translate-x-1/2 z-[1]"
            />
          </div>
          <img
            src="/images/bg-center.png"
            alt=""
            class="top-[13.3%] left-1/2 -translate-x-1/2 absolute w-[80%] z-[5] hidden md:block"
          />

          <img
            src="/images/line-right.png"
            alt=""
            class="top-[20%] absolute left-0 z-[1] hidden md:block"
          />

          <div
            v-for="(feature, idx) in features"
            :class="cn('absolute', feature.position)"
            :key="idx"
          >
            <h3
              :class="
                cn(
                  'text-[12px] w-[135px] text-center p-1 text-black bg-white rounded-lg absolute shadow-[0px_2px_8px_0px_#8195BE4D] md:mb-1 md:inline-block md:w-auto md:font-medium ',
                  feature.classNameTitle,
                  idx !== 5 && cn('md:pl-4')
                )
              "
            >
              {{ feature.title }}
            </h3>
            <ul
              :class="
                cn(
                  'pl-8 text-sm text-gray-700 list-disc flex flex-col  gap-2  w-[265px] bg-white  py-4 rounded-xl shadow-[0px_4px_60px_0px_#8195BE29] md:w-[265px] 2xl:gap-[6px] md:gap-2',
                  idx === 5 &&
                    cn(
                      'list-none w-auto border border-white bg-[image:var(--bg-system)] align-center flex-row !gap-8 !pl-4  px-4 md:flex-col md:!gap-2 md:!p-[6px] md:!w-[193px] md:z-0'
                    )
                )
              "
            >
              <span
                :class="
                  cn(
                    'absolute',
                    feature.positionDot,
                    idx !== 5 && cn('md:hidden')
                  )
                "
              >
                <img src="/images/dot.png" alt="dot" />
              </span>

              <li
                v-for="(item, index) in feature.items"
                :class="
                  cn(
                    'text-g2',
                    feature.classNameItem,
                    idx === 5 && cn('md:w-[181px] text-center md:z-[2]')
                  )
                "
                :key="index"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const features = [
  {
    title: "Quản lý giao dịch",
    items: [
      "Báo cáo doanh thu",
      "Danh sách lệnh giao dịch",
      "Duyệt lệnh giao dịch",
      "Theo dõi hợp đồng và trạng thái thanh toán",
      "Tiến độ công việc",
    ],
    position:
      "top-[19.2%] left-[-0.7%]  md:pr-2 2xl:left-[-8%] 2xl:top-[21.5%] md:relative md:top-auto md:left-auto md:order-1 md:pl-12 ",
    positionDot: "right-0 translate-x-1/2 top-1/2 -translate-y-1/2",
    classNameTitle:
      "top-1/2 -translate-y-1/2 left-[108%] md:relative md:top-auto md:left-auto md:translate-y-0",
  },
  {
    title: "Quản lý khách hàng",
    items: [
      "Khách hàng tiềm năng",
      "Khách hàng đã có giao dịch",
      "Lịch sử chăm sóc khách hàng",
    ],
    position:
      "left-[-0.5%] top-[49.6%] -translate-y-1/2  md:pr-2 2xl:left-[-8%] 2xl:top-[64.1%] md:relative md:top-auto md:left-auto md:translate-y-0 md:order-2 md:pl-12",
    positionDot: "right-0 translate-x-1/2 top-1/2 -translate-y-1/2",
    classNameTitle:
      "top-1/2 -translate-y-1/2 left-[108%] md:relative md:top-auto md:left-auto md:translate-y-0",
  },
  {
    title: "Mạng xã hội nội bộ",
    items: [
      "Chia sẻ khoảnh khắc",
      "Đăng tin tức về ngành",
      "Quản lý sự kiện công ty",
      "Chat nội bộ",
    ],
    position:
      "bottom-[10.2%] left-1/2 -translate-x-1/2  md:pr-2 2xl:bottom-[4%] md:relative md:bottom-auto md:left-auto md:translate-x-0 md:order-5 md:pl-12",
    positionDot: "left-1/2 -translate-x-1/2 top-0 -translate-y-1/2",
    classNameTitle:
      "left-1/2 -translate-x-1/2 bottom-[115%] md:relative md:bottom-auto md:left-auto md:translate-x-0",
  },
  {
    title: "Hoa hồng cho sales",
    items: ["Tự động tính hoa hồng", "Rút tiền dễ dàng", "Lịch sử trả thưởng"],
    position:
      "right-[-0.6%] bottom-[44.5%] md:pl-8 md:pr-2 2xl:right-[-8%] 2xl:bottom-[27.7%] md:relative md:bottom-auto md:right-auto md:order-4 md:pl-12",
    positionDot: "left-0 -translate-x-1/2 top-1/2 -translate-y-1/2",
    classNameTitle:
      "top-1/2 -translate-y-1/2 right-[108%] md:relative md:top-auto md:right-auto md:translate-y-0",
  },
  {
    title: "Quản lý nhân viên/ môi giới",
    items: [
      "Quản lý thông tin nhân sự",
      "Quản lý sơ đồ tổ chức, cấp bậc, doanh thu cá nhân",
      "Quản lý bảng công nhân viên",
      "Quản lý đơn từ",
      "Tự động xét thưởng, thăng cấp",
    ],
    position:
      "right-[-0.6%] top-[28.9%] -translate-y-1/2 md:pl-8 md:pr-2 2xl:right-[-8%] 2xl:top-[35.2%] md:relative md:top-auto md:right-auto md:translate-y-0 md:order-3 md:pl-12",
    positionDot: "left-0 -translate-x-1/2 top-1/2 -translate-y-1/2",
    classNameTitle:
      "top-1/2 -translate-y-1/2 right-[108%] md:relative md:top-auto md:right-auto md:translate-y-0",
  },
  {
    title: "Quản lý giỏ hàng",
    items: ["Danh sách sản phẩm", "Quản lý người đứng tên"],
    position: "top-[12.7%] left-1/2 -translate-x-1/2     md:top-0",
    positionDot:
      "left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 2xl:left-[50.8%] ",
    classNameTitle:
      "left-1/2 -translate-x-1/2 top-[145%] md:!w-[135px] md:top-[115%]",
    classNameItem:
      "py-[6px] px-2 bg-white rounded shadow-[0px_4px_60px_0px_#8195BE29] w-[195px] ",
  },
];
</script>
