// Lightbox  Modification //
lightbox.option({
  'resizeDuration': 450,
  'wrapAround': true,
});

// filter Images //

function imageFilter(){
  var search, filter, links, numLinks, dataTitle;
  search = $('input[type=text]');
  var links = $('a[class=lightbox-img');
  var numLinks = links.length;
  filter = search.val().toLowerCase();

  for(var i = 0; i < numLinks; i++){
    var dataTitle = document.getElementsByTagName('a')[i].getAttribute("data-title").toLowerCase();
    if (dataTitle.indexOf(filter) != -1){
      $(links[i]).css('display', 'initial');
    } else{
      $(links[i]).css('display', 'none');
    }
  }
}
