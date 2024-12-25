<template>
  <div>
    <section class="speciality-area">
      <div class="container">
        <div class="row justify-content-between">
          <div class="page-heading"> Ethics & Policies : </div>
          <div class="ethicsContent ">
            <p>
              The Indian Journal of Computer Science and Technology (INDJCST) is
              an esteemed online research paper publication site that publishes
              innovative ideas spearheaded by academic luminaries,
              educationists, engineers, and corporate professionals in computer
              science and technology. INDJCST welcomes pioneering research
              results and fundamental breakthroughs across various engineering
              disciplines, firmly establishing itself as a scholarly,
              open-access, double-anonymized, and peer-reviewed journal paper
              publication of choice for academics and students alike. With an
              unwavering focus on facilitating the growth and development of the
              academic community and its industry partners, INDJCST provides a
              platform for original research papers and application submissions
              related to advanced computer science and engineering technologies.
            </p>
            <p>
              Publishing a journal paper in a double-anonymized peer-reviewed
              journal is crucial for creating a comprehensive and reputable
              knowledge network. It serves as a direct reflection of the
              author's work quality and the institutions that support them.
              Double-anonymized peer-reviewed articles uphold and embody the
              principles of the scientific method, making it imperative to
              establish ethical standards in this field. As professionals in the
              English language, we must recognize the significance of publishing
              in such journals and strive to maintain the highest levels of
              ethical conduct in our research and writing.
            </p>
          </div>
          <div class="ethicsContent ">
            <h2>Ethics Topics To Consider When Publishing :</h2>
            <p>
              <b>Authorship Of The Journal Paper: </b> Only those who
              contributed significantly to the conception, design, execution, or
              interpretation of the reported study should be given the author
              title.
            </p>
            <p>
              <b>Originality and Plagiarism: </b>Authors must ensure their work
              is entirely original. If they have used ideas or words from
              others, they must cite or quote them correctly.
            </p>
            <p>
              <b>Data Access And Retention: </b>Writers may be asked to provide
              raw data relevant to editorial review and should be prepared to
              provide public access to such data.
            </p>
            <p>
              <b>Multiple, redundant, or concurrent publications: </b>Generally,
              an author should only Publish manuscripts to one journal or
              primary publication describing the same research. The following
              uses of a work are not considered prior publications by INDJCST:
              publication as an academic thesis, publication as an abstract, and
              publication as an electronic preprint. The INDJCST journal's Guide
              for Authors includes information about prior publications.
            </p>
            <p>
              <b>Acknowledgment of Sources: </b>A proper and satisfactory
              acknowledgment.
            </p>
            <p>
              <b>Disclosure and Conflicts of Interest:</b>All submissions must
              disclose any affiliations that could be interpreted as presenting
              a potential conflict of interest.
            </p>
            <p>
              <b>Fundamental Errors in Published Works:</b> When writers find a
              considerable error or inaccuracy in their work, they should
              promptly inform the journal editor or publisher and Collaborate
              with the editor to retract or correct the paper.
            </p>
            <p>
              <b>Reporting Standards: </b> When writing reports based on
              original research, providing a truthful account of the work done
              and an objective discussion of its significance is vital.
            </p>
            <p>
              <b>Hazards and Human or Animal Subjects: </b> If the work involves
              chemicals, procedures, or equipment that have any unusual hazards
              inherent in their use or if it involves human or animal subjects,
              statements of compliance are required.
            </p>
            <p>
              <b>Usage of Patient Images or Case Details: </b>Research on
              Patients or Volunteers Needs Ethics Committee Permission And
              Informed Consent, Which Should be Documented In The Paper.
            </p>
          </div>
          <div class="ethicsContent">
            <h2>Ethics and policy of INDJCST are given below:</h2>
          </div>
        </div>

        <EditorialVue />
        <PeerPolicyVue />
        <AuthorPolicyVue />
        <PlagiarismPolicyVue />
        <DuplicateVue />
        <ConflictsPolicyVue />
        <RetractionPolicyVue />
        <ImagePolicyVue />
        <FraudulentPolicyVue />
        <DataVue />
        <IntegrityVue />
        <CensorshipVue />
        <CopyrightVue />
        <div class="pt-5 " style="padding: 0 5px;">
          <p>
            <i>
              Once the editorial board informs the author that the paper under
              review is accepted, via email or OJS, it is tacitly approved that
              the copyright of the paper is transferred from the author to the
              journal, no matter whether Copyright Transfer Agreement is signed
              or the formal acceptance letter is offered instantly after the
              acceptance. As soon as the acceptance decision is notified, the
              editorial board will not agree to any request from the author for
              cancellation or removal of the paper.</i
            >
          </p>
          <p>
            <i>
              INDJCST will hold copyright on all papers, while the author will
              maintain all other rights including patents and the right to use
              and reproduce material.</i
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import EditorialVue from "./Policies/EditorialPolicy.vue";
import PeerPolicyVue from "./Policies/PeerPolicy.vue";
import AuthorPolicyVue from "./Policies/AuthorPolicy.vue";
import PlagiarismPolicyVue from "./Policies/PlagiarismPolicy.vue";
import DuplicateVue from "./Policies/Duplicate.vue";
import ConflictsPolicyVue from "./Policies/ConflictsPolicy.vue";
import RetractionPolicyVue from "./Policies/RetractionPolicy.vue";
import ImagePolicyVue from "./Policies/ImagePolicy.vue";
import FraudulentPolicyVue from "./Policies/FraudulentPolicy.vue";
import DataVue from "./Policies/Data.vue";
import IntegrityVue from "./Policies/Integrity.vue";
import CensorshipVue from "./Policies/Censorship.vue";
import CopyrightVue from "./Policies/Copyright.vue";

export default {
  name: "CompanyDescription",
  components: {
    EditorialVue,
    PeerPolicyVue,
    AuthorPolicyVue,
    PlagiarismPolicyVue,
    DuplicateVue,
    ConflictsPolicyVue,
    RetractionPolicyVue,
    ImagePolicyVue,
    FraudulentPolicyVue,
    DataVue,
    IntegrityVue,
    CensorshipVue,
    CopyrightVue,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
h2 {
  font-family: "Rubik", sans-serif;
  padding-bottom: 10px;
  font-size: 18px;
}
p {
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  color: rgb(100, 117, 137);
  text-align: justify;
  text-justify: inter-word;
}
h3 {
  font-family: "Rubik", sans-serif;
  font-size: 24px;
}
.ethicsContent {
  padding-bottom: 10px;
  padding: 0 5px;
}
.page-heading{
  font-size: 1.5em; 
  font-weight: bold; 
  margin-bottom: 20px; 
  display: block
}

</style>