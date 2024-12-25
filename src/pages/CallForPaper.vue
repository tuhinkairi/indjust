<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Call For Papers" parentPage="For Authors" />
    <CallForPaperComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import CallForPaperComponentVue from "../components/page_components/for_authors/CallForPaperComponent.vue";
import Footer from "@/components/layout/Footer";
export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    CallForPaperComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Call for Paper | Indian Journal of Computer Science| INDJCST',
      meta: [
        {
          name: 'description',
          content: 'Get all the details for submitting your research paper to INDJCST. Find submission guidelines, formatting requirements, and the review process.',
        },
        {
          name: 'keywords',
          content: 'agency, business, corporate, company, clean, modern, personal, portfolio, professional, startup, studio',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: window.location.href,
        },
      ],
      script: [
        // Organization Schema
        
      ]
    };
  },
};
</script>

<style>
</style>