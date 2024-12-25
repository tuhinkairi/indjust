<template>
  <div>
    <TopHeader />
    <MenuStyle1 />
    <PageHeader pageTitle="Archives" parentPage="Home" />
    <ArchivesVue />
    <Footer />
  </div>
</template>

<script>
import TopHeader from "@/components/layout/TopHeader";
import MenuStyle1 from "@/components/layout/MenuStyle1";
import PageHeader from "@/components/layout/PageHeader";
import ArchivesVue from "../components/page_components/Archives/Archives.vue";
import Footer from "@/components/layout/Footer";
export default {
  components: {
    TopHeader,
    MenuStyle1,
    PageHeader,
    ArchivesVue,
    Footer,
  },
};
</script>

<style>
</style>