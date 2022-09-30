<script>
export default {
  name: 'contact',
}
</script>
    
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="text-center mb-5">
          <h1 class="mb-3 ff-secondary fw-semibold lh-base text-uppercase text-success text-center"
            data-key="t-contact">{{ $t("t-contact") }}</h1>
          <h4 class="mb-3 fw-semibold" data-key="t-helpyou">{{ $t("t-helpyou") }}</h4>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row gy-4">
      <div class="col-lg-4">
        <div>
          <div class="mt-4">
            <h5 class="fs-13 text-muted text-uppercase" data-key="t-contmail">{{ $t("t-contmail") }}
            </h5>
            <div class="ff-secondary fw-semibold">
              contact@medicfollow.fr
            </div>
          </div>
          <div class="mt-4">
            <h5 class="fs-13 text-muted text-uppercase" data-key="t-contphone">{{ $t("t-contphone") }}
            </h5>
            <div class="ff-secondary fw-semibold">
              +01 23 45 67 89
            </div>
          </div>
          <div class="mt-4">
            <h5 class="fs-13 text-muted text-uppercase" data-key="t-contadress">{{ $t("t-contadress") }}</h5>
            <div class="ff-secondary fw-semibold">395 Rue du Badar, France</div>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-lg-8">
        <div>
          <form>
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-4">
                  <label for="name" class="form-label fs-13" data-key="t-name">{{ $t("t-name") }}</label>
                  <input name="name" id="name" type="text" class="form-control bg-light border-light"
                    data-key="t-yourname" v-bind:placeholder="$t('t-yourname')" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-4">
                  <label for="email" class="form-label fs-13" data-key="t-email">{{ $t("t-email") }}</label>
                  <input name="email" id="email" type="email" class="form-control bg-light border-light"
                    data-key="t-yourmail" v-bind:placeholder="$t('t-yourmail')" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="mb-4">
                  <label for="subject" class="form-label fs-13" data-key="t-subject">{{ $t("t-subject") }}</label>
                  <input type="text" class="form-control bg-light border-light" id="subject" name="subject"
                    data-key="t-yoursubject" v-bind:placeholder="$t('t-yoursubject')" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="mb-3">
                  <label for="comments" class="form-label fs-13" data-key="t-message">{{ $t("t-message") }}</label>
                  <textarea name="comments" id="comments" rows="3" class="form-control bg-light border-light"
                    data-key="t-yourmessage" v-bind:placeholder="$t('t-yourmessage')"></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 text-end">
                <input type="submit" id="submit" name="send" class="submitBnt btn btn-primary" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- end row -->
  </div>
</template>
