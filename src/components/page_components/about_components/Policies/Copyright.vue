<template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-13 variant="info"
            >Copyright Information<b-icon-arrow-down></b-icon-arrow-down>
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-13"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>
              <p>
                Once the editorial board informs the author that the paper under
                review is accepted via email or OJS, it is tacitly approved that
                the copyright of the paper is transferred from the author to the
                journal, no matter whether the Copyright Transfer Agreement is
                signed or the formal acceptance letter is offered instantly
                after the acceptance. As soon as the acceptance decision is
                notified, the editorial board will not agree to any request from
                the author for cancellation or removal of the paper.
              </p>
              <p>
                INDJCST will hold copyright on all papers, while the author will
                maintain all other rights, including patents and the right to
                use and reproduce the material.
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