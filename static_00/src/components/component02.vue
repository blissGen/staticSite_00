<template>
  <div class="comp00">
    <p :style="styleObject00">{{ msg }}</p>
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
      }
    };
  }
};
</script>
