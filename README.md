# react-manage
将以前用jQuery实现的单页应用用react来实现


* import React, { Component } from 'react';  需要引入　React
  否则报错　React must be in scope when using JSX;
* 目录结构
* 有redux与无redux时使用react-router的不同。
* react-router-redux的使用。
  * reducer　要加入　 routing:routerReducer
  * history要处理　syncHistoryWithStore(browserHistory,store)
  * 中间件　const routerMid = routerMiddleware(browserHistory);
* react中如何使用scope　css。
* 如何使用less。
* 使用create-react-app 生成的项目。webpack配置没有暴露。如何加载less。 npm run eject。https://blog.csdn.net/ouyangye831/article/details/76202501
* 配置https://blog.csdn.net/echo008/article/details/78311831！