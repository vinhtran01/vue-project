<script setup>
import Button from "@/components/ui/button.vue";
import Arrow from "@/assets/icons/arrow_btn.svg";
import useInView from "@/composables/useInView";
import { computed, ref, watch } from "vue";
import { useAppStore } from "@/stores/store";
import Modal from "@/components/ui/modal.vue";
import ModalSupport from "@/components/modalSupport.vue";

const openModal = ref(false);
const modalType = ref("consultation");
const isInView = useInView("banner");
const appStore = useAppStore();
const user = computed(() => appStore.user);

const handleOpenModal = (type) => {
  modalType.value = type;
  openModal.value = true;
};
const handleUpdateUser = () => {
  {
    appStore.updateStore("user", {
      name: "Thanh",
      email: "RmE6t@example.com",
      phone: "0123456789",
    });
  }
};
console.log("user", user);
</script>

<template>
  <div
    class="w-[calc(100vw-32px)] md:w-[calc(100vw-12px)] lg-small:w-[calc(100vw-24px)] mx-auto relative pb-13 md:pb-0"
    id="banner"
  >
    <div
      v-if="isInView"
      class="rounded-3xl bg-[url(/images/bg-banner.jpg)] bg-cover z-[-1] h-[calc(100vh-32px)] w-[calc(100vw-44px)] md:h-[600px] sm:h-[400px] bg-no-repeat fixed top-4 left-1/2 -translate-x-1/2 md:rounded-xl lg:rounded-2xl lg-small:rounded-xl 2xl:w-[calc(100vw-32px)] lg:w-[calc(100vw-24px)] md:w-[calc(100vw-12px)] lg-small:w-[calc(100vw-24px)] lg:top-2 md:absolute md:top-0"
    ></div>

    <div
      class="relative z-10 w-full px-4 pt-[130px] md:pt-[100px] sm:pt-[77px]"
    >
      <div class="w-full max-w-[1270px] mt-[75px] mx-auto 2xl:mt-5">
        <p
          class="text-white font-semibold leading-[130%] text-[48px] text-center 2xl:text-[40px] xl:text-[32px] md:text-[24px] sm:text-[20px] sm:max-w-[290px] mx-auto"
        >
          <span class="sm:block">
            LandOffice phần mềm quản lý bất động sản cho Đại lý và Sàn giao dịch
          </span>
          <span
            class="w-[52px] h-[52px] inline-flex justify-center items-center rounded-full bg-[#FFFFFF29] border border-[#FFFFFF80] shadow-[var(--shadow-icon-banner)] lg:w-8 lg:h-8 sm:w-7 sm:h-7"
          >
            <img
              src="/images/logo_small.png"
              class="w-7 lg:w-6 sm:w-5"
              alt=""
            />
          </span>
          số 1 tại Việt Nam
        </p>
        <p
          class="text-[18px] mt-6 text-white text-center max-w-[930px] lg:text-base md:text-sm sm:hidden mx-auto"
        >
          Quản lý toàn diện, quy trình từ giỏ hàng, booking, giao dịch tính hoa
          hồng, quản lý khách hàng và đội sales hiệu quả, tích hợp đầy đủ tính
          năng quản lý văn phòng từ chấm công, check in, đơn từ....
        </p>
        <div
          class="flex justify-center mt-12 gap-6 items-center sm:gap-3 sm:mt-6"
        >
          <Button
            variant="default"
            class-name=" w-[255px]  sm:w-[135px] sm:!text-sm sm:h-[40px]"
            @click="handleUpdateUser"
          >
            Demo miễn phí
            <span class="flex items-center sm:hidden">
              <Arrow />
            </span>
          </Button>
          <Button
            variant="outline"
            class-name="btn-support w-[255px]  sm:w-[135px] sm:!text-sm sm:h-[40px]"
            @click.stop="handleOpenModal('consultation')"
          >
            Gọi tư vấn {{ user?.name }}
            <span class="flex items-center sm:hidden">
              <Arrow />
            </span>
          </Button>
        </div>
      </div>
      <div
        class="w-full max-w-[1200px] mt-19 rounded-3xl mx-auto border-[12px] border-[#FFFFFF52] overflow-hidden 2xl:max-w-[1000px] 2xl:mt-15 xl:max-w-[900px] sm:max-w-[323px] sm:mt-8 sm:border-[2px] sm:border-white sm:rounded-lg"
      >
        <img
          src="/images/banner.jpg"
          alt=""
          class="w-full rounded-xl relative z-10 sm:rounded-lg"
        />
      </div>
    </div>
    <Modal
      :isOpen="openModal"
      @close="openModal = false"
      title="ĐĂNG KÝ TƯ VẤN VÀ DEMO MIỄN PHÍ"
    >
      <ModalSupport />
    </Modal>
  </div>
</template>
