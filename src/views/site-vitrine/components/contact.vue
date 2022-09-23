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
          <h3 class="mb-3 fw-semibold">MedicFollow - Contact</h3>
          <p class="text-muted mb-4 ff-secondary">
            Comment pouvons-nous vous aider ?
          </p>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row gy-4">
      <div class="col-lg-4">
        <div>
          <div class="mt-4">
            <h5 class="fs-13 text-muted text-uppercase">
              Adresse mail:
            </h5>
            <div class="ff-secondary fw-semibold">
              contact@medicfollow.fr
            </div>
          </div>
          <div class="mt-4">
            <h5 class="fs-13 text-muted text-uppercase">
              Numéro de téléphone:
            </h5>
            <div class="ff-secondary fw-semibold">
              +01 23 45 67 89
            </div>
          </div>
          <div class="mt-4">
            <h5 class="fs-13 text-muted text-uppercase">Adresse:</h5>
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
                  <label for="name" class="form-label fs-13">Nom</label>
                  <input name="name" id="name" type="text" class="form-control bg-light border-light" placeholder="" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-4">
                  <label for="email" class="form-label fs-13">Email</label>
                  <input name="email" id="email" type="email" class="form-control bg-light border-light"
                    placeholder="Your email*" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="mb-4">
                  <label for="subject" class="form-label fs-13">Sujet</label>
                  <input type="text" class="form-control bg-light border-light" id="subject" name="subject"
                    placeholder="Your Subject.." />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="mb-3">
                  <label for="comments" class="form-label fs-13">Message</label>
                  <textarea name="comments" id="comments" rows="3" class="form-control bg-light border-light"
                    placeholder="Your message..."></textarea>
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
