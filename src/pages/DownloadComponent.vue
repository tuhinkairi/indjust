<template>
    <div>
      <MenuStyle1 />
      <PageHeader pageTitle="Downloads" parentPage="For Authors" />
      <Downloads/>
      <Footer />
    </div>
  </template>
  
  <script>
  import MenuStyle1 from "@/components/layout/MenuStyle1";
  import PageHeader from "@/components/layout/PageHeader";
  import Footer from "@/components/layout/Footer";
  import Downloads from "../components/page_components/for_authors/Downloads.vue";
  export default {
    name: "Blogs",
    components: {
      MenuStyle1,
      PageHeader,
      Downloads,
      Footer,
    },
    metaInfo() {
    return {
      title: 'Downloads | Indian Journal of Computer Science | INDJCST',
      meta: [
        {
          name: 'description',
          content: 'Download the Manuscript Template and Copyrights Form for INDJCST. Ensure your paper meets submission standards and secure the rights for publication.',
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