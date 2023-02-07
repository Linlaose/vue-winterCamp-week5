<script>
import axios from "axios";

import UserProductModal from "../UserProductModal/UserProductModalComponent.vue";

export default {
  props: {
    apiUrl: String,
    apiPath: String,
    parentProducts: Object,
  },
  data() {
    return {
      // loadingStatus: {
      //   loadingItem: "",
      // },
      products: [],
      product: {},
      // form: {
      //   user: {
      //     name: "",
      //     email: "",
      //     tel: "",
      //     address: "",
      //   },
      //   message: "",
      // },
    };
  },
  components: {
    UserProductModal,
  },
  methods: {
    openModal(productId) {
      const url = `${this.apiUrl}/v2/api/${this.apiPath}/product/${productId}`;
      axios
        .get(url)
        .then((res) => {
          this.product = res.data.product;
        })
        .catch((err) => {
          alert(err);
        });
    },
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
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
  watch: {
    parentProducts(newVal) {
      this.products = newVal;
    },
  },
};
</script>

<template src="./template.html"></template>
