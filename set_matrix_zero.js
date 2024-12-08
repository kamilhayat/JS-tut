


// function markRow(matrix, n, m, i) {
//     for (let j = 0; j < m; j++) {
//         if (matrix[i][j] != 0) {
//             matrix[i][j] = -1;
//         }
//     }
// }
// function markCol(matrix, n, m, j) {
//     for (let i = 0; i< n; i++) {
//         if (matrix[i][j] != 0) {
//             matrix[i][j] = -1;
//         }
//     }
// }
// function setMatrixZero(matrix, n, m) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (matrix[i][j] == 0) {
//                 markRow(matrix, n, m, i)
//                 markCol(matrix, n, m, j)
//             }
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (matrix[i][j] == -1) {
//                 matrix[i][j] = 0;
//             }
//         }
//     }
//     return matrix
// }



//better apparoach using some space

function matrixzero2(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const row = new Array(n).fill(0);
    const col = new Array(m).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] == 0) {
                row[i] = 1;
                col[j] = 1;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
];

// const n = matrix.length;
// const m = matrix[0].length;

const ans = matrixzero2(matrix);

console.log("The Final matrix is:");
for (const row of ans) {
    console.log(row.join(" "));
}    