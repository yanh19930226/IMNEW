import HelloWorld from './components/HelloWorld'
import FriendsCircle from './components/FriendsCircle.vue'
import MySpace from './components/MySpace.vue'
import PersonalInfo from './components/PersonalInfo.vue'
import PersonalInfoEdit from './components/PersonalInfoEdit.vue'
import PersonalPost from './components/PersonalPost.vue'
import PostDetail from './components/PostDetail.vue'
export default [{
    path: '/helloworld',
    component: HelloWorld
  },
  {
    path: '/friendscircle',
    component: FriendsCircle
  },
  {
    path: '/myspace',
    component: MySpace
  },
  {
    path: '/personaiInfo',
    component: PersonalInfo
  },
  {
    path: '/personalinfoedit',
    component: PersonalInfoEdit
  },
  {
    path: '/personalpost',
    component: PersonalPost
  },
  {
    path: '/postdetail',
    component: PostDetail
  },
  {
    path: '/',
    redirect: '/helloworld'
  },
  {
    path: '*',
    redirect: '/helloworld'
  }
]
