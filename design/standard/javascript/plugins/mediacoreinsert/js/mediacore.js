tinyMCEPopup.requireLangPack();

var MediaCoreDialog = {
	init : function(ed) {
		tinyMCEPopup.resizeToInnerSize();
	},

	insert : function(file, title, width, height) {
		var ed = tinyMCEPopup.editor, dom = ed.dom;
		
		var attribs = 'movie_url|'+ file +'attribute_separation';
		attribs += 'width|'+ width +'attribute_separation';
		attribs += 'height|'+ height;
		
		var customtag = '<div class="mediacoreinsert mceItemCustomTag" type="custom" ';
		customtag += 'customattributes="'+ attribs +'">'+ title +'</div> ';
		
		tinyMCEPopup.execCommand('mceInsertRawHTML', false, customtag);

		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(MediaCoreDialog.init, MediaCoreDialog);