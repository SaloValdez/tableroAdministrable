$(document).ready(function(){
  tabs();

});

function tabs(){
  var linksParent = $('.btn-tabs');
    var links = linksParent.find('a');
    var items = $('.tabs-contents-item ');
    links.eq(0).add(items.eq(0)).addClass('active');
    linksParent.on('click','a',function(){
      var t = $(this);
      var i = t.index();
      t.add(items.eq(i))
        .addClass('active')
        .siblings().removeClass('active');
    });
}
