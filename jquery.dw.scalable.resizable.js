/*
 * Author: DWoutsourcing dwoutsourcing@gmail.com
 */
(function($, undefined) {
	$.widget("ui.resizable", $.ui.resizable, {
		options: {
			scale: 1,
		},
		
		_change: {
			e: function(event, dx) {
				return {
					width: this.originalSize.width + dx / this.options.scale
				};
			},
			w: function(event, dx) {
				return {
					left: this.originalPosition.left + dx / this.options.scale,
					width: this.originalSize.width - dx / this.options.scale
				};
			},
			n: function(event, dx, dy) {
				return {
					top: this.originalPosition.top + dy / this.options.scale,
					height: this.originalSize.height - dy / this.options.scale
				};
			},
			s: function(event, dx, dy) {
				return {
					height: this.originalSize.height + dy / this.options.scale
				};
			}
		},
		
	    resizeBy: function(width, height) {
	        this._mouseStart($.Event("mousedown", { pageX: 0, pageY: 0 }));
	        this.axis = 'se';
	        var end = $.Event("mouseup", {
	            pageX: width,
	            pageY: height
	        });
	        this._mouseDrag(end);
	        this._mouseStop(end);
	    },
	    resizeTo: function(width, height) {
	        var start = new $.Event("mousedown", { pageX: 0, pageY: 0 });
	        this._mouseStart(start);
	        this.axis = 'se';
	        var end = new $.Event("mouseup", {
	            pageX: width - this.originalSize.width,
	            pageY: height - this.originalSize.height
	        });
	        this._mouseDrag(end);
	        this._mouseStop(end);
	    }
	});
})(jQuery);