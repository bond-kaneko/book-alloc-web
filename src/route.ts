import UserIndex from './pages/users/UserIndex.vue';
import { authGuard } from '@auth0/auth0-vue';
import Login from './pages/Login.vue';
import Logout from './pages/Logout.vue';
import Test from './pages/Test.vue';
import AllocationIndex from './pages/allocations/AllocationIndex.vue';
import AllocationSummary from './pages/allocations/summary/AllocationSummary.vue';
import MyReadingExperienceIndex from './pages/reading_experiences/mine/MyReadingExperienceIndex.vue';

export const routes = [
  {
    path: '/',
    component: Test,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/logout',
    component: Logout,
  },
  {
    path: '/users',
    component: UserIndex,
    beforeEnter: authGuard,
  },
  {
    path: '/allocations',
    component: AllocationIndex,
    beforeEnter: authGuard,
  },
  {
    path: '/allocations/summary',
    component: AllocationSummary,
    beforeEnter: authGuard,
  },
  {
    path: '/reading-experiences/mine',
    component: MyReadingExperienceIndex,
    beforeEnter: authGuard,
  },
];
