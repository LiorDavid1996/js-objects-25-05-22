// var manger ={
//     firstName:"lior",
//     lastName:"david",
//     age:26,
//     wage:70000
// }

// var Employee={
//     fullName:"aviel-taka",
//     Birth:01/01/2000,
//     email:"avielta38@gmail.com",
//     Address:"herzel 35",
// }

// var banana={
//     name:"banana",
//     color:"yellow",
//     type:"fruit",
// }
// document.write(banana.name)
// document.write(banana.color)
// document.write(banana.type)
 
// var cllass ={
//     class:"12",
//     studentsNum :"5",
//     studentsaNmes: ["lior","avi","or","natan","yoni"]
// }
// for(i=0;i<cllass. studentsaNmes.length;i++){
//     document.write(cllass. studentsaNmes[i]+"<br>")
// }

// var Kindergarten={
//     naniName:"rina",
//     kidsNum:"10",
//     kidsName:["lior","or","shir","dan","gal","avi","yoni","hen","maor","shlev"]
// }
// for(i=0;i<Kindergarten["kidsName"].length;i++){
// document.write(Kindergarten.kidsName[i]+"<br>")}

// var user=prompt("enter key")
// document.write(Kindergarten[user])

// var curs={};
// curs.cursNum=prompt("enter curs num")
// curs.students=prompt("enter students num")
// curs.stAge=prompt("enter age")
// console.log(curs);

// var techer={}
//  var keyFormUser=prompt("your key");
//  var valueFormUser=prompt();
//  techer[keyFormUser]=valueFormUser;
//  console.log(techer);

//  var manger={}
// for(var i=0;i<4;i++){
//     var keyFormUser4=prompt("your key");
//  var valueFormUser4=prompt();
//  manger[keyFormUser4]=valueFormUser4;
// }console.log( manger);

// var carsArray=[]
// for(var i=0;i<4;i++){
//     var car={};
//     car.brand = prompt("enter the car brand")
//     car.color = prompt("enter the car color")
//     car.year = prompt("enter the car year")
//     carsArray.push(car)
//     document.write("<div>"+car.brand+""+car.color+""+car.year)

// } console.log(carsArray);

// function catFun (){
//     for(var i=0;i<3 ;i++){
//   var  cat={}
//   cat.name=prompt("enter cat name")
//   cat.year=prompt("enter cat year")
//   cat.type=prompt("enter cat type")
//   cat.whit=prompt("enter cat whit")
//   document.write("<h1>"+cat.name+" "+cat.year+" "+cat.type+" "+cat.whit+"</h1>")}
// } catFun()

// function dogsFun (){
//     var user=prompt()
//     for(var i=0;i<user ;i++){
//  var dogs={}
//  dogs.name=prompt("enter dog name")
//  dogs.year=prompt("enter dog year")
//  dogs.type=prompt("enter dog type")
//  dogs.ornerName=prompt("enter cat whit")
// document.write("<p>"+dogs.name+" "+dogs.year+" "+dogs.type+" "+dogs.ornerName +"</p>")}
//     } dogsFun()

// function bugObjects(){
//     var user=prompt()
//     for(i=0;i<user;i++){
//      var bugs={};
//      bugs.name=prompt("enter bug name")
//      bugs.scientificName=prompt("enter Scientific name")
//      bugs.legsNum=prompt("enter number of legs ")
//      bugs.flay=confirm("do the bug have flay")
//      if(bugs.flay==true){
//         document.write("<h3>"+bugs.name+" "+bugs.scientificName+" "+bugs.legsNum+"</h3>");
//      }
//     }
// }bugObjects()

// function kidsInKindergartenObjects(){
//     var user=prompt("enter the number of kids")
//     for(i=0;i<user;i++){
//         var kidsObjects={};
//     kidsObjects.fullName=prompt("enter full name")
//     kidsObjects.age=prompt("enter age")
//     kidsObjects.kindergarten=confirm("he is in the Kindergarten")
//     if(kidsObjects.age>4){
//         document.write("<p>"+kidsObjects.fullName+" "+kidsObjects.age+" "+kidsObjects.kindergarten+"</p>")
//     }
// }
// }kidsInKindergartenObjects()

// function pcObjects(pc){
// for(i=0;i<=pc;i++){
//    var Computers={}
//    Computers.company=prompt("enter your computer company")
//    Computers.model=prompt("enter your computer model")
//    Computers.Weight=prompt("enter your computer weight")
//    Computers.stock=confirm("Is it in stock")
//    if(Computers.stock==true && Computers.Weight>2){
//        document.write("<p>"+Computers.company+" "+Computers.model+" "+Computers.Weight+" "+Computers.stock+"</p>")
// }
// }
// }pcObjects(3)

// function teacher(teacherNum){
//     for(var i=0;i<teacherNum;i++){
//         var teacher={}
//         teacher.fullName=prompt("enter your full name")
//         teacher.HourlyWage=prompt("enter your Hourly wage")
//         teacher.email=prompt("enter your email")
//         teacher.YearOfBirth=prompt("enter your year of birth")
//         if(teacher.HourlyWage>100||teacher.YearOfBirth<1990){
//             document.write("<span>"+teacher.fullName+" "+teacher.HourlyWage+" "+teacher.email+" "+teacher.YearOfBirth+"</span>")
//         }
//     }
// }teacher(2)

// function furnitureObjects(furn){
//     for(i=0;i<furn;i++){
//       var  furniture={}
//       furniture.name=prompt("enter the furniture name")
//       furniture.brand=prompt("enter the furniture brand")
//       furniture.array=["fox","home center","shofersall","baitili"] 
//       document.write(furniture.name)
//     }
//      document.write(+"<br>"+ furniture.array)
// }furnitureObjects(2)

// function apartmentObjects(aprt){
//     for(var i=0;i<aprt;i++){
//     var apartment={}
//     apartment.address=prompt("ender apartment address")
//     apartment.priceForRenting=prompt("ender Price for renting the apartment")
//     apartment.priceForTheSale=prompt("ender Price for sale of the apartment")
//     apartment.OptionalBuyers =["natan","lior","aviel","or"]
//     apartment.mediation=confirm("Is there mediation")
//     if(apartment.mediation==false){
//         document.write(apartment.address+"<br>"+apartment.OptionalBuyers)
//     }
// }
// }apartmentObjects(3)

// function bitHabad(){
//     var user=prompt("numbers of Country")
//     for(i=0;i<user;i++){
//     var Country={}
//     Country.name=prompt("enter country name")
//     Country.Residents=prompt("enter number of residents")
//     Country.city=["london","brisel","adis"]
//     Country.doTheHaveBitHabad=confirm("Is there a Chabad house in the city")
//      if(Country.doTheHaveBitHabad==true){
//          document.write(Country.name+"<br>"+Country.city+"<br>")
//      }
// }
// }bitHabad()

