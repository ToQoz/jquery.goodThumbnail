
;(function($) {
  $.fn.goodThumbnail = function(options) {
    var options = $.extend({}, $.fn.goodThumbnail.defaults, options)
    $(this).hide().removeAttr('width').removeAttr('height').each(function(i, pic) {
      var $pic = $(pic),
          width = options.width,
          height = options.height,
          bgWidth = width,
          bgHeight = height,
          maxLen = width > height ? width : height
      $pic.on('load', function(e) {
        var $target = $(e.target),
            nWidth = $target.width(),
            nHeight = $target.height(),
            autoAddElm = ''
        if (nHeight < nWidth) {
          bgWidth = nWidth/nHeight * maxLen
        } else {
          bgHeight = nHeight/nWidth * maxLen
        }
        autoAddElm = '<div ' +
          'style="' +
            "float: left; " +
            "margin: 5px; " +
            "width: " + width + "px;" +
            "height: " + height + "px;"  +
            "background-image:url(" + $target.attr('src') + ");" +
            "background-position:50% 50%;" +
            "background-size:" + bgWidth + "px " + bgHeight + "px;" +
            "background-repeat:no-repeat no-repeat;" +
          '"' +
          'class="thumbDivAddedAuto ' + options.autoAddClass + '"' +
        '></div>'
        $pic.closest(options.parentElmForThumb).append($(autoAddElm))
      })
    })
  }
  $.fn.goodThumbnail.defaults = {
    width: 150,
    height: 150,
    autoAddClass: 'thumbnail',
    parentElmForThumb: 'a'
  }
}(jQuery));
