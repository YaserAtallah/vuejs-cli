<template>
  <section id="slider">
    <!--slider-->
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div id="slider-carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#slider-carousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#slider-carousel" data-slide-to="1"></li>
            </ol>

            <div class="carousel-inner">
              <div class="item active">
                <div class="col-sm-6">
                  <h1><span>E</span>-MALL</h1>
                  <h2>عرض منتج 1</h2>
                  <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>-->
                  <button type="button" class="btn btn-default get">
                    احصل عليها الآن
                  </button>
                </div>
                <div class="col-sm-6">
                  <img
                    src="images/slider/11.png"
                    class="girl img-responsive"
                    alt=""
                  />
                  <img src="images/home/pricing.png" class="pricing" alt="" />
                </div>
              </div>
              <div class="item">
                <div class="col-sm-6">
                  <h1><span>E</span>-MALL</h1>
                  <h2>عرض منتج 2</h2>
                  <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>-->
                  <button type="button" class="btn btn-default get">
                    احصل عليها الآن
                  </button>
                </div>
                <div class="col-sm-6">
                  <img
                    src="images/slider/22.png"
                    class="girl img-responsive"
                    alt=""
                  />
                  <img src="images/home/pricing.png" class="pricing" alt="" />
                </div>
              </div>
            </div>

            <a
              href="./#slider-carousel"
              class="left control-carousel hidden-xs"
              data-slide="prev"
            >
              <i class="fa fa-angle-right"></i>
            </a>
            <a
              href="./#slider-carousel"
              class="right control-carousel hidden-xs"
              data-slide="next"
            >
              <i class="fa fa-angle-left"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/slider-->

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
                    <a href="./accessories.html">اكسسوريز</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="./attention.html">عنايه</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="./makeup.html">مكياج</a></h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="./bags.html">شنط</a></h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="./perfumes.html">عطور</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="./devices.html">اجهزه</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="./women.html">ملابس نساء</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="./men.html">رجال</a></h4>
                </div>
              </div>
            </div>
            <!--/category-products-->
          </div>
        </div>

        <div class="col-sm-9 padding-right">
          <div class="features_items">
            <!--features_items-->
            <h2 class="title text-center">المنتجات المميزة</h2>
            <div class="col-sm-4">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/products/1.jpeg" alt="" />
                    <h2>$56</h2>
                    <p>اسم المنتج</p>
                    <a href="./#" class="btn btn-default add-to-cart"
                      ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                    >
                  </div>
                  <div class="product-overlay">
                    <div class="overlay-content">
                      <h2>$56</h2>
                      <p>اسم المنتج</p>
                      <a href="./#" class="btn btn-default add-to-cart"
                        ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                      >
                    </div>
                  </div>
                </div>
                <div class="choose">
                  <ul class="nav nav-pills nav-justified">
                    <li>
                      <a href="./#"
                        ><i class="fa fa-plus-square"></i>أضف إلى المفضلة</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/products/2.jpeg" alt="" />
                    <h2>$56</h2>
                    <p>اسم المنتج</p>
                    <a href="./#" class="btn btn-default add-to-cart"
                      ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                    >
                  </div>
                  <div class="product-overlay">
                    <div class="overlay-content">
                      <h2>$56</h2>
                      <p>اسم المنتج</p>
                      <a href="./#" class="btn btn-default add-to-cart"
                        ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                      >
                    </div>
                  </div>
                </div>
                <div class="choose">
                  <ul class="nav nav-pills nav-justified">
                    <li>
                      <a href="./#"
                        ><i class="fa fa-plus-square"></i>أضف إلى المفضلة</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/products/3.jpeg" alt="" />
                    <h2>$56</h2>
                    <p>اسم المنتج</p>
                    <a href="./#" class="btn btn-default add-to-cart"
                      ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                    >
                  </div>
                  <div class="product-overlay">
                    <div class="overlay-content">
                      <h2>$56</h2>
                      <p>اسم المنتج</p>
                      <a href="./#" class="btn btn-default add-to-cart"
                        ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                      >
                    </div>
                  </div>
                </div>
                <div class="choose">
                  <ul class="nav nav-pills nav-justified">
                    <li>
                      <a href="./#"
                        ><i class="fa fa-plus-square"></i>أضف إلى المفضلة</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/products/4.jpeg" alt="" />
                    <h2>$56</h2>
                    <p>اسم المنتج</p>
                    <a href="./#" class="btn btn-default add-to-cart"
                      ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                    >
                  </div>
                  <div class="product-overlay">
                    <div class="overlay-content">
                      <h2>$56</h2>
                      <p>اسم المنتج</p>
                      <a href="./#" class="btn btn-default add-to-cart"
                        ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                      >
                    </div>
                  </div>
                  <img src="images/home/new.png" class="new" alt="" />
                </div>
                <div class="choose">
                  <ul class="nav nav-pills nav-justified">
                    <li>
                      <a href="./#"
                        ><i class="fa fa-plus-square"></i>أضف إلى المفضلة</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/products/5.jpeg" alt="" />
                    <h2>$56</h2>
                    <p>اسم المنتج</p>
                    <a href="./#" class="btn btn-default add-to-cart"
                      ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                    >
                  </div>
                  <div class="product-overlay">
                    <div class="overlay-content">
                      <h2>$56</h2>
                      <p>اسم المنتج</p>
                      <a href="./#" class="btn btn-default add-to-cart"
                        ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                      >
                    </div>
                  </div>
                  <img src="images/home/sale.png" class="new" alt="" />
                </div>
                <div class="choose">
                  <ul class="nav nav-pills nav-justified">
                    <li>
                      <a href="./#"
                        ><i class="fa fa-plus-square"></i>أضف إلى المفضلة</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="images/products/6.jpeg" alt="" />
                    <h2>$56</h2>
                    <p>اسم المنتج</p>
                    <a href="./#" class="btn btn-default add-to-cart"
                      ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                    >
                  </div>
                  <div class="product-overlay">
                    <div class="overlay-content">
                      <h2>$56</h2>
                      <p>اسم المنتج</p>
                      <a href="./#" class="btn btn-default add-to-cart"
                        ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                      >
                    </div>
                  </div>
                </div>
                <div class="choose">
                  <ul class="nav nav-pills nav-justified">
                    <li>
                      <a href="./#"
                        ><i class="fa fa-plus-square"></i>أضف إلى المفضلة</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!--features_items-->

          <div class="category-tab">
            <!--category-tab-->
            <div class="col-sm-12">
              <ul class="nav nav-tabs">
                <li class="active">
                  <a href="./#tshirt" data-toggle="tab">ملابس نساء</a>
                </li>
                <li><a href="./#blazers" data-toggle="tab">رجال</a></li>
                <li><a href="./#sunglass" data-toggle="tab">عطور</a></li>
                <li><a href="./#kids" data-toggle="tab">شنط</a></li>
                <li><a href="./#poloshirt" data-toggle="tab">اكسسوريز</a></li>
              </ul>
            </div>
            <div class="tab-content">
              <div class="tab-pane fade active in" id="tshirt">
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/7.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/7.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/7.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/7.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade" id="blazers">
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/8.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/8.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/8.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/8.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade" id="sunglass">
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/5.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/5.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/5.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/5.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade" id="kids">
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/4.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/4.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/4.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/4.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade" id="poloshirt">
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/1.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/1.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/1.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/products/1.jpeg" alt="" />
                        <h2>$56</h2>
                        <p>اسم المنتج</p>
                        <a href="./#" class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--/category-tab-->

          <div class="recommended_items">
            <!--recommended_items-->
            <h2 class="title text-center">المنتجات الموصى بها</h2>

            <div
              id="recommended-item-carousel"
              class="carousel slide text-right"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="item active">
                  <div class="col-sm-4">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/products/1.jpeg" alt="" />
                          <h2>$56</h2>
                          <p>اسم المنتج</p>
                          <a href="./#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/products/2.jpeg" alt="" />
                          <h2>$56</h2>
                          <p>اسم المنتج</p>
                          <a href="./#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/products/3.jpeg" alt="" />
                          <h2>$56</h2>
                          <p>اسم المنتج</p>
                          <a href="./#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="col-sm-4">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/products/4.jpeg" alt="" />
                          <h2>$56</h2>
                          <p>اسم المنتج</p>
                          <a href="./#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/products/5.jpeg" alt="" />
                          <h2>$56</h2>
                          <p>اسم المنتج</p>
                          <a href="./#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productinfo text-center">
                          <img src="images/products/6.jpeg" alt="" />
                          <h2>$56</h2>
                          <p>اسم المنتج</p>
                          <a href="./#" class="btn btn-default add-to-cart"
                            ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="left recommended-item-control"
                href="./#recommended-item-carousel"
                data-slide="prev"
              >
                <i class="fa fa-angle-right"></i>
              </a>
              <a
                class="right recommended-item-control"
                href="./#recommended-item-carousel"
                data-slide="next"
              >
                <i class="fa fa-angle-left"></i>
              </a>
            </div>
          </div>
          <!--/recommended_items-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home",
};
</script>