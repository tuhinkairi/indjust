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
          <div class="page-heading"> 
            Publication Ethics Policy: 

          </div>
          <div>
            <p class="statement">
              (The statements below are based on Elsevier recommendations as
              well as COPE's Best Practice Guidelines for Journal Editors.)
            </p>
            <p>
              To Maintain Fair Practice, We At the Indian Journal of Computer
              Science and Technology (INDJCST) Strongly Believe In Following
              These Guidelines. We Are Committed To Fair Practice Of
              Publication. Can achieve success in this regard If the Following
              Participants Well practice Ethicsants:
            </p>
            <h2>Ethical Guidelines for Journal Publication</h2>
            <p>
              Indian Journal of Computer Science and Technology (INDJCST)Is
              Committed to Ensuring Ethics in the Publication and Quality of
              Articles. Especially Indian Journal of Electrical and Electronics
              engineering Follows the Code of Conduct as Defined by The
              Https://Publicationethics.Org/Files/U2/New_Code.Pdf
            </p>
            <p>
              These Ethics Include The Editor Following Certain Rules On
              Relations With Readers, Authors, And Reviewers, As Well As
              Procedures For Handling Complaints. All parties involved must
              adhere to ethical behaviour standards, including authors, editors,
              reviewers, and the publisher. in particular
            </p>
            <hr />
          </div>
          <div>
            <h2>Authors</h2>
            <p>
              Authors Should Present An Objective Discussion Of The Significance
              Of The Research Work As Well As Sufficient Details And References.
            </p>
            <p>
              Authors Should Maintain Accurate Records Of Data Associated With
              Their Submitted Manuscript And Supply Or Provide Access To These
              Data, On Reasonable Request. The authors Guarantee That All Data
              Used In The Article Are Real And Authentic. Where Appropriate And
              Where Allowed By Employer, Funding Body And Others Who Might Have
              An Interest, Authors Should Deposit Data In A Suitable Repository
              Or Storage Location, For Sharing And Further Use By Others.
            </p>
            <p>
              Fraudulent Or Consciously Inaccurate Statements Constitute
              Unethical Behavior And Are Unacceptable.
            </p>
            <p>
              The writers must make sure that their work is entirely original.
              Your use of someone else's words or work has been appropriately
              acknowledged. Plagiarism is unacceptable in all forms and
              constitutes unethical publishing behavior. It is unacceptable to
              simultaneously submit the same manuscript to multiple journals, as
              this constitutes unethical publishing behavior. Authors shouldn't
              submit papers describing essentially the same research to several
              journals.
            </p>
            <p>
              Authors Should Acknowledge The Financial Support And Help/Guidance
              Of Others If Appropriate.
            </p>
            <p>Authors Should Provide The Disclaimer If Appropriate.</p>
            <p>
              All co-authors must have made a significant contribution to the
              research. The final version of the paper and its submission for
              publication must be approved with an entire agreement by all
              co-authors, according to the corresponding author.
            </p>
            <p>
              Authors Are Obliged To Participate In the Peer Review Process.
            </p>
            <p>
              Whenever a significant error is found in their publication, the
              authors should notify the editor as soon as possible and work with
              them to publish an erratum, addendum, or corrigendum notice or
              retract the paper as needed.
            </p>
          </div>
          <div>
            <h2>Editors</h2>
            <p>
              Editors Have Entire Responsibility And Authority To Accept/Reject
              A Manuscript.
            </p>
            <p>
              Editors Should Evaluate Manuscripts Exclusively based on Their
              Academic Merit. Editors Act In A Balanced, Objective, And Fair Way
              While Carrying Out Their Expected Duties, Without Discrimination
              On Grounds Of Gender, Sexual Orientation, Religious Or Political
              Beliefs, or Ethnic Or Geographical Origin Of The Authors.
            </p>
            <p>Editors Accept The Paper When Reasonably Certain.</p>
            <p>
              Authors may not use unpublished information in the author's
              research without the author's written consent.
            </p>
            <p>Editors Preserve Anonymity Of Reviewers.</p>
            <p>
              When errors are found, editors promote publication of correction
              or retraction.
            </p>
            <p>
              When Errors Are Found, Editors Promote the Publication Of
              Correction Or Retraction.
            </p>
          </div>
          <div>
            <p>
              Authors should take reasonable responsive steps if ethical
              complaints are made regarding a submitted manuscript or published
              article.
            </p>
            <h2>Reviewers</h2>
            <p>
              Any Manuscripts Received For Review Must Treat As Confidential
              Documents. Privileged Information Or Ideas Obtained Through Peer
              Review kept Must be Confidential And Not Used For Personal
              Advantage.
            </p>
            <p>
              They should conduct Reports Objectively, And Observations Should
              Be Formulated Clearly With Supporting Arguments, So Authors Can
              Use Them For Improving The Paper. Any Relevant Published Work
              Still Needs to be Cited Should Be Pointed Out.
            </p>
            <p>
              Any selected referee who considers the research reported in a
              manuscript ineligible to review or knows that its prompt review is
              impossible must notify the editor and excuse himself from the
              review process.
            </p>
            <p>
              Reviewers should not consider manuscripts with conflicts of
              interest resulting from competitive, collaborative, or other
              relationships or affiliations with authors, institutions, or
              organizations connected to the articles.
            </p>
          </div>
          <div>
            <h2>Publisher</h2>
            <div class="publicationList">
              <ul>
                <li>
                  <p>Publisher Monitors And Safeguards Publishing Ethics.</p>
                </li>
                <li><p>Publisher Communicates Journal Policies.</p></li>
                <li>
                  <p>Publisher Respects Privacy Of All Parties Involved.</p>
                </li>
                <li><p>Publisher Fosters Editorial Independence.</p></li>
                <li>
                  <p>
                    Publisher Maintains The Integrity Of The Academic Record.
                  </p>
                </li>
                <li>
                  <p>
                    Publisher Protects Intellectual Property And Copyrights.
                  </p>
                </li>
                <li>
                  <p>
                    Publisher Publishes Corrections, Clarifications, And
                    Retractions.
                  </p>
                </li>
                <li>
                  <p>
                    Publisher Constantly Improves The Quality Of The Journal.
                  </p>
                </li>
              </ul>
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
h3 {
  font-family: "Rubik", sans-serif;
  padding-bottom: 10px;
  font-size: 24px;
}
h5 {
  font-family: "Rubik", sans-serif;
  padding: 10px 0 10px 0;
  font-size: 18px;
}
p {
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  color: rgb(100, 117, 137);
  text-align: justify;
  text-justify: inter-word;
}
.statement {
  color: green;
  font-size: 14px;
}
.publicationList {
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
h2 {
  font-size: 18px;
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
.page-heading{
  font-size: 1.5em; 
  font-weight: bold; 
  margin-bottom: 20px; 
  display: block
}

</style>