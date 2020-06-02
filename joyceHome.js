
"use strict";

(function(){
  /**
  This method calls the startFunction to display the home page and calls the start
  function on click of the "home" button.
  */
  function pageLoad(){
    displayHome();
    document.getElementById("proj1Link").onclick = displayP1;
    document.getElementById("proj2Link").onclick = displayP2;
    document.getElementById("proj3Link").onclick = displayP3;
    document.getElementById("homeB").onclick = displayHome;
    document.getElementById("aboutB").onclick = displayAbout;
    document.getElementById("projectsB").onclick = displayProjects;
    document.getElementById("resumeB").onclick = displayResume;
    document.getElementById("proj1Link").onmouseover = hoverInP1;
    document.getElementById("proj1Link").onmouseout = hoverOutP1;
    document.getElementById("proj2Link").onmouseover = hoverInP2;
    document.getElementById("proj2Link").onmouseout = hoverOutP2;
    document.getElementById("proj3Link").onmouseover = hoverInP3;
    document.getElementById("proj3Link").onmouseout = hoverOutP3;
    document.getElementById("classes").onmouseover = hoverResume;
    document.getElementById("classes").onmouseout = hoverOutResume;
    document.getElementById("skills").onmouseover = hoverResume;
    document.getElementById("skills").onmouseout = hoverOutResume;
    document.getElementById("work").onmouseover = hoverResume;
    document.getElementById("work").onmouseout = hoverOutResume;
  }

  function hoverResume(){
    this.style.backgroundColor = "LightGray";
    this.style.borderColor = "gray";
    this.style.borderStyle = "solid";
    this.style.borderWidth = "2px";
  }

  function hoverOutResume(){
    this.style.backgroundColor = "White";
    this.style.borderStyle = "none";
  }
  function hoverInP1(){
    document.getElementById("proj1Link").src = "proj1hover.jpg"
    document.getElementById("proj1Link").style.borderColor = "Black";
  }
  function hoverOutP1(){
    document.getElementById("proj1Link").src = "proj1.png"
    document.getElementById("proj1Link").style.borderColor = "White";
  }

  function hoverInP2(){
    document.getElementById("proj2Link").src = "proj2hover.jpg"
    document.getElementById("proj2Link").style.borderColor = "Black";
  }

  function hoverOutP2(){
    document.getElementById("proj2Link").src = "proj2.jpg"
    document.getElementById("proj2Link").style.borderColor = "White";
  }

  function hoverInP3(){
    document.getElementById("proj3Link").src = "proj3hover.jpg"
    document.getElementById("proj3Link").style.borderColor = "Black";
  }

  function hoverOutP3(){
    document.getElementById("proj3Link").src = "proj3.png"
    document.getElementById("proj3Link").style.borderColor = "White";
  }

  function displayHome(){
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("proj1").style.display = "none";
    document.getElementById("proj2").style.display = "none";
    document.getElementById("proj3").style.display = "none";
    document.getElementById("resume").style.display = "none";
    document.getElementById("homepage").style.display = "block";
  }

  function displayResume(){
    document.getElementById("resume").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("proj1").style.display = "none";
    document.getElementById("proj2").style.display = "none";
    document.getElementById("proj3").style.display = "none";
    document.getElementById("homepage").style.display = "none";
  }

  function displayAbout(){
    document.getElementById("homepage").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("projects").style.display = "none";
    document.getElementById("proj2").style.display = "none";
    document.getElementById("proj1").style.display = "none";
    document.getElementById("proj3").style.display = "none";
    document.getElementById("resume").style.display = "none";
  }

  function displayProjects(){
    document.getElementById("homepage").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "block";
    document.getElementById("proj1").style.display = "none";
    document.getElementById("proj2").style.display = "none";
    document.getElementById("proj3").style.display = "none";
    document.getElementById("resume").style.display = "none";

  }

  function displayP1(){
    document.getElementById("homepage").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("proj1").style.display = "block";
    document.getElementById("proj2").style.display = "none";
    document.getElementById("proj3").style.display = "none";
    document.getElementById("resume").style.display = "none";
  }

  function displayP2(){
    document.getElementById("homepage").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("resume").style.display = "none";
    document.getElementById("proj1").style.display = "none";
    document.getElementById("proj2").style.display = "block";
    document.getElementById("proj3").style.display = "none";
  }

    function displayP3(){
      document.getElementById("homepage").style.display = "none";
      document.getElementById("projects").style.display = "none";
      document.getElementById("about").style.display = "none";
      document.getElementById("resume").style.display = "none";
      document.getElementById("proj3").style.display = "block";
      document.getElementById("proj2").style.display = "none";
      document.getElementById("proj1").style.display = "none";
    }

  window.addEventListener("load", pageLoad);
})();
