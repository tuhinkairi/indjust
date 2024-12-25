<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="FAQs" parentPage="About" />
    <FaqComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import FaqComponentVue from "../components/page_components/about_components/FaqComponent.vue";
import Footer from "@/components/layout/Footer";
export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    FaqComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'FAQs | Indian Journal of Computer Science | INDJCST',
      meta: [
        {
          name: 'description',
          content: 'Get answers to common questions on the INDJCST FAQ page. Find info on submissions, publication processes, and more to assist with your research.',
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