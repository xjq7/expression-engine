import { run } from './src/index.js';

// 输入表达式
const input = 'if(add(1+2*1,max(3,4))>9){1}else if(1>=1){0}else{-1}';

console.log(run(input));
