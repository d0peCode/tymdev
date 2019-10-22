import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  lang = 'javascript';
  content = "const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));\n" +
    "\n" +
    "setTimeout(() => console.log('1200ms elapsed'), 1200);\n" +
    "\n" +
    "const foo = () => {\n" +
    "    let intervalId;\n" +
    "    const intervalFunction = async() => {\n" +
    "        clearInterval(intervalId); //clear so it will not execute again after 100ms\n" +
    "        console.log('interval executed');\n" +
    "        await sleep(120); //some long action\n" +
    "        return intervalId = setInterval(intervalFunction, 100); //reassign id and start after sleep()\n" +
    "    };\n" +
    "    setInterval(intervalFunction, 100);\n" +
    "};\n" +
    "\n" +
    "foo();";
  content2 = "return intervalId = setInterval(intervalFunction, 100);";
  content3 = "function cancelableInterval(callback, ms, ...args) {\n" +
    "    let token = { cancelled: false };\n" +
    "    let running = false;\n" +
    "    async function wrapper(...args) {\n" +
    "        if (!running) {\n" +
    "            running = true;\n" +
    "            await callback(token, ...args);\n" +
    "            running = false;\n" +
    "        }\n" +
    "        if (!token.cancelled) {\n" +
    "            id = setTimeout(wrapper, ms, ...args);\n" +
    "        }\n" +
    "    }\n" +
    "    let id = setTimeout(wrapper, ms, ...args);\n" +
    "    return function cancel() {\n" +
    "        clearInterval(id);\n" +
    "        token.cancelled = true;\n" +
    "    }\n" +
    "}" +
    "\n" +
    "module.exports = cancelableInterval;";
  content4 = "const cancelableInterval = require('../dist/cancelableInterval');\n" +
    "const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));\n" +
    "\n" +
    "const foo = () => {\n" +
    "    const intervalFunction = async() => {\n" +
    "        console.log('interval executed');\n" +
    "        await sleep(120); //some long action\n" +
    "    };\n" +
    "    return cancelableInterval(intervalFunction, 100); //returning cancel()\n" +
    "};\n" +
    "\n" +
    "(() => {\n" +
    "    const cancellableIntervals = [];\n" +
    "    cancellableIntervals.push(foo());\n" +
    "\n" +
    "    setTimeout(() => {\n" +
    "        console.log(\"Cancelling 100ms interval with 120ms of async code runtime after 700ms.\");\n" +
    "        console.log(\"(100ms + 120ms) * 5 = 660ms so interval should run 3 times.\");\n" +
    "        cancellableIntervals.forEach(cancel => { cancel() });\n" +
    "    }, 700)\n" +
    "})();";


  constructor() { }

  ngOnInit() {
  }

}
