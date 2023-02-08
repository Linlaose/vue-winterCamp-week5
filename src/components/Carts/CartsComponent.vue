<script>
import axios from "axios";
import _ from "lodash";

export default {
  props: {
    carts: Object,
    apiUrl: String,
    apiPath: String,
    getCarts: Function,
  },
  data() {
    return {
      cart: {},
      diffTotal: null,
      total: null,
    };
  },
  methods: {
    updateCart: _.debounce(function (productId, qty) {
      this.updateData(productId, qty);
    }, 500),
    updateData(productId, qty) {
      const url = `${this.apiUrl}/v2/api/${this.apiPath}/cart/${productId}`;
      const data = {
        product_id: productId,
        qty,
      };

      axios
        .put(url, { data })
        .then(() => {
          this.getCarts();
        })
        .catch((err) => {
          alert(err);
        });
    },
    deleteCart(productId) {
      const url = `${this.apiUrl}/v2/api/${this.apiPath}/cart/${productId}`;

      axios
        .delete(url)
        .then((res) => {
          alert(res.data.message);
          this.getCarts();
        })
        .catch((err) => {
          alert(err);
        });
    },
    deleteAllCart() {
      const url = `${this.apiUrl}/v2/api/${this.apiPath}/carts`;

      axios
        .delete(url)
        .then(() => {
          alert("已清空購物車");
          this.getCarts();
        })
        .catch((err) => alert(err));
    },
  },
  watch: {
    carts: {
      handler(newVal) {
        this.diffTotal = newVal
          .map((item) => item.product.price * item.qty)
          .reduce((a, b) => {
            return a + b;
          }, 0);
        this.total = newVal
          .map((item) => item.product.origin_price * item.qty)
          .reduce((a, b) => {
            return a + b;
          }, 0);
      },
      deep: true,
    },
  },
};
</script>

<template src="./template.html"></template>
