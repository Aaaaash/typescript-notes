// 元组
// 与数组不同的是，元组允许存在不同类型的对象

const xcatliu: [string, number] = ['data', 123];

// 如果赋值给越界的新元素时，类型会被限制为元组中每个类型的联合类型
let xcatliu2: [string, number];
xcatliu2 = ['sakura', 123, 'data']; // 第三项是联合类型

