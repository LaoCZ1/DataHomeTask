var now = new Date();
console.log( now ); // текущая дата

var endAction = new Date(2018, 5, 16, 17, 0, 0);
console.log(endAction); // дата окончания акции

var action = (endAction - now)/1000/60/60/24;
console.log(Math.floor(action)); // до конца акции (дней)


function d() {
document.getElementById('data').innerHTML = (Math.floor(action)) + ' дней!';
};

d();
