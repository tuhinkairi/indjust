<template>
    <div>
      <MenuStyle1 />
      <PageHeader pageTitle="Paper Status" parentPage="For Authors" />
      <PaperStatusComponent />
      <Footer />
    </div>
  </template>
  
  <script>
  import MenuStyle1 from "@/components/layout/MenuStyle1";
  import PageHeader from "@/components/layout/PageHeader";
  import Footer from "@/components/layout/Footer";
  import PaperStatusComponent from "../components/page_components/for_authors/PaperStatusComponent.vue";
  export default {
    name: "Blogs",
    components: {
      MenuStyle1,
      PageHeader,
      PaperStatusComponent,
      Footer,
    },
    metaInfo() {
    return {
      title: 'Paper Status | Indian Journal of Computer Science | INDJCST',
      meta: [
        {
          name: 'description',
          content: 'Check the status of your submitted paper with INDJCST. Track its progress through the review and publication process with our easy-to-use system.',
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