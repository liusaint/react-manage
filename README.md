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