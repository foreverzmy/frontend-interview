let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}

console.log(render(template, data));

function render(template, data) {
  return template.replace(new RegExp('{{(.*?)}}', 'g'), (match, key) => data[key.trim()]);
}