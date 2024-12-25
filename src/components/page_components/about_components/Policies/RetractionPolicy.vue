<template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-7 variant="info"
            >Retractions, Corrections and Expressions of Concern
            <b-icon-arrow-down></b-icon-arrow-down>
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-7"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>
              <p>
                The INDJCST operates the following policy for correcting our
                peer-reviewed content's print and online versions. Three kinds
                of amendments are relevant for peer-reviewed material:
              </p>
              <ul>
                <li>
                  <p>
                    Erratum: Notification of a critical error that affects the
                    publication record, the scientific integrity of the paper,
                    or the reputation of the authors or journal.
                  </p>
                </li>
                <li>
                  <p>
                    Corrigendum: Notification Of A Crucial Error Made By The
                    Author(S) That Affects The Publication Record, The
                    Scientific Integrity Of The article, Or The Reputation Of
                    The Authors Or The Journal.
                  </p>
                </li>
                <li>
                  <p>
                    Retraction: Notification of incorrect results that affect
                    the credibility of a previously published article. The
                    original article is marked retracted but is available to
                    readers. Retractions are reserved for articles whose
                    findings or conclusions should not be relied upon.
                  </p>
                </li>
              </ul>
              <p>
                Accepted manuscripts may make minor changes, such as those
                likely occurring during typesetting or proofreading but not
                substantive corrections. Anyone who believes that research
                published by INDJCST has not been carried out in line with these
                principles could raise their concerns with the relevant editor,
                or email <i>editorinchief@indjcst.com</i>
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