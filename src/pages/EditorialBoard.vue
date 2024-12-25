<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Editorial Board" parentPage="About" />
    <EditorialComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import EditorialComponentVue from "../components/page_components/about_components/EditorialComponent.vue";
import Footer from "@/components/layout/Footer";
export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    EditorialComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Editorial Board | Indian Journal | INDJCST',
      meta: [
        {
          name: 'description',
          content: 'Explore the Editorial Board of INDJCST, featuring top experts in computer science and technology who guide and review cutting-edge research.',
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