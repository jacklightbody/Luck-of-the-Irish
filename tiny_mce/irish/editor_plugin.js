(function() {
	tinymce.create('tinymce.plugins.Irish', {
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		init : function(ed, url) {
			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
			ed.addCommand('mceIrish', function() {
				var key='YOURAPIKEYHERE';
				url='';
				var copiedhtml = ed.selection.getContent({format : 'html'});
      			var stripped = ed.selection.getContent({format : 'text'});
      			$.getJSON('https://www.googleapis.com/customsearch/v1?q='+stripped'=&num=1&key='+key, function(data) {   
        			url=data.items[0].link 
      			});
      			newhtml='<a href="'+url+'">'+copiedhtml+'</a>';
      			ed.selection.setContent('<a href="'+url+'">'+copiedhtml+'</a>');
			});

			// Register example button
			ed.addButton('Irish', {
				title : 'irish.desc',
				cmd : 'mceIrish',
				image : url + 'irish.png'
			});

		},
		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
				longname : 'Luck of the Irish',
				author : 'Jack',
				authorurl : 'cirruseditor.com',
				infourl : 'none',
				version : .1
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('irish', tinymce.plugins.Irish);
})();
