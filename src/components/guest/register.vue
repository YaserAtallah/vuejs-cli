<template>
  <section id="form">
    <!--form-->
    <div class="container text-right">
      <div class="row">
        <!--sign up form-->
        <div class="col-sm-6">
          <div class="signup-form">
            <h2>التسجيل كمستخدم جديد!</h2>
            <form action="#">
              <input type="text" placeholder="اسم المستخدم" />
              <input type="email" placeholder="عنوان البريد الإلكتروني" />
              <input type="password" placeholder="كلمة المرور" />
              <button type="submit" class="btn btn-default">تسجيل</button>
            </form>
          </div>
        </div>
        <!--/sign up form-->
      </div>
    </div>
  </section>
  <!--/form-->
</template>
<script>
export default {
  name: "register",
};
</script>