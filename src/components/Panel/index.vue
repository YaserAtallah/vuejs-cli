<template>
  <section id="cart_items">
    <div class="container text-right">
      <div class="breadcrumbs">
        <ol class="breadcrumb">
          <li><router-link to="/">الرئيسية</router-link></li>
          <li class="active">لوحة التحكم</li>
        </ol>
      </div>

      <h4 class="addition">
        <router-link to="/create">اضافة منتج جديد</router-link>
      </h4>

      <div class="table-responsive cart_info">
        <table class="table table-condensed">
          <thead>
            <tr class="cart_menu">
              <td class="image">المنتج</td>
              <td class="description"></td>
              <td class="description">الصنف</td>
              <td class="price">السعر</td>
              <td class="price">تاريخ الاضافة</td>
              <td class="total">العمليات</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product">
              <td class="cart_product">
                <img :src="product.img" alt="" />
              </td>
              <td class="cart_description">
                <h4>
                  {{ product.title }}
                </h4>
              </td>
              <td class="cart_description">
                <h4>
                  {{ product.cat }}
                </h4>
              </td>
              <td class="cart_price">
                <p>${{ product.price }}</p>
              </td>
              <td class="cart_description">
                <p>{{ product.date }}</p>
              </td>
              <td class="cart_delete">
                <a class="cart_quantity_delete" @click="deleteItem(product)"
                  ><i class="fa fa-times"></i
                ></a>
                <a class="cart_quantity_delete" @click="editItem(product)"
                  ><i class="fa fa-pencil-square-o"></i
                ></a>
                <a class="cart_quantity_delete" @click="details(product)"
                  ><i class="fa fa-info-circle"></i
                ></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <!--/#cart_items-->
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      products: this.$store.state.products,
    };
  },
  methods: {
    deleteItem(product) {
      // console.log(this.products.indexOf(product));
      this.products.splice(this.products.indexOf(product), 1);
    },
    editItem(product) {
      this.$store.state.product.splice(0);

      this.$store.state.product.push(product);
      this.$router.push("edit");
    },
    details(product) {
      this.$store.state.product.splice(0);

      this.$store.state.product.push(product);
      this.$router.push("details");
    },
  },
};
</script>

<style scoped>
img {
  width: 70px;
}
.addition {
  margin-bottom: 3rem;
}
</style>