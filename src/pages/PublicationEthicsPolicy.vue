<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Publication Ethics Policy" parentPage="About" />
    <PublicationComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import PublicationComponentVue from "../components/page_components/about_components/PublicationComponent.vue";
import Footer from "@/components/layout/Footer";
export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    PublicationComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Publication Ethics Policy | Indian Journal | INDJCST',
      meta: [
        {
          name: 'description',
          content: "Explore INDJCST's Publication Ethics Policy. Learn about our commitment to transparency, integrity, and responsible research practices in publishing.",
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