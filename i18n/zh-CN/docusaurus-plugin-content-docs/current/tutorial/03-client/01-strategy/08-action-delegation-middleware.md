---
title: 跨组件触发请求
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info 策略类型

中间件

:::

> 在使用扩展 hooks 前，确保你已熟悉了 alova 的基本使用。

从前，在一个组件中想要触发另一个组件中的请求，你需要将数据保存到 Store 中，通过分发 Action 完成。现在，你可以使用这个中间件**消除组件层级的限制**，在任意组件中快速地触发任意请求的操作函数。

例如，你可以某个组件中更新了菜单数据后，重新触发侧边菜单栏的重新请求，从而刷新数据。当操作了列表数据后，触发列表更新。

<!-- ## 示例

[跨组件触发请求 Demo](/tutorial/example/vue/action-delegation-middleware) -->

## 特性

- 委托任意 alova 中的 use hook 的操作函数；
- 任意位置触发已委托的操作函数；

## 使用

### 基本使用

> 以 vue3 为例，在 react、svelte 中用法相同。

在组件 A 中使用`actionDelegationMiddleware`委托`useRequest`的操作函数。

```javascript title=组件A
import { actionDelegationMiddleware } from 'alova/client';

useRequest(queryTodo, {
  // ...
  middleware: actionDelegationMiddleware('testAction')
});
```

在任意一个组件中（如组件 B）通过`accessAction`传入指定的委托名称触发组件 A 中的`useRequest`的操作函数。

```javascript title=组件B
import { accessAction } from 'alova/client';

accessAction('testAction', delegatedActions => {
  // 调用组件A中的send函数
  delegatedActions.send();

  // 调用组件A中的abort函数
  delegatedActions.abort();
});
```

:::info 注意

1. 只有发出请求的 use hook， 它的 actions 才会被委托。
2. alova 内的全部 use hook 都支持操作函数委托，但不同的 use hook 所委托的函数有所不同。
3. 使用`actionDelegationMiddleware`时，委托名称可传入字符串、数字、symbol 值。

:::

### 静默访问 actions

默认情况下，当没有找到`testAction`的 action 委托时将会报错，这可以帮助你定位问题，但如果在调用`accessAction`时不确定目标 actions 是否被委托，你可以通过第三个参数`true`阻止报错。

```javascript
accessAction(
  'testAction',
  delegatedActions => {
    delegatedActions.send();
  },
  true
);
```

### 批量触发操作函数

在上面的例子中，我们使用`accessAction`触发了一个 use hook 的操作函数，但实际上，相同名称的委托不会互相覆盖，而是会保存在一组中，我们可以使用这个名称同时触发它们委托的函数。

```javascript title=组件C
import { actionDelegationMiddleware } from 'alova/client';

useRequest(queryTodo, {
  // ...
  middleware: actionDelegationMiddleware('testAction1')
});
```

```javascript title=组件D
import { actionDelegationMiddleware } from 'alova/client';

useRequest(queryTodo, {
  // ...
  middleware: actionDelegationMiddleware('testAction1')
});
```

```javascript title=组件E
import { accessAction } from 'alova/client';

// 因为将会匹配组件C、组件D的委托hook，因此回调函数将被执行两次
accessAction('testAction1', delegatedActions => {
  // 调用组件C、组件D中的send函数
  delegatedActions.send();

  // 调用组件C、组件D中的abort函数
  delegatedActions.abort();
});
```

同时，还可以在`accessAction`中使用正则表达式来批量触发委托名称满足条件的操作函数

```javascript title=组件F
import { actionDelegationMiddleware } from 'alova/client';

useRequest(queryTodo, {
  // ...
  middleware: actionDelegationMiddleware('prefix_name1')
});
```

```javascript title=组件G
import { actionDelegationMiddleware } from 'alova/client';

useRequest(queryTodo, {
  // ...
  middleware: actionDelegationMiddleware('prefix_name2')
});
```

```javascript title=组件H
import { accessAction } from 'alova/client';

// 因为将会匹配组件F、组件G的委托hook，因此回调函数将被执行两次
accessAction(/^prefix_/, delegatedActions => {
  // 调用组件F、组件G中的send函数
  delegatedActions.send();

  // 调用组件F、组件G中的abort函数
  delegatedActions.abort();
});
```

## 操作函数委托表

尽管大部分 hook 委托的操作函数与它本身带有的操作函数相同，但这不是绝对的，以下是每个 hook 的操作函数委托表。

### useRequest

| 名称   | 描述                                                    | 函数参数 | 返回值 | 版本 |
| ------ | ------------------------------------------------------- | -------- | ------ | ---- |
| send   | 与 [useRequset](/api/core-hooks#userequest).send 相同   |          |        | -    |
| abort  | 与 [useRequset](/api/core-hooks#userequest).abort 相同  |          |        | -    |
| update | 与 [useRequset](/api/core-hooks#userequest).update 相同 |          |        | -    |

### useWatcher

与[useRequest 委托列表](#userequest)相同。

### useFetcher

| 名称   | 描述                                                    | 函数参数 | 返回值 | 版本 |
| ------ | ------------------------------------------------------- | -------- | ------ | ---- |
| fetch  | 与 [useFetcher](/api/core-hooks#usefetcher).fetch 相同  |          |        | -    |
| abort  | 与 [useFetcher](/api/core-hooks#usefetcher).abort 相同  |          |        | -    |
| update | 与 [useFetcher](/api/core-hooks#usefetcher).update 相同 |          |        | -    |

### usePagination

| 名称     | 描述                                                                       | 函数参数                                                                           | 返回值             | 版本 |
| -------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------ | ---- |
| refresh  | 详见[usePagination 操作函数](/tutorial/client/strategy/use-pagination#api) |                                                                                    |                    | -    |
| insert   | 详见[usePagination 操作函数](/tutorial/client/strategy/use-pagination#api) |                                                                                    |                    | -    |
| remove   | 详见[usePagination 操作函数](/tutorial/client/strategy/use-pagination#api) |                                                                                    |                    | -    |
| replace  | 详见[usePagination 操作函数](/tutorial/client/strategy/use-pagination#api) |                                                                                    |                    | -    |
| reload   | 详见[usePagination 操作函数](/tutorial/client/strategy/use-pagination#api) |                                                                                    |                    | -    |
| update   | 详见[usePagination 操作函数](/tutorial/client/strategy/use-pagination#api) |                                                                                    |                    | -    |
| getState | 按名称获取分页相关数据                                                     | stateKey: 'page' \| 'pageSize' \| 'data' \| 'pageCount' \| 'total' \| 'isLastPage' | 对应 statekey 的值 | -    |

### useSQRequest

与[useRequest 委托列表](#userequest)相同。

### useForm

| 名称       | 描述                                                           | 函数参数 | 返回值 | 版本 |
| ---------- | -------------------------------------------------------------- | -------- | ------ | ---- |
| updateForm | 详见[useForm 操作函数](/tutorial/client/strategy/use-form#api) |          |        | -    |
| reset      | 详见[useForm 操作函数](/tutorial/client/strategy/use-form#api) |          |        | -    |
| send       | 与 [useRequset](/api/core-hooks#userequest).send 相同          |          |        | -    |
| abort      | 与 [useRequset](/api/core-hooks#userequest).abort 相同         |          |        | -    |
| update     | 与 [useRequset](/api/core-hooks#userequest).update 相同        |          |        | -    |

### useCaptcha

与[useRequest 委托列表](#userequest)相同。

### useRetriableRequest

| 名称   | 描述                                                                                    | 函数参数 | 返回值 | 版本 |
| ------ | --------------------------------------------------------------------------------------- | -------- | ------ | ---- |
| stop   | 详见[useRetriableRequest 操作函数](/tutorial/client/strategy/use-retriable-request#api) |          |        | -    |
| send   | 与 [useRequset](/api/core-hooks#userequest).send 相同                                   |          |        | -    |
| abort  | 与 [useRequset](/api/core-hooks#userequest).abort 相同                                  |          |        | -    |
| update | 与 [useRequset](/api/core-hooks#userequest).update 相同                                 |          |        | -    |

### useSerialRequest

与[useRequest 委托列表](#userequest)相同。

### useSerialWatcher

与[useRequest 委托列表](#userequest)相同。
