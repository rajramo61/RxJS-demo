
function getModalObservable(){
            return Rx.Observable.fromPromise(
                $.get('https://api.github.com/users/RichardWarburton')
            );
}





