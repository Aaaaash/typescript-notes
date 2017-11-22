// 函数声明
function sum(x: number, y: number): number {
  return x + y;
}
sum(1,2);
//  函数参数必须按照约束传递，不能多或少

// 函数表达式
const mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
}
mySum(2,34);

// 接口描述函数
interface SearchFunc {
  (source: string, subString: string): boolean;
}

const myFunc: SearchFunc = function(source: string, sub: string) {
  return source === sub;
}

// 可选参数
// 可选参数必须是最后一个参数， 后面不能再出现必选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return `${firstName} ${lastName}`;
  }
  return firstName;
}

// 函数默认值
function buildFullName(firstName: string, lastName: string = 'Tom') {
  return `${firstName} ${lastName}`;
}

// 剩余参数（rest参数）
function composeArr(array: any[], ...items: any[]) {
  items.forEach((v) => {
    array.push(v);
  });
}
const a = [];
composeArr(a, 2,3,4,5,6,7,7);
