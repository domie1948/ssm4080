import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import adminexam from '@/views/modules/exampaperlist/exam'
    import examfailrecord from '@/views/modules/examfailrecord/list'
    import zhuguantihuida from '@/views/modules/zhuguantihuida/list'
    import zhuguantipingfen from '@/views/modules/zhuguantipingfen/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import chengjixinxi from '@/views/modules/chengjixinxi/list'
    import examquestion from '@/views/modules/examquestion/list'
    import exampaperlist from '@/views/modules/exampaperlist/list'
    import zhuguantixinxi from '@/views/modules/zhuguantixinxi/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import exampaper from '@/views/modules/exampaper/list'
    import examrecord from '@/views/modules/examrecord/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/examfailrecord',
        name: '错题本',
        component: examfailrecord
      }
      ,{
	path: '/zhuguantihuida',
        name: '主观题回答',
        component: zhuguantihuida
      }
      ,{
	path: '/zhuguantipingfen',
        name: '主观题评分',
        component: zhuguantipingfen
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/chengjixinxi',
        name: '成绩信息',
        component: chengjixinxi
      }
      ,{
	path: '/examquestion',
        name: '试题管理',
        component: examquestion
      }
      ,{
	path: '/exampaperlist',
        name: '试卷列表',
        component: exampaperlist
      }
      ,{
	path: '/zhuguantixinxi',
        name: '主观题信息',
        component: zhuguantixinxi
      }
      ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
      ,{
	path: '/exampaper',
        name: '试卷管理',
        component: exampaper
      }
      ,{
	path: '/examrecord',
        name: '考试记录',
        component: examrecord
      }
    ]
  },
  {
    path: '/adminexam',
    name: 'adminexam',
    component: adminexam,
    meta: {icon:'', title:'adminexam'}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
