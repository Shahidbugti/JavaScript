const marks = prompt("Enter your marks");
if(marks >= 80){
    document.write("A+");
}
else if(marks >=70 && marks < 80){
    document.write("A");
}
else if(marks >=60  && marks < 70){
    document.write("B");
}
else{
    document.write("You need to improve");
}