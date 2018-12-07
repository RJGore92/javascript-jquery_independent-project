var javaCount = 0;
var cSharpCount = 0;
var phpCount = 0;

$(document).ready(function() {
  $("form#pre-start-button").submit(function(event) {
    event.preventDefault();
    $("div#intro-headers").slideToggle();
    $("div#form-a").slideToggle();
  });
  $("form#question-one").submit(function(event) {
    event.preventDefault();
    var c1Answer = $("input:radio[name=code-one]:checked").val();
    if (c1Answer === "java") {
      javaCount++;
    }
    else if (c1Answer === "c-sharp") {
      cSharpCount++;
    }
    else {
      phpCount++;
    }
    $("div#form-a").slideToggle();
    $("div#form-b").slideToggle();
  });
  $("form#question-two").submit(function(event) {
    event.preventDefault();
    var c2Answer = $("input:radio[name=code-two]:checked").val();
    if (c2Answer === "java") {
      javaCount++;
    }
    else if (c2Answer === "c-sharp") {
      cSharpCount++;
    }
    else {
      phpCount++;
    }
    $("div#form-b").slideToggle();
    $("div#form-c").slideToggle();
  });
  $("form#question-three").submit(function(event) {
    event.preventDefault();
    var c3Answer = $("input:radio[name=code-three]:checked").val();
    if (c3Answer === "java") {
      javaCount++;
    }
    else if (c3Answer === "c-sharp") {
      cSharpCount++;
    }
    else {
      phpCount++;
    }
    $("div#form-c").slideToggle();
    $("div#form-d").slideToggle();
  });
  $("form#question-four").submit(function(event) {
    event.preventDefault();
    var c4Answer = $("input:radio[name=code-four]:checked").val();
    if (c4Answer === "java") {
      javaCount++;
    }
    else if (c4Answer === "c-sharp") {
      cSharpCount++;
    }
    else {
      phpCount++;
    }
    $("div#form-d").slideToggle();
    $("div#form-e").slideToggle();
  });
  $("form#question-five").submit(function(event) {
    event.preventDefault();
    var c5Answer = $("input:radio[name=code-five]:checked").val();
    if (c5Answer === "java") {
      javaCount++;
    }
    else if (c5Answer === "c-sharp") {
      cSharpCount++;
    }
    else {
      phpCount++;
    }
    console.log(javaCount);
    console.log(cSharpCount);
    console.log(phpCount);
    var colSizeA = javaCount * 2;
    var colSizeB = cSharpCount * 2;
    var colSizeC = phpCount * 2;

    if ((javaCount >= cSharpCount) && (javaCount >= phpCount))
    {
      $("div#result-bar").append(
        "<div class='col-md-"+colSizeA+" offset-md-1 java-background'></div>"
      );
      if (cSharpCount >= phpCount) {
        $("div#result-bar").append(
          "<div class='col-md-"+colSizeB+" c-sharp-background'></div>" +
          "<div class='col-md-"+colSizeC+" php-background'></div>"
        );
      }
      else {
        $("div#result-bar").append(
          "<div class='col-md-"+colSizeC+" php-background'></div>" +
          "<div class='col-md-"+colSizeB+" c-sharp-background'></div>"
        );
      }
      if (javaCount == cSharpCount) {
        $("div#result-bar").after(
          "<p id='result-para'>Based on your answers, it looks like your best tracks to study next would be Java or C#.</p>"
        );
      }
      else if (javaCount == phpCount) {
        $("div#result-bar").after(
          "<p id='result-para'>Based on your answers, it looks like your best tracks to study next would be Java or PHP.</p>"
        );
      }
      else {
        $("div#result-bar").after(
          "<p id='result-para'>Based on your answers, it looks like your best track to study next would be Java.</p>"
        );
      }
    }
    else if ((cSharpCount > javaCount) && (cSharpCount >= phpCount)) {
      $("div#result-bar").append(
        "<div class='col-md-"+colSizeB+" offset-md-1 c-sharp-background'></div>"
      );
      if (javaCount >= phpCount) {
        $("div#result-bar").append(
          "<div class='col-md-"+colSizeA+" java-background'></div>" +
          "<div class='col-md-"+colSizeC+" php-background'></div>"
        );
      }
      else {
        $("div#result-bar").append(
          "<div class='col-md-"+colSizeC+" php-background'></div>" +
          "<div class='col-md-"+colSizeA+" java-background'></div>"
        );
      }
      if (cSharpCount == phpCount) {
        $("div#result-bar").after(
          "<p id='result-para'>Based on your answers, it looks like your best tracks to study next would be C# or PHP.</p>"
        );
      }
      else {
        $("div#result-bar").after(
          "<p id='result-para'>Based on your answers, it looks like your best track to study next would be C#.</p>"
        );
      }
    }
    else {
      $("div#result-bar").append(
        "<div class='col-md-"+colSizeC+" offset-md-1 php-background'></div>"
      );
      if (javaCount >= cSharpCount) {
        $("div#result-bar").append(
          "<div class='col-md-"+colSizeA+" java-background'></div>" +
          "<div class='col-md-"+colSizeB+" c-sharp-background'></div>"
        );
      }
      else {
        $("div#result-bar").append(
          "<div class='col-md-"+colSizeB+" c-sharp-background'></div>" +
          "<div class='col-md-"+colSizeA+" java-background'></div>"
        );
      }
      $("div#result-bar").after(
        "<p id='result-para'>Based on your answers, it looks like your best tracks to study next would be PHP.</p>"
      );
    }
    $("p#result-para").after(
      "<p>This is, of course, just a recommendation for what you should look into next.  This is by no means a requirement for you to look into the track(s) we recommend, and you are free to study any other track you wish and even encouraged to work with as many tracks as you feel comfortable doing during your time here at Epicodus.  Greater flexibility and experience will definitely help you in the long term."
    )
    $("div#form-e").slideToggle();
    $("div#results-div").slideToggle();
  });
});
