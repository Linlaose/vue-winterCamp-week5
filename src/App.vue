<script>
import axios from "axios";

// import UserProductModalComponent from "./components/UserProductModal/UserProductModalComponent.vue";
import ProductsComponent from "./components/Products/ProductsComponent.vue";
import CartsComponent from "./components/Carts/CartsComponent.vue";
import FormComponent from "./components/Form/FormComponent.vue";

export default {
  data() {
    return {
      apiUrl: "https://vue3-course-api.hexschool.io",
      apiPath: "ryantsai",
      products: [],
    };
  },
  components: {
    ProductsComponent,
    // UserProductModalComponent,
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
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<template>
  <div class="container">
    <div class="mt-4">
      <!-- <user-product-modal-component :parentProducts="products" /> -->
      <products-component
        :api-url="apiUrl"
        :api-path="apiPath"
        :parentProducts="products"
      />
      <carts-component />
      <form-component />
    </div>
  </div>
</template>
