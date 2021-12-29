<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <div class="left-sidebar">
            <h2>الأقسام</h2>
            <div class="panel-group category-products" id="accordian">
              <!--category-productsr-->

              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="accessories.html">اكسسوريز</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="attention.html">عنايه</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="makeup.html">مكياج</a></h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="bags.html">شنط</a></h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="perfumes.html">عطور</a></h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="devices.html">اجهزه</a></h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="women.html">ملابس نساء</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="men.html">رجال</a></h4>
                </div>
              </div>
            </div>
            <!--/category-products-->
          </div>
        </div>

        <div class="col-sm-9 padding-right">
          <div class="product-details">
            <!--product-details-->
            <div class="col-sm-5">
              <div class="view-product">
                <img :src="this.img" alt="" />
                <!--<h3>ZOOM</h3>-->
              </div>
              <div
                id="similar-product"
                class="carousel slide"
                data-ride="carousel"
              >
                <!-- Wrapper for slides -->
                <div class="carousel-inner">
                  <div class="item active">
                    <a
                      ><img src="images/product-details/similar1.jpg" alt=""
                    /></a>
                    <a
                      ><img src="images/product-details/similar2.jpg" alt=""
                    /></a>
                    <a
                      ><img src="images/product-details/similar3.jpg" alt=""
                    /></a>
                  </div>
                  <div class="item">
                    <a
                      ><img src="images/product-details/similar1.jpg" alt=""
                    /></a>
                    <a
                      ><img src="images/product-details/similar2.jpg" alt=""
                    /></a>
                    <a
                      ><img src="images/product-details/similar3.jpg" alt=""
                    /></a>
                  </div>
                  <div class="item">
                    <a
                      ><img src="images/product-details/similar1.jpg" alt=""
                    /></a>
                    <a
                      ><img src="images/product-details/similar2.jpg" alt=""
                    /></a>
                    <a
                      ><img src="images/product-details/similar3.jpg" alt=""
                    /></a>
                  </div>
                </div>

                <!-- Controls -->
                <a
                  class="left item-control"
                  href="#similar-product"
                  data-slide="prev"
                >
                  <i class="fa fa-angle-right"></i>
                </a>
                <a
                  class="right item-control"
                  href="#similar-product"
                  data-slide="next"
                >
                  <i class="fa fa-angle-left"></i>
                </a>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="product-information text-right">
                <!--/product-information-->
                <img
                  src="images/product-details/new.jpg"
                  class="newarrival"
                  alt=""
                />
                <h2>{{ this.title }}</h2>
                <img src="images/product-details/rating.png" alt="" />
                <span>
                  <span> ${{ this.price }}</span>
                  <label>عدد القطع:</label>
                  <input type="text" value="3" />
                  <button type="button" class="btn btn-fefault cart">
                    <i class="fa fa-shopping-cart"></i>
                    أضف الى العربة
                  </button>
                </span>
                <p><b>التوفر:</b> في المتجر</p>
                <!--<p><b>Condition:</b> New</p>-->
                <p><b>الماركة:</b> أديداس</p>
                <p><b>الصنف:</b> {{ this.cat }}</p>
                <!--<a ><img src="images/product-details/share.png" class="share img-responsive"  alt="" /></a>-->
              </div>
              <!--/product-information-->
            </div>
          </div>
          <!--/product-details-->

          <div class="category-tab shop-details-tab">
            <!--category-tab-->
            <div class="col-sm-12">
              <ul class="nav nav-tabs">
                <li><a href="#details" data-toggle="tab">تفاصيل أخرى</a></li>
                <li class="active">
                  <a href="#reviews" data-toggle="tab">الآراء (5)</a>
                </li>
              </ul>
            </div>
            <div class="tab-content text-right">
              <div class="tab-pane fade" id="details">
                <div class="col-sm-12">
                  <p style="margin-right: 25px">
                    {{ this.note }}
                  </p>
                </div>
              </div>

              <div class="tab-pane fade active in text-right" id="reviews">
                <div class="col-sm-12">
                  <ul>
                    <li>
                      <a><i class="fa fa-user"></i>ناصر</a>
                    </li>
                    <li>
                      <a><i class="fa fa-clock-o"></i>{{ this.date }}</a>
                    </li>
                    <!--<li><a ><i class="fa fa-calendar-o"></i>31 DEC 2014</a></li>-->
                  </ul>
                  <!--<p>رأي وتعليق ا وتعليق الزبون </p>-->
                  <p><b>أكتب رأيك</b></p>

                  <form action="#">
                    <span>
                      <input type="text" placeholder="الاسم" />
                      <input
                        type="email"
                        placeholder="عنوان البريد الالكتروني"
                      />
                    </span>
                    <textarea name=""></textarea>
                    <b>التقييم: </b>
                    <img src="images/product-details/rating.png" alt="" />
                    <button type="button" class="btn btn-default pull-right">
                      ارسال
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!--/category-tab-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "details",
  data() {
    return {
      title: "",
      price: "",
      cat: "",
      note: "",
      img: "",
      date: "",
    };
  },
  created() {
    if (this.$store.state.product[0]) {
      this.title = this.$store.state.product[0].title;
      this.price = this.$store.state.product[0].price;
      this.cat = this.$store.state.product[0].cat;
      this.note = this.$store.state.product[0].note;
      this.img = this.$store.state.product[0].img;
      this.date = this.$store.state.product[0].date;
    } else {
      this.$router.push("panel");
    }
  },
};
</script>