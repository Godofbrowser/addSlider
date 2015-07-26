<?php
  header("X-Content-Type-Options: nosniff");
  header("Content-Type: text/css");
  include("../Convert.php");

  $size = 1;
  $primary = "#3366ff";
  extract($_GET);
?>
*[class^=addui-slider] {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.addui-slider-wrapper {
  display: block;
  margin: <?php psize($size, 20); ?>;
  margin-top: <?php psize($size, 40); ?>;
  height: <?php psize($size, 20); ?>;
}
.addui-slider-track {
  display: block;
  position: relative;
}
.addui-slider-bar {
  display: block;
  width: 100%;
  height: <?php psize($size, 2); ?>;
  background-color: #999999;
}
.addui-slider-handle {
  display: inline-block;
  height: <?php psize($size, 40); ?>;
  width: <?php psize($size, 40); ?>;
  position: absolute;
  top: -<?php psize($size, 19); ?>;
  border-radius: 99999px;
  z-index: 999;
  margin-left: -<?php psize($size, 20); ?>;
  transition: background 0.4s, box-shadow 0.4s;
  cursor: pointer;
}
.addui-slider-active .addui-slider-handle,
.addui-slider-activeMin .addui-slider-handle-min,
.addui-slider-activeMax .addui-slider-handle-max {
  background-color: <?php
    echo Format::rgba2css(Adjust::rgbaAlpha(Format::css2rgba($primary),-0.75));
  ?>;
  box-shadow:
    0 0 <?php psize($size, 10); ?> <?php
    echo Format::rgba2css(Adjust::rgbaAlpha(Format::css2rgba($primary),-0.75));
  ?>;
}
.addui-slider-handle::before {
  display: block;
  content: " ";
  width: <?php psize($size, 20); ?>;
  height: <?php psize($size, 20); ?>;
  background-color: <?php echo $primary; ?>;
  margin: <?php psize($size, 10); ?>;
  border-radius: 999999px;
}
.addui-slider-value {
  display: inline-block;
  height: <?php psize($size, 40); ?>;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
  transition: font 0.8s;
  position: absolute;
  top: -60%;
  left: 50%;
  transform: translateX(-50%);
}
.addui-slider-active .addui-slider-value,
.addui-slider-activeMin .addui-slider-handle-min .addui-slider-value,
.addui-slider-activeMin .addui-slider-handle-max .addui-slider-value,
.addui-slider-activeMax .addui-slider-handle-min .addui-slider-value,
.addui-slider-activeMax .addui-slider-handle-max .addui-slider-value {
  font-size: <?php psize($size, 18); ?>;
}
.addui-slider-activeBar {
  display: block;
  width: 0;
  height: <?php psize($size, 2); ?>;
  background-color: <?php echo $primary; ?>;
  max-width: 100%;
  position: absolute;
  box-shadow: 0 0 0 <?php echo $primary; ?>;
  transition: box-shadow 0.4s;
}
.addui-slider-active .addui-slider-activeBar,
.addui-slider-activeMin .addui-slider-activeBar,
.addui-slider-activeMax .addui-slider-activeBar {
  box-shadow: 0 0 <?php psize($size, 2); ?> <?php echo $primary; ?>;
}
