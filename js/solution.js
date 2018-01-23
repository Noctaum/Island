(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */

    function solution(map) {
        // todo: подсчитать кол-во островов на карте
        
        var row = SHRI_ISLANDS.MAP.length;
        var islands = 0;
        var col = SHRI_ISLANDS.MAP[0].length;
        for(var i = 0; i < row; i++){
            if (SHRI_ISLANDS.MAP[i].length > col) col = SHRI_ISLANDS.MAP[i].length; 
            for(var j = 0; j < SHRI_ISLANDS.MAP[i].length; j++){
                if(SHRI_ISLANDS.MAP[i][j] == 1) islands++;
                if(SHRI_ISLANDS.MAP[i][j] == SHRI_ISLANDS.MAP[i][j+1] && SHRI_ISLANDS.MAP[i][j] == 1 ) islands--;
            }
        }

        for(j = 0; j < col; j++){
            for(i = 0; i < (row-1); i++){
                if(SHRI_ISLANDS.MAP[i][j] == SHRI_ISLANDS.MAP[i+1][j] && SHRI_ISLANDS.MAP[i][j] == 1 ) islands--;
            }
        }
        
        return islands;
    }
    root.SHRI_ISLANDS.solution = solution;
})(this);
