<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Ethics And Policies" parentPage="About" />
    <EthicsComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import EthicsComponentVue from "../components/page_components/about_components/EthicsComponent.vue";
import Footer from "@/components/layout/Footer";
export default {
  name: "EthicsAndPolicies",
  components: {
    MenuStyle1,
    PageHeader,
    EthicsComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Ethics And Policies | Indian Journal | INDJCST',
      meta: [
        {
          name: 'description',
          content: "Explore INDJCST's ethics and policies. Learn about our commitment to research integrity, ethical practices, and transparent publication standards.",
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