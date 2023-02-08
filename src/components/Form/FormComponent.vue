<script>
import {
  Form as VForm,
  Field as VField,
  ErrorMessage,
  defineRule,
  configure,
} from "vee-validate";
import AllRules from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import zh_TW from "@vee-validate/i18n/dist/locale/zh_TW.json";
import axios from "axios";

localize({ zh_TW });

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({
    zh_TW,
  }),
});

export default {
  props: {
    apiPath: String,
    apiUrl: String,
    getCarts: Function,
  },
  components: {
    VForm,
    VField,
    ErrorMessage,
  },
  data() {
    return {
      text: null,
    };
  },
  methods: {
    onSubmit(values, { resetForm }) {
      const { address, email, name, phone } = values;
      const data = {
        user: {
          address,
          email,
          name,
          tel: phone,
        },
        message: this.text,
      };
      const url = `${this.apiUrl}/v2/api/${this.apiPath}/order`;

      axios
        .post(url, { data })
        .then((res) => {
          alert(res.data.message);
          this.text = null;
          resetForm();
          this.getCarts();
        })
        .catch((err) => {
          alert(err);
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value)
        ? true
        : value
        ? "需要正確的電話號碼"
        : "電話號碼 為必填";
    },
  },
};
</script>

<template src="./template.html"></template>
