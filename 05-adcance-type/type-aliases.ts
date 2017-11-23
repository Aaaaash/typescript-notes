// 类型别名  用来给一个类型起一个新的名字
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

// 接受一个类型为NameOrResolver的参数  返回Name类型的值
function getName(n: string): Name {
  if (typeof n === 'string') {
    return n;
  }
  return n();
}
