// 基本类型布尔值
const isDone: boolean = false;

// Boolean类型的对象
const isDoneBool: Boolean = new Boolean(1);

// 用Boolean对象返回的boolean类型
const isDonebool: boolean = Boolean(1);

// 数值
const decliteral: number = 5;
const binary: number = 0b1010;
const octal: number = 0o744;
const NaNval: number = NaN;

// 字符
const myName: string = 'sakura';
const aboutme: string = `my name is ${myName}, i am sony dog`;

// 空值
function printName(): void {
  console.log('My name is Sakura');
}

let u: undefined;
const num: number = u;

// 任意值
let myNickName: string = 'sakura';
myNickName = 2;

// 可以被赋值为任意类型
let myRealName: any = 'misaka';
myRealName = 9527;

// 声明时未指定类型 将被识别为任意值
let something;
something = 'skaura';
something = 5;

// 联合类型
const myUnion: string | number = 'sakura';

// 类型不属于string和number二者之一
let unionIsErr: string | number = 'misaka';
unionIsErr = true;
