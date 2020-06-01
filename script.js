function fiboSequence(n){

    var nums = [];

    var num = 0;

    var nextNum = 1;

    var tempNum = 0;



    for (var x = 0; x < n; x++){

        nums.push(num);

        tempNum = num + nextNum;

        num = nextNum;

        nextNum = tempNum;

    }

    return nums;

}

