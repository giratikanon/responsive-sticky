globe.onDefine("window.jQuery", function() {
	
	(function($) {
	
		$.fn.sticky = function(options) {
		
			var sticky = {
				element: $(".sticky-element"),
				container: $(".sticky-container"),
				boundary: false,
				window: $(window),
				windowHeight: $(window).height(),
				classname: "sticky-active",
				style: "vertical",
				initialize: function() {
					sticky.window.resize(sticky.resize);
					sticky.window.scroll(sticky.scroll);
				},
				resize: function() {
					sticky.element.width(sticky.container.width());
				},
				scroll: function() {
					
					var scrollTop = sticky.window.scrollTop();
					
					var isSticky = (scrollTop > sticky.container.offset().top);
					
					if (sticky.boundary) {
						if (top + sticky.element.height() > sticky.boundary.height() ) {
							top = sticky.boundary.height() - sticky.element.height()
						} 
					}
					
					if (isSticky) {
						sticky.element.addClass(sticky.classname);
						if (sticky.container && sticky.style == "horizontal") {
							sticky.container.height(sticky.element.outerHeight());
						}
					} else {
						sticky.element.removeClass(sticky.classname);
					} 
					
					sticky.resize();
				
				}
			};
			
			$.extend(sticky, { element: this }, options);
		
			return this.each(function() {
			
				$(function() {
					
					sticky.initialize();
					
				});
				
				return this;
				
			});
		
		};
		
	
	})(jQuery);

});


