<template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="info"
            >Authors And Authors' Responsibilities
            <b-icon-arrow-down></b-icon-arrow-down>
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-3"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>
              <p>
                Authorship provides credit for a researcher’s paper to a study
                and carries accountability. Each author is expected to meet the
                following requirements:
              </p>
              <ul>
                <li>
                  <p>
                    Having Made Substantial Papers To The Conception Or Design
                    Of The Work; Or The Acquisition, Analysis, Or Interpretation
                    Of Data; Or The Creation Of New Software Used In The Work;
                  </p>
                </li>
                <li>
                  <p>Having Drafted The Work Or Substantively Revising It;</p>
                </li>
                <li>
                  <p>Having Drafted The Work Or Substantively Revising It;</p>
                </li>
                <li>
                  <p>
                    Authors agree to be personally accountable for their papers
                    and to ensure that questions regarding the accuracy or
                    integrity of any part of the work in which the author is not
                    personally involved are appropriately investigated,
                    resolved, and the resolution documented.
                  </p>
                </li>
              </ul>
              <p>
                During the research paper publication process, the corresponding
                author is responsible for ensuring that the manuscript and
                correspondence, data, and materials conform to the field and
                journal's standards of transparency and reproducibility and are
                preserved following best practices in the field so that they are
                retrieved for reanalysis; Ensuring that data and materials
                reflect the original accurately; Anticipating and reducing
                barriers to sharing data and materials described in work; Acting
                as a point of contact for queries regarding the published paper,
                i.e., informing the co-authors of all matters arising concerning
                the published paper and ensuring that such matters are dealt
                with promptly, and immediately notify the journal if any aspect
                is known to require correction.
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
</style>