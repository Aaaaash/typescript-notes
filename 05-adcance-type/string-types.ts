//  字符串字面量类型  约束取值只能是某几个字符串中的一个
type EventNames = 'click' | 'scroll' | 'mousemove';

function handleEvent(ele: Element, event: EventNames) {
  // 
}

handleEvent(document.body, 'scroll');
// 取值只能是EventNames约束的其中一个
handleEvent(document.body, 'dbclick');
