function calculate_average(){

    let number1 = 2;

    let number2 = 5;

    let average = (number1 + number2)/2;

    alert(average);

}
calculate_average()

function calc_area_rec(length, width){
    let area = length*width;
    alert ("The area of the rectangle with length "+length+" and width "+width+" is "+area+".")
}

calc_area_rec(4, 5)

function calc_vol_cube(side){

    let volume= side**3
    return ("the area of the cube with a side length of "+side+" is "+volume+".")
}
alert(calc_vol_cube(7))
function triangle(height, length){
    let area= height*length/2
    return ("the area of the triangle with a height of "+height+ " and a length of "+length+" is "+area+".")
    }
    alert(triangle(6, 8))