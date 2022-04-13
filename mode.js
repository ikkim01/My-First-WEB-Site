var Body = {
   setColor:function (color){
    //document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackGroungColor:function (color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}
var links = {
  setColor:function (color){
  //var alist = document.querySelectorAll('a');
 //var i = 0;
 //while(i < alist.length){
     //alist[i].style.color = 'blue';
     //i = i + 1;
     $('a').css('color',color);
  }
}

function nightday(self){
var target = document.querySelector('body');
if(self.value === '다크 모드'){
  Body.setColor ('yellow');
  Body.setBackGroungColor ('black');
  self.value = '라이트 모드';
  alert('다크 모드로 전환됩니다.')
  links.setColor('powderblue');

} else {
  Body.setColor('black');
  Body.setBackGroungColor('white');
  self.value = '다크 모드';
  alert('라이트 모드로 전환됩니다.')
  links.setColor('blue');
}
}
