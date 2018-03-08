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

### EventEmitter 的实现

```js
class EventEmitter {
  constructor() {
    this.eventList = {};
    this.onceEventList = {};
  }

  // 多次触发
  on(event, handler) {
    if (!this.eventList.hasOwnProperty(event)) {
      this.eventList[event] = [];
    }
    this.eventList[event].push(handler);
  }

  // 只触发一次
  once(event, handler) {
    this.onceEventList[event] = handler;
  }

  // 触发特定事件
  fire(obj) {
    if (this.eventList.hasOwnProperty(obj.type)) {
      this.eventList[obj.type].forEach(handler => {
        handler(obj.value)
      })
    }

    if (this.onceEventList.hasOwnProperty(obj.type)) {
      this.onceEventList[obj.type](obj.value);
      delete this.onceEventList[obj.type];
    }

  }

  // 移除特定的事件的处理函数
  off(event, handler) {
    if (this.eventList.hasOwnProperty(event.type)) {
      let handlers = this.eventList[event.type].filter(fn => fn === handler);
      this.eventList[obj.type] = handlers;
    }
    if (this.onceEventList.hasOwnProperty(event.type)) {
      if (this.onceEventList[event] === handler) {
        delete this.eventList[obj.type];
      }
    }

  }

}

const emitter = new EventEmitter();

const handler = function (evt) {
  console.log(1, evt);
}

emitter.on('foo', handler);

emitter.once('foo', function (evt) {
  console.log(2, evt);
})

emitter.fire({ type: 'foo', value: 'hello' });
emitter.fire({ type: 'foo', value: 'world' });
emitter.off('foo', handler);
emitter.fire({ type: 'foo', value: 'test' })
```

