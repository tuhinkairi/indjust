<template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info"
            >Editorial Process <b-icon-arrow-down></b-icon-arrow-down>
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-2"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>
              <p>
                The INDJCST is committed to editorial independence and strives
                to prevent this principle from being compromised through
                conflicts of interest, fear, or any other corporate, business,
                financial, or political influence. We do not discriminate
                against authors, editors, or peer reviewers based on personal
                characteristics or identity. During the editorial process,
              </p>
              <ul>
                <li>
                  <p>
                    Each paper submitted to one of our journals is initially
                    assessed by an editor who covers the subject area and
                    decides whether to send it for peer review in consultation
                    with experts in relevant fields. Assume the paper is
                    appropriate for consideration by the INDJCST. In that case,
                    The Editor Who Has Been Assigned the Paper Will Select a
                    Minimum of Two Peer Reviewers for The journal Paper, After
                    Consulting the Editors Who Have Lately Handled Papers in
                    Relevant Fields. The Editor Must Guarantee the Selection of
                    Peer Reviewers Who Are Most Qualified and Best Able to
                    Provide a Critical, Expert, And Unbiased Evaluation of The
                    Paper.
                  </p>
                </li>
                <li>
                  <p>
                    Based on the peer reviewers' feedback, the editor assigned
                    to each paper makes editorial decisions. Acceptance, minor
                    revision, major revision, and rejection are all potential
                    outcomes. Regardless of the author's gender, sexual
                    orientation, political beliefs, ethnicity, or place of
                    origin, decisions are only made based on the scientific
                    merits of the paper's content. You could transfer all
                    manuscript materials, the acceptance email, and reviewers'
                    comments to another INDJCST journal if your research paper
                    is rejected without having to start the submission process
                    again from scratch.
                  </p>
                </li>
                <li>
                  <p>
                    The Designated Editor will not disclose any information
                    about the article to anyone other than the authors and
                    reviewers. Also, they are ultimately responsible for
                    ensuring that the research paper is published or rejected
                    and that peer review is completed on time. The journal's
                    editorial board is committed to maintaining the
                    confidentiality of papers, authors, and reviewers to
                    maintain anonymity during publication.
                  </p>
                </li>
              </ul>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.btn-info {
  background-color: #9b6646;
}
.card {
  border: none;
}
</style>