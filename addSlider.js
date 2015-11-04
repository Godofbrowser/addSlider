Number.prototype.round2nearest=function(x){return Math.round(this/x)*x;};
Number.prototype.decimalPlaces=function(){
  var match=(''+this).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if(!match){return0;}
  return Math.max(0,(match[1]?match[1].length:0)-(match[2]?+match[2]:0));
};
if($add==undefined)var $add={version:{},auto:{disable:false}};
$add.version.Dragging="1.2.2",$add.Dragging=function(selector,settings){function toFunc(str){return"function"==typeof str?str:void 0!==window[str]&&"function"==typeof window[str]?window[str]:function(){eval(str)}}function clone(t){var e={};for(var a in t)e[a]=t[a];return e}if(void 0===selector||0==$(selector).size())return!1;var defaults={handle:!1,move:!0,direction:"both",bound:!1,snap:!1,onstart:function(){},ondrag:function(){},onend:function(){},onready:function(){}};$(selector).each(function(t,e){function a(t){if($(document).on("mousemove touchmove",o),$(document).on("mouseup touchend",n),"mousedown"==t.type)d.start={page:{x:t.pageX,y:t.pageY},offset:{x:t.offsetX,y:t.offsetY},timestamp:t.timeStamp},d.type="mouse";else if("touchstart"==t.type){var a=i.offset();d.start={page:{x:t.originalEvent.touches[0].pageX,y:t.originalEvent.touches[0].pageY},offset:{x:t.originalEvent.touches[0].pageX-a.left,y:t.originalEvent.touches[0].pageY-a.top},timestamp:t.originalEvent.timeStamp},d.type="touch"}if(d.start.left=i.css("left"),d.start.left="auto"==d.start.left?0:parseFloat(d.start.left),d.start.top=i.css("top"),d.start.top="auto"==d.start.top?0:parseFloat(d.start.top),d.movements=[],d.delta={x:0,y:0},e.settings.bound){var s=i.parent(),r=s.offset();d.bound={min:{x:r.left-i.offset().left+d.start.left+parseFloat(s.css("border-left-width")),y:r.top-i.offset().top+d.start.top+parseFloat(s.css("border-top-width"))},max:{x:r.left-i.offset().left+d.start.left+s.outerWidth()-i.outerWidth()-parseFloat(s.css("border-right-width")),y:r.top-i.offset().top+d.start.top+s.outerHeight()-i.outerHeight()-parseFloat(s.css("border-bottom-width"))}}}toFunc(e.settings.onstart).call(e,d)}function o(t){var a={};if("mousemove"==t.type?a={x:d.start.page.x-t.pageX,y:d.start.page.y-t.pageY,timeStamp:t.timeStamp}:"touchmove"==t.type&&(a={x:d.start.page.x-t.originalEvent.touches[0].pageX,y:d.start.page.y-t.originalEvent.touches[0].pageY,timeStamp:t.originalEvent.timeStamp}),0==d.movements.length)a.deltaX=a.x,a.deltaY=a.y,a.deltaTime=a.timeStamp-d.start.timestamp;else{var o=d.movements[d.movements.length-1];a.deltaX=a.x-o.x,a.deltaY=a.y-o.y,a.deltaTime=a.timeStamp-o.timeStamp}a.delta=Math.sqrt(Math.pow(a.deltaX,2)+Math.pow(a.deltaY,2)),a.speed=parseFloat((a.delta/(a.deltaTime/1e3)).toFixed(2)),d.movements.push(a),d.distance=Math.round(Math.sqrt(Math.pow(a.x,2)+Math.pow(a.y,2))),d.delta.x=a.x,d.delta.y=a.y,d.delta.time=a.timeStamp-d.start.timestamp,d.speed=parseFloat((d.distance/(d.delta.time/1e3)).toFixed(2)),d.direction="horizontal"==e.settings.direction||"both"==e.settings.direction&&Math.abs(d.delta.x)>Math.abs(d.delta.y)?d.delta.x>0?"left":"right":d.delta.y>0?"up":"down",e.settings.move&&s(),toFunc(e.settings.ondrag).call(e,d),t.preventDefault()}function n(t){$(document).off("mousemove touchmove",o),$(document).off("mouseup touchend",n),toFunc(e.settings.onend).call(e,d),t.preventDefault()}function s(){if(e.settings.move){var t=d.delta.x+2*-d.delta.x+d.start.left,a=d.delta.y+2*-d.delta.y+d.start.top;e.settings.snap&&(t=t.round2nearest(parseFloat(e.settings.snap)),a=a.round2nearest(parseFloat(e.settings.snap))),e.settings.bound&&(t<d.bound.min.x&&(t=d.bound.min.x),a<d.bound.min.y&&(a=d.bound.min.y),t>d.bound.max.x&&(t=d.bound.max.x),a>d.bound.max.y&&(a=d.bound.max.y)),"horizontal"==e.settings.direction&&(a=d.start.top),"vertical"==e.settings.direction&&(t=d.start.left),i.css({position:"relative",left:t,top:a,zIndex:999}),d.position={left:t,top:a}}}var i=$(e);if(!i.hasClass("addui-dragging")){e.settings=$.extend(defaults,settings,i.data()),i.addClass("addui-dragging");var d={settings:e.settings};e.settings.handle===!1?i.addClass("addui-dragging-handle").on("mousedown touchstart",a):i.find(e.settings.handle).addClass("addui-dragging-handle").on("mousedown touchstart",a),toFunc(e.settings.onready).call(e)}})},$.fn.addDragging=function(t){$add.Dragging(this,t)},$add.auto.Dragging=function(){$add.auto.disable||$("*[data-addui=dragging]").each(function(t,e){$add.Dragging(e)})};
$add.version.Slider = "1.1.1";
$add.Slider = function(selector, settings){
  function toFunc(str){
    if(typeof(str)=="function")return str;
    if(window[str]!==undefined&&typeof(window[str])=="function")return window[str];
    return function(){eval(str)};
  };
  if(selector===undefined||$(selector).length==0)return;
  $(selector).each(function(i,el){
    function px2per(px){
      return px / B.width();
    };
    function per2val(per){
      var r = el.settings.max - el.settings.min;
      var aV = per/100*r;
      return aV+el.settings.min;
    };
    function val2per(val){
      var r = el.settings.max - el.settings.min;
      var aV = val - el.settings.min;
      var p = (aV / r)*100;
      return p;
    };
    var S = $(el);
    if(S.hasClass("addui-slider"))return;
    el.settings = $.extend({
      min: 0,
      max: 100,
      step: 0.01,
      activetimeout: 750,
      range: false,
      formatter: function(x){return x.toFixed(el.settings.step.decimalPlaces());},
      onready: function(){},
      onslidestart: function(){},
      onslide: function(){},
      onslideend: function(){},
      onchange: function(){}
    }, settings, S.data());
    S.wrap("<div class='addui-slider-wrapper'></div>");
    S.addClass("addui-slider").attr("type", "hidden");
    var W = S.parent();
    if(el.settings.range){
      W.addClass("addui-slider-range").append("<div class='addui-slider-track'><div class='addui-slider-bar'><div class='addui-slider-activeBar'></div></div><div class='addui-slider-handle addui-slider-handle-min'><div class='addui-slider-value'></div></div><div class='addui-slider-handle addui-slider-handle-max'><div class='addui-slider-value'></div></div></div>");
      var B = W.find(".addui-slider-bar");
      var AB = W.find(".addui-slider-activeBar");
      var Hm = W.find(".addui-slider-handle-min");
      var HM = W.find(".addui-slider-handle-max");
      var Vm = W.find(".addui-slider-handle-min .addui-slider-value");
      var VM = W.find(".addui-slider-handle-max .addui-slider-value");
      el.setVal = function(min, max, first){
        min = parseFloat(min.round2nearest(el.settings.step).toFixed(el.settings.step.decimalPlaces()));
        max = parseFloat(max.round2nearest(el.settings.step).toFixed(el.settings.step.decimalPlaces()));
        var oldVal = S.val().split(",");
        var oldMin = parseFloat(oldVal[0]);
        var oldMax = parseFloat(oldVal[1]);
        if( !first && oldMin == min && oldMax == max)return;
        S.val(min+","+max);
        var minP = val2per(min);
        var maxP = val2per(max);
        Hm.css("left", minP+"%");
        HM.css("left", maxP+"%");
        AB.css("left", minP+"%");
        AB.width(maxP-minP+"%");
        Vm.html(toFunc(el.settings.formatter)(min))
        VM.html(toFunc(el.settings.formatter)(max))
        toFunc(el.settings.onchange).call(el,min,max);
      };
      el.refresh = function(){
        var val = S.val().split(",");
        var min = parseFloat(val[0]);
        var max = parseFloat(val[1]);
        var minP = val2per(min);
        var maxP = val2per(max);
        Hm.css("left", minP+"%");
        HM.css("left", maxP+"%");
        AB.css("left", minP+"%");
        AB.width(maxP-minP+"%");
        Vm.html(toFunc(el.settings.formatter)(min))
        VM.html(toFunc(el.settings.formatter)(max))
      };
      Hm.addDragging({
        move: false,
        onstart: function(x){
          clearTimeout(el.timerMin);
          W.addClass("addui-slider-activeMin");
          toFunc(el.settings.onslidestart).call(el,parseFloat(S.val().split(",")[0]),parseFloat(S.val().split(",")[1]));
        },
        ondrag: function(x){
          var b4Per = px2per( x.start.left )*100;
          var deltaPer = px2per( x.delta.x )*-100;
          var newPer = b4Per + deltaPer;
          if(newPer<0)newPer=0;
          if(newPer>100)newPer=100;
          var max = parseFloat(S.val().split(",")[1]);
          var v = per2val(newPer);
          if(v>max)v=max;
          el.setVal(v,max);
          toFunc(el.settings.onslide).call(el,parseFloat(S.val().split(",")[0]),parseFloat(S.val().split(",")[1]));
        },
        onend: function(x){
          el.timerMin = setTimeout(function(){
            W.removeClass("addui-slider-activeMin");
          },el.settings.activetimeout);
          toFunc(el.settings.onslideend).call(el,parseFloat(S.val().split(",")[0]),parseFloat(S.val().split(",")[1]));
        }
      });
      HM.addDragging({
        move: false,
        onstart: function(x){
          clearTimeout(el.timerMax);
          W.addClass("addui-slider-activeMax");
          toFunc(el.settings.onslidestart).call(el,parseFloat(S.val().split(",")[0]),parseFloat(S.val().split(",")[1]));
        },
        ondrag: function(x){
          var b4Per = px2per( x.start.left )*100;
          var deltaPer = px2per( x.delta.x )*-100;
          var newPer = b4Per + deltaPer;
          if(newPer<0)newPer=0;
          if(newPer>100)newPer=100;
          var min = parseFloat(S.val().split(",")[0])
          var v = per2val(newPer);
          if(v<min)v=min;
          el.setVal(min,v);
          toFunc(el.settings.onslide).call(el,parseFloat(S.val().split(",")[0]),parseFloat(S.val().split(",")[1]));
        },
        onend: function(x){
          el.timerMax = setTimeout(function(){
            W.removeClass("addui-slider-activeMax");
          },el.settings.activetimeout);
          toFunc(el.settings.onslideend).call(el,parseFloat(S.val().split(",")[0]),parseFloat(S.val().split(",")[1]));
        }
      });
      if(isNaN(parseFloat(S.val())))
        S.val(el.settings.min+","+el.settings.max);  
      el.setVal(parseFloat(S.val().split(",")[0]),parseFloat(S.val().split(",")[1]),true);
      toFunc(el.settings.onready).call(el,parseFloat(S.val().split(",")[0]),parseFloat(S.val().split(",")[1]));
    } else {
      W.append("<div class='addui-slider-track'><div class='addui-slider-bar'><div class='addui-slider-activeBar'></div></div><div class='addui-slider-handle'><div class='addui-slider-value'></div></div></div>");
      var B = W.find(".addui-slider-bar");
      var AB = W.find(".addui-slider-activeBar");
      var H = W.find(".addui-slider-handle");
      var V = W.find(".addui-slider-value");
      H.addDragging({
        move: false,
        onstart: function(x){
          clearTimeout(el.timer);
          W.addClass("addui-slider-active");
          toFunc(el.settings.onslidestart).call(el, S.val());
        },
        ondrag: function(x){
          var b4Per = px2per( x.start.left )*100;
          var deltaPer = px2per( x.delta.x )*-100;
          var newPer = b4Per + deltaPer;
          if(newPer<0)newPer=0;
          if(newPer>100)newPer=100;
          var v = per2val(newPer);
          el.setVal(v);
          toFunc(el.settings.onslide).call(el, S.val());
        },
        onend: function(x){
          el.timer = setTimeout(function(){
            W.removeClass("addui-slider-active");
          },el.settings.activetimeout);
          toFunc(el.settings.onslideend).call(el, S.val());
        }
      });
      el.setVal = function(v, first){
        v = parseFloat(v.round2nearest(el.settings.step).toFixed(el.settings.step.decimalPlaces()));
        var oldV = parseFloat(S.val());
        if(!first&&oldV==v)return;
        S.val(v);
        var p = val2per(v);
        H.css("left", p+"%");
        AB.width(p+"%");
        V.html(toFunc(el.settings.formatter)(v));
        toFunc(el.settings.onchange).call(el, S.val());
      };
      el.refresh = function(){
        var v = parseFloat(S.val());
        var p = val2per(v);
        H.css("left", p+"%");
        AB.width(p+"%");
        V.html(toFunc(el.settings.formatter)(v));
      };
      if(isNaN(parseFloat(S.val())))
        S.val(el.settings.min);
      el.setVal(parseFloat(S.val()),true);
      toFunc(el.settings.onready).call(el, S.val());
    }
  });
};
$.fn.addSlider=function(settings){$add.Slider(this,settings)};
$add.auto.Slider=function(){if(!$add.auto.disable)$("*[data-addui=slider]").addSlider()};
$(function(){
  $add.auto.Dragging();
  $add.auto.Slider();
  $.get("http://api.add-ui.com/version/?plugin=slider",function(o){$add.version.Slider!=o.version&&console.log("addSlider is out of date.\nVersion "+o.version+" was released on "+o.updated+".\nVisit http://add-ui.com/plugins/addslider/ for more information.")});
});
