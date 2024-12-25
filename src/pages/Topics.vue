<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Topics" parentPage="For Authors" />
    <TopicsComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import TopicsComponentVue from "../components/page_components/for_authors/TopicsComponent.vue";
import Footer from "@/components/layout/Footer";
export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    TopicsComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Topics | Indian Journal of Computer Science | INDJCST',
      meta: [
        {
          name: 'description',
          content: 'INDJCST covers a wide range of topics, including computing, AI, robotics, security, networking, software engineering, and signal processing.',
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