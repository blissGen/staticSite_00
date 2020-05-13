<template>
  <div class="comp00">
    <div :key="graphic()">
      <p :style="styleObject00">{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "component00",
  data: function() {
    return {
      msg: "sweet",

      styleObject00: {
        textAlign: "center",
        fontWeight: "thin"
      },
      graphic() {
        const script = p5 => {
          p5.setup = () => {
            let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
            canvas.position(0, 0);
            canvas.style("z-index", -1);
            canvas.style("display", "block");
            p5.background(0, 0, 0);
          };
          p5.windowResized = () => {
            p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
          };
        };
        const P5 = require("p5");
        new P5(script);
      }
    };
  }
};
</script>
