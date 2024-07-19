function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./scene00002.png
     ./scene00003.png
     ./scene00004.png
     ./scene00005.png
     ./scene00006.png
     ./scene00007.png
     ./scene00008.png
     ./scene00009.png
     ./scene00010.png
     ./scene00011.png
     ./scene00012.png
     ./scene00013.png
     ./scene00014.png
     ./scene00015.png
     ./scene00016.png
     ./scene00017.png
     ./scene00018.png
     ./scene00019.png
     ./scene00020.png
     ./scene00021.png
     ./scene00022.png
     ./scene00023.png
     ./scene00024.png
     ./scene00025.png
     ./scene00026.png
     ./scene00027.png
     ./scene00028.png
     ./scene00029.png
     ./scene00030.png
     ./scene00031.png
     ./scene00032.png
     ./scene00033.png
     ./scene00034.png
     ./scene00035.png
     ./scene00036.png
     ./scene00037.png
     ./scene00038.png
     ./scene00039.png
     ./scene00040.png
     ./scene00041.png
     ./scene00042.png
     ./scene00043.png
     ./scene00044.png
     ./scene00045.png
     ./scene00046.png
     ./scene00047.png
     ./scene00048.png
     ./scene00049.png
     ./scene00050.png
     ./scene00051.png
     ./scene00052.png
     ./scene00053.png
     ./scene00054.png
     ./scene00055.png
     ./scene00056.png
     ./scene00057.png
     ./scene00058.png
     ./scene00059.png
     ./scene00060.png
     ./scene00061.png
     ./scene00062.png
     ./scene00063.png
     ./scene00064.png
     ./scene00065.png
     ./scene00066.png
     ./scene00067.png
     ./scene00068.png
     ./scene00069.png
     ./scene00070.png
     ./scene00071.png
     ./scene00072.png
     ./scene00073.png
     ./scene00074.png
     ./scene00075.png
     ./scene00076.png
     ./scene00077.png
     ./scene00078.png
     ./scene00079.png
     ./scene00080.png
     ./scene00081.png
     ./scene00082.png
     ./scene00083.png
     ./scene00084.png
     ./scene00085.png
     ./scene00086.png
     ./scene00087.png
     ./scene00088.png
     ./scene00089.png
     ./scene00090.png
     ./scene00091.png
     ./scene00092.png
     ./scene00093.png
     ./scene00094.png
     ./scene00095.png
     ./scene00096.png
     ./scene00097.png
     ./scene00098.png
     ./scene00099.png
     ./scene00100.png
     ./scene00101.png
     ./scene00102.png
     ./scene00103.png
     ./scene00104.png
     ./scene00105.png
     ./scene00106.png
     ./scene00107.png
     ./scene00108.png
     ./scene00109.png
     ./scene00110.png
     ./scene00111.png
     ./scene00112.png
     ./scene00113.png
     ./scene00114.png
     ./scene00115.png
     ./scene00116.png
     ./scene00117.png
     ./scene00118.png
     ./scene00119.png
     ./scene00120.png
     ./scene00121.png
     ./scene00122.png
     ./scene00123.png
     ./scene00124.png
     ./scene00125.png
     ./scene00126.png
     ./scene00127.png
     ./scene00128.png
     ./scene00129.png
     ./scene00130.png
     ./scene00131.png
     ./scene00132.png
     ./scene00133.png
     ./scene00134.png
     ./scene00135.png
     ./scene00136.png
     ./scene00137.png
 `;
  return data.split("\n")[index];
}

const frameCount = 137;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `.page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: ".page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to(".page1",{
  scrollTrigger:{
    trigger:`.page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to(".page2",{
  scrollTrigger:{
    trigger:`.page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to(".page3",{
  scrollTrigger:{
    trigger:`.page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})

Shery.hoverWithMediaCircle(".page4" , {
  images: ["./images/daytona.jpg"],
  debug: true,
  gooey: true,
});