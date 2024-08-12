// import { run } from './dist/index.es.js';
import { run } from './src/index.js';

// 输入表达式
// const input = 'if(8>9){1}else if(1>1){2}else if(2>=2){0}else{-1}';
// const input = 'max(if((3-3)*6>5){1}else{-1},-2)';
const input = '10 > 9 ? 1 : -1';

console.log(run(input));
