/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "450eef037c6727851153d0581ecaa7d8"
  },
  {
    "url": "assets/BuiltInComponents/1.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/BuiltInComponents/2.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/BuiltInComponents/3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/BuiltInComponents/4.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/complie/1.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/complie/2.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/complie/3.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/complie/4.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/complie/5.png",
    "revision": "8af3217e7f462450e406a466cf3c98a3"
  },
  {
    "url": "assets/complie/6.png",
    "revision": "b5792c464900e4fdf5f626688d79b61a"
  },
  {
    "url": "assets/complie/7.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/complie/8.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/css/0.styles.75e8a466.css",
    "revision": "1bb69ceb4fc9513bcdf7bcd573a4e6e8"
  },
  {
    "url": "assets/filter/1.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/filter/2.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/filter/3.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/filter/4.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/1.4fa9d829.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/img/1.6ca41eec.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/img/1.6e1e57be.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/img/1.86404441.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/img/1.a052465d.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/img/1.db8412c9.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/img/1.ec40be4a.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/img/1.f0570125.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/img/10.cf98adc0.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/img/11.2ddb5ee5.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/img/12.bace2f7f.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/img/13.98dbc208.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/img/14.18c1c6dd.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/img/15.e9bdf5c1.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/img/2.02d5c7b1.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/img/2.3828fb66.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/img/2.5596631a.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/img/2.8743140f.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/img/2.b446ab83.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/img/2.f2c26398.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/img/3.0b99330d.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/img/3.15d9566b.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/img/3.7b0442aa.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/img/3.8d0dc6f5.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/img/3.bfadecb3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/img/3.ec8d7d03.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/img/4.16462ada.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/img/4.6a76bb54.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/img/4.8fba6173.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/4.97ae2a0a.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/img/4.cb62f1aa.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/img/5.bcb4dcee.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/img/5.e43324ab.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/img/6.4c45da1c.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/img/6.b9621b4d.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/img/7.057d7609.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/img/7.6ca1dbf0.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/img/7.810540a5.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/img/8.ad277be0.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/img/8.e4c85c40.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/img/9.e017b452.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/instanceMethods/1.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/js/10.f6be2cad.js",
    "revision": "151c0ef227035d93eb3921f2c32260af"
  },
  {
    "url": "assets/js/11.9a0cc1b3.js",
    "revision": "b92e0941d450309c4d589b04d5adb1dd"
  },
  {
    "url": "assets/js/12.797071f7.js",
    "revision": "83890f5e74c76ca68f8ba13f52cf3a18"
  },
  {
    "url": "assets/js/13.38c49676.js",
    "revision": "473faf726af2c05dd9b7a1090dea769d"
  },
  {
    "url": "assets/js/14.87fa8030.js",
    "revision": "f47b0323bfd60360b57532ee2bdc625c"
  },
  {
    "url": "assets/js/15.9aaa19fc.js",
    "revision": "5dd89ce4b655c9e1c9a68270e170b0f6"
  },
  {
    "url": "assets/js/16.00fca7d2.js",
    "revision": "e55c2093641a0ad8a1a8f80df22b84b0"
  },
  {
    "url": "assets/js/17.19a4b127.js",
    "revision": "f46c3ae6a9bc3cb01977883aed14f83d"
  },
  {
    "url": "assets/js/18.7ce745ba.js",
    "revision": "c90d828b1e08990e01a4d0d2df918e2b"
  },
  {
    "url": "assets/js/19.5df98c79.js",
    "revision": "26c49e3ba79ba778110ccafa81aba619"
  },
  {
    "url": "assets/js/2.3e792822.js",
    "revision": "1b46daf22ebd8887f2e361069d11dce1"
  },
  {
    "url": "assets/js/20.29e3ba30.js",
    "revision": "a4f0a21f62284d02c4b9f6dd638c74b2"
  },
  {
    "url": "assets/js/21.e1c50da3.js",
    "revision": "b0b7e72f7eed15a1ae894c57a133733b"
  },
  {
    "url": "assets/js/22.a36d5038.js",
    "revision": "430d2cccae0c19c74c0e231e43e89d5b"
  },
  {
    "url": "assets/js/23.adfd96bc.js",
    "revision": "2571c0d6bfec6183529a118da846ec97"
  },
  {
    "url": "assets/js/24.1e7e5724.js",
    "revision": "7ad225eb26c36acab24f1371096aa6fd"
  },
  {
    "url": "assets/js/25.9436fca7.js",
    "revision": "1cb551be1b080c006ca12893e791a8d8"
  },
  {
    "url": "assets/js/26.ce085632.js",
    "revision": "163fceae84e61a760394d612f4259528"
  },
  {
    "url": "assets/js/27.91a8f43d.js",
    "revision": "2f18bb70cc16906fc5370793682dc1bc"
  },
  {
    "url": "assets/js/28.671fbf4f.js",
    "revision": "714fa5ab29be6aae9c7e3e2c40f3f612"
  },
  {
    "url": "assets/js/29.07ed1e5a.js",
    "revision": "330bd31e9fcf0f2901909633cfb84d57"
  },
  {
    "url": "assets/js/3.68722fa0.js",
    "revision": "4aa4eef5dbf2686516a7ddfb862a8c4a"
  },
  {
    "url": "assets/js/30.265b4edd.js",
    "revision": "202b87b7aec37c0535332931ded23b40"
  },
  {
    "url": "assets/js/31.91d8fa40.js",
    "revision": "36d618930e5a6be24c9740ccaa6ef95b"
  },
  {
    "url": "assets/js/32.8d1b36e6.js",
    "revision": "e67970fb6593438c1abd296583f41267"
  },
  {
    "url": "assets/js/33.7b973ebb.js",
    "revision": "b9f0eb7e4b39c426613b284883faa1f2"
  },
  {
    "url": "assets/js/34.4d0a057f.js",
    "revision": "6e2d07a7097c201ba4e8e1f80e2e7336"
  },
  {
    "url": "assets/js/35.202820f2.js",
    "revision": "8c5c138ae83cf9654863e944e047201e"
  },
  {
    "url": "assets/js/36.2ad53456.js",
    "revision": "300ec922c88fe2b3fac53c8d945087db"
  },
  {
    "url": "assets/js/37.a6ebc7b1.js",
    "revision": "157b0899aa550d9de841f7d0952c1895"
  },
  {
    "url": "assets/js/38.8c41e342.js",
    "revision": "f6280539c4ec99215d625058cc82ad15"
  },
  {
    "url": "assets/js/39.180a8774.js",
    "revision": "c6c4e22959c4c0f547484047783b15ff"
  },
  {
    "url": "assets/js/4.f7e69784.js",
    "revision": "3cc5e360973bce689326fd045475f0aa"
  },
  {
    "url": "assets/js/40.2e9b9ac7.js",
    "revision": "2b04417a92323081b34b7b470e801a68"
  },
  {
    "url": "assets/js/5.92eb9d19.js",
    "revision": "df4d5eb4dc4999294452a5da0f6eb574"
  },
  {
    "url": "assets/js/6.ce738e16.js",
    "revision": "84f875c7c014866625f8c7320ea4ab6b"
  },
  {
    "url": "assets/js/7.3c0a5da0.js",
    "revision": "722b0e9bdae7db24ad72f780b2b5e20f"
  },
  {
    "url": "assets/js/8.668cf86e.js",
    "revision": "5ab0abbe7a9970e3b4a2b112e4df67a4"
  },
  {
    "url": "assets/js/9.1ee6de16.js",
    "revision": "ee461d6669f6be00da86fb73dbcc1671"
  },
  {
    "url": "assets/js/app.034568ee.js",
    "revision": "60796eda478140dfe4eadb580f96882d"
  },
  {
    "url": "assets/lifecycle/1.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/lifecycle/2.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/lifecycle/3.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/lifecycle/4.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/lifecycle/5.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/lifecycle/6.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/lifecycle/7.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/reactive/1.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/reactive/2.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/reactive/3.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/start/1.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/virtualDOM/1.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/virtualDOM/10.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/virtualDOM/11.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/virtualDOM/12.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/virtualDOM/13.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/virtualDOM/14.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/virtualDOM/15.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/virtualDOM/2.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/virtualDOM/3.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/virtualDOM/4.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/virtualDOM/5.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/virtualDOM/6.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/virtualDOM/7.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/virtualDOM/8.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/virtualDOM/9.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "BuiltInComponents/keep-alive.html",
    "revision": "03c00fce520da1c536ec3707e4c90df8"
  },
  {
    "url": "complie/codegen.html",
    "revision": "07a406d49ad7c15287d905d4534579e1"
  },
  {
    "url": "complie/HTMLParse.html",
    "revision": "c4c953f01a4d1c902e4fc828c9e8e6ed"
  },
  {
    "url": "complie/index.html",
    "revision": "31b605656e4e9fb540976fc2b34ef8d8"
  },
  {
    "url": "complie/optimize.html",
    "revision": "fe6f40ae4d6403e304da7fb7a1c4bb72"
  },
  {
    "url": "complie/parse.html",
    "revision": "f2f5043b0b3293b9afa01ca0ece93114"
  },
  {
    "url": "complie/summary.html",
    "revision": "90dfd8a784c69a742b55244ae7b1e06e"
  },
  {
    "url": "complie/textParse.html",
    "revision": "91d7623e32721e4cbc8206fbb8514d39"
  },
  {
    "url": "directives/customDirectives.html",
    "revision": "42aa21c3d1067180eea538baac8d1cbd"
  },
  {
    "url": "filter/filterPrinciple.html",
    "revision": "07e629453763ba3facf1dab196a6ecb7"
  },
  {
    "url": "filter/index.html",
    "revision": "f7b31ade5f1f3db60bf6d35bff71b612"
  },
  {
    "url": "filter/parseFilters.html",
    "revision": "574b31072f7485d2181a004428826940"
  },
  {
    "url": "globalAPI/index.html",
    "revision": "794a457f1c1ac7e1a03107befbeab61a"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "b60788a71cdc34f0ea905e30744937da"
  },
  {
    "url": "instanceMethods/data.html",
    "revision": "e70607a793f640611a9a74fd7538a608"
  },
  {
    "url": "instanceMethods/event.html",
    "revision": "138bee2de1f2012235ec2d46a5a06cdf"
  },
  {
    "url": "instanceMethods/lifecycle.html",
    "revision": "c1570ccaf4ede5219704032b52075550"
  },
  {
    "url": "lifecycle/destory.html",
    "revision": "6850f80ba9c3b31af5a95aaf58fa6c3d"
  },
  {
    "url": "lifecycle/index.html",
    "revision": "bf7798ee11e14c39d6d9f68820226c5d"
  },
  {
    "url": "lifecycle/initEvents.html",
    "revision": "15b538cb1bf36dfea296ef724e9a64eb"
  },
  {
    "url": "lifecycle/initInjections.html",
    "revision": "8f6199f7ee0de88435e35962e0d21cc2"
  },
  {
    "url": "lifecycle/initLifecycle.html",
    "revision": "a6dd6e82853d491e8dd8ff9905392603"
  },
  {
    "url": "lifecycle/initState.html",
    "revision": "1a68bad0f4e01917621b84082c5fef1e"
  },
  {
    "url": "lifecycle/mount.html",
    "revision": "fe947eeb8f108927724a2a17e8a2906d"
  },
  {
    "url": "lifecycle/newVue.html",
    "revision": "2ba1a89ff5c70d5456b66921b2d247fc"
  },
  {
    "url": "lifecycle/templateComplie.html",
    "revision": "f6c426f09eb5c139c682bc7dd0aab984"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "reactive/array.html",
    "revision": "22771a74a38857778f907d2d1e86765b"
  },
  {
    "url": "reactive/index.html",
    "revision": "a454b2191292b9612d7fe3a733cde715"
  },
  {
    "url": "reactive/object.html",
    "revision": "d1c2b93e178f31cf4f35f077158defcf"
  },
  {
    "url": "start/index.html",
    "revision": "031585f04a660f4d437fceda6d1a5a30"
  },
  {
    "url": "virtualDOM/index.html",
    "revision": "e9208a28c6a77a7a13a207a6662b4644"
  },
  {
    "url": "virtualDOM/optimizeUpdataChildren.html",
    "revision": "c2080bc1bfce4ac962d92c7e829f5a26"
  },
  {
    "url": "virtualDOM/patch.html",
    "revision": "e4bf75fa09d3b3d36114d6d2c0f8decd"
  },
  {
    "url": "virtualDOM/updataChildren.html",
    "revision": "1e2acf64b288afc5869348fe39058c28"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
