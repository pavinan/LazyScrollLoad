
(function ($) {

    var EventKeys = {
        OnScrollReachedEnd : "OnScrollReachedEnd"
    };

    $.fn.lazyScrollLoad = function () {
        var elements = this;
        return elements.each(function () {
            var $el = $(this);
            $el.on('scroll', _.throttle(function () {
                var $this = $(this);
                if (this.scrollHeight - this.scrollTop === this.clientHeight) {
                    $this.trigger(EventKeys.OnScrollReachedEnd);
                }
            }, 300));
        })
    };
})(jQuery)