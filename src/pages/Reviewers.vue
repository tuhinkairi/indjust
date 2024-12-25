<template>
  <div>
    <MenuStyle1 />
    <PageHeader
      pageTitle="Editors And Reviewers"
      parentPage="Home"
    />
    <EditorsAndReviewers />
    <Footer />
  </div>
</template>

<script>
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import EditorsAndReviewers from '../components/page_components/EditorsAndReviewers/EditorsAndReviewers.vue'
import Footer from "@/components/layout/Footer";
export default {
  name: "Blogs",
  components: {
    MenuStyle1,
    PageHeader,
    EditorsAndReviewers,
    Footer,
  },
  metaInfo() {
    return {
      title: 'Editors And Reviewers | Indian Journal | INDJCST',
      meta: [
        {
          name: 'description',
          content: "Explore INDJCST's editors and reviewers. Discover the experts dedicated to maintaining high standards and rigorous peer review for our publications.",
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