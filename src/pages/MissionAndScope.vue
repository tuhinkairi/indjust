<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Mission And Scope" parentPage="About" />
    <MissionComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/Footer";
import MissionComponentVue from "../components/page_components/about_components/MissionComponent.vue";
export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    MissionComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Aim and Scope | Indian Journal | INDJCST',
      meta: [
        {
          name: 'description',
          content: 'INDJCST focuses on original research in computing, systems, AI, and applications, welcoming submissions in various computer science fields.',
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

<style scoped>
</style>