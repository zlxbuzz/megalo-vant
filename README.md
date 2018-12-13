# megalo-vant

## 描述

`megalo(0.5.4)` 结合 `vant` 组件库的代码例子，所有组件都可以用,只支持微信小程序。

## 运行

```bash
git clone https://github.com/zlxbuzz/megalo-vant

cd megalo-vant && yarn

npm run dev #然后打开开发者工具定义目录为dist-wechat即可

npm run build

```

## 一些细节

1. 组件 slot 暂时不能多层嵌套，所以尽量只用一层。

2.组件的属性用 `vue`开发形式来绑定。
比如

```bash
<button loading>
改成
<button :loading="true">
```
