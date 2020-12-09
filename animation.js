var aboutHTML = "<h2 align = \"center\"> Hi, I'm Patrick </h2>";

var resumeHTML = "<h2 align = \"center\">Check out my Resume!</h2>";

var contactHTML = "<h2 align = \"center\">I'm a cool guy, you should contact me!</h2>";

var projectsHTML = "<h2 align = \"center\">Here's some cool stuff I've done</h1> \
      <h1 align = \"center\">Optimal Kart Analysis for Mariokart 8</h1> \
      <ul> \
        <li>Point 1 </li> \
        <li>Point 2 </li> \
        <li>Point 3 </li> \
      </ul> \
      <h1 align = \"center\">Convolutional Neural Network Applied to Technical Indicators</h1> \
      <ul> \
        <li>Point 1 </li> \
        <li>Point 2 </li> \
        <li>Point 3 </li> \
      </ul>";

function leftBottom(){
  document.getElementById("circle").style.left = '85%';
  document.getElementById("circle").style.top = '25%';
  document.getElementById("content_container").style.left = '5%';
  document.getElementById("content_container").style.top = '5%';
  document.getElementById("content_container").innerHTML = contactHTML;

  //moving the small circle 1
  document.getElementById("small_circle_1").style.left = '85%';
  document.getElementById("small_circle_1").style.top = '75%';
  //moving the small circle 2
  document.getElementById("small_circle_2").style.left = '75%';
  document.getElementById("small_circle_2").style.top = '65%';
  //moving the small circle 3
  document.getElementById("small_circle_3").style.left = '85%';
  document.getElementById("small_circle_3").style.top = '55%';

}

function rightBottom(){
  //moving the navigation circle
  document.getElementById("circle").style.left = '15%';
  document.getElementById("circle").style.top = '25%';

  //moving the content container
  document.getElementById("content_container").style.left = '35%';
  document.getElementById("content_container").style.top = '5%';
  document.getElementById("content_container").innerHTML = projectsHTML;

  //moving the small circle 1
  document.getElementById("small_circle_1").style.left = '5%';
  document.getElementById("small_circle_1").style.top = '75%';
  //moving the small circle 2
  document.getElementById("small_circle_2").style.left = '15%';
  document.getElementById("small_circle_2").style.top = '65%';
  //moving the small circle 3
  document.getElementById("small_circle_3").style.left = '5%';
  document.getElementById("small_circle_3").style.top = '55%';

}

function leftTop(){
  document.getElementById("circle").style.left = '85%';
  document.getElementById("circle").style.top = '75%';
  document.getElementById("content_container").style.left = '5%';
  document.getElementById("content_container").style.top = '5';
  document.getElementById("content_container").innerHTML = aboutHTML;

  //moving the small circle 1
  document.getElementById("small_circle_1").style.left = '85%';
  document.getElementById("small_circle_1").style.top = '5%';
  //moving the small circle 2
  document.getElementById("small_circle_2").style.left = '75%';
  document.getElementById("small_circle_2").style.top = '15%';
  //moving the small circle 3
  document.getElementById("small_circle_3").style.left = '85%';
  document.getElementById("small_circle_3").style.top = '25%';
}

function rightTop(){
  document.getElementById("circle").style.left = '15%';
  document.getElementById("circle").style.top = '75%';
  document.getElementById("content_container").style.left = '35%';
  document.getElementById("content_container").style.top = '5%';
  document.getElementById("content_container").innerHTML = resumeHTML;

  //moving the small circle 1
  document.getElementById("small_circle_1").style.left = '5%';
  document.getElementById("small_circle_1").style.top = '5%';
  //moving the small circle 2
  document.getElementById("small_circle_2").style.left = '15%';
  document.getElementById("small_circle_2").style.top = '15%';
  //moving the small circle 3
  document.getElementById("small_circle_3").style.left = '5%';
  document.getElementById("small_circle_3").style.top = '25%';
}

function init(){
  rightBottom();
}

init();
