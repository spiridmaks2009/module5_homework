let arr = [1, 1, 1, 1, 11];
flag = true;
for (let i=0; i < arr.length-1; i++) {
    if (arr[i] !== arr[i+1]) {
        flag = false;
    }
}
console.log(flag);

