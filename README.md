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
* 使用了combineReducer方法之后，mapStateToProps会不会有变化。
* 一个action可以修改2个值吗,是不是最佳实践？tabindex与tab。
* react-router的全局钩子？  比如标签。比如上面的标签。这种高阶组件的思路可以借鉴。https://www.lianyue.org/react-router-authenticated
* react-router的按需加载？
* mock数据。
* 是否所有数据都要放到redux中去。好处，坏处？
* reducer的组织。http://www.redux.org.cn/docs/recipes/reducers/SplittingReducerLogic.html
* 哪些异步需要放在reducer中。公共的？
* react有哪些最佳实践。https://www.zhihu.com/search?type=content&q=react%20%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5

* reducer 
    * reducer也是函数。这个函数有哪些部分，有哪些可以精简出来的。函数如何分解。
    * 工具函数的提取。
    * case 函数的提取。
    * 按域拆分数据
    * 减少样板代码。createReducer。 
    * 组合reducer。combineReducers。 高阶reducer。
* combineReducers 
    * store.getState()拿到的是什么。在mapStateToProps的时候是如何拿到想要的state的。
    * 可以在任何级别的 reducer 中使用 combineReducer，不仅仅是在创建根 reducer 的时候。在不同的地方有多个组合的 reducer 是非常常见的，他们组合到一起来创建根 reducer。
    * reducer的dispatch。是如何查找对应的case的。 

* 异步action
    * 哪些异步流程要用action。 

### middleware 与enhancer
* createStore(reducer,initState,enhancer)
* middleware 主要作用于store.dispatch。 而enhancer主要是对reducer的处理？
  * middleware 雏形。
  ```
  let next = store.dispatch;
  store.dispatch = function dispatchAndLog(action) {
    console.log('dispatching', action);
    next(action);
    console.log('next state', store.getState());
  }
  ```
  * 如何写一个中间件。
  * 如何使用中间件。
    * applyMiddleware(...middlewares)(createStore)(reducer, initialState); 
  * 中间件的顺序问题。

* middleware 它提供的是位于 action 被发起之后，到达 reducer 之前的扩展点。
* 中间件就是一个函数，对store.dispatch方法进行了改造，在发出 Action 和执行 Reducer 这两步之间，添加了其他功能。
* compose
* compose 函数则是 applyMiddleware 函数的核心，其会形成串联的函数调用关系，用于增强 dispatch 方法。
* enhancer(createStore)(reducer, preloadedState)
* reducer enhancer（或者 higher order reducer）作为一个函数，接收 reducer 作为参数并返回一个新的 reducer，这个新的 reducer 可以处理新的 action，或者维护更多的 state，亦或者将它无法处理的 action 委托给原始的 reducer 处理。这不是什么新模式，combineReducers()也是 reducer enhancer，因为它同样接收多个 reducer 并返回一个新的 reducer。



















#### 学习资料
* 阮一峰 react技术栈系列 http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html
* React.js 小书 http://huziketang.mangojuice.top/books/react/
* Redux 中文文档 http://www.redux.org.cn/
* 深入React技术栈
* https://www.jianshu.com/p/c3ab4c0c6830