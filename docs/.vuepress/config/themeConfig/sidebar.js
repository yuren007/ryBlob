// ！！！注：此文件没有使用到，仅用于测试和侧边栏数据格式的参考。

// 侧边栏
module.exports = {
  '/01.前端基础/': [
    {
      title: 'JavaScript',
      collapsable: false, //是否可折叠，可选的，默认true
      children: [
        ['03.JavaScript/01.new命令原理','new命令原理'],
      ]
    },
  ],
  '/02.前端面试/': [
    {
      title: '前端面试',
      collapsable: false,
      children: [
      ]
    },
  ],
  '/03.算法题库/': [
    {
      title: '算法题库',
      collapsable: false, //是否可折叠，可选的，默认true
      sidebarDepth: 2, // 深度，可选的, 默认值是 1
      children: [
      ]
    }
  ],
  '/04.关于/': [
    {
      title: '关于',
      collapsable: false,
      children: [
      ]
    }
  ],
  // '/': [ // 在最后定义，在没有单独设置侧边栏时统一使用这个侧边栏
  //   '',
  //   'git',
  //   'github',
  //   'markdown',
  //   'study',
  //   'interview'
  //   // '/',
  //   // {
  //   //   title: 'foo', // 标题，必要的
  //   //   path: '/foo/', // 标题的路径，可选的, 应该是一个绝对路径
  //   //   collapsable: false, // 是否可折叠，可选的，默认true
  //   //   sidebarDepth: 1,    // 深度，可选的, 默认值是 1
  //   //   children: [
  //   //     ['foo/', '子页1'],
  //   //     'foo/1',
  //   //     'foo/2',
  //   //   ]
  //   // },
  //   // {
  //   //   title: 'bar',
  //   //   children: [
  //   //     ['bar/', '子页2'],
  //   //     'bar/3',
  //   //     'bar/4',
  //   //   ]
  //   // }
  // ],
}
