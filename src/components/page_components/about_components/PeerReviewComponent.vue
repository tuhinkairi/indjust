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
          <h2>Peer Review Policy:</h2>
          <p>
            Indian Journal of Computer science and Technology (INDJCST) adopts a
            double-blind review process. Once submitted, a paper dealing with
            suitable topics will be sent to the editor-in-chief or associate
            editor and reviewed by at least two experts in the relevant field.
            The reviewers are either members of our editorial board or
            particular external experts invited by the journal. In light of the
            reviewers' comments, the editor-in-chief or associate editor will
            make the final decision over the publication, and the
            editor-in-chief or associate editor will return the decision to the
            author.
          </p>
          <p>
            The paper has four possible decisions: acceptance, minor revision,
            major revision, and rejection. Acceptance means the paper will be
            published directly without any revision. Minor revision means that
            the author makes minor changes to the manuscript following the
            reviewers' comments and submits the revised version to INDJCST. The
            editor-in-chief or associate editor will accept or decline the
            revised version. Major revision means that the author revises the
            manuscript according to the reviewers' comments and submits the
            revised version to INDJCST. The editor-in-chief or associate editor
            will accept or reject the revised version. A rejection means that
            the submitted paper will not be published.
          </p>
          <p>
            If a paper is accepted, the editor-in-chief or associate editor will
            send an acceptance letter to the author and ask the author to
            prepare the paper in MS Word using the template of INDJCST.
          </p>
        </div>
        <div class="pt-4">
          <h2>Plagiarism policy:</h2>
          <p>
            Plagiarism occurs when an author uses another's work without
            permission, credit, or approval. Plagiarism takes different forms,
            from outright copying to paraphrasing the work of another. The
            editor-in-chief or managing editor will investigate any allegations
            of plagiarism made to a journal. If the allegations appear to be
            founded, we will ask all named authors of the paper to explain the
            above content. If the explanation is satisfactory, we will accept
            the submission and may also reject future submissions.
          </p>
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
h2,
h5,
h6 {
  font-family: "Rubik", sans-serif;
}
h6 {
  padding: 10px 0 10px 0;
}
h5 {
  padding-bottom: 10px;
  font-size: 18px;
}
h2 {
  padding-bottom: 20px;
  font-size: 24px;
}
p {
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  color: rgb(100, 117, 137);
  text-align: justify;
  text-justify: inter-word;
}
.reviewList {
  margin-left: -20px;
}
.reviewImage img {
  padding: 40px 80px 0 0;
  max-width: 107%;
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