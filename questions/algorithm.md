# 算法

### Q: 解析 URL Params 为对象

尽可能的全面正确的解析一个任意 url 的所有参数为 Object，注意边界条件的处理。

```js
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
parseParam(url)
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/
```

答案：

```js
function parseParam(url) {
  const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
  const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
  let paramsObj = {};
  // 将 params 存到对象中
  paramsArr.forEach(param => {
    if (/=/.test(param)) { // 处理有 value 的参数
      let [key, val] = param.split('='); // 分割 key 和 value
      val = decodeURIComponent(val); // 解码
      val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字

      if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
        paramsObj[key] = [].concat(paramsObj[key], val);
      } else { // 如果对象没有这个 key，创建 key 并设置值
        paramsObj[key] = val;
      }
    } else { // 处理没有 value 的参数
      paramsObj[param] = true;
    }
  })

  return paramsObj;
}
```

### Q: 模板渲染

实现一个简单的模板引擎：

```js
let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}
render(template, data); // 我是姓名，年龄18，性别undefined
```

答案：

* 简单实现

    ```js
    function render(template, data) {
      const reg = /\{\{(\w+)\}\}/; // 模板字符串正则
      if (reg.test(template)) { // 判断模板里是否有模板字符串
        const name = reg.exec(template)[1]; // 查找当前模板里第一个模板字符串的字段
        template = template.replace(reg, data[name]); // 将第一个模板字符串渲染
        return render(template, data); // 递归的渲染并返回渲染后的结构
      }
      return template; // 如果模板没有模板字符串直接返回
    }
    ```

* 一行代码实现方式

    ```js
    function render(template, data) {
      return template.replace(new RegExp('{{(.*?)}}', 'g'), (match, key) => data[key.trim()]);
    }
    ```

##### 参考 

[一行代码实现一个简单的模板字符串替换](http://mp.weixin.qq.com/s/lHiyoZ4J-OsT6L1gg-xvwQ)


### Q: 字符串查找

请使用最基本的遍历来实现判断字符串 a 是否被包含在字符串 b 中，并返回第一次出现的位置（找不到返回 -1）。

例子：

```js
a='34';b='1234567'; // 返回 2
a='35';b='1234567'; // 返回 -1
a='355';b='12354355'; // 返回 5
isContain(a,b);
```

答案：

```js
function isContain(a, b) {
  for (let i in b) {
    if (a[0] === b[i]) {
      let tmp = true;
      for (let j in a) {
        if (a[j] !== b[~~i + ~~j]) {
          tmp = false;
        }
      }
      if (tmp) {
        return i;
      }
    }
  }
  return -1;
}
```

### Q：将一个任意长的数字变成逗号分割的格式

例子：

```js
parseToMoney(1234.56); // return '1,234.56'
parseToMoney(123456789); // return '123,456,789'
parseToMoney(1087654.321); // return '1,087,654.321'
```

### Q: 数据绑定最基本的实现

```js
// 实现一个方法，可以给 obj 所有的属性添加动态绑定事件，当属性值发生变化时会触发事件
let obj = {
  key_1: 1,
  key_2: 2
}
function func(key) {
  console.log(key + ' 的值发生改变：' + this[key]);
}
bindData(obj, func);
obj.key_1 = 2; // 此时自动输出 "key_1 的值发生改变：2"
obj.key_2 = 1; // 此时自动输出 "key_2 的值发生改变：1"
```

答：

```js
function bindData(obj, fn) {
  for (let key in obj) {
    Object.defineProperty(obj, key, {
      set(newVal) {
        if (this.value !== newVal) {
          this.value = newVal;
          fn.call(obj, key);
        }
      },
      get() {
        return this.value;
      }
    })
  }
}
```

### Q: 数据结构处理

有一个祖先树状 json 对象，当一个人有一个儿子的时候，其 child 为其儿子对象，如果有多个儿子，child 为儿子对象的数组。

请实现一个函数，找出这个家族中所有有多个儿子的人的名字（name），输出一个数组。

```js
// 样例数据
let data = {
  name: 'jack',
  child: [
    { name: 'jack1' },
    {
      name: 'jack2',
      child: [{
        name: 'jack2-1',
        child: { name: 'jack2-1-1' }
      }, {
        name: 'jack2-2'
      }]
    },
    {
      name: 'jack3',
      child: { name: 'jack3-1' }
    }
  ]
}
```

答案：

* 用递归

    ```js
    function findMultiChildPerson(data) {
      let nameList = [];

      function tmp(data) {
        if (data.hasOwnProperty('child')) {
          if (Array.isArray(data.child)) {
            nameList.push(data.name);
            data.child.forEach(child => tmp(child));
          } else {
            tmp(data.child);
          }
        }
      }
      tmp(data);
      return nameList;
    }
    ```

* 非递归

    ```js
    function findMultiChildPerson(data) {
      let list = [data];
      let nameList = [];

      while (list.length > 0) {
        const obj = list.shift();
        if (obj.hasOwnProperty('child')) {
          if (Array.isArray(obj.child)) {
            nameList.push(obj.name);
            list = list.concat(obj.child);
          } else {
            list.push(obj.child);
          }
        }
      }
      return nameList;
    }
    ```