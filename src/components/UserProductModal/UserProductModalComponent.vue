<script>
import axios from "axios";
import * as Bootstrap from "bootstrap"; // 只能這樣才有辦法創 Modal 有其他方法嗎??

export default {
  props: {
    product: Object,
    apiUrl: String,
    apiPath: String,
  },
  data() {
    return {
      productModal: null,
      tempProduct: {},
    };
  },
  mounted() {
    this.productModal = new Bootstrap.Modal(this.$refs.modal, {
      backdrop: "static",
    });
  },
  methods: {
    addToCart(productId, qty = 1) {
      const url = `${this.apiUrl}/v2/api/${this.apiPath}/cart`;
      const data = {
        product_id: productId,
        qty,
      };

      axios
        .post(url, { data })
        .then((res) => {
          alert(res.data.message);
          this.productModal.hide();
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
  watch: {
    product(newVal) {
      this.tempProduct = newVal;
      this.productModal.show();
    },
  },
};
</script>

<template src="./template.html"></template>
