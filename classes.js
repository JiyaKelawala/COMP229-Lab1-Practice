class Vehicle{
    constructor(wheels){
        this.wheels=wheels;
    }
    toString(){
        return '('+ this.wheels +')';
    }
}

class Car extends Vehicle{
    constructor(color,wheel){
        super(wheel);
        this.color = color;
    }
    toString(){
        return "Wheels:" + super.toString()+ ' Color: '+this.color;
    }
}

