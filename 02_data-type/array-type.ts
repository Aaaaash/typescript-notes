// 数组表示方式
const fibonacci: number[] = [1,2,3,4,5];

// 数组项中不能出现其他类型
const fibbonacci2: number[] = [1,2,3,4,'4'];

// 数组泛型
// 定义函数、接口活类的时候，不预先指定具体的类型，使用时再指定
const fibonacci3: Array<number> = [1,2,3,4,5];

// 接口描述数组
interface NumberArray {
  [index: number]: number;
}

const fibonacciArr: NumberArray = [1,2,3,45,];

// 数组中出现任意类型
const list: any[] = ['skura', 12, 'misaka'];

// 伪数组
// 包括 IArguments    NodeList    HTMLCollection
function sum(): void {
  // 函数参数anguments是类数组
  const args: IArguments = arguments;
}
