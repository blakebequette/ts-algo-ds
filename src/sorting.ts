const aa = [] as number[]
const b = [1]
const c = [5, 2, 1, 4, 3]

function bubbleSort(arr: number[]): number[] {
    for (let i=0; i<arr.length-1; i++){
        for (let j=i+1; j<arr.length; j++){
            if (arr[i] > arr[j]){
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

function insertionSort(arr: number[]): number[] {
    for (let i=0; i<arr.length; i++){
        const focus = arr[i]
        for (let j=i-1; j>=0; j--){
            if (arr[j] > focus){
                arr[j+1] = arr[j]
                arr[j] = focus
            } else {
                break
            }
        }
    } 
    return arr
}

function quickSort(arr: number[]): number[] {
    if (arr.length < 2) return arr
    const pivot = Math.floor(Math.random()*arr.length)
    const pivotVal = arr[pivot]
    let left = []
    let right = []
    for (let i=0; i<arr.length; i++){
        if (i != pivot){
            if (arr[i] < pivotVal){
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
    }
    return [...quickSort(left), pivotVal, ...quickSort(right)]
}

function mergeSort(arr: number[]): number[] {
    function splitAr(ar0: number[]): [number[], number[]] {
        const mid = Math.floor(ar0.length / 2)
        return [ar0.slice(0, mid), ar0.slice(mid,)]
    }
    function merge2Ar(ar1: number[], ar2: number[]): number[] {
        let result: number[] = []
        let n
        while (ar1.length && ar2.length){
            if (ar1[0] < ar2[0]){
                result.push(ar1.shift() as number)
            } else {
                result.push(ar2.shift() as number)
            }
        }
        while (ar1.length){result.push(ar1.shift() as number)}
        while (ar2.length){result.push(ar2.shift() as number)}
        return result
    }

    function inner(ar: number[]){
        if (ar.length < 2) return ar
        const [a, b] = splitAr(ar)
        return merge2Ar(a, b)
    }

    return inner(arr)
}

const fns = [bubbleSort, insertionSort, quickSort, mergeSort]
const fnNames = ['bubble sort', 'insertion sort', 'quick sort', 'merge sort']

const ex1: number[] = []
const ex2 = [5]
const ex3 = [6, 3, 5, 2, 1, 4]
const C = 10000 // length of array
const long = Array(C).fill(0).map(_ => Math.floor(Math.random()*C))
const correct = long.sort()
for (let i=0; i<fns.length; i++){
    const start = performance.now()
    console.log(fnNames[i])
    const fnSol = fns[i](long)
    console.log(JSON.stringify(ex1) === JSON.stringify(fns[i](ex1)))
    console.log(JSON.stringify(ex2) === JSON.stringify(fns[i](ex2)))
    console.log(JSON.stringify([1, 2, 3, 4, 5, 6]) === JSON.stringify(fns[i](ex3)))
    console.log(JSON.stringify(fnSol) === JSON.stringify(correct), performance.now() - start)

}