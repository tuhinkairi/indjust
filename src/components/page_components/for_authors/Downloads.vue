<template>
    <section class="p-3">

    <div style="display: flex;justify-content: space-around;">
      <div style="width: 200px;" class="controlling d-none d-md-block"
      >
          <p class="blink mb-5"> <a href="http://editorial.fdrpjournals.org/login?journal=6" style="color: #fff;">Submit
              Research Paper</a> </p>

              <div class="shadow-effect mb-5">
            <div class="left-side-heading"> Downloads : </div>
            <p style="cursor: pointer;"
              @click="getManuScript('https://panel.indjcst.com/storage/templates/manuscript.docx')">
              Manuscript Template
            </p>
            <p style="cursor: pointer;"
              @click="getCopyRightForm('https://panel.indjcst.com/storage/templates/copyrights.pdf')">
              Copyright Form
            </p>
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../../../assets/Images/isn.jpg" height="90" width="200" />
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../../../assets/Images/cc.jpg" height="90" width="180" />
            <p>All research Article published on this website are licensed under Creative Commons
              Attribution-ShareAlike
              4.0
              International License, and all rights belong to their respective authors/researchers.
            </p>
          </div>
          <div>
           <IndexingSideDesign/>
          </div>
        </div> 
      <div class="container" style="max-width: 1000px !important; margin: 0">
        <div class="row justify-content-between d-flex">
          <div class="col-lg-9 col-md-9">
            <div class="row d-flex align-items-center justify-content-center ">
              <div class="col-lg-4 col-md-4 col-sm-4 indexingImage single-pricing-table d-flex align-items-center justify-content-center"
                style="min-width: 200px; padding: 40px;"
              >
                <div class="d-flex align-content-center flex-column justify-content-center align-items-center" style="text-align: center;">
                  <h2 style="font-size: 1.2em;">Manuscript Template</h2>
                  <button
                    @click="getManuScript('https://fdrpjournals.s3.ap-south-1.amazonaws.com/main/6/manuscripttemplate/IndJcst-Manuscript-Template.docx')"
                    class="btn m-2"
                  >
                    Download
                  </button>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4 indexingImage single-pricing-table d-flex align-content-center justify-content-center"
                style="min-width: 200px; padding: 40px;"
              >
                <div class="d-flex align-content-center flex-column justify-content-center"  style="text-align: center;">
                  <h2 class="" style="font-size: 1.2em;">Copyright Form</h2>
                  <button
                    @click="getCopyRightForm('https://fdrpjournals.s3.ap-south-1.amazonaws.com/main/6/copyrightform/IndJcst_Copyright+Transfer+Agreement+2021.pdf ')"
                    class="btn m-2"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 200px;" class="controlling d-none d-md-block"
      >
          <div class="mb-5">
            <router-link to="/editorsandreviewers">
              <p class="blink">Join As A reviewer</p>
            </router-link>
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../../../assets/Images/tur.jpg" height="90" width="180" />
            <p>Plagiarism is checked by the leading plagiarism checker</p>
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../../../assets/Images/doi.jpg" height="90" width="180" />
            <p>CrossRef DOI is assigned to research Article published in our journal.
              IJIRE DOI prefix is10.59256/ijire
            </p>
          </div>
          <div class="shadow-effect mb-5">
            <div class="right-side-heading"> For Authors </div>
            <router-link to="topics">
              <p>Topics</p>
            </router-link>
            <router-link to="call-for-papers">
              <p>Call For Papers</p>
            </router-link>
            <router-link to="instruction-for-author">
              <p>Instruction For Authors</p>
            </router-link>
            <p><a href="http://editorial.fdrpjournals.org/login?journal=6" style="color:rgb(100, 117, 137)">Manuscript
                Submission</a></p>
            <router-link to="guidance-for-ems">
              <p>Guidance For EMS</p>
            </router-link>
            <router-link to="article-processing-charges">
              <p style="text-align: left;">Article Processing Charges</p>
            </router-link>
            <router-link to="downloads">
              <p>Downloads</p>
            </router-link>
            <router-link to="paper-status">
              <p>Paper Status</p>
            </router-link>
          </div>
          <div class="shadow-effect mb-5">
            <div class="right-side-heading">Policies</div>
            <router-link to="ethics">
              <p>Ethics And Policies</p>
            </router-link>
            <router-link to="peer-review-policy">
              <p>Peer Review Policy</p>
            </router-link>
            <router-link to="publication-ethics-policy">
              <p>Publication Ethics Policy</p>
            </router-link>
          </div>
        </div>
    </div>
    </section>
  </template>
  <script>
import IndexingSideDesign from '@/components/common/IndexingSideDesign.vue'

  export default {
    components: {
    IndexingSideDesign
  },
    data: function () {
    },
    methods: {
      getManuScript: function (getUrl) {
        window.open(getUrl, "_blank");
      },
      getCopyRightForm: function (getForm) {
        window.open(getForm, "_blank");
      },
    },
  };
  </script>
    <style scoped>
  .indexingImage {
    height: 250px;
    width: 250px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .indexingImage {
    margin: 10px;
  }
  .btn {
    color: #74a9da;
    border: 1px solid #74a9da;
    background-color: #fff;
  }
  .btn:hover {
    color: #fff;
    background-color: #74a9da;
  }
  h2 {
    font-size: 1.2em;
  }
  .left-side-heading{
   font-weight: bold; 
    line-height: 2;
  }
  .right-side-heading{
    font-size: 1.5em; 
   font-weight: bold; 
   display: block; 
   margin-bottom: 10px;
  }

  </style>