/*
 * Author: DWoutsourcing dwoutsourcing@gmail.com
 */
(function($, undefined) {
	$.widget("ui.draggable", $.ui.draggable, {
		options: {
			scale: 1,
		},
		
		_lastMouseStart: {
			x: 0,
			y: 0
		},
		
		_trigger: function(eventType, event, ui) {
			switch(eventType) {
				case 'start':
					this._lastMouseStart.x = event.clientX;
					this._lastMouseStart.y = event.clientY;
					break;
					
				case 'drag':
					if(ui && ui.originalPosition) {
				        var original = ui.originalPosition;
				        
				        var left = (event.clientX - this._lastMouseStart.x + original.left) / this.options.scale;
				        var top = (event.clientY - this._lastMouseStart.y + original.top) / this.options.scale;
				        
				        if(this.containment) {
				        	if(left > this.containment[2]) left = this.containment[2];
				        	else if(left < this.containment[0]) left = this.containment[0];
				        	
				        	if(top > this.containment[3]) top = this.containment[3];
				        	else if(top < this.containment[1]) top = this.containment[1];
				        }

				        ui.position = {
				            left: left,
				            top: top
				        };
					}
					break;
			}
			
			this._superApply(arguments);
		},
	});
})(jQuery);