<template>
  <div>
    <TopHeader />
    <MenuStyle1 />
    <BannerStyle1 />
    <FeaturesStyle1 />

    <!-- <CompaniesSlider /> -->
    <Services3Column />
    <!-- for authors -->
    <Speciality />
    <!-- IJIRE FEATURES -->
    <!-- <ProjectsHome /> -->
    <!-- OUR WORKS -->
    <Publish />
    <PostsHome />
    <!-- <Reviews /> -->
    <Indexing/>
    <LetPublish/>
    <Footer />
  </div>
</template>

<script>

import TopHeader from "@/components/layout/TopHeader";
import MenuStyle1 from "@/components/layout/MenuStyle1";
import BannerStyle1 from "@/components/page_components/home/home_1/BannerStyle1";
import FeaturesStyle1 from "@/components/page_components/home/home_1/FeaturesStyle1";
// import CompaniesSlider from "@/components/common/companiesSlider";
import Services3Column from "@/components/page_components/home/home_1/Services3Column";
// import ProjectsHome from "@/components/page_components/home/ProjectsHome";
import Speciality from "@/components/page_components/home/Speciality";
import PostsHome from "@/components/page_components/home/PostsHome";
// import Reviews from "@/components/common/Reviews";
import Footer from "@/components/layout/Footer";
import Publish from "@/components/page_components/home/home_1/Publish";
import Indexing from "@/components/page_components/home/home_1/Indexing"
import LetPublish from "@/components/page_components/home/LetPublish";
export default {
  name: "Home1",
  components: {
    TopHeader,
    MenuStyle1,
    BannerStyle1,
    FeaturesStyle1,
    LetPublish,
    Indexing,
    // CompaniesSlider,
    Services3Column,
    // ProjectsHome,
    Speciality, 
    PostsHome,
    // Reviews,
    Footer,
    Publish,
  },
  metaInfo() {
    return {
      title: 'Indian Journal of Computer Science and Technology',
      meta: [
        {
          name: 'description',
          content: 'INDJCST is a leading Indian journal on computer science and technology, showcasing cutting-edge research, innovative studies, and advancements in the field.',
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
  {
    type: 'application/ld+json',
    json: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Indian Journal of Computer Science and Technology",
      "url": window.location.href,
      "logo": "https://example.com/logo.png", // Replace with your actual logo URL
      "sameAs": [
        "https://www.facebook.com/journal",
        "https://www.twitter.com/journal",
        "https://www.linkedin.com/company/journal"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 98405 21421", // Replace with your contact number
        "contactType": "Customer Service",
        "areaServed": "US", // Optional: Specify the area served
        "availableLanguage": ["English"] // Optional: Languages supported
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "postalCode": "12345",
        "addressCountry": "US"
      },
      "foundingDate": "2020",
      "founder": {
        "@type": "Person",
        "name": "John Doe"
      }
    }
  },
  // WebPage Schema
  {
    type: 'application/ld+json',
    json: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Home Page",
      "url": window.location.href,
      "description": "INDJCST is a leading Indian journal on computer science and technology, showcasing cutting-edge research, innovative studies, and advancements in the field.",
      "publisher": {
        "@type": "Organization",
        "name": "Indian Journal of Computer Science and Technology",
        "logo": {
          "@type": "ImageObject",
          "url": "https://example.com/logo.png" // Replace with your actual logo URL
        }
      }
    }
  },
  // BreadcrumbList Schema
  {
    type: 'application/ld+json',
    json: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://indjcst.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us",
          "item": "https://indjcst.com/"
        }
        // Add other breadcrumb items as necessary
      ]
    }
  },
  // BlogPosting Schema (if applicable)
  {
    type: 'application/ld+json',
    json: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Latest Research in Computer Science",
      "alternativeHeadline": "Cutting-edge Research",
      "image": "https://example.com/article_image.jpg", // Replace with actual image URL
      "editor": "John Smith",
      "genre": "Research Article",
      "wordcount": "1120",
      "publisher": {
        "@type": "Organization",
        "name": "Indian Journal of Computer Science and Technology"
      },
      "url": window.location.href,
      "datePublished": "2024-10-23",
      "dateCreated": "2024-10-23",
      "dateModified": "2024-10-23",
      "author": {
        "@type": "Person",
        "name": "John Doe"
      }
    }
  },
 
]

    };
  },
};
</script>



<style scoped>
</style>
