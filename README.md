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

webgl-example has a very simple structure and has two representative components.
- Renderer
- RenderWindow
The Renderer is responsible for the task related to drawing.
Thre RenderWindow is responsible for user interaction and provides an API to the user.

How to use
==========
- Package Manager
~~~cmd
$ npm install webgl-example
~~~
 - HTML
 ~~~HTML
 <script src="../../dist/webgl-example.js"></script>
<script>
    const SharpenImageWindow = webglexample.default.rendering.core.window.SharpenImageWindow;
    window.addEventListener('load', function() {
        const container = document.getElementById("gl_container");
        const imageWindow = new SharpenImageWindow(container);
        imageWindow.initialize(500, 500);
        const image = new Image();
        image.src = "<Image resource address>";
        image.addEventListener('load', function() {
            imageWindow.setImage(image);
        });
    });
</script>
<body>
    <div id="gl_container" style="width: 100%"></div>
</body>
 ~~~

