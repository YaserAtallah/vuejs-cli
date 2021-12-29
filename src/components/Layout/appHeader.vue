<template>
  <header id="header">
    <!--header-->

    <div class="header-middle">
      <!--header-middle-->
      <div class="container text-right">
        <div class="row">
          <div class="col-sm-4">
            <div class="logo pull-left">
              <router-link to="/"
                ><img src="images/home/logo-2.png" alt=""
              /></router-link>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="shop-menu pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <router-link to="/404"
                    ><i class="fa fa-user"></i>الحساب</router-link
                  >
                </li>
                <li>
                  <router-link to="/404"
                    ><i class="fa fa-star"></i>المفضلة</router-link
                  >
                </li>
                <li>
                  <router-link to="/404"
                    ><i class="fa fa-crosshairs"></i>الدفع</router-link
                  >
                </li>
                <li>
                  <router-link to="/404"
                    ><i class="fa fa-shopping-cart"></i>عربة التسوق</router-link
                  >
                </li>
                <li>
                  <router-link to="/login" active-class="active"
                    ><i class="fa fa-lock"></i>تسجيل الدخول</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-middle-->

    <div class="header-bottom">
      <!--header-bottom-->
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="mainmenu pull-left">
              <ul class="nav navbar-nav collapse navbar-collapse">
                <li>
                  <router-link to="/" active-class="active"
                    >الرئيسية</router-link
                  >
                </li>
                <li>
                  <router-link to="/shop" active-class="active"
                    >المنتجات</router-link
                  >
                </li>
                <li>
                  <router-link to="/404" active-class="active"
                    >تواصل معنا</router-link
                  >
                </li>
                <li>
                  <router-link to="/Panel" active-class="active"
                    >لوحة التحكم</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="search_box pull-right">
              <input
                type="text"
                placeholder="بحث"
                v-model="this.$store.state.keyword"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-bottom-->
  </header>
  <!--/header-->
</template>
<script>
export default {
  name: "appHeader",
};
</script>