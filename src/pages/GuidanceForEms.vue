<template>
    <div>
      <MenuStyle1 />
      <PageHeader pageTitle="Editorial management system (Guidance)" parentPage="For Authors" />
      <GuidanceForEmsIjire/>
      <Footer />
    </div>
  </template>
  
  <script>
  import MenuStyle1 from "@/components/layout/MenuStyle1";
  import PageHeader from "@/components/layout/PageHeader";
  import Footer from "@/components/layout/Footer";
  import GuidanceForEmsIjire from "../components/page_components/for_authors/GuidanceForEmsIjire.vue";
  export default {
    name: "Blogs",
    components: {
      MenuStyle1,
      PageHeader,
      GuidanceForEmsIjire,
      Footer,
    },
    metaInfo() {
    return {
      title: 'Editorial management system | Indian Journal | INDJCST',
      meta: [
        {
          name: 'description',
          content: 'Get guidance on using the INDJCST Editorial Management System. Get tips for managing submissions, reviews, and the publication process.',
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
