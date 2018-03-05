
## SEO

### 前端需要注意哪些SEO

1. 合理的 title、description、keywords：搜索对着三项的权重逐个减小，title 值强调重点即可，重要关键词出现不要超过 2 次，而且要靠前，不同页面 title 要有所不同；description 把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面 description 有所不同；keywords 列举出重要关键词即可;
2. 语义化的 HTML 代码，符合 W3C 规范：语义化代码让搜索引擎容易理解网页;
3. 重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取;
4. 重要内容不要用 js 输出：爬虫不会执行 js 获取内容;
5. 少用 iframe：搜索引擎不会抓取 iframe 中的内;容
6. 非装饰性图片必须加 alt;
7. 提高网站速度：网站速度是搜索引擎排序的一个重要指标;

## 性能

### 什么是渐进式渲染（progressive rendering）？

渐进式渲染是用于提高网页性能（尤其是提高用户感知的加载速度），以尽快呈现页面的技术。

在以前互联网带宽较小的时期，这种技术更为普遍。如今，移动终端的盛行，而移动网络往往不稳定，渐进式渲染在现代前端开发中仍然有用武之地。

一些举例：

  * 图片懒加载——页面上的图片不会一次性全部加载。当用户滚动页面到图片部分时，JavaScript 将加载并显示图像。
  * 确定显示内容的优先级（分层次渲染）——为了尽快将页面呈现给用户，页面只包含基本的最少量的 CSS、脚本和内容，然后可以使用延迟加载脚本或监听 `DOMContentLoaded/load` 事件加载其他资源和内容。
  *异步加载 HTML 片段——当页面通过后台渲染时，把 HTML 拆分，通过异步请求，分块发送给浏览器。更多相关细节可以在这里找到。

##### 参考

  * [front-end-interview-handbook](https://github.com/yangshun/front-end-interview-handbook/blob/master/Translations/Chinese/questions/html-questions.md#%E4%BB%80%E4%B9%88%E6%98%AF%E6%B8%90%E8%BF%9B%E5%BC%8F%E6%B8%B2%E6%9F%93progressive-rendering)
  * [stackoverflow](https://stackoverflow.com/questions/33651166/what-is-progressive-rendering)
  * [ebaytechblog](http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/)

## 网络

## 算法