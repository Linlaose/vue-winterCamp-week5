<script>
import axios from "axios";

import ProductsComponent from "./components/Products/ProductsComponent.vue";
import CartsComponent from "./components/Carts/CartsComponent.vue";
import FormComponent from "./components/Form/FormComponent.vue";

export default {
  data() {
    return {
      apiUrl: "https://vue3-course-api.hexschool.io",
      apiPath: "ryantsai",
      products: [],
      carts: [],
    };
  },
  components: {
    ProductsComponent,
    CartsComponent,
    FormComponent,
  },
  methods: {
    getProducts() {
      const url = `${this.apiUrl}/v2/api/${this.apiPath}/products/all`;

      axios
        .get(url)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          alert(err);
        });
    },
    getCarts() {
      const url = `${this.apiUrl}/v2/api/${this.apiPath}/cart`;

      axios
        .get(url)
        .then((res) => {
          this.carts = res.data.data.carts;
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
  mounted() {
    this.getProducts();
    this.getCarts();
  },
};
</script>

<template>
  <div class="container">
    <div class="mt-4">
      <products-component
        :api-url="apiUrl"
        :api-path="apiPath"
        :parentProducts="products"
      />
      <carts-component :carts="carts" :api-url="apiUrl" :api-path="apiPath" />
      <form-component />
    </div>
  </div>
</template>
