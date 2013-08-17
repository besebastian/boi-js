define([
    'ScreenMain',
    'SubscreenTest'
], function (
    ScreenMain,
    SubscreenTest
) {
    'use strict';

    function Renderer(canvas, width, height) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.screen = new ScreenMain(this.ctx);
        this.subscreen = null;
        this.inSubscreen = false;
        this.showFps = true;
        this.lastStep = new Date().getTime();
        this.fps = '--';
        this.frameCount = 0;

        this.canvas.width = width;
        this.canvas.height = height;

        this.clear();
    }

    Renderer.prototype.clear = function () {
        this.canvas.width = this.canvas.width;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();
    };

    Renderer.prototype.update = function () {
        if (this.inSubscreen) {
            this.subscreen.update();
        } else {
            this.screen.update();
        }
    };

    Renderer.prototype.draw = function () {
        this.clear();
        if (this.inSubscreen) {
            this.subscreen.draw();
        } else {
            this.screen.draw();
        }
        this.fpsCounter();
    };

    Renderer.prototype.test = function () {
        this.subscreen = new SubscreenTest(this.ctx);
        this.inSubscreen = true;
    };

    Renderer.prototype.untest = function () {
        this.inSubscreen = false;
        this.subscreen = null;
    };

    Renderer.prototype.pause = function () {
        this.clear();
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = '#fff';
        this.ctx.fillText('Paused', this.canvas.width / 2, this.canvas.height / 2);
    };

    Renderer.prototype.fpsCounter = function () {
        this.frameCount++;
        var now = new Date().getTime();
        var elapsed = (now - this.lastStep);

        if (elapsed >= 1000) {
            this.fps = this.frameCount;
            this.frameCount = 0;
            elapsed -= 1000;
            this.lastStep = now;
        }

        this.ctx.textAlign = 'left';
        this.ctx.fillStyle = '#fff';
        this.ctx.fillText(this.fps, 10, 20);
    };

    return Renderer;
});
