 <template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-4 variant="info"
            >Plagiarism <b-icon-arrow-down></b-icon-arrow-down>
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-4"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>
              <p>
                Whether ideas, text, or results, plagiarism is the unauthorized
                copying or attempted misuse of original creativity. We don't
                tolerate plagiarism in any of our publications and reserve the
                right to check all submissions with appropriate
                plagiarism-checking tools. Submissions containing suspected
                plagiarism will be rejected in whole or in part. INDJCST editors
                evaluate all the following plagiarism cases on their merits.
              </p>
              <ul>
                <li>
                  <p>
                    Plagiarism occurs when large amounts of text are cut and
                    pasted without proper and unambiguous attribution. In
                    addition to wholesale verb reuse in text, due care should be
                    taken to ensure appropriate attribution and citation when
                    paraphrasing and summarizing the work of others.
                  </p>
                </li>
                <li>
                  <p>
                    Text Recycling, Or the Reuse Of Parts Of Text From An
                    Author’s Previous Research Publication, Is A Form Of
                    Self-Plagiarism. When Reusing Text, Whether From The
                    Author’s Publication Or That Of Others, Appropriate
                    Attribution And Citation Is Necessary To Avoid Creating A
                    Misleading Perception Of A Unique Paper For The Reader.
                  </p>
                </li>
                <li>
                  <p>
                    Duplication occurs when an author reuses substantial
                    portions of their published work without appropriate
                    attribution. It can Range From Publishing An Identical Paper
                    In Multiple Journals To Only Adding A tiny amount of new
                    data to a published paper.
                  </p>
                </li>
              </ul>
              <p>
                If the allegations appear to be founded, we will ask all named
                paper authors to explain the above content. If we are satisfied
                with this explanation, we will accept that author's submissions
                and may reject future submissions.
              </p>
              <p>
                If plagiarism is discovered post-publication, the INDJCST may
                correct or retract the original publication depending on the
                degree of plagiarism, the context within the published article,
                and its impact on the overall integrity of the published study.
                We expect our readers, reviewers, and editors to raise any
                suspicions of plagiarism, either by contacting the editor or by
                emailing <i>editorinchief@indjcst.com.</i>
              </p>
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
b-card-text {
  border: 5px solid black;
}
</style>