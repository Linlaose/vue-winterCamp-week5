<script>
export default {
  props: {
    carts: Object,
    apiUrl: String,
    apiPath: String,
  },
  data() {
    return {
      cart: {},
      diffTotal: null,
      total: null,
    };
  },
  methods: {
    updateData(val, evt) {
      console.log(evt);
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
