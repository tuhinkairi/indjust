<template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-5 variant="info"
            >Duplicate And Redundant Publication
            <b-icon-arrow-down></b-icon-arrow-down>
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-5"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>
              <p>
                Duplicate or redundant publication ensues when a work or a
                substantial part of it is published more than once by the
                original authors without appropriate cross-referencing or
                justification. When you submit your manuscript to our journals,
                these manuscripts should not be under consideration, accepted
                for publication, or in the press within a different journal,
                book, or equivalent entity.
              </p>
              <p>
                When submitting a work to an INDJCST, authors must indicate in
                the cover letter if any portions of the study have already been
                or will be published elsewhere. The INDJCST may only consider
                the other work if the principal finding, conclusions, or
                consequences are not made clear or written in a language other
                than English and published there. When in doubt, writers should
                consult the editor working on their piece.
              </p>
              <p>
                Suppose an author reuses a figure or figure published or
                copyrighted elsewhere. In such cases, writers must provide
                documentation that the previous publisher or copyright holder
                has permitted them to republish the image. The INDJCST
                Editor-in-Chief considers all materials in good faith that their
                journals have full permission to publish every part of the
                submitted content, including statistics.
              </p>
              <p>
                We desire our readers, reviewers, and editors to raise any
                suspicions of duplicate or redundant publication either by
                contacting the relevant editor or by emailing
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