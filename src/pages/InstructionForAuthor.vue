<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Instruction For Author" parentPage="For Authors" />
    <InstructionForAuthorComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import InstructionForAuthorComponentVue from "../components/page_components/for_authors/InstructionForAuthorComponent.vue";
import Footer from "@/components/layout/Footer";
export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    InstructionForAuthorComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Instruction For Author | Indian Journal | INDJCST',
      meta: [
        {
          name: 'description',
          content: "Review INDJCST's Instructions for Authors. Find essential guidelines on manuscript formatting, preparation, and submission for a smooth process.",
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