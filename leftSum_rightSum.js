function processData(input) {
    var res = input.split("\n");
    line = -1;                          //variable to count stdin lines
    T = res[++line];
    for(i=0; i<T; i++) {
        N = res[++line];
        A = res[++line];
        arr = A.split(" ");
        f=0;
        for(j=1; j<N-1; j++) {
            sum1 = 0;
            sum2 = 0;
            for(k=0; k<j; k++) {
                console.log(parseInt(arr[k]));
                sum1 += parseInt(arr[k]);
            }
            if(sum1==parseInt(arr[j])) {
                for(l=j+1;l<N;l++){
                    console.log(parseInt(arr[k]));
                    sum2 += parseInt(arr[l]);
                }
            }
            console.log(sum1 + " : " + sum2);
            if(sum1 == sum2 && sum1==parseInt(arr[j])) {
                console.log("YES");
                f=1;
            }
        }
        if(f==0)
            console.log("NO");
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
