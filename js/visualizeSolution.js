(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Бонусное задание.
     * Необходимо взять реализацию функции solution и доработать,
     * добавив функционал, который позволит пошагово визуализировать работу данного алгоритма.
     * Сигнатуру функции можно выбрать наиболее удобную для вашей визуализации
     */
    function visualizeSolution() {
        // todo: визуализировать работу алгоритма
        var a = document.querySelectorAll(".map__cell");
        var col = a.length;
        var iter = 0;

        function visual(){
            a[iter].style.background = "white";
            setTimeout(function(){
                if(a[iter].classList[1] == "map__cell_island"){
                    a[iter].style.background = "green";  
                } else{
                   a[iter].style.background = "red"; 
                }
                iter++;
                if(iter < col) visual(); 
            },500);
        }  
        if(iter < col) visual();

        setTimeout(function(){
            iter = col-1;
            function visual2(){
                a[iter].style.background = "white";
                setTimeout(function(){
                    if(a[iter].classList[1] == "map__cell_island"){
                        a[iter].style.background = "#fad946";  
                    } else{
                       a[iter].style.background = "#65a6ff"; 
                    }
                    iter--;
                    if(iter > -1) visual2(); 
                },500);
            }
            if(iter <= col) visual2();
        }, col*550);
    }

    visualizeSolution();

    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution;
})(this);
