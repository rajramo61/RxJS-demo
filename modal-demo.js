// let emit = function (subscriber) {
//     subscriber.next(0);
//     //subscriber.error("Failed to get data.");
// };
//
//
//
// let observable = Rx.Observable.create(subscriber => emit(subscriber));
// let subscribe = function (display) {
//     observable.subscribe(
//         data => display.innerHTML = data,
//         error => console.log("Error found : %s", error));
// };

console.log("starting");
let myCallback = function () {
    console.log("Call back is here");
};

let modalPopup = function(fileName, myCallback){
    console.log("called");
    $.get('http://127.0.0.1:8080/' + fileName)
        .done(function(data) {
            console.log("Got data %o", data);
            console.log("element = %s", $(".login1").text());
            $(".login1").text(data.data1);
            myCallback();
        })
        .fail(function(error) {
            console.log( "Error : %o", error );
        });

};

let userClicksSearchButton = Rx.Observable.fromEvent(
    $("#cancel"),
    'click'
).map((event) => {
    console.log("on click");
    return "RichardWarburton";
});

    userClicksSearchButton
        .flatMap((searchTerm) => {
            return Rx.Observable.fromPromise(
                $.get('https://api.github.com/users/' + searchTerm)
            );
        })
        .subscribe((response) => {
            console.log("Response data : %o", response);
            renderUser(
                response.login,
                response.html_url,
                response.avatar_url
            );
        });

function renderUser(login, href, imgSrc) {
    console.log("Login = %s, href = %s, image = %s", login, href, imgSrc);
    $('.data-from-modal').text(login);
    $(".image-from-modal").attr('src', imgSrc).show()
}