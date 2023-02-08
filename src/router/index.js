import { createWebHistory, createRouter } from "vue-router";
import IndexPage from '@/components/pages/IndexPage'
import AtomsPage from '@/components/pages/AtomsPage'

const routes = [
  {
    path: "/",
    name: "Home",
    component: IndexPage,
  },
  {
    path: "/atoms",
    name: "Atoms",
    component: AtomsPage,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;