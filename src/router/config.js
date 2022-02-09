import TabsView from '@/layouts/tabs/TabsView'
import BlankView from '@/layouts/BlankView'
import PageView from '@/layouts/PageView'

// 路由配置
const options = {
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/pages/login')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/exception/404'),
    },
    {
      path: '/403',
      name: '403',
      component: () => import('@/pages/exception/403'),
    },
    {
      path: '/',
      name: '首页',
      component: TabsView,
      redirect: '/login',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: {
            icon: 'dashboard'
          },
          component: BlankView,
          children: [
            {
              path: 'workplace',
              name: '工作台',
              meta: {
                page: {
                  closable: false
                }
              },
              component: () => import('@/pages/dashboard/workplace'),
            },
            {
              path: 'analysis',
              name: '云分析',
              component: () => import('@/pages/dashboard/analysis'),
            }
          ]
        },
        {
          path: 'lost',
          name: '失物管理',
          meta: {
            icon: 'form',
            page: {
              cacheAble: false
            }
          },
          component: PageView,
          children: [
            {
              path: 'goodlist',
              name: '物品列表',
              component: () => import('@/pages/lost/goodlist'),
            },
            {
              path: 'category',
              name: '物品分类',
              component: () => import('@/pages/lost/category'),
            }
          ]
        },
        {
          path: 'user',
          name: '用户管理',
          meta: {
            icon: 'team',
            page: {
              cacheAble: false
            }
          },
          component: PageView,
          children: [
            {
              path: 'people',
              name: '用户列表',
              component: () => import('@/pages/user/people'),
            },
            {
              path: 'school',
              name: '学校列表',
              component: () => import('@/pages/user/school'),
            }
          ]
        },
        {
          path: 'global',
          name: '全局管理',
          meta: {
            icon: 'apartment',
            page: {
              cacheAble: false
            }
          },
          component: PageView,
          children: [
            {
              path: 'inform',
              name: '公告列表',
              component: () => import('@/pages/global/inform'),
            }
          ]
        },
        {
          name: '意见反馈',
          path: 'antdv',
          meta: {
            icon: 'ant-design'
          },
          component: () => import('@/pages/calback/detail')
        }
      ]
    },
  ]
}

export default options
