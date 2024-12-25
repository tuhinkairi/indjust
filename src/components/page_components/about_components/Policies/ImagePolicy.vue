<template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-8 variant="info"
            >Image Manipulation, Falsification and Misconduct
            <b-icon-arrow-down></b-icon-arrow-down>
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-8"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>
              <p>
                Where research data are collected or presented as images,
                modifying these images can sometimes misrepresent the results
                obtained or their significance. The INDJCST recognizes that
                there can be legitimate reasons for image modification. But we
                expect authors only to modify images if this leads to the
                falsification, fabrication, or misrepresentation of their
                results.
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