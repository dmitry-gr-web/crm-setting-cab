$('#container-scroll').customScroll({
    prefix: 'custom-scroll_',

    /* vertical */
    barMinHeight: 5,
    offsetTop: 5,
    offsetBottom: 5,
    /* will be added to offsetBottom in case of horizontal scroll */
    trackWidth: 10,

    /* horizontal */
    barMinWidth: 5,
    offsetLeft: 5,
    offsetRight: 5,
    /* will be added to offsetRight in case of vertical scroll */
    trackHeight: 10,

    /* each bar will have custom-scroll_bar-x or y class */
    barHtml: '<div />',

    /* both vertical or horizontal bar can be disabled */
    vertical: true,
    horizontal: true
});