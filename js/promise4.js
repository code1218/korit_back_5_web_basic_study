main();

function main() {
    new Promise((resolve, reject) => {
        let result = [];
        setTimeout(() => {
            resolve([result, 1]);
        }, 3000);
    })
    
    .then(([ result, num ]) => {
        result.push(num);
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([result, 2]);
            }, 2000);
        })
        
        .then(([ result, num ]) => {
            result.push(num);
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([result, 3]);
                }, 1000);
            })
            
            .then(([ result, num ]) => {
                result.push(num);
                return result;
            })
            
            .then(r => console.log(r));
        });
    });


}