<template>
    <section class="speciality-area">
        <div style="display: flex;justify-content: space-around;">
            <div style="width: 200px;" class="left-side-container mr-2"
            >
                <p class="blink mb-5"> <a href="http://editorial.fdrpjournals.org/login?journal=6"
                        style="color: #fff;">Submit Research Paper</a> </p>

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
                    <IndexingSideDesign />
                </div>
            </div>
            <div class="container" style="max-width: 1000px !important; margin: 0">
                <div class="row">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 mt-2">
                            <h2>Reviewer/ Referral Management Systems (RMS)</h2>
                            <h3>Join as a reviewer </h3>
                            <p><span class="inr-content">Earns INR 300/USD 15</span>- by reviewing research
                                papers.
                            </p>
                            <p class="question-content">What is RMS program?
                            </p>
                            <p>Researcher/PG Scholar/Academic persons- with reference of Reviewer/referral ID, while
                                publishing Article with
                                our Journal. Reviewer/Referral will gets a share from Article Processing Charges.
                            </p>
                            <p class="question-content">Who can join as a reviewer?
                            </p>
                            <p>Academician with Ph.D. or Master Degree with minimum 5 years of experience in the
                                relevant
                                field, can join as
                                a reviewer.
                            </p>
                            <p class="question-content">What is the fee to join as a reviewer?
                            </p>
                            <p>There is no Fee for Joining.
                            </p>
                            <p class="question-content">How much the reviewer is rewarded for each published paper?
                            </p>
                            <p>The reviewer earns INR 300/USD 15 for each referred research article published or
                                reviewed by
                                him/her.
                            </p>
                            <p class="question-content">How to get a reviewer's referral ID?
                            </p>
                            <p>Join as a reviewer and approved by Fifth Dimension Research Publication (FDRP), the
                                person
                                will be assigned a
                                unique referral ID. The referral id is sent along with an email to the registered email
                                address of the
                                reviewer. The registered reviewer needs to give the referral ID to the researchers who
                                are
                                submitting
                                research papers for publication to us.
                            </p>
                            <p class="question-content">How to apply to become a Reviewer/ Referral members?
                            </p>
                            <p>Send below mentioned documents to editor email ID: <span>(editorinchief@indjcst.com /
                                    support@fdrpjournals.org)
                                </span>
                            </p>
                            <ul>
                                <li>
                                    <p>Updated Resume with Photo
                                    </p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <p>Latest Qualification Degree Certificate (scan copy),
                                    </p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <p>Identity Proof (scanned copy of any from Election Card, College ID, PAN Card,
                                        Driving
                                        Lic.)
                                    </p>
                                </li>
                            </ul>
                            <h2>Important Instructions:</h2>
                            <ul>
                                <li>
                                    <p>It is important that you have to provide functioning email address and mobile
                                        number
                                        correctly because all communication will be.</p>
                                </li>
                                <li>
                                    <p>What you shared data with us, will kept private. will not be shared with any
                                        third-party, and will not be visible on website. We will not send spams to any
                                        of
                                        your addresses.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
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
                <div class="shadow-effect mb-5" style="text-align: left !important;">
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
                    <p><a href="http://editorial.fdrpjournals.org/login?journal=6"
                            style="color:rgb(100, 117, 137)">Manuscript Submission</a></p>
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
</template>
<script>
import IndexingSideDesign from '../../common/IndexingSideDesign.vue'
export default {
    components: {
        IndexingSideDesign
    },
    data() {
        return {
            ManuScriptUrl: '',
            CopyRightFormUrl: '',
        }
    },
    methods: {
        getManuScript: function (getUrl) {
            window.open(getUrl, "_blank");
        },
        getCopyRightForm: function (getForm) {
            window.open(getForm, "_blank");
        },
    }
}
</script>
<style scoped>
.question-content {
    font-weight: bold;
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

@media screen and (max-width:380px) {
    .email {
        font-size: 13px;
    }
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
h2 {
    font-size: 1.5em; 
    font-weight: bold; 
    margin-bottom: 20px; 
    display: block
}
h3 {
  font-size: 1.2em;
}
</style>