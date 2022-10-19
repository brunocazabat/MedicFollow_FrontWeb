<script>
export default {
  name: 'tarification',
}
</script>

<template>
  <div class="bg-overlay bg-overlay-pattern"></div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="text-center mb-5">
          <h1 class="mb-3 ff-secondary fw-semibold lh-base text-uppercase text-success text-center"
            data-key="t-whychoseus">{{ $t("t-whychoseus") }}</h1>
          <h4 class="mb-3 fw-semibold" data-key="t-simplecost t-justforyou">{{ $t("t-simplecost") }}<br />{{
          $t("t-justforyou") }}
          </h4>
        </div>
      </div>

    </div>
    <!-- end row -->

    <div class="row gy-4">
      <div class="col-lg-6">
        <div class="card plan-box mb-0">
          <div class="card-body p-4 m-2">
            <div class="d-flex align-items-center">
              <div class="flex-grow-1">
                <h5 class="mb-1 fw-semibold" data-key="t-basicplan">{{ $t("t-basicplan") }}</h5>
                <p class="text-muted mb-0" data-key="t-fororgani">{{ $t("t-fororgani") }}</p>
              </div>
              <div class="avatar-sm">
                <div class="avatar-title bg-light rounded-circle text-primary">
                  <em class="ri-book-mark-line fs-20"></em>
                </div>
              </div>
            </div>
            <div class="py-4 text-center">
              <h1>
                <sup><small>€ </small></sup><span class="ff-secondary fw-bold">1</span>
                <span class="fs-13 text-muted" data-key="t-patientsdays"> {{ $t("t-patientsdays") }}</span>
              </h1>
            </div>

            <div>
              <ul class="list-unstyled text-muted vstack gap-3 ff-secondary">
                <li>
                  <div class="d-flex">
                    <div class="flex-shrink-0 text-success me-1">
                      <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                    </div>
                    <div class="flex-grow-1" data-key="t-thirtyservices">{{ $t("t-thirtyservices") }}</div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div class="flex-shrink-0 text-success me-1">
                      <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                    </div>
                    <div class="flex-grow-1" data-key="t-threehunddoc">{{ $t("t-threehunddoc") }}</div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div class="flex-shrink-0 text-success me-1">
                      <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                    </div>
                    <div class="flex-grow-1" data-key="t-ullimitpat">{{ $t("t-ullimitpat") }}</div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div class="flex-shrink-0 text-success me-1">
                      <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                    </div>
                    <div class="flex-grow-1" data-key="t-h24supp">{{ $t("t-h24supp") }}</div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div class="flex-shrink-0 text-success me-1">
                      <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                    </div>
                    <div class="flex-grow-1" data-key="t-ullimitstok">{{ $t("t-ullimitstok") }}</div>
                  </div>
                </li>

              </ul>
              <div class="mt-4">
                <router-link to="/register-mail" class="btn btn-soft-success w-100" data-key="t-signup">
                  {{ $t("t-signup") }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end col-->
      <div class="col-lg-6">
        <div class="card plan-box mb-0">
          <div class="card-body p-4 m-2">
            <div class="d-flex align-items-center">
              <div class="flex-grow-1">
                <h5 class="mb-1 fw-semibold" data-key="t-basicplan">{{ $t("t-basicplan") }}</h5>
                <p class="text-muted mb-0" data-key="t-formedic">{{ $t("t-formedic") }}</p>
              </div>
              <div class="avatar-sm">
                <div class="avatar-title bg-light rounded-circle text-primary">
                  <em class="ri-stack-fill fs-20"></em>
                </div>
              </div>
            </div>
            <div class="py-4 text-center">
              <h1>
                <sup><small>€ </small></sup><span class="ff-secondary fw-bold">0.4</span>
                <span class="fs-13 text-muted" data-key="t-consult"> {{ $t("t-consult") }}</span>
              </h1>
            </div>

            <div>
              <ul class="list-unstyled text-muted vstack gap-3 ff-secondary">
                <li>
                  <div class="d-flex">
                    <div class="flex-shrink-0 text-success me-1">
                      <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                    </div>
                    <div class="flex-grow-1" data-key="t-ullimitconsult">{{ $t("t-ullimitconsult") }}
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div class="flex-shrink-0 text-success me-1">
                      <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                    </div>
                    <div class="flex-grow-1" data-key="t-ullimitpat">{{ $t("t-ullimitpat") }}</div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div class="flex-shrink-0 text-success me-1">
                      <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                    </div>
                    <div class="flex-grow-1" data-key="t-withaddfee">{{ $t("t-withaddfee") }}
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div class="flex-shrink-0 text-success me-1">
                      <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                    </div>
                    <div class="flex-grow-1" data-key="t-h24supp">{{ $t("t-h24supp") }}</div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div class="flex-shrink-0 text-success me-1">
                      <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                    </div>
                    <div class="flex-grow-1" data-key="t-ullimitstok">{{ $t("t-ullimitstok") }}</div>
                  </div>
                </li>

              </ul>
              <div class="mt-4">
                <router-link to="/register-mail" class="btn btn-soft-success w-100" data-key="t-signup">
                  {{ $t("t-signup") }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end col-->
    </div>
    <!--end row-->
  </div>
</template>
