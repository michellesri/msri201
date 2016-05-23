//http://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb the code on this link is the outline for switchPic
var totalClicks = 0;

function switchPic() {
  console.log('switchPic called');
  totalClicks++;
  console.log(totalClicks);
  var image = document.getElementById('pic1');
  if (image.src.match('jon')){
    image.src = image.src = 'sf.jpg';
  }
  else {
    image.src = 'jon.jpg';
  }
}
