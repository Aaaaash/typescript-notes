// 支持es标准内置对象
const a: Boolean = new Boolean(1);
const b: Error = new Error('error occurred');
const c: Date = new Date();
const d: RegExp = /[a-z]/;

// 支持DOM和BOM对象
const body: HTMLElement = document.body;
const allDiv: NodeList = document.querySelectorAll('div');

document.addEventListener('click', (e: MouseEvent) => {
  
});

  
document.addEventListener('keypress', (e: KeyboardEvent) => {

});
