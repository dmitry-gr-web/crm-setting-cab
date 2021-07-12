(function($) {
    $.fn.select = function() {
        let settings = $.extend({
                children: ".crm-main-table",
                className: "select-toggle",
                onSelect: function() {},
            },
            arguments[0] || {}
        );
        return this.each(function(_, that) {
            let $ch = $(this).find(settings.children),
                sel = [],
                last;
            $(document).on("keydown", function(e) {
                let isCtrl = e.ctrlKey || e.metaKey,
                    keyA = e.which == 65;
                if (isCtrl && keyA) {
                    $(".crm-main-table").each((_, x) => {
                        if (!x.classList.contains("selected-lock")) {
                            x.classList.add("select-toggle");
                        }
                    });
                    $(".crm-main-table").unbind("mouseleave mousemove");
                    $(".select-toggle")
                        .mousemove(function(pos) {
                            if ($(".crm-main-table").hasClass("select-toggle")) {
                                $("#hoverSelect").show();
                                $("#hoverSelect")
                                    .css("left", pos.pageX + 10 + "px")
                                    .css("top", pos.pageY + 10 + "px");
                            }
                        })
                        .mouseleave(function(e) {
                            $("#hoverSelect").hide();
                        });
                    sel = [...$(".crm-main-table")].filter((x) => {
                        return !x.classList.contains("selected-lock");
                    });
                    settings.onSelect.call(that, sel);
                    e.preventDefault();
                }
            });
            $ch.on("mousedown", function(ev) {
                let isCtrl = ev.ctrlKey || ev.metaKey,
                    isShift = ev.shiftKey,
                    ti = $ch.index(this),
                    li = $ch.index(last),
                    ai = $.inArray(this, sel);

                if (isShift || isCtrl) ev.preventDefault();

                $(sel).removeClass(settings.className);

                if (isCtrl) {
                    if (ai > -1)
                        sel
                        .splice(ai, 1)
                        .filter((x) => !x.classList.contains("selected-lock"));
                    else {
                        sel.push(this);
                        sel = sel.filter((x) => !x.classList.contains("selected-lock"));
                    }
                } else if (isShift && sel.length > 0) {
                    if (ti > li) ti = [li, (li = ti)][0];
                    sel = [...$ch.slice(ti, li + 1)].filter((x) => {
                        return !x.classList.contains("selected-lock");
                    });
                } else {
                    sel = ai < 0 || sel.length > 1 ? [this] : [];

                    sel.forEach((z) => {
                        if (z.classList.contains("selected-lock")) {
                            z.classList.remove("select-toggle");
                            sel = [];
                        }
                    });
                    if (!$(".crm-main-table").hasClass("select-toggle")) {
                        $("#hoverSelect").hide();
                    }
                    document.addEventListener("click", (e) => {
                        if (
                            e.target.closest(".crm-main-table")?.classList == null ||
                            !e.target
                            .closest(".crm-main-table")
                            .classList.contains("crm-main-table")
                        ) {
                            $(".crm-main-table").removeClass("select-toggle");
                            sel = [];
                        }
                    });
                }
                last = this;
                $(sel).addClass(settings.className);
                settings.onSelect.call(that, sel);
            });
        });
    };
})(jQuery);
$("table").select({
    children: ".crm-main-table", // Elements to target (default: "tbody tr")
    className: "select-toggle", // Desired CSS class  (default: "selected")
    onSelect: function(sel) {
        // Useful callback
        $(".count-hover").text(sel.length);
    },
});