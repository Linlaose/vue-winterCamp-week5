<script>
import UserProductModalComponent from "./components/UserProductModal/UserProductModalComponent.vue";
import ProductsComponent from "./components/Products/ProductsComponent.vue";
import CartsComponent from "./components/Carts/CartsComponent.vue";
import FormComponent from "./components/Form/FormComponent.vue";

export default {
  components: {
    ProductsComponent,
    UserProductModalComponent,
    CartsComponent,
    FormComponent,
  },
  methods: {},
};
</script>

<template>
  <div class="container">
    <div class="mt-4">
      <user-product-modal-component />
      <products-component />
      <carts-component />
      <form-component />
    </div>
  </div>
</template>
