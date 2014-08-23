// onViewPort (c) 2013, Ignacio Chavez. http://github.com/nashio
// Executes a function when a certain element is within the boundries of the viewport


(function(w){ 
  $.fn.onViewPort = function(options, callback) {
    var settings = $.extend({}, options );
        self = this;
    var isElementInViewport = function(){
      var box = this.getBoundingClientRect();
      return (
          box.top >= 0 &&
          box.left >= 0 &&
          box.bottom <= (window.innerHeight || $(window).height() ) && 
          box.right <= (window.innerWidth ||  $(window).width() ) 
          );
    };
    $(window).on("scroll", function(){
      self.each(function() {
        if( isElementInViewport.call(this) ) {
          if( typeof callback === "function" ){
            callback();
          }
        }
      });
     });

  };

})(window);
