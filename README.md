# webgl-example

[![Build Status](https://github.com/gandis0713/webgl-example/workflows/Build%20and%20Test/badge.svg)](https://github.com/gandis0713/webgl-example/workflows/Build%20and%20Test/badge.svg)
![npm-download](https://img.shields.io/npm/dm/webgl-example.svg)
![npm-version-requirement](https://img.shields.io/badge/npm-6.14.10-brightgreen.svg)
![yarn-version-requirement](https://img.shields.io/badge/>=yarn-1.22.0-brightgreen.svg)
![node-version-requirement](https://img.shields.io/badge/node-14.15.4-brightgreen.svg)

Introduction
============

webgl-example is an open source for implementing basic examples such as 3D Rendering, Image Processing, Light Effect, etc. It started for easily apply to a blog or web site.


Requirements
============
- Node 14.15.4
- NPM 6.14.10
- YARN 1.22.0+


Concept
=======

webgl-example has a very simple structure and has three representative components.
- **Renderer** is responsible that rendering objects.
- **Action** is responsible that for user interaction and control a view(**Renderer**) and objects.
- **Window** has a renderer and an action, provides function APIs to the user.

How to use
==========
- **Package Manager**
~~~shell
$ npm i webgl-example
~~~
~~~Javascript
import SharpenImageWindow from 'webgl-example/src/rendering/window/SharpenImageWindow';

const imageWindow = new SharpenImageWindow(HTMLElement);
const image = new Image();
image.src = "<Image resource address>";
image.addEventListener('load', function() {
    imageWindow.setImage(image);
});
~~~

- **Bundle**
~~~HTML
<script src="./webgl-example.bundle.js"></script>
<script>
    window.addEventListener('load', function() {
        const divElement = document.getElementById("divElement");
        const imageWindow = new webglexample.rendering.window.EdgeImageWindow(divElement);
        const image = new Image();
        image.src = "<Image resource address>";
        image.addEventListener('load', function() {
            imageWindow.setImage(image);
        });
    });
</script>
<body>
    <div id="divElement"></div>
</body>
~~~
Configure
=========
- Webpack
~~~webpack
rules: [
    {
        test: /\.glsl$/,
        use: [ 'shader-loader' ]
    },
]
~~~

Examples
========
- [Image Processing](https://github.com/gandis0713/webgl-example/tree/master/examples/image)

