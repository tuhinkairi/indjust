<template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-6 variant="info"
            >Conflicts of Interest and Funding
            <b-icon-arrow-down></b-icon-arrow-down>
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-6"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>
              <p>
                In the interests of transparency and to help readers form their
                judgments about potential bias, INDJCST requires authors to
                declare any competing interests related to the work described.
                Competing interests are financial and non-financial interests
                that may directly undermine or undermine a publication's
                objectivity, integrity, and value by potentially influencing
                authors' judgments and actions regarding objective data
                presentation, analysis, and interpretation.
              </p>
              <p>
                The corresponding writer is responsible for submitting a
                statement of competing interests through the Open Journal System
                (OJS) on behalf of all paper authors. As INDJCST adopts
                double-blind peer review, reviewers are provided with a minimum
                statement disclosing any financial or non-financial interest to
                prevent disclosing authors' identities. We also expect anyone
                who suspects an undisclosed conflict of interest concerning a
                work published or under consideration by INDJCST to report it to
                the corresponding editor or email
                <i>editorinchief@indjcst.com</i>
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