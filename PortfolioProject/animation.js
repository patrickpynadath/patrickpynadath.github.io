var aboutHTML = "<h2 align = \"center\">Hi, I'm Patrick</h2> \
<p>The picture in the bottom was done by my dear friend Catherine Luo from high-school. I am currently \
  a junior at Northwestern studying Math and Computer Science. I plan to use this website as a way to showcase \
  the various projects I work on for fun.</p> \
<p>I think I've changed a lot during college, and I hope I continue to grow just as much once I graduate. Rather \
  than try to describe how I currently am, I'm going to give three books that have completely changned how I live my life </p> \
<p>The first is <i>10 Types of Humans</i> by Dexter Dias. I went through a lot of introspection while reading this book, and I hope \
  I know more about what it means to be human.</p> \
<p>The second is <i>Work Clean</i> by Dan Charnas. This book inspired me to apply the same structure that chef's do to their cooking to \
most aspects of my life.</p> \
<p>The last is <i>The Wisdom of Insecurity</i> by Alan Watts. I'm still reading this one, but it has so far provided an attitude that seems \
more impervious to unexpected change, which there seems to be a lot of in 2020.</p> \
<img class = \"personal_images\" src = \"images/drawing_patrick.png\" alt = \"personal_pic\">";

var resumeHTML = "<h2 align = \"center\">Check out my Resume!</h2> \
  <h1 align = \"center\">About My Professional Interests</h1>\
  <p>I am currently a math and computer science major at Northwestern University, but it was a long road to deciding on these majors.</p> \
  <p>Initially, I was interested in pursuing a career in law because I wanted to be able to make a positive impact on the world, \
    and my time on the debate team had convinced me that I could make progress through policy. I was really attracted to the way the building blocks \
    of arguments fit together and how one could strengthen them by focusing on the underlying logical structure.</p>\
  <p>After a few math and computer science courses along with some exposure to finance, I quickly realized that there were far more\
    avenues that were founded around a logically rigirous approach to building something. I fell in love with Math for the same reason that\
    I loved debate. Beyond that, I soon realized that computer science was the application of mathematical concepts to the real world.</p>\
  <p>My end goal is still the same as it was when I wanted to be a lawyer: I want to build soemthing that has a tangible impact on the people\
  around me. Whereas in 2018 that meant building policy, now it means building programs that allow us to more efficeintly process the\
  ever-growing mass of data on the internet. I am particularly interested in problems relating to disinformation, but I am currently open to exploring any \
field with problems ready to be solved.</p> \
<a href = \"PatrickPynadathResume.pdf\" target = \"_blank\"> \
  <h1 align = \"center\">Click here to check out my resume</h1> \
</a>";

var contactHTML = "<h2 align = \"center\">I'm a cool guy, you should contact me!</h2> \
<h1 align = \"center\">Phone: 224-281-2295 </h1> \
<h1 align = \"center\">Email: patrickpynadath2022@u.northwestern.edu </h1>";

var projectsHTML = "<h2 align = \"center\">Here's some cool stuff I've done</h1> \
      <h1 align = \"center\">Optimal Kart Analysis for Mariokart 8</h1> \
      <ul> \
        <li>Scraped data on mario kart performance stats using predeveloped script found online</li> \
        <li>Developed program to create dataset of all possible mario kart combinations linked with performance stats</li> \
        <li>Developed function to narrow down kart universe based on prioritized performance categories</li> \
        <li>Created original approach to creating basket of optimal karts based on kmeans sorting to find representative karts of optimal groupings\
      </ul> \
      <h1 align = \"center\">Convolutional Neural Network Applied to Technical Indicators</h1> \
      <ul> \
        <li>Created a database stored on AWS of S&P 1500 stock data with automatic updating capabilities </li> \
        <li>Implemented technical indicators such as RSI, MACD, Klinger Oscillator, and Stochastic Oscillator</li> \
        <li>Developed script to identify closing price trend reversals using 5 day and 30 day exponential moving average</li> \
        <li>Built pipeline to construct features and label reversals as “true positive” if duration is longer than 2 weeks</li> \
        <li>Designed neural network classification model to distinguish true positives from false positives</li> \
        <li>Crafted trading algorithm based on trend identification to evaluate performance of machine learning model</li> \
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

function nextSection(e) {
  cur_section = (cur_section + 1) % 4;
  if (sections[cur_section] == 'about'){
    leftTop();
  }
  else if (sections[cur_section] == 'resume'){
    rightTop();
  }
  else if (sections[cur_section] == 'projects'){
    rightBottom();
  }
  else{
    leftBottom();
  }
}
document.onkeydown = nextSection;

sections = ['about', 'resume', 'projects', 'contact'];
cur_section = 2;


function init(){
  rightBottom();
}

init();
