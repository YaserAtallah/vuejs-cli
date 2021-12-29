<template>
  <div id="contact-page" class="container">
    <div class="bg">
      <div class="row" style="margin-bottom: 50px">
        <div class="col-sm-12">
          <h2 class="title text-center">إضافة منتج جديد</h2>
          <!--<div id="gmap" class="contact-map">
					</div>-->
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <div class="contact-form">
            <div class="status alert alert-success" style="display: none"></div>
            <form
              id="main-contact-form"
              class="contact-form row"
              name="contact-form"
            >
              <div for="name" class="form-group col-md-6">
                <input
                  type="text"
                  id="name"
                  class="form-control"
                  required="required"
                  placeholder="اسم المنتج"
                  v-model="this.title"
                />
              </div>
              <div for="price" class="form-group col-md-6">
                <input
                  type="number"
                  id="price"
                  name="price"
                  class="form-control"
                  required="required"
                  placeholder="السعر"
                  v-model="this.price"
                />
              </div>
              <div from="product" class="form-group col-md-6">
                <select
                  id="product"
                  name="product"
                  class="form-control"
                  v-model="this.cat"
                >
                  <option
                    v-for="cat in this.$store.state.ArrCat"
                    :key="cat"
                    v-bind:value="cat"
                  >
                    {{ cat }}
                  </option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <input
                  type="file"
                  name="image"
                  class="form-control"
                  placeholder="اختر صورة المنتج"
                />
              </div>
              <div for="notes" class="form-group col-md-12">
                <textarea
                  type="text"
                  name="notes"
                  id="notes"
                  required="required"
                  class="form-control"
                  rows="8"
                  placeholder="وصف المنتج أو نبذة عنه"
                  v-model="this.note"
                ></textarea>
              </div>
              <div class="form-group col-md-12">
                <input
                  type="button"
                  name="submit"
                  class="btn btn-primary pull-right"
                  value="اضافة"
                  @click="saveProduct()"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/#contact-page-->
</template>

<script>
export default {
  name: "create",
  data() {
    return {
      title: "",
      price: "",
      cat: "",
      note: "",
      img: "./images/products/8.jpeg",
    };
  },
  methods: {
    saveProduct() {
      const d = new Date();
      if (
        this.title !== "" &&
        this.price !== "" &&
        this.cat !== "" &&
        this.note !== ""
      ) {
        this.$store.state.products.push({
          id: this.$store.state.counter++,
          title: this.title,
          price: this.price,
          cat: this.cat,
          note: this.note,
          img: this.img,
          date: d.toLocaleString(),
        });
        this.$router.push("panel");
      }
    },
  },
};
</script>