// Details start
// $(document).ready(function() {

//     var curPage = 1;
//     var numOfPages = $(".skw-page").length;
//     var animTime = 1000;
//     var scrolling = false;
//     var pgPrefix = ".skw-page-";
  
//     function pagination() {
//       scrolling = true;
  
//       $(pgPrefix + curPage).removeClass("inactive").addClass("active");
//       $(pgPrefix + (curPage - 1)).addClass("inactive");
//       $(pgPrefix + (curPage + 1)).removeClass("active");
  
//       setTimeout(function() {
//         scrolling = false;
//       }, animTime);
//     };
  
//     function navigateUp() {
//       if (curPage === 1) return;
//       curPage--;
//       pagination();
//     };
  
//     function navigateDown() {
//       if (curPage === numOfPages) return;
//       curPage++;
//       pagination();
//     };
  
//     $(document).on("mousewheel DOMMouseScroll", function(e) {
//       if (scrolling) return;
//       if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
//         navigateUp();
//       } else { 
//         navigateDown();
//       }
//     });
  
//     $(document).on("keydown", function(e) {
//       if (scrolling) return;
//       if (e.which === 38) {
//         navigateUp();
//       } else if (e.which === 40) {
//         navigateDown();
//       }
//     });
  
//   });
$(window).scroll(function(){
  let $window = $(window),
      $body = $('body'),   
      $section = $('.section');
  let scroll = $window.scrollTop() + ($window.height() / 3);
  $section.each(function(){ 
    if($(this).position().top <= scroll && $(this).position().top + $(this).height() > scroll){
      $body.removeClass(function (index, css){
        return (css.match (/(^|\s)color-\s+/g) || [].join(' '));
      });
      $('.section').removeClass('active');
      $(this).addClass('active');
    }
  });
}).scroll();
  // Details end
// our work start
const filterContainer = document.querySelector(".gallery-filter"),
	galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
	if (event.target.classList.contains("filter-item")) {
		// deactivate existing active 'filter-item'
		filterContainer.querySelector(".active").classList.remove("active");
		// activate new 'filter-item'
		event.target.classList.add("active");
		const filterValue = event.target.getAttribute("data-filter");
		galleryItems.forEach((item) => {
			if (item.classList.contains(filterValue) || filterValue === 'all') {
				item.classList.remove("hide");
				item.classList.add("show");
			}
			else {
				item.classList.remove("show");
				item.classList.add("hide");
			}
		});
	}
});
// our work end