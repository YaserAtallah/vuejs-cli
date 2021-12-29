import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 0,
        cat: "اكسسوريز",
        date: "12/28/2021, 8:44:41 PM",
        img: "./images/products/8.jpeg",
        note: "wadawd",
        price: 123,
        title: "prod 550",
      },
      {
        id: 1,
        cat: "اكسسوريز",
        date: "12/28/2021, 8:44:41 PM",
        img: "./images/products/8.jpeg",
        note: "wadawd",
        price: 456,
        title: "prod 16000",
      },
      {
        id: 2,
        cat: "اكسسوريز",
        date: "12/28/2021, 8:44:41 PM",
        img: "./images/products/8.jpeg",
        note: "wadawd",
        price: 789,
        title: "prod 89",
      },
      {
        id: 3,
        cat: "اكسسوريز",
        date: "12/28/2021, 8:44:41 PM",
        img: "./images/products/8.jpeg",
        note: "wadawd",
        price: 951,
        title: "prod 1",
      },
    ],
    product: [],
    ArrCat: [
      "اكسسوريز",
      "عنايه",
      "مكياج",
      "شنط",
      "عطور",
      "اجهزه",
      "ملابس نساء",
      "رجال",
    ],
    counter: -1,
    keyword: "",
    filteredProducts() {
      console.log(this.products);
      return this.products.filter((key) => {
        if (
          key.title.toLowerCase().includes(this.keyword.toLowerCase()) ||
          key.price.toString().includes(this.keyword.toLowerCase())
        ) {
          return this.products;
        }
      });
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
