<template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-12 variant="info"
            >Censorship <b-icon-arrow-down></b-icon-arrow-down>
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-12"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>
              <p>
                INDJCST is fully committed to the principle and promotion of
                freedom of speech and expression. As a global (Fifth Dimension
                Research Publication) publisher, we aim to disseminate knowledge
                to the broadest possible audience and serve the academic
                community in all countries worldwide. However, we do not support
                the publication of false statements that harm the reputation of
                individuals, groups, or organizations.
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