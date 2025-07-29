function mostFrequentNumber(arr) {
    const count = {};
    let maxCount = 0;
    let result = null;

    for (let num of arr) {
        // Tăng số lần xuất hiện
        // count[num] = (count[num] || 0 ) + 1;

        // count[num] count[3]..
        // num in 1, 2, 3, 2, 2, 1, 1, 4, 5, 10
        console.log('num', num, `count[${num}]`, count[num]);
        count[num] = (count[num] || 0) + 1;
        console.log('num', num, `count[${num}]`, count[num]);


        // Kiểm tra điều kiện
        // Nếu số này xuất hiện nhiều hơn -> Cập nhật
        // Nếu số này xuấy hiện bằng -> Chọn số lớn hơn
        if (count[num] > maxCount || (count[num] == maxCount && num > result)) {
            maxCount = count[num];
            result  = num;
        }
    }

    console.log(count, maxCount);
    return result;
}

console.log(mostFrequentNumber([1, 2, 3, 2, 2, 1, 1, 4, 5, 10]));


/**
 * count[1] = 0 + 1 = 1
 * 
 */