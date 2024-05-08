// Animation On Scroll
AOS.init({
  easing: "ease",
  once: true,
  duration: 500,
});

// Copyright
const copyright = () => {
  const tag = document.querySelector("#copyright");
  const year = new Date().getFullYear();
  tag.textContent = year;
};
copyright();

// Counter
const counter = (selector) => {
  var counted = 0;
  $(window).scroll(function () {
    var oTop = $(selector).offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $(".count").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 3000,
            easing: "swing",
            step: function () {
              var formattedNum = Math.floor(this.countNum);
              if (formattedNum < 10) {
                formattedNum = "0" + formattedNum;
              }
              $this.text(formattedNum);
            },
            complete: function () {
              var finalNum = Math.floor(this.countNum);
              if (finalNum < 10) {
                finalNum = "0" + finalNum;
              }
              $this.text(finalNum);
            },
          }
        );
      });
      counted = 1;
    }
  });
};
