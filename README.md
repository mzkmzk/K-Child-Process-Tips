# K-Child-Process-Tips

# Install

```
npm install --save k-child-process-tips
```

# Use

```javascript
var child_process = require('k-child-process-tips'),
    child = child_process.spawn_tips('cp',args);
```

Output in console.log

```shell
k_cli -t Web

cp -r /Users/maizhikun/Learning/apache_sites/K-Cli/Template/Web ./
cp -r /Users/maizhikun/Learning/apache_sites/K-Cli/Template/Web ./ child process exited with code 0
```
