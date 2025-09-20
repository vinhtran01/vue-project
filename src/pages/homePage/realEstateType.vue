<script setup>
import ArrowIcon from "@/assets/icons/arrow_slider.svg";
import { computed, ref } from "vue";
import { cn } from "@/lib/utils";

const images = ref(dataInitial?.map((item) => item.image));
const activeIndex = ref(1);

const handleImageClick = (index) => {
  const clickedImage = images.value[index];
  const prevImage =
    images.value[index - 1] || images.value[images.value.length - 1];
  const newImages = [
    prevImage,
    clickedImage,
    ...images.value.slice(index + 1),
    ...images.value.slice(0, index - 1),
    ...(index.value > 0 ? [images.value[0]] : []),
  ].filter((img, i, arr) => arr.indexOf(img) === i);

  images.value = newImages;
  activeIndex.value = 1;
};

const currentDataType = computed(() => {
  return dataInitial?.find(
    (item) => item.image === images.value[activeIndex.value]
  );
});

const handlePrevClick = () => {
  const prevIndex =
    activeIndex.value - 1 < 0 ? images.value.length - 1 : activeIndex.value - 1;
  handleImageClick(prevIndex);
};

const handleNextClick = () => {
  const nextIndex =
    activeIndex.value + 1 >= images.value.length ? 0 : activeIndex.value + 1;
  handleImageClick(nextIndex);
};
</script>

<template>
  <div
    class="py-[100px] px-4 lg:py-[80px] sm:pt-[40px] sm:pb-[24px] bg-white overflow-hidden"
    id="real-estate-type"
  >
    <div class="w-full max-w-[1482px] mx-auto">
      <h2
        class="text-[36px] leading-[140%] tracking-[-3%] text-center font-semibold xl:text-[32px] md:text-[24px] sm:text-[20px]"
      >
        Quản lý mọi loại hình <br />
        BĐS dễ dàng trên một nền tảng
      </h2>
      <div class="tab-type hidden md:flex items-center gap-1 overflow-auto">
        <div
          v-for="(item, index) in dataInitial"
          :key="{ index }"
          :class="
            cn(
              'py-2 px-3 text-[12px]  font-medium whitespace-nowrap rounded-[80px] mt-4 inline-block',
              index === activeIndex
                ? 'bg-primary-2 text-white'
                : 'border border-border text-[#2A2B2D]'
            )
          "
          @click="handleImageClick(index)"
        >
          {{ item.label }}
        </div>
      </div>
      <div class="mt-10 sm:mt-6">
        <div
          class="bg-[image:var(--bg-type)] rounded-3xl p-10 pb-13 min-h-[415px] relative flex justify-end xl:pr-4 xl:pb-6 xl:min-h-[350px] lg:pl-[400px] md:px-0 md:!bg-[image:none] md:py-0"
        >
          <p
            class="text-[48px] font-bold text-type_border opacity-25 absolute transform -rotate-90 left-[-105px] top-[140px] lg:hidden"
          >
            Commerce
          </p>
          <div
            class="w-full max-w-[700px] 2xl:max-w-[660px] xl:max-w-full xl:pl-[420px] lg:pl-0 lg:max-w-full"
          >
            <div class="flex items-center justify-between md:hidden">
              <p class="text-sm text-g1">
                <span
                  class="text-[32px] leading-[130%] text-primary-2 font-avo"
                >
                  {{
                    dataInitial?.findIndex(
                      (item) => item.image === images[activeIndex]
                    ) + 1
                  }}
                  /
                </span>
                {{ dataInitial?.length }}
              </p>
              <div class="flex gap-3 items-center">
                <div
                  class="slide-action w-[42px] h-[42px] rounded cursor-pointer flex items-center justify-center border border-primary-2 transition-all ease-linear hover:bg-primary-2"
                  @click="handlePrevClick"
                >
                  <ArrowIcon />
                </div>
                <div class="w-[1px] h-[42px] bg-border"></div>
                <div
                  class="slide-action w-[42px] h-[42px] rounded cursor-pointer flex items-center justify-center border border-primary-2 transition-all ease-linear hover:bg-primary-2 transform-[rotate(180deg)]"
                  @click="handleNextClick"
                >
                  <ArrowIcon />
                </div>
              </div>
            </div>
            <div
              class="w-full h-auto rounded-lg aspect-[1/1] overflow-hidden mx-auto max-w-[600px] hidden md:block"
            >
              <img
                :src="currentDataType?.image"
                alt=""
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div class="flex flex-col gap-3 mt-5">
              <p class="text-xl font-semibold text-background-b3 sm:text-base">
                {{ currentDataType?.label }}
              </p>
              <div
                class="py-2 px-4 bg-[#E5FFF3] border-l-2 border-primary-2 text-base font-medium text-primary-2 italic sm:text-sm"
              >
                {{ currentDataType?.desc }}
              </div>
              <ul class="list-disc flex flex-col gap-1 pl-5">
                <li
                  v-for="(item, index) in currentDataType?.text"
                  class="text-base text-g2 marker:text-g2"
                  :key="index"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="flex items-end gap-10 h-[533px] mt-[-375px] 2xl:gap-6 xl:gap-4 2xl:pl-25 xl:pl-15 lg:pl-4 md:hidden 2xl:overflow-hidden"
        >
          <div
            v-for="(image, index) in images"
            :key="{ image }"
            :class="
              cn(
                'type_img relative min-w-[208px] h-auto aspect-[208/153]   cursor-pointer   after:w-full after:h-full after:absolute after:top-0 after:left-0  after:bg-[#12152780] after:z-[1] xl:min-w-[180px]',
                activeIndex === index
                  ? 'min-w-[409px] aspect-[409/553] after:hidden xl:min-w-[360px] img_active'
                  : 'border border-border ',
                index === 0 && '2xl:hidden',
                'rounded-lg overflow-hidden'
              )
            "
            @click="handleImageClick(index)"
          >
            <p
              :class="
                cn(
                  'absolute z-10  text-sm font-medium rounded-[80px] py-[5px] px-3  left-3 bottom-2 ',
                  activeIndex === index
                    ? 'bg-primary-2 text-white'
                    : 'text-[#2A2B2D] bg-white'
                )
              "
            >
              {{ dataInitial.find((item) => item.image === image)?.label }}
            </p>
            <img
              :src="image"
              :alt="('Thumbnail', index + 1)"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dataInitial = [
  {
    label: "BĐS Nhà phố",
    image: "/images/type_img1.png",
    desc: "Từ đất nền, nhà phố đến dự án nghỉ dưỡng hay shophouse, LANDOFFICE giúp bạn quản lý giỏ hàng, giao dịch và khách hàng cho từng loại sản phẩm chỉ trong một hệ thống duy nhất.",
    text: [
      "Quản lý sản phẩm theo loại hình, dự án, block và lô chi tiết",
      "Theo dõi chính xác chủ sở hữu và trạng thái giao dịch từng sản phẩm",
      "Dễ dàng cập nhật giỏ hàng real-time khi có phát sinh giao dịch",
      "Nắm rõ khối lượng sản phẩm đang mở bán, giữ chỗ hoặc đã chốt deal",
    ],
  },
  {
    label: "BĐS Thương mại",
    image: "/images/type_img2.png",
    desc: "LANDOFFICE hỗ trợ theo dõi tình trạng mặt bằng cho thuê, doanh thu và khách thuê trong các trung tâm thương mại hoặc tòa nhà văn phòng.",
    text: [
      "Quản lý chi tiết từng mặt bằng hoặc tầng",
      "Theo dõi thời hạn hợp đồng thuê, gia hạn và thanh toán",
      "Cập nhật real-time tình trạng cho thuê và doanh thu",
      "Tự động nhắc nhở các mốc gia hạn, thanh toán",
    ],
  },
  {
    label: "BĐS Công nghiệp",
    image: "/images/type_img3.png",
    desc: "LANDOFFICE giúp bạn kiểm soát hiệu quả bất động sản công nghiệp như nhà xưởng, kho bãi, khu công nghiệp với thông tin minh bạch và chính xác.",
    text: [
      "Quản lý tài sản công nghiệp theo khu, lô, diện tích sử dụng",
      "Theo dõi trạng thái thuê, thời hạn và hợp đồng liên quan",
      "Phân tích hiệu quả khai thác từng khu vực hoặc đối tác thuê",
      "Kết nối dễ dàng với khách hàng và đối tác vận hành",
    ],
  },
  {
    label: "BĐS Nghỉ dưỡng",
    image: "/images/type_img4.png",
    desc: "LANDOFFICE hỗ trợ bạn trong việc quản lý biệt thự, căn hộ nghỉ dưỡng, condotel… với dữ liệu trực quan và tiện ích kết nối khách hàng nhanh chóng.",
    text: [
      "Theo dõi tình trạng khai thác, thời gian trống hoặc đặt chỗ",
      "Liên kết dễ dàng với hệ thống đặt phòng hoặc chủ sở hữu",
      "Cập nhật tình hình doanh thu, tỉ lệ lấp đầy real-time",
      "Phân quyền và chia sẻ thông tin cho từng đối tác quản lý",
    ],
  },
  {
    label: "BĐS Shophouse",
    image: "/images/type_img5.png",
    desc: "LANDOFFICE cho phép bạn dễ dàng kiểm soát danh mục Shophouse theo dự án, chủ sở hữu, tình trạng kinh doanh và hợp đồng liên quan.",
    text: [
      "Quản lý từng căn Shophouse với dữ liệu vị trí, diện tích",
      "Cập nhật trạng thái kinh doanh và thay đổi người thuê",
      "Tích hợp thông tin hợp đồng, thời hạn và thanh toán",
      "Hỗ trợ báo cáo doanh thu và hiệu suất kinh doanh",
    ],
  },
  {
    label: "BĐS Đất nền",
    image: "/images/type_img6.png",
    desc: "LANDOFFICE hỗ trợ quản lý chi tiết từng nền đất theo sơ đồ phân lô, tình trạng pháp lý và tiến độ giao dịch trong một hệ thống thống nhất.",
    text: [
      "Theo dõi chi tiết vị trí, diện tích và sơ đồ phân lô",
      "Quản lý trạng thái pháp lý từng nền",
      "Cập nhật nhanh tiến độ giữ chỗ, đặt cọc, công chứng",
      "Tự động thống kê số lượng nền đã bán hoặc còn lại",
    ],
  },
];
</script>
