<template>
  <div>
    <TopHeader />
    <MenuStyle1 />
    <PageHeader pageTitle="Contact Us" parentPage="Home" />
    <AddressBox />
    <!-- <CustomProjects /> -->
    <Footer />
  </div>
</template>

<script>
import TopHeader from "@/components/layout/TopHeader";
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import AddressBox from "@/components/page_components/contact/AddressBox";
// import CustomProjects from '@/components/common/CustomProjects'
import Footer from "@/components/layout/Footer";

export default {
  name: "Contact",
  components: {
    TopHeader,
    MenuStyle1,
    PageHeader,
    AddressBox,
    // CustomProjects,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Contact Us | Indian Journal of Computer Science | INDJCST',
      meta: [
        {
          name: 'description',
          content: 'Get in touch with INDJCST for support with publishing your paper. Find contact details for questions about submissions, fees, and the review process.',
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

<style scoped>
</style>
