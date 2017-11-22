// 类型断言
// 联合类型中，需要在不确定类型时就访问一个属性
function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  }
  return something.toString().length;
}

// 使用typescript编写react时，tsx文件中换一种写法
function getLengthTsx(something: string | number): number {
  if ((something as string).length) {
    return (something as string).length;
  }
  return something.toString().length;
}
