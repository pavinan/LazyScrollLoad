
(function ($) {

    var EventKeys = {
        OnScrollReachedEnd: "OnScrollReachedEnd"
    };

    var options = {
        throttleTimeout: 300
    }

    $.fn.lazyScrollLoad = function (settings) {
        if (typeof settings == "object") {
            $.extend(options, settings);
        }

        var elements = this;
        return elements.each(function () {
            var $el = $(this);
            $el.on('scroll', _.throttle(function () {
                var $this = $(this);
                if (this.scrollHeight - this.scrollTop === this.clientHeight) {
                    $this.trigger(EventKeys.OnScrollReachedEnd);
                }
            }, options.throttleTimeout));
        })
    };
})(jQuery)