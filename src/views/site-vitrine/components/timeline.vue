<script>
export default {
  name: "timeline",
};
</script>
  
<template>
  <div class="row">
    <div>
      <div class="timeline">
        <div class="timeline-item left">
          <em class="icon ri-arrow-left-circle-line"></em>
          <div class="date text-uppercase" data-key="t-SEPT">{{ $t("t-SEPT") }} 2020</div>
          <div class="content">
            <h5 data-key="t-sept2020">{{ $t("t-sept2020") }}</h5>
            <p class="text-muted text-justify" data-key="t-sept2020text">{{ $t("t-sept2020text") }}</p>
          </div>
        </div>
        <div class="timeline-item right">
          <em class="icon ri-arrow-right-circle-line"></em>
          <div class="date text-uppercase" data-key="t-OCT">{{ $t("t-OCT") }} 2020</div>
          <div class="content">
            <h5 data-key="t-oct2020">{{ $t("t-oct2020") }}</h5>
            <p class="text-muted text-justify" data-key="t-oct2020text">{{ $t("t-oct2020text") }}</p>
          </div>
        </div>
        <div class="timeline-item left">
          <em class="icon ri-arrow-left-circle-line"></em>
          <div class="date text-uppercase" data-key="t-DEC">{{ $t("t-DEC") }} 2020</div>
          <div class="content">
            <h5 data-key="t-dec2020">{{ $t("t-dec2020") }}</h5>
            <p class="text-muted text-justify" data-key="t-dec2020text">{{ $t("t-dec2020text") }}</p>
          </div>
        </div>
        <div class="timeline-item right">
          <em class="icon ri-arrow-right-circle-line"></em>
          <div class="date text-uppercase" data-key="t-JAN">{{ $t("t-JAN") }} 2021</div>
          <div class="content">
            <h5 data-key="t-jan2021">{{ $t("t-jan2021") }}</h5>
            <p class="text-muted text-justify" data-key="t-jan2021text">{{ $t("t-jan2021text") }}</p>
          </div>
        </div>
        <div class="timeline-item left">
          <em class="icon ri-arrow-left-circle-line"></em>
          <div class="date text-uppercase" data-key="t-MARS">{{ $t("t-MARS") }} 2021</div>
          <div class="content">
            <h5 data-key="t-mars2021 t-mars2021bis">{{ $t("t-mars2021") }}<br />{{ $t("t-mars2021bis") }}</h5>
            <p class="text-muted text-justify" data-key="t-mars2021text">{{ $t("t-mars2021text") }}</p>
          </div>
        </div>
        <div class="timeline-item right">
          <em class="icon ri-arrow-right-circle-line"></em>
          <div class="date text-uppercase" data-key="t-AVRI">{{ $t("t-AVRI") }} 2021</div>
          <div class="content">
            <h5 data-key="t-avri2021 t-avri2021bis">{{ $t("t-avri2021") }}<br />{{ $t("t-avri2021bis") }}</h5>
            <p class="text-muted text-justify" data-key="t-avri2021text">{{ $t("t-avri2021text") }}</p>
          </div>
        </div>
        <div class="timeline-item left">
          <em class="icon ri-arrow-left-circle-line"></em>
          <div class="date text-uppercase" data-key="t-JUIL">{{ $t("t-JUIL") }} 2021</div>
          <div class="content">
            <h5 data-key="t-juil2021">{{ $t("t-juil2021") }}</h5>
            <p class="text-muted text-justify" data-key="t-juil2021text">{{ $t("t-juil2021text") }}</p>
          </div>
        </div>
        <div class="timeline-item right">
          <em class="icon ri-arrow-right-circle-line"></em>
          <div class="date text-uppercase" data-key="t-SEPT">{{ $t("t-SEPT") }} 2021</div>
          <div class="content">
            <h5 data-key="t-sept2021">{{ $t("t-sept2021") }}</h5>
            <p class="text-muted text-justify" data-key="t-sept2021text">{{ $t("t-sept2021text") }}</p>
          </div>
        </div>
        <div class="timeline-item left">
          <em class="icon ri-arrow-left-circle-line"></em>
          <div class="date text-uppercase" data-key="t-OCT">{{ $t("t-OCT") }} 2021</div>
          <div class="content">
            <h5 data-key="t-oct2021">{{ $t("t-oct2021") }}</h5>
            <p class="text-muted text-justify" data-key="t-oct2021text">{{ $t("t-oct2021text") }}</p>
          </div>
        </div>
        <div class="timeline-item right">
          <em class="icon ri-arrow-right-circle-line"></em>
          <div class="date text-uppercase" data-key="t-DEC">{{ $t("t-DEC") }} 2021</div>
          <div class="content">
            <h5 data-key="t-dec2021">{{ $t("t-dec2021") }}</h5>
            <p class="text-muted text-justify" data-key="t-dec2021text">{{ $t("t-dec2021text") }}</p>
          </div>
        </div>
        <div class="timeline-item left">
          <em class="icon ri-arrow-left-circle-line"></em>
          <div class="date text-uppercase" data-key="t-MAI">{{ $t("t-MAI") }} 2022</div>
          <div class="content">
            <h5 data-key="t-mai2022">{{ $t("t-mai2022") }}</h5>
            <p class="text-muted text-justify" data-key="t-mai2022text">{{ $t("t-mai2022text") }}</p>
          </div>
        </div>
        <div class="timeline-item right">
          <em class="icon ri-arrow-right-circle-line"></em>
          <div class="date text-uppercase">Q2 2022</div>
          <div class="content">
            <h5 data-key="t-q22022">{{ $t("t-q22022") }}</h5>
            <p class="text-muted text-justify" data-key="t-q22022text">{{ $t("t-q22022text") }}</p>
          </div>
        </div>
        <div class="timeline-item left">
          <em class="icon ri-arrow-left-circle-line"></em>
          <div class="date text-uppercase">Q3 2022</div>
          <div class="content">
            <h5 data-key="t-q32022">{{ $t("t-q32022") }}</h5>
            <p class="text-muted text-justify" data-key="t-q32022text">{{ $t("t-q32022text") }}</p>
          </div>
        </div>
        <div class="timeline-item right">
          <em class="icon ri-arrow-right-circle-line"></em>
          <div class="date text-uppercase" data-key="t-JAN">{{ $t("t-JAN") }} 2023</div>
          <div class="content">
            <h5 data-key="t-jan2023">{{ $t("t-jan2023") }}</h5>
            <p class="text-muted text-justify" data-key="t-jan2023text">{{ $t("t-jan2023text") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
