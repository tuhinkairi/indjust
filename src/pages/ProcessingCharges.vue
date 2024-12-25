<template>
  <div>
    <MenuStyle1 />
    <PageHeader pageTitle="Arcticle Processing Charges" parentPage="For Authors" />
    <ProcessingChargesComponentVue />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import ProcessingChargesComponentVue from "../components/page_components/for_authors/ProcessingChargesComponent.vue";
import Footer from "@/components/layout/Footer";
export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    ProcessingChargesComponentVue,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Article Processing Charges | Indian Journal | INDJCST',
      meta: [
        {
          name: 'description',
          content: 'Find out the Article Processing Charges (APC) for publishing with INDJCST. Get details on fees, payment options, and publication benefits.',
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
        
          
        
      ]
    };
  },
};
</script>
<style>
</style>