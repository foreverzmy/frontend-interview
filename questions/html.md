


### doctype 是什么，有什么作用？

1. DOCTYPE是 “document type” 的缩写。它是 HTML 中用来区分标准模式和怪异模式的声明，用来告知浏览器使用标准模式渲染页面;
2. `<!doctype>` 声明必须处于 HTML 文档的头部，在 `<html>` 标签之前，HTML5 中不区分大小写;
3. `<!doctype>` 声明不是一个 HTML 标签，是一个用于告诉浏览器当前HTMl版本的指令;
4. 现代浏览器的 html 布局引擎通过检查 doctype 决定使用兼容模式还是标准模式对文档进行渲染，一些浏览器有一个接近标准模型;

### 什么是 web 语义化,有什么好处？

语义化是前端开发里面的一个专用术语，其优点在于标签语义化有助于构架良好的 html 结构，有利于搜索引擎的建立索引、抓取；另外，亦有利于页面在不同的设备上显示尽可能相同；此外，亦有利于构建清晰的机构，有利于团队的开发、维护。

* HTML 标签的语义化：通过使用包含语义的标签（如 h1-h6）恰当地表示文档结构;
* css 命名的语义化是指：为html标签添加有意义的 class，id 补充未表达的语义;

为什么需要语义化：
  * 去掉样式后页面呈现清晰的结构;
  * 盲人使用读屏器更好地阅读;
  * 搜索引擎更好地理解页面，有利于收录;
  * 便团队项目的可持续运作及维护;

### HTML 全局属性(global attribute)有哪些?

参考资料：[MDN: html global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) 或者 [W3C HTML global-attributes](http://www.w3.org/TR/html-markup/global-attributes.html#common.attrs.core)
* accesskey: 设置快捷键，提供快速访问元素如 `accesskey="c"` 在 windows 下按 `alt + shift + c` 可激活元素
* class: 为元素设置类标识，多个类名用空格分开，CSS 和 JavaScript 可通过 `class` 属性获取元素;
* contenteditable: 指定元素内容是否可编辑;
* contextmenu: 自定义鼠标右键弹出菜单内容;
* data-*: 为元素增加自定义属性;
* dir: 设置元素文本方向;
* draggable: 设置元素是否可拖拽;
* dropzone: 设置元素拖放类型： copy, move, link;
* hidden: 表示一个元素是否与文档。样式上会导致元素不显示，但是不能用这个属性实现样式效果;
* id: 元素 `id`，文档内唯一;
* lang: 元素内容的的语言;
* spellcheck: 是否启动拼写和语法检查;
* style: 行内 css 样式;
* tabindex: 设置元素可以获得焦点，通过 tab 可以导航;
* title: 元素相关的建议信息;
* translate: 元素和子孙节点内容是否需要本地化;

### 什么是 `data-` 属性？

在 JavaScript 框架变得流行之前，前端开发者经常使用 `data-` 属性，把额外数据存储在 DOM 自身中。当时没有其他 Hack 手段（比如使用非标准属性或 DOM 上额外属性）。这样做是为了将自定义数据存储到页面或应用中，对此没有其他更适当的属性或元素。

而现在，不鼓励使用 `data-` 属性。原因之一是，用户可以通过在浏览器中利用检查元素，轻松地修改属性值，借此修改数据。数据模型最好存储在 JavaScript 本身中，并利用框架提供的数据绑定，使之与 DOM 保持更新。

### 将 HTML5 看作成开放的网络平台，什么是 HTML5 的基本构件（building block）？

* 语义 - 提供更准确地描述内容;
* 连接 - 提供新的方式与服务器通信;
* 离线和存储 - 允许网页在本地存储数据并有效地离线运行;
* 多媒体 - 在 Open Web 中，视频和音频被视为一等公民（first-class citizens）;
* 2D/3D 图形和特效 - 提供更多种演示选项;
* 性能和集成 - 提供更快的访问速度和性能更好的计算机硬件;
* 设备访问 - 允许使用各种输入、输出设备;
* 外观 - 可以开发丰富的主题;

##### 参考

  * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5

### 请描述 cookie、sessionStorage 和 localStorage 的区别。

上面提到的技术名词，都是在客户端以键值对存储的存储机制，并且只能将值存储为字符串。

|                                               | `cookie`                                    | `localStorage` | `sessionStorage` |
| --------------------------------------------- | ------------------------------------------- | -------------- | ---------------- |
| 由谁初始化                                     | 客户端或服务器，服务器可以使用 `Set-Cookie` 请求头。 | 客户端          | 客户端            |
| 过期时间                                       | 手动设置                                     | 永不过期         | 当前页面关闭时     |
| 在当前浏览器会话（browser sessions）中是否保持不变 | 取决于是否设置了过期时间                         | 是             | 否               |
| 是否与域名（domain）相关联                       | 是                                           | 否             | 否               |
| 是否随着每个 HTTP 请求发送给服务器                | 是，Cookies 会通过 `Cookie` 请求头，自动发送给服务器 | 否             | 否               |
| 容量（每个域名）                                | 4kb                                          | 5MB            | 5MB              |
| 访问权限                                       | 任意窗口                                      | 任意窗口        | 当前页面窗口       |

### 请描述 `<script>`、`<script async>` 和 `<script defer>` 的区别。

`<script>` - HTML 解析中断，脚本被提取并立即执行。执行结束后，HTML 解析继续。
`<script async>` - 脚本的提取、执行的过程与 HTML 解析过程并行，脚本执行完毕可能在 HTML 解析完毕之前。当脚本与页面上其他脚本独立时，可以使用 `async`，比如用作页面统计分析。
`<script defer>` - 脚本仅提取过程与 HTML 解析过程并行，脚本的执行将在 HTML 解析完毕后进行。如果有多个含 `defer` 的脚本，脚本的执行顺序将按照在 `document` 中出现的位置，从上到下顺序执行。

注意：没有 `src` 属性的脚本，`async` 和 `defer` 属性会被忽略。

###### 参考
* https://github.com/yangshun/front-end-interview-handbook/blob/master/Translations/Chinese/questions/html-questions.md#%E8%AF%B7%E6%8F%8F%E8%BF%B0scriptscript-async%E5%92%8Cscript-defer%E7%9A%84%E5%8C%BA%E5%88%AB
* https://stackoverflow.com/questions/33651166/what-is-progressive-rendering
* http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/

### 为什么最好把CSS的 `<link>` 标签放在 `<head></head>` 之间？为什么最好把 JS 的 `<script>` 标签恰好放在 `</body>` 之前，有例外情况吗？

#### 把 `<link>` 放在 `<head>` 中

把 `<link>` 标签放在 `<head></head>` 之间是规范要求的内容。此外，这种做法可以让页面逐步呈现，提高了用户体验。将样式表放在文档底部附近，会使许多浏览器（包括 IE）不能逐步呈现页面。一些浏览器会阻止渲染，以避免在页面样式发生变化时，重新绘制页面中的元素。这种做法可以防止呈现给用户空白的页面或没有样式的内容。

#### 把 `<script>` 标签恰好放在 `</body>` 之前

脚本在下载和执行期间会阻止 HTML 解析。把 `<script>` 标签放在底部，保证 HTML 首先完成解析，将页面尽早呈现给用户。

例外情况是当你的脚本里包含 `document.write()` 时。但是现在，`document.write()`不推荐使用。同时，将 `<script>` 标签放在底部，意味着浏览器不能开始下载脚本，直到整个文档（document）被解析。也许，对此比较好的做法是，`<script>` 使用 `defer` 属性，放在 `<head>` 中。

##### 参考
  * https://developer.yahoo.com/performance/rules.html#css_top

### `<img>` 的 `title` 和 `alt` 属性有什么区别？

`title` 是 global attributes 之一，用于为元素提供附加的 advisory information。通常当鼠标滑动到元素上的时候显示。
`alt` 是 `<img>` 的特有属性，是图片内容的等价描述，用于图片无法加载时显示、读屏器阅读图片。可提图片高可访问性，除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析。