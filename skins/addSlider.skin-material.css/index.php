<?php include("material.php"); ?>
*[class^=addui-slider] {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.addui-slider-wrapper {
  display: block;
  margin: <?php size(20);?>;
  margin-top: <?php size(40);?>;
  height: <?php size(20);?>;
}
.addui-slider-track {
  display: block;
  position: relative;
}
.addui-slider-bar {
  display: block;
  width: 100%;
  height: <?php size(2);?>;
  background: <?php o('disabled');?>;
}
.addui-slider-handle {
  display: inline-block;
  height: <?php size(40);?>;
  width: <?php size(40);?>;
  position: absolute;
  top: -<?php size(19);?>;
  border-radius: 99999px;
  z-index: 999;
  margin-left: -<?php size(20);?>;
  -webkit-transition: background 0.4s, box-shadow 0.4s;
  transition: background 0.4s, box-shadow 0.4s;
  cursor: pointer;
}
.addui-slider-active .addui-slider-handle,
.addui-slider-activeMin .addui-slider-handle-min,
.addui-slider-activeMax .addui-slider-handle-max {
  background-color: <?php
      $p = g('primary');
      $p = Adjust::cssAlpha($p, -0.75);
      echo $p;
    ?>;
  box-shadow:
    0 0 10px <?php echo $p; ?>;
}
.addui-slider-handle::before {
  display: block;
  content: " ";
  width: <?php size(20);?>;
  height: <?php size(20);?>;
  background-color: <?php o('primary');?>;
  margin: <?php size(10);?>;
  border-radius: 999999px;
}
.addui-slider-value {
  display: inline-block;
  height: <?php size(40);?>;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
  -webkit-transition: font 0.8s;
  transition: font 0.8s;
  position: absolute;
  top: -50%;
  left: 50%;
  color: <?php
    if(g('theme') == "dark")
      o('textLight');
    else
      o('textDark');
  ?>;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}
.addui-slider-active .addui-slider-value,
.addui-slider-activeMin .addui-slider-handle-min .addui-slider-value,
.addui-slider-activeMin .addui-slider-handle-max .addui-slider-value,
.addui-slider-activeMax .addui-slider-handle-min .addui-slider-value,
.addui-slider-activeMax .addui-slider-handle-max .addui-slider-value {
  font-size: <?php size(18);?>;
}
.addui-slider-activeBar {
  display: block;
  width: 0;
  height: <?php size(2);?>;
  background-color: <?php o('primary');?>;
  max-width: 100%;
  position: absolute;
  box-shadow: 0 0 0 <?php o('primary');?>;
  -webkit-transition: box-shadow 0.4s;
  transition: box-shadow 0.4s;
}
.addui-slider-active .addui-slider-activeBar,
.addui-slider-activeMin .addui-slider-activeBar,
.addui-slider-activeMax .addui-slider-activeBar {
  box-shadow: 0 0 2px <?php o('primary');?>;
}
