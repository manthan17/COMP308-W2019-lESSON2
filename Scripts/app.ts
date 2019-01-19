(function(){
    function Start(){
        const student: objects.Student = new objects.Student(23, "Manthan", "P12345");
    student.saysHello();
student.studies();
    }
    window.addEventListener("load", Start);
})();     