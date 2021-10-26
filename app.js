function createGrid(x) {
  let size = 400;
  let boxsize = 400 / x;
  let wrap = $(".grid").html("");
  for (var rows = 0; rows < x; rows++) {
    for (var columns = 0; columns < x; columns++) {
      wrap.append(
        $("<div></div>").addClass("square").height(boxsize).width(boxsize)
      );
    }
    wrap.append($("<div></div>").css("clear", "both"));
  }
}

function clear() {
  $(".square").css("background", "white");
}

function newbutton() {
  var input = prompt("Enter number of squares between 1 and 100");
  if (input > 1 && input <= 100) {
    createGrid(input);
    clear();
  } else {
    alert("Please enter a number from 1 to 100");
  }
}

function rainbow() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "#" + red.toHex() + green.toHex() + blue.toHex();
}

Number.prototype.toHex = function () {
  if (this < 16) {
    return "0" + this.toString(16);
  }
  return this.toString(16);
};

$(document).ready(function () {
  createGrid(16);

  $(".square").mouseenter(function () {
    $(this).css("background", "black");
  });

  $("#clear-button").click(function () {
    clear();
  });

  $("#new-button").click(function () {
    $(".square").unbind();
    newbutton();
    $(".square").mouseenter(function () {
      $(this).css("background", "black");
    });
  });

  $("#rainbow-button").click(function () {
    newbutton();
    $(".square").unbind();
    $(".square").mouseenter(function () {
      $(this).css("background", rainbow());
    });
  });

  $("#trail-button").click(function () {
    newbutton();
    $(".square").hover(
      function () {
        $(this).css("opacity", 0);
      },
      function () {
        $(this).fadeTo("fast", 1);
      }
    );
  });
});
