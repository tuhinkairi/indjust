<template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-10 variant="info"
            >Data And Supporting Evidence
            <b-icon-arrow-down></b-icon-arrow-down>
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-10"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>
              <p>
                The INDJCST advocates transparency and openness around data code
                and other materials associated with research. We expect authors
                to maintain accurate records of supporting evidence necessary to
                facilitate the understanding, verification, and replication of
                their findings and to supply or provide access to this
                supporting evidence on reasonable request.
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