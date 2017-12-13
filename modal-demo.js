
let myCallback = function () {
    getModalObservable()
        .subscribe((response) => {
            console.log("Response data : %o", response);
            showUser(
                response.login,
                response.html_url,
                response.avatar_url
            );
        });
    $("#save-data").attr('data-dismiss', 'modal');
};

let modalPopup = function(fileName){
    $.get('http://127.0.0.1:8080/' + fileName)
        .done(function(data) {
            $(".login1").text(data.data1);
        })
        .fail(function(error) {
            console.log( "Error : %o", error );
        });

};

function showUser(login, href, imgSrc) {
    $('.data-from-modal').text(login);
    $(".image-from-modal").attr('src', imgSrc).show()
}