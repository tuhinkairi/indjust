<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Peer Review Policy" parentPage="About" />
    <PeerReviewComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/Footer";
import PeerReviewComponentVue from "../components/page_components/about_components/PeerReviewComponent.vue";
export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    PeerReviewComponentVue,
    Footer,
  }, metaInfo() {
    return {
      title: 'Peer Review Policy | Indian Journal | INDJCST',
      meta: [
        {
          name: 'description',
          content: "INDJCST's double-blind peer review ensures rigorous, confidential evaluation. Learn about our commitment to high standards and prompt publication decisions.",
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