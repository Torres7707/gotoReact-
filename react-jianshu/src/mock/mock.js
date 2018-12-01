import Mock from 'mockjs'

Mock.mock('/list', {
  success: true,
  data: [
    '行距杯2018征文',
    '区块链',
    '小程序',
    'vue',
    '毕业',
    'PHP',
    '故事',
    'flutter',
    '理财',
    '美食',
    '投稿',
    '手帐',
    '书法',
    'PPT',
    '穿搭',
    '打碗碗花',
    '简书',
    '姥姥的澎湖湾',
    '设计',
    '创业',
    '交友',
    '籽盐',
    '教育',
    '思维导图',
    '疯哥哥',
    '梅西',
    '时间管理',
    'golang',
    '连载',
    '自律',
    '职场',
    '考研',
    '慢世人',
    '悦欣',
    '一纸vr',
    'spring',
    'eos',
    '足球',
    '程序员',
    '林露含',
    '彩铅',
    '金融',
    '木风杂谈',
    '日更',
    '成长',
    '外婆是方言',
    'docker'
  ]
})

Mock.mock('/home', {
  success: true,
  data: {
    topicList: [
      {
        id: 1,
        title: '社会热点',
        imgUrl: 'https://avatars1.githubusercontent.com/u/22171640?s=64&v=4'
      },
      {
        id: 2,
        title: '手绘',
        imgUrl: 'https://avatars1.githubusercontent.com/u/22171640?s=64&v=4'
      }
    ],
    articleList: [
      {
        id: 1,
        title: '我们俩',
        desp:
          '儿子媳妇去上班， 留下俩个小不点。 老公送大上学堂，鄙人看小家里面。 老公回家不得闲， 忙去橱房准备饭。吾哄小的刚入眠， 着急又去洗衣衫。 ...',
        imgUrl:
          'https://upload-images.jianshu.io/upload_images/11279334-3114075bedac5719.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
      },
      {
        id: 2,
        title: '鬼谷子：人生不顺时，谨记三句话，路会越走越宽！',
        desp:
          '鬼谷子：人生不顺时，谨记三句话，路会越走越宽！ [企业家经商论坛](javascript:void(0);) 昨天 ****免费订阅本账号！**...',
        imgUrl:
          'https://upload-images.jianshu.io/upload_images/11266166-e0a2bae08c118126?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
      },
      {
        id: 3,
        title: '简书发钻真好玩（打油）',
        desp:
          '简书发钻真好玩， 惹我千里把家还， 十万火急凑几篇， 然后静坐等收钻。 你来写文我点赞， 不管文章好与烂， 点赞点赞点不停， 每天激情满满满！ ...',
        imgUrl:
          'https://upload-images.jianshu.io/upload_images/3995516-646d0d8cbbc78fb5.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
      },
      {
        id: 4,
        title: '穿衣搭配：越简单越高级！45套简约风格冬季穿搭',
        desp:
          '最近有好多刚毕业进入职场的姑娘问到老蔡，应该怎样做好职场穿搭，避免黑色套装的简单搭配，同时为自己的职业形象做加持，那么本期老蔡来分享一篇简约风格...',
        imgUrl:
          'https://upload-images.jianshu.io/upload_images/12251050-4300961b4df68aed.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
      }
    ],
    recommendList: [
      {
        id: 1,
        imgUrl:
          'http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
      },
      {
        id: 2,
        imgUrl:
          'http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
      },
      {
        id: 3,
        imgUrl:
          'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png '
      },
      {
        id: 4,
        imgUrl:
          'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
      },
      {
        id: 5,
        imgUrl:
          'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
      }
    ]
  }
})

Mock.mock('/morelist', {
  success: true,
  articleList: [
    {
      id: 6,
      title: '我们俩',
      desp:
        '儿子媳妇去上班， 留下俩个小不点。 老公送大上学堂，鄙人看小家里面。 老公回家不得闲， 忙去橱房准备饭。吾哄小的刚入眠， 着急又去洗衣衫。 ...',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/11279334-3114075bedac5719.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
    {
      id: 7,
      title: '鬼谷子：人生不顺时，谨记三句话，路会越走越宽！',
      desp:
        '鬼谷子：人生不顺时，谨记三句话，路会越走越宽！ [企业家经商论坛](javascript:void(0);) 昨天 ****免费订阅本账号！**...',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/11266166-e0a2bae08c118126?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
    {
      id: 8,
      title: '简书发钻真好玩（打油）',
      desp:
        '简书发钻真好玩， 惹我千里把家还， 十万火急凑几篇， 然后静坐等收钻。 你来写文我点赞， 不管文章好与烂， 点赞点赞点不停， 每天激情满满满！ ...',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/3995516-646d0d8cbbc78fb5.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
    {
      id: 9,
      title: '穿衣搭配：越简单越高级！45套简约风格冬季穿搭',
      desp:
        '最近有好多刚毕业进入职场的姑娘问到老蔡，应该怎样做好职场穿搭，避免黑色套装的简单搭配，同时为自己的职业形象做加持，那么本期老蔡来分享一篇简约风格...',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/12251050-4300961b4df68aed.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    }
  ]
})
export default Mock
