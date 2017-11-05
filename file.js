function resetoverlays(){
  $("#overlay").css({
    'opacity': '0'
  });
  $("#overlay1").css({
    'opacity': '0'
  });
  $("#overlay2").css({
    'opacity': '0'
  });
  $("#overlay3").css({
    'opacity': '0'
  });
  $("#overlay4").css({
    'opacity': '0'
  });
  $("#overlay5").css({
    'opacity': '0'
  });
  $("#overlay6").css({
    'opacity': '0'
  });
  $("#overlay7").css({
    'opacity': '0'
  });
  $("#overlay8").css({
    'opacity': '0'
  });
  $("#overlay9").css({
    'opacity': '0'
  });
  $("#overlay10").css({
    'opacity': '0'
  });
}

$(document).ready(function(){

  $("#not-map").click(function(){
    resetoverlays();
    $("#overlay").css({
      'position': 'absolute',
      'height': '300px',
      'width': '500px',
      'opacity': '1',
      'transition': '.5s ease',
      'background-color': 'purple',
    });
  });
  $("#not-map1").click(function(){
    resetoverlays();
    $("#overlay1").css({
      'position': 'absolute',
      'height': '300px',
      'width': '500px',
      'opacity': '1',
      'transition': '.5s ease',
      'background-color': 'purple',
    });
  });


  $("#not-map2").click(function(){
    resetoverlays();
    $("#overlay2").css({
      'position': 'absolute',
      'height': '300px',
      'width': '500px',
      'opacity': '1',
      'transition': '.5s ease',
      'background-color': 'purple',
    });
  });
  $("#not-map3").click(function(){
    resetoverlays();
    $("#overlay3").css({
      'position': 'absolute',
      'height': '300px',
      'width': '500px',
      'opacity': '1',
      'transition': '.5s ease',
      'background-color': 'purple',
    });
  });
  $("#not-map4").click(function(){
    resetoverlays();
    $("#overlay4").css({
      'position': 'absolute',
      'height': '300px',
      'width': '500px',
      'opacity': '1',
      'transition': '.5s ease',
      'background-color': 'purple',
    });
  });
  $("#not-map5").click(function(){
    resetoverlays();
    $("#overlay5").css({
      'position': 'absolute',
      'height': '300px',
      'width': '500px',
      'opacity': '1',
      'transition': '.5s ease',
      'background-color': 'purple',
    });
  });
  $("#not-map6").click(function(){
    resetoverlays();
    $("#overlay6").css({
      'position': 'absolute',
      'height': '300px',
      'width': '500px',
      'opacity': '1',
      'transition': '.5s ease',
      'background-color': 'purple',
    });
  });
  $("#not-map7").click(function(){
    resetoverlays();
    $("#overlay7").css({
      'position': 'absolute',
      'height': '300px',
      'width': '500px',
      'opacity': '1',
      'transition': '.5s ease',
      'background-color': 'purple',
    });
  });
  $("#not-map8").click(function(){
    resetoverlays();
    $("#overlay8").css({
      'position': 'absolute',
      'height': '300px',
      'width': '500px',
      'opacity': '1',
      'transition': '.5s ease',
      'background-color': 'purple',
    });
  });
  $("#not-map9").click(function(){
    resetoverlays();
    $("#overlay9").css({
      'position': 'absolute',
      'height': '300px',
      'width': '500px',
      'opacity': '1',
      'transition': '.5s ease',
      'background-color': 'purple',
    });
  });
  $("#not-map10").click(function(){
    resetoverlays();
    $("#overlay10").css({
      'position': 'absolute',
      'height': '300px',
      'width': '500px',
      'opacity': '1',
      'transition': '.5s ease',
      'background-color': 'purple',
    });
  });
  $(".container").mousemove(function(event12){
    console.log(event12.pageX, event12.pageY);
  });
});
