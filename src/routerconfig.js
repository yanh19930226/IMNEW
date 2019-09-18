// import HelloWorld from './components/HelloWorld'
import FriendsCircle from './components/FriendsCircle.vue'
import MySpace from './components/MySpace.vue'
import PersonalInfo from './components/PersonalInfo.vue'
import PersonalInfoEdit from './components/PersonalInfoEdit.vue'
import PersonalPost from './components/PersonalPost.vue'
import PostDetail from './components/PostDetail.vue'
import VirtualList from './components/VirtualList.vue'
import Visited from './components/Visited.vue'
import ViewPanorama from './components/viewPanorama.vue'
import Media from './components/Media.vue'
import Publish from './components/Publish.vue'
import VrDetail from './components/VrDetail.vue'


import Message from './components/Message.vue'
import Guanzhu from './components/Guanzhu.vue'
import Certicate from './components/Certicate.vue'
import Suggest from './components/Suggest.vue'
import Pinlun from './components/Pinlun.vue'
import SysMessage from './components/SysMessage.vue'
import Sort from './components/Sort.vue'

import City from './components/City.vue'
import Test from './components/test.vue'

export default [
  {
    path: '/visited',
    component: Visited,
    meta: {
      title: '到此一游',
      keepAlive: false
    }
  },
  {
    path: '/friendscircle',
    name: 'friendscircle',
    component: FriendsCircle,
    meta: {
      title: '朋友圈',
      keepAlive: false
    }
  },
  {
    path: '/publish',
    component: Publish,
    meta: {
      title: '发表动态',
      keepAlive: false
    }
  },
  {
    path: '/myspace',
    component: MySpace,
    meta: {
      title: '我的空间',
      keepAlive: false
    }
  },
  {
    path: '/personaiInfo',
    component: PersonalInfo,
    meta: {
      title: '我的信息',
      keepAlive: false
    }
  },
  {
    path: '/personalinfoedit/:id',
    component: PersonalInfoEdit,
    meta: {
      title: '我的信息',
      keepAlive: false
    }
  },
  {
    path: '/virtuallist',
    component: VirtualList,
    meta: {
      title: '全景',
      keepAlive: false
    }
  },
  {
    path: '/vrdetail/:fileUrl',
    component: VrDetail,
    meta: {
      title: 'vr详情',
      keepAlive: false
    }
  },
  {
    path: '/postdetail/:detailid/:uid',
    component: PostDetail,
    meta: {
      title: '动态详细',
      keepAlive: false
    }
  },
  {
    path: '/personalpost/:id',
    component: PersonalPost,
    meta: {
      title: '我的动态',
      keepAlive: false
    }
  },
  {
    path: '/certicate/:id',
    component: Certicate,
    meta: {
      title: '我的证书',
      keepAlive: false
    }
  },
  {
    path: '/pinlun/:id',
    component: Pinlun,
    meta: {
      title: '我的评论',
      keepAlive: false
    }
  },
  {
    path: '/guanzhu/:id',
    component: Guanzhu,
    meta: {
      title: '我的关注',
      keepAlive: false
    }
  },
  {
    path: '/message/:id',
    component: Message,
    meta: {
      title: '我的消息',
      keepAlive: false
    }
  },
  {
    path: '/suggest/:id',
    component: Suggest,
    meta: {
      title: '意见反馈',
      keepAlive: false
    }
  },
  {
    path: '/sysMessage',
    component: SysMessage,
    meta: {
      title: '系统消息',
      keepAlive: false
    }
  },
  {
    path: '/sort',
    component: Sort,
    meta: {
      title: '排行榜',
      keepAlive: false
    }
  },
  {
    path: '/viewPanorama/:id',
    component: ViewPanorama,
    meta: {
      title: '全景视频',
      keepAlive: false
    }
  },
  {
    path: '/viewPanorama',
    name: '/viewPanorama',
    component: ViewPanorama,
    meta: {
      title: '全景视频',
      keepAlive: false
    }
  },
  {
    path: '/city',
    component: City,
    meta: {
      keepAlive: false
    }
  },
  // 虚拟游
  {
    path: '/media/:type/:id',
    component: Media,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/',
    redirect: '/Visited',
    meta: {
      title: '到此一游'
    }
  },
  {
    path: '*',
    redirect: '/Visited',
    meta: {
      title: '到此一游'
    }
  }
]
