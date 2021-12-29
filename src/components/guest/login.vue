<template>
  <section id="form">
    <!--form-->
    <div class="container text-right">
      <div class="row">
        <!--login form-->
        <div class="col-sm-6 col-sm-offset-1">
          <div class="login-form">
            <h2>التسجيل باستخدام حسابك</h2>
            <form action="#">
              <input
                type="email"
                placeholder="عنوان البريد الإلكتروني الخاص بك"
              />
              <input type="password" placeholder="كلمة المرور" />
              <button type="submit" class="btn btn-default">
                تسجيل الدخول
              </button>
              <br />
              <h4>
                <router-link to="/register"
                  >أو التسجيل كمستخدم جديد</router-link
                >
              </h4>
            </form>
          </div>
        </div>
        <!--/login form-->
      </div>
    </div>
  </section>
  <!--/form-->
</template>

<script>
export default {
  name: "Login",
};
</script>