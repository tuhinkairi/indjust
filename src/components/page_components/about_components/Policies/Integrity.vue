<template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-11 variant="info"
            >Integrity Of Record<b-icon-arrow-down></b-icon-arrow-down>
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-11"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>
              <p>
                The INDJCST records everything we publish with information
                (metadata) describing each publication. If our content is deemed
                not to comply with the laws of a sovereign nation, we will make
                every effort to ensure the metadata remains accessible within
                that jurisdiction. We preserve the academic record as far as
                possible if we are obliged to alter the publication record in
                any way, such as a retraction against research misconduct.
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