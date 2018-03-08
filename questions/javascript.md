# 模式

### 实现 js 链式调用

```js
let origin = [
  { id: 1, title: 'title1' },
  { id: 2, title: 'abcd' },
  { id: 3, title: 'title2' },
  { id: 4, title: 'efg' }
];

let find = function (data) {
  // your code here  
  return {
    data: data,
    where(obj) {
      const key = Object.keys(obj)[0];
      this.data = this.data.filter((val, idx) => obj[key].test(val[key]));
      return this;
    },
    order(key, type) {
      if (type === 'desc') {
        return this.data.sort((a, b) => a[key] < b[key])
      }
    }
  }
}

const result = find(origin).where({ 'title': /\d$/ }).order('id', 'desc'); //desc 非递增  
console.log(result);  //  [{id:3,title:'title2'},{id:1,title:'title1'}] 
```

### 实现一些主流框架的循环渲染

```js
var items = [
  { name: 'item1' },
  { name: 'item2' }
];
var str = '<div ali-for="item in items">{{item.name}}<div>';

var ParseDom = function (str) {
  // your code here
  const reg = /^<(\w+)\sali-for=\"\w+\sin\s(\w+)\">\{\{\w+\.(\w+)\}\}<\w+>$/;
  let result = reg.exec(str);
  const tagName = result[1];  // div
  const data = eval(result[2]); // items
  const item = result[3]; // name
  const $el = document.createDocumentFragment();
  for (let val of data) {
    let $tmp = document.createElement(tagName);
    $tmp.innerHTML = val[item];
    $el.appendChild($tmp);
  }
  return $el;
}

// 对应生成的dom  
ParseDom(str);
// <div>item1</div>  
// <div>item2</div>  
```