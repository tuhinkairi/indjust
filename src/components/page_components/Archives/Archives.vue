<template>
  <section class="speciality-area">
    <div style="display: flex;justify-content: space-around;">
      <div style="width: 200px;" class="left-side-container mr-2">
        <p class="blink mb-5">
          <a
            href="http://editorial.fdrpjournals.org/login?journal=6"
            style="color: #fff;"
            >Submit Research Paper</a
          >
        </p>
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
          <p>
            All research Article published on this website are licensed under
            Creative Commons Attribution-ShareAlike 4.0 International License,
            and all rights belong to their respective authors/researchers.
          </p>
        </div>
        <IndexingSideDesign />
        <div class="image-container mb-5">
          <div
            class="image-wrapper"
            v-for="(item, index) in images"
            :key="index"
          >
            <img alt="image" :src="item.img" height="50" width="80" />
          </div>
        </div>
      </div>
      <div class="container" style="max-width: 1000px !important; margin: 0">
          <div class="row">
            <div class="col-lg-12 col-md-12 mt-3">
              <div
                class="archive-data-container"
                v-if="!listVisible && !paperPage"
              >
                <div class="" v-for="year in years" :key="year">
                  <h2>{{ year }}</h2>
                  <div
                    class="row"
                    v-for="(data, index) in archives[year]"
                    :key="data.index"
                  >
                    <div
                      class="col-lg-3 databox m-1 issueButton"
                      v-for="issue in data.slice().sort()"
                      :key="issue.index"
                      @click="viewIssueData(year, index, issue)"
                    >
                      <a
                        :href="
                          'archives/paperlist?year=' +
                            year +
                            '&volume=' +
                            index +
                            '&issue=' +
                            issue
                        "
                      >
                        <p>Volume {{ index }} Issue {{ issue }}</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div style="width: 200px;" class="right-side-container ml-2">
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
          <p>
            CrossRef DOI is assigned to research Article published in our
            journal. IJIRE DOI prefix is10.59256/ijire
          </p>
        </div>
        
        <div class="shadow-effect mb-5">
          <span style="font-weight: bold; line-height: 2;">For Authors</span>
          <router-link to="topics"><p>Topics</p></router-link>
          <router-link to="call-for-papers"><p>Call For Papers</p></router-link>
          <router-link to="instruction-for-author"
            ><p>Instruction For Authors</p></router-link
          >
          <p>
            <a
              href="http://editorial.fdrpjournals.org/login?journal=1"
              style="color:rgb(100, 117, 137)"
              >Manuscript Submission</a
            >
          </p>
          <router-link to="guidance-for-ems"
            ><p>Guidance For EMS</p></router-link
          >
          <router-link to="article-processing-charges"
            ><p>Article Processing Charges</p></router-link
          >
          <router-link to="downloads"><p>Downloads</p></router-link>
          <router-link to="paper-status"><p>Paper Status</p></router-link>
        </div>
        <div class="shadow-effect">
         
          <span style="font-weight: bold; line-height: 2;">Policies</span>
          <router-link to="ethics"><p>Ethics And Policies</p></router-link>
          <router-link to="peer-review-policy"
            ><p>Peer Review Policy</p></router-link
          >
          <router-link to="publication-ethics-policy"
            ><p>Publication Ethics Policy</p></router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>

//import CustomButton from "./CutomButton.vue";
// can you show me where you have exported pageTitle
 import IndexingSideDesign from '@/components/common/IndexingSideDesign.vue'
export default {
 

  components: {
    IndexingSideDesign
  },
  metaInfo() {
    return {
      title: 'Archives | Indian Journal of Computer Science | INDJCST',
      meta: [
        {
          name: 'description',
          // content: this.paperPage?String(this.paperDetails.paper_abstract).split(" ").slice(0,70).join(" ") :'Access IJIRE archives to explore past issues. Browse research articles in Engineering, Technology, and Applied Sciences from previous editions.'
          content: this.paperPage ? `${String(this.paperDetails.paper_abstract).split(".")[0]}.` : 'Explore the INDJCST archives for past issues featuring groundbreaking research and insights across various fields of computer science and technology'
        },
        {
          property: 'og:title',  // Open Graph title for social sharing
          content: document.title
        },
        {
          property: 'og:url',
          content: window.location.href
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: window.location.href,
        },
      ],
    };
  },
  data() {
    return {
      archives: {},
      years: [],
      papersList: [],
      listVisible: false,
      paperPage: false,
      cYear: "",
      cVolume: "",
      cIssue: "",
      paperDetails: {},
      ManuScriptUrl: "",
      CopyRightFormUrl: "",
      pageTitleClass: "default-title-class",
      paperTitle: "",
      currentYear: new Date().getFullYear(),
      images: [ ],
    };
  },
  methods: {
    setCanonicalURL() {
      const canonicalUrl = document.createElement('link');
      canonicalUrl.rel = 'canonical';

      // Assuming you're setting the canonical URL based on the current page's URL
      canonicalUrl.href = window.location.href;

      // Check if a canonical tag already exists
      const existingCanonical = document.querySelector('link[rel="canonical"]');
      if (existingCanonical) {
        existingCanonical.href = canonicalUrl.href; // Update existing tag
      } else {
        document.head.appendChild(canonicalUrl); // Append new canonical tag
      }
    }
    ,
    getArchivesData() {
      this.api.postData("archiveYearListing").then(
        (res) => {
          //console.log(res.data);
          this.archives = res.data.archives;
          this.sortData();
        },
        (err) => {
          console.log(err);
        }
      );
    },
    getManuScript(getUrl) {
      window.open(getUrl, "_blank");
    },
    getCopyRightForm(getForm) {
      window.open(getForm, "_blank");
    },
   
    formatTitle(title) {
      return title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
    },
    // getPaperDetails(paperid) {
    //   this.api
    //     .getDataModulePagination(
    //       "archives/1/getpaperdetails",
    //       "journals/v1/",
    //       "paperid=" + paperid
    //     )
    //     .then(
    //       (res) => {
    //         this.paperDetails = res.data.paperdetails;
    //       },
    //       (err) => {
    //         console.log(err);
    //       }
    //     );
    // },
    sortedIssues(val) {
      return val.sort().reverse();
    },
    sortData() {
      this.years = Object.keys(this.archives)
        .sort()
        .reverse();
    },
    
    googleSearch(url) {
      window.open(url, "_blank");
    },
    updateDocumentTitle() {
      if (this.paperPage) {
        document.title = this.paperDetails.paper_title || "Default Paper Title";
        // here its changing for the current title
        // or is this archive title??
        // No bro , i already implement for title i am saying that like that we want
        // to change the archives title dynamaically

        // PageHeader.vue file is containing this code now i show ri
      } else if (this.listVisible) {
        document.title = `${this.cYear} | Volume ${this.cVolume} - Issue ${this.cIssue}`;
      } else {
        document.title = "Archives";
      }
      let newTitle = document.title;

      this.$emit("update-title", newTitle); // see this line
      // do i need to copy this two right
    },
  },
  // here you want that right??
  // i tell the code implementation of that title tag changing d
  // i get that this is what props handeling is
  watch: {
  $route() {
    console.log(this.$route.query);
    
    // Check if the route has valid query parameters for the archives
    if (
      "year" in this.$route.query &&
      "volume" in this.$route.query &&
      "issue" in this.$route.query
    ) {
      this.listVisible = true;
      this.paperPage = false;
      this.ViewIssueData(
        this.$route.query.year,
        this.$route.query.volume,
        this.$route.query.issue
      );
    } else {
      // Reset values when navigating away from the archives
      this.listVisible = false;
      this.paperPage = false;
      this.cYear = null;
      this.cVolume = null;
      this.cIssue = null;
      this.getArchivesData(); // Fetch archives data
      this.updateDocumentTitle();
    }
  },
  "paperDetails.paper_title": function () {
    this.updateDocumentTitle(); // Update title when paperDetails.paper_title changes
  },
  cYear() {
    this.updateDocumentTitle(); // Update title when cYear changes
  },
  cVolume() {
    this.updateDocumentTitle(); // Update title when cVolume changes
  },
  cIssue() {
    this.updateDocumentTitle(); // Update title when cIssue changes
  },
},
mounted() {
  // Always load archives data when component mounts
  this.getArchivesData();
  this.updateDocumentTitle(); // Initial title update
},
}
</script>

<style scoped>
.rowSize {
  width: 97%;
}

.issueButton {
  cursor: pointer;
}

.box {
  background: #0000ff;
  border-radius: 8px;
}

.box p {
  color: #fff;

  text-align: center;
  padding: 6px;
}

.btn-outline-primary {
  color: #9B6646;
  border-color: #9B6646;
}

.btn-outline-primary:hover {
  color: #fff;
  border-color: #9B6646;
  background: #9B6646;
}

.databox {
  background-color: #9B6646;
  border-radius: 5px;
  cursor: pointer;
}

.databox p {
  color: #fff;
  padding: 10px;
}

.paperBox {
  /* border: 2px solid #EEEDE7; */

  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.paperHeading {
  display: flex;
  justify-content: center;
}

p {
  margin-bottom: 5px;
  text-align: left;
}

h5 {
  margin-bottom: 5px;
  margin-top: 5px;
}

h6 {
  margin-bottom: 5px;
  margin-top: 5px;
}

.abstract-details {
  white-space: pre-wrap;
}

@media screen and (max-width: 991px) {
  .btn-sm {
    font-size: 12px !important;
  }
}

@media screen and (max-width: 512px) {
  .btn-sm {
    font-size: 10px !important;
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
.editorialBox {
  /* border: 2px solid #EEEDE7; */
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 85%;
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
</style>
