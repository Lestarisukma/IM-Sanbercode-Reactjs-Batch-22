var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

var currentTime = 1000
function execute(time){
    if(time !== 0){
        readBooks(time, books[i=0], function(newTime){
            execute(newTime);
        })
        i+=1;
    }
        
}
execute(currentTime)