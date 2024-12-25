<template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info"
            >Peer Review <b-icon-arrow-down></b-icon-arrow-down
          ></b-button>
        </b-card-header>
        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <h3>Peer Review :</h3>
              <p>
                Peer review is necessary to maintain the standards of our
                research paper publication. Peer-reviewed articles are building
                blocks of a coherent and respected network of knowledge. For
                each paper entering the peer review process, at least two peer
                reviewers are selected, who must be independent of the authors
                and their institutions, able to evaluate the technical aspects
                of the paper, and available to evaluate the research paper
                within the required period. The peer reviewers selected are
                expected to:
              </p>
              <ul>
                <li>
                  <p>
                    Furnish An Objective And Detailed Evaluation Of The Paper,
                    And Contribute To The Decision-Making Process;
                  </p>
                </li>
                <li>
                  <p>
                    Keep Any Information Provided By The Editor Who Has Been
                    Assigned The Paper Confidential, Without Copying Or Keeping
                    The Manuscript;
                  </p>
                </li>
                <li>
                  <p>
                    Alert the editor to whom the paper is assigned, any content
                    it publishes, and that it is similar to the paper being
                    reviewed;
                  </p>
                </li>
                <li>
                  <p>
                    Notify the designated author of the paper of any potential
                    conflicts of interest;
                  </p>
                </li>
                <li>
                  <p>
                    Please submit a full, detailed report of the rationale for
                    their evaluations and the paper to the assigned Editor; And
                  </p>
                </li>
                <li>
                  <p>
                    Commit To Evaluating The Paper As Quickly As Possible To
                    Meet The Deadlines, And Advise The Editor Who Has Been
                    Assigned The Paper Immediately About The Risk Of Failing To
                    Finish The Evaluation Within The Required Period.
                  </p>
                </li>
                <p>
                  Confidentiality is of paramount importance to the peer review
                  process. Reviewers must maintain the confidentiality of
                  manuscripts. Suppose a reviewer wishes to seek advice from
                  colleagues while assessing a manuscript. In that case, they
                  must consult with the editor and provide the names of such
                  colleagues to the journal with the final report.
                </p>
                <p>
                  Even if the submitted manuscript is ultimately published,
                  correspondence with the journal, reviewers' comments, and
                  other confidential materials may not be published, disclosed,
                  or publicized without prior written permission. Reviewers
                  should be aware that our policy is to keep their names
                  confidential, and we do our best to ensure this
                  confidentiality.
                </p>
              </ul>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-info {
  background-color: #9b6646;
}
.card {
  border: none;
}
h3 {
  font-size: 1em;
}
</style>