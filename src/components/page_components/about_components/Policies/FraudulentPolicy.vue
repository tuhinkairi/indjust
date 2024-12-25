<template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-9 variant="info"
            >Fraudulent Research And Research Misconduct
            <b-icon-arrow-down></b-icon-arrow-down>
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-9"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>
              <p>
                Fraudulent research and misconduct distort the evidence base, misdirect research efforts, waste funds, and damage public trust in science. INDJCST and its editors have been taking successful steps to tackle research fraud and misconduct for a long time. If an author is found to have engaged in research fraud or misconduct, we will investigate with the relevant institutions or bodies. Any publication containing fraudulent results will be retracted or corrected accordingly.
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