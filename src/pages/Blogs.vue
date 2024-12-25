<template>
  <div >
    <MenuStyle1 />
    <PageHeader pageTitle="Blogs" parentPage="About" />
    <BlogsComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import BlogsComponentVue from "../components/page_components/about_components/BlogsComponent.vue";
import Footer from "@/components/layout/Footer";
export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    BlogsComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Blogs | Indian Journal of Computer Science| INDJCST',
      meta: [
        {
          name: 'description',
          content: 'Stay informed with the INDJCST blog, featuring the latest insights, trends, and discussions in computer science and technology from leading experts.',
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