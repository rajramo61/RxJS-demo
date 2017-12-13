let userClicksSearchButton1 = Rx.Observable.fromEvent(
    $("#cancel"),
    'click'
).map((event) => {
    console.log("on click");
    return "rajramo61";
});