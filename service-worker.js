if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const f=e=>a(e,c),b={module:{uri:c},exports:r,require:f};s[c]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(i(...e),r)))}}define(["./workbox-2572b17b"],(function(e){"use strict";e.setCacheNameDetails({prefix:"cg教程"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.3fad6553.js",revision:"b2843f2c3a0e93023712660d669a9087"},{url:"assets/404.html.0c8252b8.js",revision:"d64b20567ce888f90e08ec9acbdd81f9"},{url:"assets/404.html.a8e3cb07.js",revision:"8dbd2edabdabe6bc3d8d4c10677ba8b3"},{url:"assets/app.6c625c2b.js",revision:"a37541186ec2e67dbf7f2b2a7b93847b"},{url:"assets/blender-models.html.0f74bda9.js",revision:"e6907e7d529b99400534e1f7c4c60285"},{url:"assets/blender-models.html.3076b64e.js",revision:"a47b7c03ab8c334310f2820d2d552c10"},{url:"assets/blender-use-mmd.html.529a1fb7.js",revision:"a68557a14ce6cb6792282be296c0bfe6"},{url:"assets/blender-use-mmd.html.dc0950f1.js",revision:"7e3c1de6f5c9f9218d2e56759698765f"},{url:"assets/index.html.01446c68.js",revision:"28ffde3322ed88a6c35501a5c2a862f0"},{url:"assets/index.html.57dfd697.js",revision:"b8df9c931d77d312d672fa8c8039ea04"},{url:"assets/index.html.73f55bba.js",revision:"acf4b6ae2738bd1a60a2fed186cca941"},{url:"assets/index.html.7ded692c.js",revision:"e135b217c9c5366e24b056084c2afb79"},{url:"assets/index.html.9bc97fd7.js",revision:"0d50bd9a22be83adb0e9a5e5e331bf4f"},{url:"assets/index.html.9dee4544.js",revision:"41510453ce975301ef5f265e881a6e0f"},{url:"assets/index.html.b9b25d02.js",revision:"da0d44ef452b69b9ec9c1161e537d3aa"},{url:"assets/index.html.c3549c2f.js",revision:"afec7719905f2b8c3432d402a2473d28"},{url:"assets/install.html.97fe9efb.js",revision:"d836076d85a12f1bb9987f6773b90738"},{url:"assets/install.html.f9badb97.js",revision:"626d944b3d4ab13e234f0580343f925e"},{url:"assets/Layout.22031124.js",revision:"da9d0d43ebc891f5f2b2c4952dc68c4e"},{url:"assets/mikumiku-dance.html.0e0198f1.js",revision:"c5d3300d1a928c1d728e35eef7428603"},{url:"assets/mikumiku-dance.html.5fb961e8.js",revision:"1d5556a0ac57304202ec468e1bfcfc10"},{url:"assets/opensource.html.950cc658.js",revision:"f855cd2978be9c77a09b50a4814c0025"},{url:"assets/opensource.html.f8c3cbcf.js",revision:"656a3c7da36be071c3198a12fc0ce2da"},{url:"assets/photoswipe.esm.965d151d.js",revision:"9e0eb403fc1eac1e87a246dae12858a1"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/plugins.html.3d3121f9.js",revision:"149c51cf72be948bbdac3cf9319fb4c8"},{url:"assets/plugins.html.b1b7df11.js",revision:"69a3898e276a5c53defeba09d84fc1c5"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/sites.html.5e2859d6.js",revision:"e3b4aaef1e6dae14fe85158dc770809a"},{url:"assets/sites.html.65e7b442.js",revision:"145401e3d9b52ae05af5eb2c47b0b923"},{url:"assets/SkipLink.1a454cb4.js",revision:"36a13e6135f6b88ae68df916852aec3c"},{url:"assets/style.a69d68b0.css",revision:"6321070d39f2a3df6d03c216de123bae"},{url:"images/logo.svg",revision:"7b551407c4a324dbbfdbd50030edf33a"},{url:"index.html",revision:"4e5ff79ef17b0f5eb9fefd41b8f21168"},{url:"404.html",revision:"f087c43a04a44a26d68aff9f4e72eb77"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
