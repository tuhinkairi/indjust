<template>
  <div>
    <section class="speciality-area">
      <div style="display: flex;justify-content: space-around;">
        <div style="width: 200px;" class="left-side-container mr-2"
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
        <div class="row justify-content-between">
          <div class="page-heading">Call For Papers:</div>
          <div class="callForPaperContent">
            <p>
              Indian Journal of Computer Science and Technology (INDJCST) is an
              online Quarterly Journal by Fifth Dimension Research Publication.
            </p>
            <p>
              It is an academic, online, open access, Double Blind Peer reviewed
              National Journal. It aims to publish original, theoretical, and
              practical advancements in Computer Science and Technology and all
              interdisciplinary streams of Engineering Sciences. The board of
              committee of INDJCST will review all submitted papers.
            </p>
            <p>
              Papers for the Journal's regular editions are submitted
              electronically at editorinchief@indjcst.com around the year. After
              the final acceptance of the article, based upon the detailed
              review process, the paper will immediately be published online.
            </p>
          </div>
          <div class="callForPaperContent">
            <h2>Important Deadlines for Current Issue:</h2>
            <p>
              <b
                >Last Date for Manuscript Submission: 25th of
                <i>Apirl, August, December</i>
              </b>
            </p>
            <div class="paperList">
              <ul>
                <li>
                  <p>
                    Submit your paper in Microsoft word format (.doc or .docx);
                    if you used latex, send it in PDF format.
                  </p>
                </li>
                <li>
                  <p>
                    Please submit your paper with a signed Copyright Transfer
                    Form (the corresponding author marks enough, no need at
                    all), and it should be sent while submitting the papers to
                    us.
                  </p>
                </li>
                <li>
                  <p>
                    If the manuscript is not accepted in our journal, then the
                    Copyright Transfer Form submitted with us will become void.
                  </p>
                </li>
                <li>
                  <p>
                    The manuscripts submitted with the copyrights form only will
                    be forwarded to the review process.
                  </p>
                </li>
                <li>
                  <p>
                    Submitting the paper to multiple journals is an offense,
                    don’t waste our valuable time.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="callForPaperContent">
            <h2>
              For the author’s convenience, we strongly follow the following
              steps:
            </h2>
            <div class="paperList">
              <ul>
                <li><p>I will give A response within 12 hours.</p></li>
                <li><p>I will review The paper within Two days.</p></li>
                <li>
                  <p>
                    The author will get their Acceptance/Rejection Notification
                    within three days of submitting a paper.
                  </p>
                </li>
                <li>
                  <p>
                    All the accepted papers will be open and accessible with a
                    full PDF download.
                  </p>
                </li>
                <li>
                  <p>
                    All Authors will get a soft copy of the certificate,
                    acceptance letter, and reviewer evaluation grading.
                  </p>
                </li>
              </ul>
            </div>
            <div class="highlights">
              Submit your article: <i>editorinchief@indjcst.com </i> (or) Online
              submission.
            </div>
          </div>
        </div>
      </div>
      <div style="width: 200px;" class="right-side-container ml-2"
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
  </div>
</template>

<script>
import IndexingSideDesign from '@/components/common/IndexingSideDesign.vue'

export default {
  components: {
    IndexingSideDesign
  },
  methods:{
    getManuScript: function (getUrl) {
      window.open(getUrl, "_blank");
    },
    getCopyRightForm: function (getForm) {
      window.open(getForm, "_blank");
    },
  }
};
</script>

<style scoped>

p {
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  color: rgb(100, 117, 137);
  text-align: justify;
  text-justify: inter-word;
}
.callForPaperContent {
  padding-bottom: 10px;
}
.paperList {
  margin-left: -20px;
}
.inr-content {
  color: #9b6646;
  font-weight: bold;
}

.shadow-effect {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 8px;
  border-radius: 5px;
}
@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.blink {
  animation: blink 0.5s infinite;
  background-color: #9b6646;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  padding: 5px;
}
.editorialBox {
  /* border: 2px solid #EEEDE7; */
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 85%;
}
.page-heading{
  font-size: 1.5em; 
  font-weight: bold; 
  margin-bottom: 20px; 
  display: block
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
h2 {
font-size: 1.2em;
}
.highlights {
font-size: 1.2em;
font-weight: bold
}

</style>