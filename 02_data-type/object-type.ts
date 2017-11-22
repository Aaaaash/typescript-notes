// 对象接口 用于描述对象的数据结构
interface Person {
  name: string;
  age: number;
}

const sakura: Person = {
  name: 'sakura',
  age: 20,
}

// 缺少age属性
const misaka: Person = {
  name: 'misaka',
}

// 多一个属性
const mikoto: Person = {
  name: 'mikoto',
  age: 11,
  gender: 'male',
}

// 对象赋值时，内部的属性必须和接口的定义保持一致


// 可选属性  类型前加?
interface Chinese {
  name: string;
  language?: string;
}

// language属性可选
const wangmazi: Chinese = {
  name: 'wangmazi',
}

// name属性必要
const zhangergou: Chinese = {
  language: 'chinese',
}


// 任意属性
// 接口中使用[]包裹propName表示接受string类型的属性名的任意值
interface EarthPeople {
  name: string;
  age?: number;
  [propName: string]: any;
}

// 定义任意属性后，确定属性和可选属性必须是它的子属性
const jack: EarthPeople = {
  name: 'jack',
  age: 22,
  gender: 'man',
}


// 只读属性
// 接口中属性名前添加readonly表示只读属性
interface Janpenes {
  readonly id: number,
  name: string,
  age: number,
}

const misakaMikoto: Janpenes = {
  id: 123,
  name: 'mikoto',
  age: 22,
}
