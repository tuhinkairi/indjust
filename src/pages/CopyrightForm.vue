<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Copyright Form" parentPage="For Authors" />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/Footer";
export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Copyrights Form | Indian Journal | INDJCST',
      meta: [
        {
          name: 'description',
          content: 'Access the INDJCST copyright form to submit your work. Ensure proper rights and permissions for your research papers published in the journal.',
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