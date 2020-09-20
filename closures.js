export function parent(){
    const name= "John";

    function child(){
        alert(name);
    }

    //child();
    return child;
}