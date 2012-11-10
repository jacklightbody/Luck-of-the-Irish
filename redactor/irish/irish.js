if (typeof RedactorPlugins === 'undefined') {
	var RedactorPlugins = {};
}
var key='YOURAPIKEYHERE';
RedactorPlugins.irish = {
  init: function(){ 
    this.addBtn('irish', 'Irish', function(obj){
      url='';
      var copiedhtml = obj.getSelectedHtml();
      var fullhtml = obj.getCode();
      var stripped = copiedhtml.replace(/(<([^>]+)>)/ig,"");
      $.getJSON('https://www.googleapis.com/customsearch/v1?q='+stripped'=&num=1&key='+key, function(data) {   
        url=data.items[0].link 
      });
      newhtml=fullhtml.replace(copiedhtml,'<a href="'+url+'">'+copiedhtml+'</a>');
      obj.setCode(newhtml);
    });
  }
}