<template>
  <div>
    <section class="speciality-area">
      <div style="display: flex;justify-content: space-around;">
        <div style="width: 200px;" class="left-side-container mr-2"
        >
          <p class="blink mb-5"> <a href="http://editorial.fdrpjournals.org/login?journal=6" style="color: #fff;">Submit
              Research Paper</a> </p>

              <div class="shadow-effect mb-5">
            <div class="left-side-heading"> Downloads : </div>
            <p style="cursor: pointer;"
              @click="getManuScript('https://panel.indjcst.com/storage/templates/manuscript.docx')">
              Manuscript Template
            </p>
            <p style="cursor: pointer;"
              @click="getCopyRightForm('https://panel.indjcst.com/storage/templates/copyrights.pdf')">
              Copyright Form
            </p>
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../../../assets/Images/isn.jpg" height="90" width="200" />
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../../../assets/Images/cc.jpg" height="90" width="180" />
            <p>All research Article published on this website are licensed under Creative Commons
              Attribution-ShareAlike
              4.0
              International License, and all rights belong to their respective authors/researchers.
            </p>
          </div>
          <div>
           <IndexingSideDesign/>
          </div>
        </div> 
      <div class="container" style="max-width: 1000px !important; margin: 0">
        <div class="row justify-content-between">
          <div class="page-heading"> Instruction For Authors: </div>
          <div>
            <p>
              Publish with the Indian journal of computer science and technology
              (INDJCST)
            </p>
            <h2>
              Join our community of authors and benefit from the following:
            </h2>
            <ul class="authorList">
              <li>
                <p>
                  An Easy-To-Use Manuscript Submission System, Without
                  Manuscript Formatting Requirements.
                </p>
              </li>
              <li>
                <p>
                  Free Complete Language Editing Report At Submission Time To
                  Assist You In Evaluating And Improving Your Work Before To
                  Peer Review.
                </p>
              </li>
              <li>
                <p>
                  Dedicated Editors Who Are Active In Their Specific
                  Communities.
                </p>
              </li>
              <li>
                <p>
                  High editorial standards, ensuring that every manuscript
                  published Undergo through a thorough peer review process.
                </p>
              </li>
              <li>
                <p>
                  With complete transparency about all publishing metrics and
                  turnaround times, publications are published quickly and
                  effectively.
                </p>
              </li>
              <li>
                <p>
                  Open access increases the impact, reach, and visibility of
                  your research.
                </p>
              </li>
              <!-- <li>
                <p>
                  Retention Of All Ownership And Copyright Of Your Published
                  Research.
                </p>
              </li> -->
            </ul>
          </div>
        </div>
        <div>
          <h2>Submission</h2>
          <p>
            One of the authors should submit manuscripts through our journals'
            online submission process. There is no page restriction, and only
            Word (.doc,.docx,.odt,.rtf,.txt) files can be uploaded using the
            system for submitting manuscripts. The file name of the primary
            manuscript file shouldn't contain special characters. The writers
            will only accept submissions from one of the authors. Throughout
            submission and peer review, the paper is under the responsibility of
            the author.
          </p>
        </div>
        <div>
          <h2>Terms of submission:</h2>
          <p>
            Must submit manuscripts since they have yet to be published
            elsewhere and are only being considered by this journal. The writer
            submitting the paper must ensure that all other co-authors have
            given their consent for publication. Moreover, the submitting author
            must guarantee that the paper has received all required
            institutional clearances. Can only verify The date receipt formally
            with an acknowledgment from the editing office. Unless otherwise
            stated, we will forward all additional communication and proof to
            the author(s) before publication. The authors must agree to the text
            being readability edited as a condition of submission. All
            submissions are subject to the FDRP terms of service and should send
            any questions regarding publishing approved articles to the
            editor-in-chief/INDJCST.
          </p>
        </div>
        <div>
          <h2>Peer review:</h2>
          <p>
            All submitted articles are evaluated and peer-reviewed to ensure
            editorial appropriateness and technical accuracy..
          </p>
          <p><b>Research published in the journal must be:</b></p>
          <ul class="authorList">
            <li>
              <p>
                Scientifically Valid - Complying With Community Accepted
                Standards Of Research.
              </p>
            </li>
            <li><p>Technically Accurate In Its Methods And Results.</p></li>
            <li>
              <p>
                • Representative Of A Specific Advance, Replication, Or
                Null/Negative Result, Which Is Worthy Of Publication..
              </p>
            </li>
            <li>
              <p>
                As reproducible as possible - share underlying data, code, and
                supporting materials wherever able.
              </p>
            </li>
            <li>
              <p>
                Ethically sound and transparent - adhering to best practices for
                animal and human studies, consent to publish, and explicitly
                declaring any potential conflicts of interest, both real and
                perceived.
              </p>
            </li>
          </ul>
          <p>
            In the spirit of sharing results through our open science, emphasis
            is not placed on novelty, interest, or perceived impact. Replication
            studies, particularly of research published in this journal, are
            encouraged.
          </p>
          <p>
            An article must fulfil the basic editorial requirements and fall
            within the journal's purview for the assigned editor to accept it
            for publishing. Let's say a piece of writing gets approved for
            publication in the journal. In that situation, the editor will
            preferably request at least two outside peer reviewers (who will
            remain anonymous to the authors unless they wish to reveal their
            name by signing the review report) to evaluate the article before
            confirming a decision to approve. The editor-in-chief has the final
            say on submissions that should be rejected.
          </p>
          <p>
            Our research integrity team periodically consults with experts
            outside of conventional peer review, for instance, when reviewing
            contributions with significant ethical, security, biosecurity, or
            societal implications. Before deciding on the most suitable course
            of action, we may contact experts and the editor. This may include,
            but is not limited to, selecting reviewers with particular
            expertise, having other editors evaluate the contribution, and
            declining to examine it further.
          </p>
        </div>
        <div>
          <h2>Article types:</h2>
          <p>The journal will consider the following article types:</p>
        </div>
        <div>
          <h3>Research article:</h3>
          <p>
            Research articles should present the results of an original research
            study. These manuscripts should describe how to conduct the research
            project and provide a thorough analysis of the project results.
          </p>
        </div>
        <div>
          <h3>Reviews:</h3>
          <p>
            A review article provides an overview of the published literature in
            a particular subject area.
          </p>
        </div>
        <div>
          <h2>Formatting:</h2>
          <p>
            <b
              >An optional research article manuscript template can be
              downloaded from the website. We recommend that all manuscripts
              include line numbers and follow the structure below:
            </b>
          </p>
        </div>
        <div>
          <h2>Title and authorship information:</h2>
          <p>The following information should be included:</p>
          <ul class="authorList">
            <li><p>Manuscript Title</p></li>
            <li><p>Full Author Names</p></li>
            <li><p>Full Institutional Mailing Addresses</p></li>
            <li><p>Email Addresses</p></li>
          </ul>
        </div>
        <div>
          <h2>Abstract:</h2>
          <p>
            The manuscript should contain an abstract. The abstract should be
            300 words or less, self-contained, and contain citation-free.
          </p>
        </div>
        <div>
          <h2>Introduction:</h2>
          <p>With no subheadings, this section should be brief.</p>
        </div>
        <div>
          <h2>Materials and methods:</h2>
          <p>
            The methods section should provide enough detail for others to
            replicate the study. If you have multiple methods, use subsections
            with relevant headings, e.g., different models, in vitro and in vivo
            studies, statistics, materials, reagents, etc.
          </p>
          <p>
            There is no method space limitation in INDJCST. Comprehensive
            explanations of the procedures (including protocols or project
            summaries) and algorithms may also be uploaded as supplemental data
            or may mention a previous publication with more excellent
            information. If a method from prior work is employed, that
            publication must be cited and described. If the language has been
            taken from a previously published paper, it must be stated as such.
            For example, This study employs the approach of Smith et al., and
            the explanation of the method partially inspired their terminology
            [1].
          </p>
          <p>
            If a method or instrument, including software, questionnaires, and
            scales, is introduced into the study, the license available
            hereunder must specify the permission requirement. If an existing
            method or tool is used in the research, the authors are responsible
            for checking the license and obtaining the necessary permission. If
            permission is required, the Materials and Methods section should
            include a statement confirming that permission has been granted.
          </p>
        </div>
        <div>
          <h2>Results and discussion:</h2>
          <p>This section may be split into subsections or may be combined.</p>
        </div>
        <div>
          <h2>Main text (review only):</h2>
          <p>This section may be divided into subsections or may be combined</p>
        </div>
        <div>
          <h2>Conclusion:</h2>
          <p>
            Clearly explain the article's main conclusions, highlighting their
            importance and relevance.
          </p>
        </div>
        <div>
          <h2>Data availability:</h2>
          <p>
            This statement should describe how readers can access the data
            supporting the study's conclusions and clearly outline why
            unavailable data cannot be released.
          </p>
        </div>
        <div>
          <h2>Conflicts of interest</h2>
          <p>
            The authors must declare all relevant interests that can be
            perceived as conflicting. Writers should describe how each
            conflicting interest could exist. The writers should declare any
            lack of conflicts of interest. Co-authors' declarations of interest
            are the responsibility of the submitting authors.
          </p>
          <p>
            Conflicts of interest (COIs, sometimes known as "competing
            interests") arise when circumstances unrelated to the study may be
            expected to compromise the objectivity or impartiality of the work
            or the evaluation of it. Our publishing ethics policy is available
            for more details. The section on conflicts of interest, which should
            explain why the interest could be a conflict, requires authors to
            disclose all possible conflicts of interest, regardless of whether
            they had any effect. If there aren't any, the authors should say so
            in their statement: "The author(s) declare(s) that there aren't any
            conflicts of interest with the publishing of this article."
            Submitting authors are responsible for co-authors declaring their
            interests. Declared conflicts of interest will be considered by the
            editor and reviewers and included in the published papers.
          </p>
          <p>
            Writers must disclose any funding they have received recently
            (including for article processing fees) and any other payments,
            products, or services that may have influenced their work. No matter
            if there is a conflict of interest, one must disclose all money in
            the financing statement. The participation of anyone other than the
            authors who: i) have an interest in the work's outcome; (ii) is
            affiliated with an organization with such an interest; or (iii) was
            employed by or paid by a funder in the commissioning, must declare
            conception, planning, design, conduct, or analysis of the work, the
            preparation or editing of the manuscript, or the decision to
            publish.
          </p>
          <p>
            Due to your declaration, you may ask to make specific changes to
            your manuscript. These claims are not allegations of abuse. An
            editor or reviewer helps you defend your work against potential
            criticism.
          </p>
          <p>
            If you have doubts about disclosing a potential conflict, remember
            that it may be more problematic to declare it at the time of
            submission if it is discovered later, notably after publication.
            Undisclosed conflicts of interest may result in a correction or, in
            difficult situations, a retraction.
          </p>
        </div>
        <div>
          <h2>Funding statement:</h2>
          <p>
            Authors should indicate how the research and publication of their
            article were funded by naming the funding support body (written in
            total), followed by the relevant grant number(s) in square brackets
            (if applicable), for example: "This work was support by the
            Engineering and Physical Sciences Research Council [grant numbers
            xxxx, yyyy]; National Science Foundation [grant number zzzz]; and a
            Leverhulme Trust Research Project Grant.
          </p>
          <p>
            If the research did not receive specific funding but was performed
            as part of the authors' employment, please name this employer. If
            the funder was involved in the writing, editing, approval, or
            decision to publish the manuscript, please declare this.
          </p>
        </div>
        <div>
          <h2>Acknowledgments:</h2>
          <p>
            The manuscript's references should come before all acknowledgments
            (if any). It is vital to recognize anyone who worked on the study or
            article but is not one of the stated authors (with their
            permission).
          </p>
        </div>
        <div>
          <h2>Reference:</h2>
          <p>
            References from authors may be submitted in any format. INDJCST will
            reformat them if they are approved. Each reference must contain
            comprehensive and correct information, which is the author's
            responsibility. Each reference has to have a unique number that
            follows the order of the initial citation. References should be
            cited inside square brackets, such as "as mentioned by Smith [9]" or
            "as discussed elsewhere [9, 10]," for example. Uncited references
            will discard, so cite anything you use.
          </p>
          <p>
            <b>Citation standards.</b>All data, program code, and other methods
            must be cited appropriately. Such materials should be acknowledged
            as original intellectual contributions and acknowledged by citation.
          </p>
        </div>
        <div>
          <h2>Date formatting:</h2>
          <p>
            INDJCST recommends writing dates out entirely to avoid confusion
            with different all-numeral date styles. For example, 11/10/2021
            could be November 10, 2021, or October 11, 2021, depending on the
            reader; therefore, the date should be written in full. For example,
            September 1, 2021, should be used rather than 01/09/2021 or
            09/01/2021.
          </p>
        </div>
        <div>
          <h2>Units of measurements:</h2>
          <p>
            Units of measurement should be presented and concisely using the
            International System of Units (SI).
          </p>
        </div>
        <div>
          <h2>Preparation of figures:</h2>
          <p>
            When submitting an article, writers must include all figures and
            tables in the manuscript's PDF file. Tables and figures need to be
            presented in separate files. The authors must submit the figure's
            source files if the paper is accepted. They should provide a
            separate electronic file for each figure. Throughout the manuscript,
            we should reference each figure in turn. Vector art files (such as
            those used by Illustrator, EPS, WMF, FreeHand, CorelDraw,
            PowerPoint, Excel, etc.) or bitmap formats should be used to provide
            figures (Photoshop, TIFF, GIF, JPEG, etc.). Unless the resolution is
            purposefully adjusted to a lower level for scientific reasons,
            bitmap pictures should have a resolution of at least 300 dpi. The
            image and labels of a bitmap image should match if there are any.
          </p>
          <p>
            <b>Maps. </b>INDJCST Limited remains neutral on jurisdictional
            claims over published drawings. For consistency reasons, authors are
            requested to use accepted standard maps as a basis for map
            illustration, for example, Map Press's latest standard base map.
            Maps are the author's responsibility, and it is their responsibility
            to provide any copyright or license information when using maps not
            owned or created by the author (e.g., Google Maps, etc.).
          </p>
        </div>
        <div>
          <h2>Preparation of tables:</h2>
          <p>
            Tables should be cited consecutively in the text. Each table should
            have a descriptive heading; If there are numeric measurements, the
            units should be added to the column heading. Do not use vertical
            rules.
          </p>
        </div>
        <div>
          <h2>Proofs:</h2>
          <p>
            The publisher must get corrected proofs and receive them back within
            two to three days. To guarantee quick publishing, the publisher will
            take all reasonable measures.
          </p>
        </div>
        <div>
          <h2>Copyright and permission:</h2>
          <p>
            Writers maintain ownership of their manuscripts, and all open-access
            papers are released under the terms of the Creative Commons
            Attribution License, which allows free use, distribution, and
            reproduction in any form as long as the original work is properly
            credited.
          </p>
          <p>
            The use of general descriptive names, trade names, trademarks, and
            so on in this book, even if not expressly mentioned, does not
            indicate that applicable laws and regulations do not protect these
            names. The submitting author is responsible for obtaining any rights
            required to utilize copyrighted elements in the submission.
          </p>
        </div>
        <div>
          <h2>Appeals:</h2>
          <p>
            Authors may file an appeal if they believe that the decision to
            reject the manuscript was made because there was a significant
            misinterpretation of a technical component of the article or ii) the
            scientific advance demonstrated by the manuscript needed to be
            understood. Appeals that ask for a second opinion must provide more
            explanation to be considered. Please send an email to the journal
            with your appeal and your manuscript number. Only appeals from the
            original submitter's author will be taken into consideration.
          </p>
        </div>
      </div>
      <div style="width: 200px;" class="right-side-container ml-2"
      >
          <div class="mb-5">
            <router-link to="/editorsandreviewers">
              <p class="blink">Join As A reviewer</p>
            </router-link>
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../../../assets/Images/tur.jpg" height="90" width="180" />
            <p>Plagiarism is checked by the leading plagiarism checker</p>
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../../../assets/Images/doi.jpg" height="90" width="180" />
            <p>CrossRef DOI is assigned to research Article published in our journal.
              IJIRE DOI prefix is10.59256/ijire
            </p>
          </div>
          <div class="shadow-effect mb-5">
            <div class="right-side-heading"> For Authors </div>
            <router-link to="topics">
              <p>Topics</p>
            </router-link>
            <router-link to="call-for-papers">
              <p>Call For Papers</p>
            </router-link>
            <router-link to="instruction-for-author">
              <p>Instruction For Authors</p>
            </router-link>
            <p><a href="http://editorial.fdrpjournals.org/login?journal=6" style="color:rgb(100, 117, 137)">Manuscript
                Submission</a></p>
            <router-link to="guidance-for-ems">
              <p>Guidance For EMS</p>
            </router-link>
            <router-link to="article-processing-charges">
              <p style="text-align: left;">Article Processing Charges</p>
            </router-link>
            <router-link to="downloads">
              <p>Downloads</p>
            </router-link>
            <router-link to="paper-status">
              <p>Paper Status</p>
            </router-link>
          </div>
          <div class="shadow-effect mb-5">
            <div class="right-side-heading">Policies</div>
            <router-link to="ethics">
              <p>Ethics And Policies</p>
            </router-link>
            <router-link to="peer-review-policy">
              <p>Peer Review Policy</p>
            </router-link>
            <router-link to="publication-ethics-policy">
              <p>Publication Ethics Policy</p>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import IndexingSideDesign from '@/components/common/IndexingSideDesign.vue'

export default {
  components: {
    IndexingSideDesign
  },
  methods:{
    getManuScript: function (getUrl) {
      window.open(getUrl, "_blank");
    },
    getCopyRightForm: function (getForm) {
      window.open(getForm, "_blank");
    },
  }
};
</script>

<style scoped>

h5 {
  font-family: "Rubik", sans-serif;
  font-size: 18px;
}
p {
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  color: rgb(100, 117, 137);
  text-align: justify;
  text-justify: inter-word;
}
.instructionAuthor {
  margin-left: -20px;
}
.authorList {
  margin-left: -22px;
}
.inr-content {
  color: #9b6646;
  font-weight: bold;
}

.shadow-effect {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 8px;
  border-radius: 5px;
}
@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.blink {
  animation: blink 0.5s infinite;
  background-color: #9b6646;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  padding: 5px;
}
.editorialBox {
  /* border: 2px solid #EEEDE7; */
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 85%;
}
h2 {
  font-size: 1.2em;
}
h3 {
  font-size: 1em;
  margin-bottom: -10px;
}
.page-heading{
  font-size: 24px; 
  font-weight: bold; 
  margin-bottom: 20px; 
  display: block
}
.left-side-heading{
  font-weight: bold; 
  line-height: 2;
}
.right-side-heading{
  font-size: 1.5em; 
  font-weight: bold; 
  display: block; 
  margin-bottom: 10px;
}
</style>