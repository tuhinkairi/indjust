import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

import Home1 from '@/pages/Home1.vue'
import Archives from '@/pages/ArchivesPage.vue'
import Contact from '@/pages/Contact.vue'
import Ethics from '@/pages/EthicsAndPolicies.vue'
import Blogs from '@/pages/Blogs.vue'
import MissionAndScope from '@/pages/MissionAndScope.vue'
import EditorialBoard from '@/pages/EditorialBoard.vue'
import PeerReviewPolicy from '@/pages/PeerReviewPolicy.vue'
import PublicationEthicsPolicy from '@/pages/PublicationEthicsPolicy.vue'
import IndexingAndAbstacting from '@/pages/IndexingAndAbstracting.vue'
import FAQs from '@/pages/FAQs.vue'
import Topics from '@/pages/Topics.vue'
import CallForPapers from '@/pages/CallForPaper.vue'
import InstructionForAuthor from '@/pages/InstructionForAuthor.vue'
import ManuscriptSubmission from '@/pages/ManuscriptSubmission.vue'
import GuidanceForEms from '@/pages/GuidanceForEms.vue'
import ArticleProcessingCharges from '@/pages/ProcessingCharges.vue'
import DownloadComponent from '@/pages/DownloadComponent.vue'
import CopyrightForm from '@/pages/CopyrightForm.vue'
import PaperStatus from '@/pages/PaperStatus.vue'
import EditorsAndReviewers from '@/pages/Reviewers.vue'
import ImpactFactorComponent from '@/pages/ImpactFactorComponent.vue'
import ArchivesPaperList from '../pages/ArchivesPaperList.vue'
import ArchivesPaperDetails from '../pages/ArchivesPaperDetails.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      component: Home1,
      path: '/',
      name: 'Home1',
    },
    {
      component: Archives,
      path: '/archives',
      name: 'archives',
    },
    {
      path: '/archives/paperlist',
      name: 'ArchivesComp',
      component: ArchivesPaperList,
    },
    {
      path: '/archives/paper-details',
      name: 'ArchivePaperDetails',
      component: ArchivesPaperDetails,
    },
    {
      component: Contact,
      path: '/contact-us',
      name: 'Contact Us',
    },
    {
      component: Ethics,
      path: '/ethics',
      name: 'Ethics',
    },
    {
      component: Blogs,
      path: '/blogs',
      name: 'Blogs',
    },
    {
      component: MissionAndScope,
      path: '/aim-and-scope',
      name: 'Mission And Scope',
    },
    {
      component: EditorialBoard,
      path: '/editorial-board',
      name: 'Editorial Board',
    },
    {
      component: PeerReviewPolicy,
      path: '/peer-review-policy',
      name: 'Peer Review Policy',
    },
    {
      component: PublicationEthicsPolicy,
      path: '/publication-ethics-policy',
      name: 'Publication Ethics Policy',
    },
    {
      component: IndexingAndAbstacting,
      path: '/indexing-and-abstracting',
      name: 'Indexing And Abstacting',
    },
    {
      component: FAQs,
      path: '/faqs',
      name: 'FAQs',
    },
    {
      component: Topics,
      path: '/topics',
      name: 'Topics',
    },
    {
      component: CallForPapers,
      path: '/call-for-papers',
      name: 'Call For Papers',
    },
    {
      component: InstructionForAuthor,
      path: '/instruction-for-author',
      name: 'Instruction For Author',
    },
    {
      component: ManuscriptSubmission,
      path: '/manuscript-submission',
      name: 'Manuscript Submission',
    },
    {
      component: GuidanceForEms,
      path: '/guidance-for-ems',
      name: 'GuidanceForEms',
    },
    {
      component: ArticleProcessingCharges,
      path: '/article-processing-charges',
      name: 'Article Processing Charges',
    },
    {
      component: DownloadComponent,
      path: '/downloads',
      name: 'DownloadComponent',
    },
    {
      component: CopyrightForm,
      path: '/copyright-form',
      name: 'Copyright Form',
    },
    {
      component: PaperStatus,
      path: '/paper-status',
      name: 'PaperStatus',
    },
    {
      component: EditorsAndReviewers,
      path: '/editorsandreviewers',
      name: 'EditorsAndReviewers',
    },
    {
      component: ImpactFactorComponent,
      path: '/impact-Factor',
      name: 'ImpactFactorComponent',
    },
    {
      // Redirect /panel to prevent Vue from handling it
      path: '/panel',
      beforeEnter() {
        window.location.href = '/panel';
      },
    },
    {
      component: NotFound,
      path: '/:catchAll(.*)',
      name: 'NotFound',
    },
  ],
  mode: 'history',
  linkExactActiveClass: 'current-menu-item',
})

export default router
