# CSS

## CSS 选择器和属性

### Q: CSS 选择器有哪些？

| 选择器               |	例子	                 | 例子描述	                                    |CSS版本| 兼容性 |
|---------------------|-----------------------|---------------------------------------------|:----:|:-----:|
| *                   | *                     | 选择所有元素,**不参与计算优先级**                | 2  | IE6+ |
| #id                 |	#firstname            | 选择 id="firstname" 的所有元素                 | 1  | IE6+ |
| .class              |	.intro                | 选择 `class="intro"` 的所有元素                | 1 | IE6+ |
| element             |	p                     |	选择所有 `<p>` 元素                            | 1 | IE6+|
| element,element     |	div,p                 |	选择所有 `<div>` 元素和所有 `<p>` 元素          | 1 | IE6+ |
| element element     |	div p                 | 选择 `<div>` 元素内部的所有 `<p>` 元素          | 1 | IE6+ |
| element>element     |	div>p                 | 选择父元素为 `<div>` 元素的所有 `<p>` 元素       | 2 | IE7+ |
| element+element     |	div+p                 | 选择紧接在 `<div>` 元素之后的所有 `<p>` 元素     | 2 | IE7+ |
| [attribute]	        | [target]              | 选择带有 target 属性所有元素                    | 2 | IE7+ |
| [attribute=value]   |	[target=_blank]       | 选择 `target="_blank"` 的所有元素              | 2 | IE7+ |
| [attribute~=value]  |	[title~=flower]       | 选择 title 属性包含单词 "flower" 的所有元素      | 2 | IE7+ |
| [attribute\|=value]	| [lang\|=en]           | 选择 lang 属性值以 "en" 开头的所有元素           | 2 | IE7+ |
| :link               |	a:link                | 选择所有未被访问的链接                          | 1 | IE4+ |
| :visited	          | a:visited             | 选择所有已被访问的链接                          | 1 | IE4+ |
| :active             |	a:active              | 选择活动链接                                   | 1 | IE4+ |
| :hover              |	a:hover               | 选择鼠标指针位于其上的链接                       | 1 | IE4+ |
| :focus              |	input:focus           | 选择获得焦点的 input 元素                       | 2 | IE4+ |
| :first-letter       |	p:first-lett          | 选择每个 `<p>` 元素的首行                       | 1 | IE5.5+ |
| :first-child	      | p:first-child         | 选择属于父元素的第一个子元素的每个 `<p>` 元素       | 2 | IE7+ |
| :before             | p:before              |	在每个 `<p>` 元素的内容之前插入内容               | 2 | IE8+ |
| :after              | p:after               |	在每个 `<p>` 元素的内容之后插入内容               | 2 | IE8+ |
| :lang(language)     |	p:lang(it)            | 选择带有以 "it" 开头的 lang 属性值的每个 `<p>` 元素| 2 | IE7+ |
| element1~element2   |	p~ul	                | 选择前面有 `<p>` 元素的每个 `<ul>` 元素           |	3 | IE7+ |
| [attribute^=value]	| a[src^="https"]       | 选择其 src 属性值以 "https" 开头的每个 `<a>` 元素 | 3 | IE7+ |
| [attribute$=value]  |	a[src$=".pdf"]	      | 选择其 src 属性以 ".pdf" 结尾的所有 `<a>` 元素    | 3 | IE7+ |
| [attribute*=value]	| a[src*="abc"]         |	选择其 src 属性中包含 "abc" 子串的每个 `<a>` 元素  | 3 | IE7+ |
| :first-of-type      |	p:first-of-type	      | 选择属于其父元素的首个 `<p>` 元素的每个 `<p>` 元素  | 3 | IE9+ |
| :last-of-type       |	p:last-of-type        |	选择属于其父元素的最后 `<p>` 元素的每个 `<p>` 元素  | 3 | IE9+ |
| :only-of-type	      | p:only-of-type        |	选择属于其父元素唯一的 `<p>` 元素的每个 `<p>` 元素  | 3 | IE9+ |
| :only-child         |	p:only-child          |	选择属于其父元素的唯一子元素的每个 `<p>` 元素       | 3 | IE9+ |
| :nth-child(n)       |	p:nth-child(2)        |	选择属于其父元素的第二个子元素的每个 `<p>` 元素      | 3 | IE9+ |
| :nth-last-child(n)  |	p:nth-last-child(2)	  | 同上，从最后一个子元素开始计数                     | 3 | IE9+ |
| :nth-of-type(n)     |	p:nth-of-type(2)      |	选择属于其父元素第二个 `<p>` 元素的每个 `<p>` 元素  | 3 | IE9+ |
| :nth-last-of-type(n)|	p:nth-last-of-type(2) |	同上，但是从最后一个子元素开始计数                  | 3 | IE9+ |
| :last-child         |	p:last-child          |	选择属于其父元素最后一个子元素每个 `<p>` 元素       | 3 | IE9+ |
| :root               |	:root                 |	选择文档的根元素                                 | 3 | IE7+ |
| :empty              |	p:empty               |	选择没有子元素的每个 `<p>` 元素（包括文本节点）      | 3 | IE7+ |
| :target             |	#news:target          |	选择当前活动的 #news 元素                        | 3 | IE7+ |
| :enabled            |	input:enabled         | 选择每个启用的 `<input>` 元素                    | 3 | IE7+ |
| :disabled	          | input:disabled        | 选择每个禁用的 `<input>` 元素                    | 3 | IE7+ |
| :checked            |	input:checked         | 选择每个被选中的 `<input>` 元素                  | 3 | IE7+ |
| :not(selector)      |	:not(p)               | 选择非 `<p>` 元素的每个元素                      | 3 | safari9+|
| ::selection	        | ::selection           |	选择被用户选取的元素部分                          | 3 | IE9+ |

##### 参考

  * [w3school](http://www.w3school.com.cn/cssref/css_selectors.asp)
  * [FE-interview](https://github.com/foreverzmy/FE-interview#css%E9%80%89%E6%8B%A9%E5%99%A8%E6%9C%89%E5%93%AA%E4%BA%9B)

### Q: CSS 选择器的优先级是如何计算的？

浏览器通过优先级规则，判断元素展示哪些样式。优先级通过 4 个维度指标确定，我们假定以 a、b、c、d 命名，分别代表以下含义：

a 表示是否使用内联样式（inline style）。如果使用，a 为 1，否则为 0。
b 表示 ID 选择器的数量。
c 表示类选择器、属性选择器和伪类选择器数量之和。
d 表示标签（类型）选择器和伪元素选择器之和。
优先级的结果并非通过以上四个值生成一个得分，而是每个值分开比较。a、b、c、d权重从左到右，依次减小。判断优先级时，从左到右，一一比较，直到比较出最大值，即可停止。所以，如果 b 的值不同，那么c 和 d 不管多大，都不会对结果产生影响。比如 0，1，0，0 的优先级高于 0，0，10，10。

当出现优先级相等的情况时，最晚出现的样式规则会被采纳。如果你在样式表里写了相同的规则（无论是在该文件内部还是其它样式文件中），那么最后出现的（在文件底部的）样式优先级更高，因此会被采纳。

在写样式时，我会使用较低的优先级，这样这些样式可以轻易地覆盖掉。尤其对写 UI 组件的时候更为重要，这样使用者就不需要通过非常复杂的优先级规则或使用 `!important` 的方式，去覆盖组件的样式了。

##### 参考

  * [front-end-interview-handbook](https://github.com/yangshun/front-end-interview-handbook/blob/master/Translations/Chinese/questions/css-questions.md#css-%E9%80%89%E6%8B%A9%E5%99%A8%E7%9A%84%E4%BC%98%E5%85%88%E7%BA%A7%E6%98%AF%E5%A6%82%E4%BD%95%E8%AE%A1%E7%AE%97%E7%9A%84)


### Q: CSS有哪些继承属性

- 关于文字排版的属性如：
  +  [font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
  +  [word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
  +  [letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
  +  [text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
  +  [text-rendering](https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering)
  +  [word-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing)
  +  [white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  +  [text-indent](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
  +  [text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
  +  [text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
- [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
- [visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)
- [cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)

## 概念和基础

### Q: css sprite 是什么,有什么优缺点？

概念：将多个小图片拼接到一个图片中。通过 `background-position` 和元素尺寸调节需要显示的背景图案。

优点：

  1. 减少HTTP请求数，极大地提高页面加载速度，但是对于 HTTP2 而言，加载多张图片不再是问题;
  2. 增加图片信息重复度，提高压缩比，减少图片大小;
  3. 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现;

缺点：

  1. 图片合并麻烦;
  2. 维护麻烦，修改一个图片可能需要从新布局整个图片，样式;

### Q: `link` 与 `@import` 的区别？

1. `link`是 HTML 方式， `@import` 是 CSS 方式;
2. `link` 最大限度支持并行下载，`@import` 过多嵌套导致串行下载，出现 [`FOUC`](https://github.com/foreverzmy/frontend-interview/blob/master/questions/css.md#%E4%BB%80%E4%B9%88%E6%98%AF-fouc%E5%A6%82%E4%BD%95%E9%81%BF%E5%85%8D);
3. `link` 可以通过 `rel="alternate stylesheet"` 指定候选样式;
4. 浏览器对 `link` 支持早于 `@import`，可以使用 `@import` 对老浏览器隐藏样式;
5. `@import` 必须在样式规则之前，可以在 css 文件中引用其他文件;
6. 总体来说：`link` 优于 `@import`;

##### 参考

  * [FE-interview](https://github.com/foreverzmy/FE-interview#link%E4%B8%8Eimport%E7%9A%84%E5%8C%BA%E5%88%AB)

### Q: 什么是 FOUC？如何避免？

(Flash of Unstyled Content: 文档样式短暂失效)：用户定义样式表加载之前浏览器使用默认样式显示文档，用户样式加载渲染之后再从新显示文档，造成页面闪烁。

**解决方法**：把样式表放到文档的 `head` 标签中;

### Q: 什么事外边距折叠(collapsing margins)？

毗邻的两个或多个 `margin` 会合并成一个margin，叫做外边距折叠。规则如下：

1. 两个或多个毗邻的普通流中的块元素垂直方向上的 `margin` 会折叠;
2. 浮动元素、`inline-block` 元素、绝对定位元素的 `margin` 不会和垂直方向上的其他元素的 margin 折叠;
3. 创建了块级格式化上下文的元素，不会和它的子元素发生 `margin` 折叠;
4. 元素自身的 `margin-bottom` 和 `margin-top` 相邻时也会折叠;

##### 参考

    * [FE-interview](https://github.com/foreverzmy/FE-interview#%E5%A4%96%E8%BE%B9%E8%B7%9D%E6%8A%98%E5%8F%A0collapsing-margins)

### Q: 如何创建块级格式化上下文(block formatting context),BFC 有什么用?

创建规则：

1. 根元素;
2. 浮动元素（`float` 不是 `none`）;
3. 绝对定位元素（`position` 取值为 `absolute` 或 `fixed`）;
4. `display` 取值为 `inline-block`, `table-cell`, `table-caption`, `flex`, `inline-flex` 之一的元素;
5. `overflow` 不是 `visible` 的元素;

作用：

1. 可以包含浮动元素;
2. 不被浮动元素覆盖;
3. 阻止父子元素的 `margin` 折叠;

### Q: 容器包含若干浮动元素时如何清理(包含)浮动？

1. 容器元素闭合标签前添加额外元素并设置 `clear: both`;
2. 父元素触发块级格式化上下文(见块级可视化上下文部分);
3. 设置容器元素伪元素进行清理

推荐的清理浮动方法：

```css
/**
* 在标准浏览器下使用
* 1 content内容为空格用于修复opera下文档中出现
*   contenteditable属性时在清理浮动元素上下的空白
* 2 使用display使用table而不是block：可以防止容器和
*   子元素top-margin折叠,这样能使清理效果与BFC，IE6/7
*   zoom: 1;一致
**/
.clearfix:before,
.clearfix:after {
    content: " "; /* 1 */
    display: table; /* 2 */
}
.clearfix:after {
    clear: both;
}
/**
* IE 6/7下使用
* 通过触发hasLayout实现包含浮动
**/
.clearfix {
    *zoom: 1;
}
```

##### 参考

  * [A new micro clearfix hack](http://nicolasgallagher.com/micro-clearfix-hack/)
  * [FE-interview](https://github.com/foreverzmy/FE-interview#%E5%AE%B9%E5%99%A8%E5%8C%85%E5%90%AB%E8%8B%A5%E5%B9%B2%E6%B5%AE%E5%8A%A8%E5%85%83%E7%B4%A0%E6%97%B6%E5%A6%82%E4%BD%95%E6%B8%85%E7%90%86%E5%8C%85%E5%90%AB%E6%B5%AE%E5%8A%A8)

### `display: none;` 与 `visibility: hidden;` 的区别。

联系：它们都能让元素不可见

区别：

  * `display:none;` 会让元素完全从渲染树中消失，渲染的时候不占据任何空间；`visibility: hidden;` 不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见;
  * `display: none;` 是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；`visibility: hidden;` 是继承属性，子孙节点消失由于继承了 `hidden`，通过设置 `visibility: visible;` 可以让子孙节点显式;
  * 修改常规流中元素的 `display` 通常会造成文档重排。修改 `visibility` 属性只会造成本元素的重绘;
  * 读屏器不会读取 `display: none;` 元素内容；会读取 `visibility: hidden;` 元素内容;

##### 参考

  * [FE-interview](https://github.com/foreverzmy/FE-interview#display-none%E4%B8%8Evisibility-hidden%E7%9A%84%E5%8C%BA%E5%88%AB)

### Q: `display: block;` 和 `display: inline;` 的区别。

`block` 元素特点：

1. 处于常规流中时，如果 `width` 没有设置，会自动填充满父容器;
2. 可以应用 `margin/padding`;
3. 在没有设置高度的情况下会扩展高度以包含常规流中的子元素;
4. 处于常规流中时布局时在前后元素位置之间（独占一个水平空间）;
5. 忽略 `vertical-align` 属性;

`inline` 元素特点:

1. 水平方向上根据 `direction` 依次布局;
2. 不会在元素前后进行换行;
3. 受 `white-space` 控制;
4. `margin/padding` 在竖直方向上无效，水平方向上有效;
5. `width/height` 属性对非替换行内元素无效，宽度由元素内容决定;
6. 非替换行内元素的行框高由 `line-height` 确定，替换行内元素的行框高由 `height`, `margin`, `padding`, `border` 决定;
6. 浮动或绝对定位时会转换为 `block`;
7. `vertical-align` 属性生效;

##### 参考

  * [FE-interview](https://github.com/foreverzmy/FE-interview#display-block%E5%92%8Cdisplay-inline%E7%9A%84%E5%8C%BA%E5%88%AB)

### Q: `display`, `float`, `position` 的关系。

1. 如果 `display` 为 `none`，那么 `position` 和 `float` 都不起作用，这种情况下元素不产生框;
2. 否则，如果 `position` 值为 `absolute` 或者 `fixed`，框就是绝对定位的，`float` 的计算值为 `none`，`display`根据下面的表格进行调整;
3. 否则，如果 `float` 不是 `none`，框是浮动的，`display` 根据下表进行调整;
4. 否则，如果元素是根元素，`display` 根据下表进行调整;
5. 其他情况下 `display` 的值为指定值;
总结起来：**绝对定位、浮动、根元素都需要调整 `display` **。

|Specified value|Computed value|
|---------------|--------------|
| inline-table | table |
| inline, table-row-group, table-column, table-comput-group, table-header-group, table-footer-group, table-row, table-cell, table-caption, inline-block | block |
| others | same as specified |

##### 参考

  * [FE-interview](https://github.com/foreverzmy/FE-interview#displayfloatposition%E7%9A%84%E5%85%B3%E7%B3%BB)

### Q: 如何确定一个元素的包含块 (containing block)?

1. 根元素的包含块叫做初始包含块，在连续媒体中他的尺寸与 viewport 相同并且 anchored at the canvas origin；对于 paged media，它的尺寸等于 page area。初始包含块的 direction 属性与根元素相同;
2. `position` 为 `relative` 或者 `static` 的元素，它的包含块由最近的块级（`display` 为 `block`, `list-item`, `table`）祖先元素的**内容框**组成;
3. 如果元素 `position` 为 `fixed`。对于连续媒体，它的包含块为 viewport；对于 paged media，包含块为 page area;
4. 如果元素 `position` 为 `absolute`，它的包含块由祖先元素中最近一个 `position` 为 `relative`, `absolute` 或者 `fixed` 的元素产生，规则如下：
    - 如果祖先元素为行内元素，包含块是围绕该元素生成的第一个和最后一个行内框的**padding boxes**的边界块;
    - 其他情况下包含块由祖先节点的**padding edge**组成;
    - 如果找不到定位的祖先元素，包含块为**初始包含块**;


## 布局

### Q: stacking context（层叠上下文）的布局规则？

z 轴上的默认层叠顺序如下（从下到上）：

    1. 根元素的边界和背景;
    2. 常规流中的元素按照 html 中顺序;
    3. 浮动块;
    4. `positioned` 元素按照 html 中出现顺序;

如何创建 stacking context：

    1. 根元素;
    2. `z-index` 不为 auto 的定位元素;
    3. `z-index` 不为 auto 的 flex 元素;
    4. `opacity` 小于 1 的元素;
    5. 在移动端 webkit 和 chrome22+，`z-index:auto; position:fixed;` 也将创建新的 stacking context;

### Q: 如何实现水平居中一个元素？

* 如果需要居中的元素为 **常规流中 `inline` 元素**，为父元素设置 `text-align:center;` 即可实现;

* 如果需要居中的元素为 **常规流中 `block` 元素**:

    1. 为元素设置宽度;
    2. 设置左右 `margin` 为 `auto`;
    3. IE6下需在父元素上设置 `text-align:center;`,再给子元素恢复需要的值;

    ```html
    <body>
      <div class="content">
        aaaaaa aaaaaa a a a a a a a a
      </div>
    </body>

    <style>
      body {
        background: #DDD;
        text-align: center; /* 3 */
      }
      .content {
        width: 500px;      /* 1 */
        text-align: left;  /* 3 */
        margin: 0 auto;    /* 2 */
        background: purple;
      }
    </style>
    ```

* 如果需要居中的元素为 **浮动元素**:

    1. 为元素设置宽度;
    2. `position: relative;`;
    3. 浮动方向偏移量（left或者right）设置为50%;
    4. 浮动方向上的 `margin` 设置为元素宽度一半乘以-1;

    ```html
    <body>
      <div class="content">
        aaaaaa aaaaaa a a a a a a a a
      </div>
    </body>
    <style>
      body {
        background: #DDD;
      }
      .content {
        width: 500px;         /* 1 */
        float: left;
        position: relative;   /* 2 */
        left: 50%;            /* 3 */
        margin-left: -250px;  /* 4 */
        background-color: purple;
      }
    </style>
    ```

* 如果需要居中的元素为 **绝对定位元素**:

    1. 为元素设置宽度;
    2. 偏移量设置为 50%; 
    3. 偏移方向外边距设置为元素宽度一半乘以 -1;

    ```html
    <body>
      <div class="content">
        aaaaaa aaaaaa a a a a a a a a
      </div>
    </body>
    <style>
      body {
        background: #DDD;
        position: relative;
      }
      .content {
        width: 800px;
        position: absolute;
        left: 50%;
        margin-left: -400px;
        background-color: purple;
      }
    </style>
    ```

* 如果需要居中的元素为绝对定位元素;

    1. 为元素设置宽度;
    2. 设置左右偏移量都为 0;
    3. 设置左右外边距都为 `auto`;

    ```html
    <body>
      <div class="content">
        aaaaaa aaaaaa a a a a a a a a
      </div>
    </body>
    <style>
      body {
        background: #DDD;
        position: relative;
      }
      .content {
        width: 800px;
        position: absolute;
        margin: 0 auto;
        left: 0;
        right: 0;
        background-color: purple;
      }
    </style>
    ```

##### 参考

  * [FE-interview](https://github.com/foreverzmy/FE-interview#%E5%A6%82%E4%BD%95%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0)

### Q: 如何实现垂直居中一个元素？

* [6 Methods For Vertical Centering With CSS](http://www.vanseodesign.com/css/vertical-centering/)
* [盘点8种CSS实现垂直居中水平居中的绝对定位居中技术](http://blog.csdn.net/freshlover/article/details/11579669)