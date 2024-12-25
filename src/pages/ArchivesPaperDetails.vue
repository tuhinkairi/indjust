<template>
    <div>
      <TopHeader />
      <MenuStyle1 />
  
      <PageHeader :pageTitle="paperDetails.paper_title || 'Paper Details'" />
  
      <section class="pricing-area">
        <div style="display: flex; justify-content: space-around;">
  
           <!-- Left Sidebar -->
          <div style="width: 200px;" class="left-side-container mr-2">
          <p class="blink mb-5">
            <a href="http://editorial.fdrpjournals.org/login?journal=6" style="color: #fff;">
              Submit Research Paper
            </a>
          </p>
          <div class="shadow-effect mb-5">
            <span style="font-weight: bold; line-height: 2;">Downloads:</span>
            <p style="cursor: pointer;" @click="getManuScript('https://fdrpjournals.s3.ap-south-1.amazonaws.com/main/6/manuscripttemplate/IJIRE-Manuscript-Template-new.docx')">
              Manuscript Template
            </p>
            <p style="cursor: pointer;" @click="getCopyRightForm('https://fdrpjournals.s3.ap-south-1.amazonaws.com/main/6/copyrightform/IJIRE_Registration+%26Copyright-Form.pdf')">
              Copyright Form
            </p>
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../assets/Images/isn.jpg" height="90" width="200" />
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../assets/Images/cc.jpg" height="90" width="180" />
            <p>
              All research Article published on this website are licensed under
            Creative Commons Attribution-ShareAlike 4.0 International License,
            and all rights belong to their respective authors/researchers.
            </p>
            
          </div>
          <IndexingSideDesign/>
          <div class="image-container mb-5">
            <div class="image-wrapper" v-for="(item, index) in images" :key="index">
              <img alt="image" :src="item.img" height="50" width="80" />
            </div>
          </div>
        </div>
  
        <!-- Main Content Area -->
        <div class="container" style="max-width: 1000px !important; margin: 0;">
          <PaperDetailsComponent 
            v-if="paperDetails" 
            :paperDetails="paperDetails" 
            :paperPage="true" 
          />
        </div>
        <div style="width: 200px;" class="right-side-container ml-2">
            <div class="mb-5">
              <router-link to="/editorsandreviewers">
                <p class="blink">Join As A Reviewer</p>
              </router-link>
            </div>
            <div class="shadow-effect mb-5">
              <img alt="image" src="../assets/Images/tur.jpg" height="90" width="180" />
              <p>Plagiarism is checked by the leading plagiarism checker</p>
            </div>
            <div class="shadow-effect mb-5">
              <img alt="image" src="../assets/Images/doi.jpg" height="90" width="180" />
              <p>CrossRef DOI is assigned to research articles published in our journal. IJIRE DOI prefix is 10.59256/ijire</p>
            </div>
            <div class="shadow-effect mb-5">
              <span style="font-weight: bold; line-height: 2;">For Authors</span>
              <router-link to="/topics">
                <p>Topics</p>
              </router-link>
              <router-link to="/call-for-papers">
                <p>Call For Papers</p>
              </router-link>
              <router-link to="/instruction-for-author">
                <p>Instruction For Authors</p>
              </router-link>
              <p>
                <a href="http://editorial.fdrpjournals.org/login?journal=6" style="color: rgb(100, 117, 137);">
                  Manuscript Submission
                </a>
              </p>
              <router-link to="/guidance-for-ems">
                <p>Guidance For EMS</p>
              </router-link>
              <router-link to="/article-processing-charges">
                <p>Article Processing Charges</p>
              </router-link>
              <router-link to="/downloads">
                <p>Downloads</p>
              </router-link>
              <router-link to="/paper-status">
                <p>Paper Status</p>
              </router-link>
            </div>
            <div class="shadow-effect">
              <span style="font-weight: bold; line-height: 2;">Policies</span>
              <router-link to="/ethics">
                <p>Ethics And Policies</p>
              </router-link>
              <router-link to="/peer-review-policy">
                <p>Peer Review Policy</p>
              </router-link>
              <router-link to="/publication-ethics-policy">
                <p>Publication Ethics Policy</p>
              </router-link>
            </div>
          </div>
        </div>
       
    
      </section>
  
      <CustomProjects />
      <Footer />
    </div>
  </template>
  
    
    <script>
    import TopHeader from "@/components/layout/TopHeader";
    import MenuStyle1 from "@/components/layout/MenuStyle1";
    import PageHeader from "@/components/layout/PageHeader"; 
    import Footer from "@/components/layout/Footer";
    import PaperDetailsComponent from '@/components/page_components/Archives/PaperDetails.vue';
    import IndexingSideDesign from '@/components/common/IndexingSideDesign.vue'

    export default {
      name: "ArchivePaperDetails",
      components: {
        TopHeader,
        MenuStyle1,
        PageHeader,
        Footer,
        PaperDetailsComponent,
        IndexingSideDesign
      },
      data() {
        return {
          paperDetails: {}, // Will hold the paper details fetched based on the query
          images: [
        //   { img: require("../assets/Images/one.jpeg") },
        //   { img: require("../assets/Images/two.png") },
        //   { img: require("../assets/Images/three.png") },
        //   { img: require("../assets/Images/four.png") },
        //   { img: require("../assets/Images/five.png") },
        //   { img: require("../assets/Images/six.jpg") },
        //   { img: require("../assets/Images/seven.jpg") },
        //   { img: require("../assets/Images/eight.jpeg") },
        //   { img: require("../assets/Images/nine.jpeg") },
        //   { img: require("../assets/Images/ten.png") },
        //   { img: require("../assets/Images/eleven.png") },
        //   { img: require("../assets/Images/twele.jpg") },
        //   { img: require("../assets/Images/thirteen.jpg") },
        //   { img: require("../assets/Images/nineteen.png") },
        //   { img: require("../assets/Images/fourteen.png") },
        //   { img: require("../assets/Images/fifteen.jpg") },
        //   { img: require("../assets/Images/sixteen.jpg") },
        //   { img: require("../assets/Images/seventeen.jpeg") },
        //   { img: require("../assets/Images/eighteen.jpg") },
          ],
        };
      },
      created() {
        const { paperid } = this.$route.query; // Get paperId from query params
        if (paperid) {
          this.getPaperDetails(paperid);
        }
      },
      methods: {
        getPaperDetails(paperid) {
          this.api
            .postDataModulePagination(
           
              "archivePaper", { paperid }
            )
            .then((res) => {
              const paperDetails = res.data.paperdetails;
              this.paperDetails = paperDetails; // Assign paperDetails to the data property
            })
            .catch((err) => {
              console.error(err);
            });
        },
        
        getManuScript(url) {
          window.open(url, "_blank");
        },
        
        getCopyRightForm(url) {
          window.open(url, "_blank");
        },
      },
    };
    </script>
<style scoped>
/* Add any specific styles you need here */

</style>
  