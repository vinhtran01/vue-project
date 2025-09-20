<script setup>
import FieldItem from "@/components/ui/fieldItem.vue";
import InputField from "@/components/ui/input.vue";
import TextareaField from "@/components/ui/textarea.vue";
import UserIcon from "@/assets/icons/user.svg";
import EmailIcon from "@/assets/icons/email.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import ContentIcon from "@/assets/icons/content.svg";
import Button from "./ui/button.vue";
import Arrow from "@/assets/icons/arrow_btn.svg";
import { reactive, ref } from "vue";
import * as yup from "yup";
import { useField, useForm } from "vee-validate";

const dataForm = [
  {
    label: "Họ và tên",
    type: "text",
    name: "fullName",
    icon: UserIcon,
    required: true,
    placeholder: "Họ tên người liên hệ",
  },
  {
    label: "Số điện thoại",
    type: "tel",
    name: "phoneNumber",
    icon: PhoneIcon,
    required: true,
    placeholder: "Số điện thoại",
  },
  {
    label: "Email",
    type: "text",
    name: "email",
    icon: EmailIcon,
    required: true,
    placeholder: "Email",
  },
  {
    label: "Nội dung",
    type: "text",
    name: "content",
    icon: ContentIcon,
    required: false,
    placeholder: "Nội dung...",
  },
];

const schema = yup.object({
  fullName: yup.string().required("Vui lòng nhập họ và tên"),
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  phoneNumber: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .matches(/^\+?\d{10,}$/, "Số điện thoại không hợp lệ"),
  content: yup.string().optional(),
});

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    fullName: "",
    email: "",
    phoneNumber: "",
    content: "",
  },
});

const fields = {
  fullName: useField("fullName"),
  email: useField("email"),
  phoneNumber: useField("phoneNumber"),
  content: useField("content"),
};

const onSubmit = handleSubmit((values) => {
  console.log("Form submitted:", values);
  resetForm();
});
</script>

<template>
  <form @submit="onSubmit" class="flex flex-col gap-6 sm:gap-5">
    <div class="flex flex-col gap-5 sm:gap-4">
      <FieldItem
        v-for="item in dataForm"
        :key="item.name"
        :label="item.label"
        :required="item.required"
        :error="errors[item.name]"
      >
        <TextareaField
          v-if="item.name === 'content'"
          :icon="item.icon"
          :placeholder="item.placeholder"
          :rules="fields[item.name].value"
          :name="item.name"
        />
        <InputField
          v-else
          :icon="item.icon"
          :placeholder="item.placeholder"
          :rules="fields[item.name].value"
          :name="item.name"
        />
      </FieldItem>
    </div>

    <Button
      type="submit"
      variant="default"
      size="lg"
      class="w-full bg-[#00B24E] text-base"
    >
      Yêu cầu tư vấn
      <span class="flex items-center sm:hidden">
        <Arrow />
      </span>
    </Button>
  </form>
</template>
