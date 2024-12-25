<template>
  <div>
    <section class="speciality-area">
      <div class="container">
        <div class="row justify-content-between">
          <div
            class="col-lg-6 speciality-text wow animate__animated animate__slideInRight"
          >
            <div class="section-heading w-100 mb-28 mt-0">
              <h2 class="whyChoose">Why can choose INDJCST journal?</h2>
            </div>
            <div class="speciality">
              <div class="sp-text">
                <img alt="image"
                  src="@/assets/Images/tick.png"
                  class="tick"
                  width="24"
                  height="25"
                />
                <p>Publish Frequency: 3 issues per year</p>
              </div>
            </div>
            <div class="speciality">
              <div class="sp-text">
                <img alt="image"
                  src="@/assets/Images/tick.png"
                  class="tick"
                  width="24"
                  height="25"
                />
                <p>Peer-Reviewed refereed: Journal</p>
              </div>
            </div>
            <div class="speciality">
              <div class="sp-text">
                <img alt="image"
                  src="@/assets/Images/tick.png"
                  class="tick"
                  width="24"
                  height="25"
                />
                <p>Easy, fast, transparent paper publication process</p>
              </div>
            </div>
            <div class="speciality">
              <div class="sp-text">
                <img alt="image"
                  src="@/assets/Images/tick.png"
                  class="tick"
                  width="24"
                  height="25"
                />
                <p>Open Access Journal</p>
              </div>
            </div>
            <div class="speciality">
              <div class="sp-text">
                <img alt="image"
                  src="@/assets/Images/tick.png"
                  class="tick"
                  width="24"
                  height="25"
                />
                <p>Strict Plagiarism policy</p>
              </div>
            </div>
            <div class="speciality">
              <div class="sp-text">
                <img alt="image"
                  src="@/assets/Images/tick.png"
                  class="tick"
                  width="24"
                  height="25"
                />
                <p>
                  Simple steps for publication of research and review articles
                </p>
              </div>
            </div>
            <div class="speciality">
              <div class="sp-text">
                <img alt="image"
                  src="@/assets/Images/tick.png"
                  class="tick"
                  width="24"
                  height="25"
                />
                <p>High Visibility & Indexing</p>
              </div>
            </div>
            <div class="speciality">
              <div class="sp-text">
                <img alt="image"
                  src="@/assets/Images/tick.png"
                  class="tick"
                  width="24"
                  height="25"
                />
                <p>Publication Ethics: COPE's Best practice guidelines</p>
              </div>
            </div>
            <div class="speciality">
              <div class="sp-text">
                <img alt="image"
                  src="@/assets/Images/tick.png"
                  class="tick"
                  width="24"
                  height="25"
                />
                <p>Publisher License under Creative commons by NC ND</p>
              </div>
            </div>
            <!-- <a
              href="javascript:void(0)"
              class="wow animate__animated animate__flipInX animate__delay-1s large-blue-button mt-40 speciality-button"
              >Contact Us</a
            > -->
          </div>
          <div
            class="col-xl-5 col-lg-6 wow animate__animated animate__slideInLeft"
          >
            <div class="sp-box-icon text-center">
              <div class="">
                <div class="about-image">
                  <img alt="image"
                    src="../../../../assets/Images/why.png"
                    class="publish-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
  
  <script>
//   import ICountUp from "vue-countup-v2";

export default {
  name: "Speciality",
  components: {
    //   ICountUp,
  },
  data() {
    return {
      instance: "",
      options: {
        useGrouping: false,
        startVal: 0,
        duration: 3,
        suffix: "+",
        useEasing: false,
      },
      options2: {
        useGrouping: false,
        startVal: 0,
        duration: 2,
        suffix: "+",
        useEasing: false,
        prefix: 0,
      },
    };
  },
};
</script>
  
  <style scoped>
.tick {
  margin-right: 10px;
}
.whyChoose {
  color: #9b6646;
}
.publish-image{
  width: 100%;
  height: 100%;
}
</style>
  