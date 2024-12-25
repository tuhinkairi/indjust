<template>
    <div>
      <MenuStyle1 />
      <PageHeader pageTitle="Impact Factor" parentPage="For Authors" />
      <impact-factor/>
      <Footer />
    </div>
  </template>
  
  <script>
  import MenuStyle1 from "@/components/layout/MenuStyle1";
  import PageHeader from "@/components/layout/PageHeader";
  import Footer from "@/components/layout/Footer";
import ImpactFactor from "../components/page_components/about_components/ImpactFactor.vue"
  export default {
    name: "Blogs",
    components: {
      MenuStyle1,
      PageHeader,
      ImpactFactor,
      Footer,
    },
    metaInfo() {
    return {
      title: 'Impact Factor | Indian Journal of Computer Science | INDJCST',
      meta: [
        {
          name: 'description',
          content: "Explore INDJCST's Impact Factor. Understand how we gauge the influence of our publications and their impact within the research community.",
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