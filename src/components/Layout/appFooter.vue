<template>
  <footer id="footer">
    <!--Footer-->

    <div class="footer-widget">
      <div class="container text-right">
        <div class="row">
          <div class="col-sm-4">
            <div class="companyinfo" style="margin-top: 5px">
              <h2 class="emall"><span>e</span>-mall</h2>
              <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>-->
            </div>
          </div>

          <div class="col-sm-2">
            <div class="single-widget">
              <h2>روابط</h2>
              <ul class="nav nav-pills nav-stacked">
                <li> <router-link to="/" active-class="active"
                    >الرئيسية</router-link
                  ></li>
                <li> <router-link to="/404" active-class="active"
                    >الحساب</router-link
                  ></li>
                <li> <router-link to="/404" active-class="active"  
                    >المفضلة</router-link
                  ></li>
                <li><router-link to="/#">عربة التسوق</router-link></li>
                <li><router-link to="/login" active-class="active"
                    >تسجيل</router-link
                  ></li>
              </ul>
            </div>
          </div>

          <div class="col-sm-2">
            <div class="single-widget">
              <h2>تسوق سريع</h2>
              <ul class="nav nav-pills nav-stacked">
                <li><router-link to="./#">تي شيرت</router-link></li>
                <li><router-link to="./#">رجالي</router-link></li>
                <li><router-link to="./#">حريمي</router-link></li>
                <li><router-link to="./#">بطاقات الهدايا</router-link></li>
                <li><router-link to="./#">أحذية</router-link></li>
              </ul>
            </div>
          </div>

          <div class="col-sm-2">
            <div class="single-widget">
              <h2>عن المتجر</h2>
              <ul class="nav nav-pills nav-stacked">
                <li><router-link to="./#">معلومات الشركة</router-link></li>
                <li><router-link to="./#">الوظائف</router-link></li>
                <li><router-link to="./#">موقع المتجر</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <p style="text-align: center">
            Copyright © {{ currentYear }} E-MALL Inc. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </div>
  </footer>
  <!--/Footer-->
</template>

<script>

export default {
  name: "appFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
<style scoped>
.emall{
  font-size: 38px;
}
</style>