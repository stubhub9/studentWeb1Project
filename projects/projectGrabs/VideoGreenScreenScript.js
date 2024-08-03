"use strict"

const processor = {};

processor.doLoad = function doLoad() {
  const vid1 = document.getElementById("vid1");
  this.vid1 = vid1;

  this.canvas1 = document.getElementById("canvas1");
  this.ctx1 = this.canvas1.getContext("2d");

  this.canvas2 = document.getElementById("canvas2");
  this.ctx2 = this.canvas2.getContext("2d");

  vid1.addEventListener(
    "play",
    () => {
      this.width = video.videoWidth / 2;
      this.height = video.videoHeight / 2;
      this.timerCallback();
    },
    false,
  );
};

  processor.computeFrame = function () {
    this.ctx1.drawImage(this.vid1, 0, 0, this.width, this.height);
    const frame = this.ctx1.getImageData(0, 0, this.width, this.height);
    const data = frame.data;
  
    for (let i = 0; i < data.length; i += 4) {
      const red = data[i + 0];
      const green = data[i + 1];
      const blue = data[i + 2];
      if (green > 100 && red > 100 && blue < 43) {
        data[i + 3] = 0;
      }
/*      if (green > 100 && red > 100 && blue < 43) {
        data[i + 3] = 0;
      }*/
    }
    this.ctx2.putImageData(frame, 0, 0);
  };

  processor.timerCallback = function timerCallback() {
      if (this.vid1.paused || this.vid1.ended) {
        return;
      }
      this.computeFrame();
      setTimeout(() => {
        this.timerCallback();
      }, 0);
    };