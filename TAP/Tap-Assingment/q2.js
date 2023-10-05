
function findMiss(arr,N){
    let i;
    let temp = [];
    for (i = 0; i <= N; i++) {
                temp[i] = 0;
            }
    
            for (i = 0; i < N; i++) {
                temp[arr[i] - 1] = 1;
            }
    
            let ans = 0;
            for (i = 0; i <= N; i++) {
                if (temp[i] == 0)
                    ans = i + 1;
            }
            console.log(ans);
    }
    
            let arr = [ 1, 5, 4, 2 ,6];
            let n = arr.length;
    
            // Function call
        findMissing(arr,n);
    
    
        