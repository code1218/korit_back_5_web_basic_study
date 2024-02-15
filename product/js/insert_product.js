/**
 * servlet 프로젝트명: product
 * group_id: com.study
 * artifact_id: product
 * name: product
 * jdk: 11
 * dependencies
 *  1. lombok
 *  2. jsp
 *  3. Gson
 *  4. mysql
 * 
 * package
 *  com.study.product
 *      config  -   DBConfig
 *      dao     -   ProductDao
 *      entity  -   Product
 *      filter  -   CommonFilter
 *      servlet 
 *              -   InsertProductServlet(/product, POST)
 *              -   SearchProductServlet(/products, GET)
 * 
 * DB(db_study)
 * table(product_tb)
 * product_id, product_name(유니크), product_price, product_size(SS, S, M, L, XL, XXL)
 *  
 */


async function handleAddClick() {
    const productInputs = document.querySelectorAll(".product-inputs");

    const product = {
        productName: productInputs[0].value,
        productPrice: parseInt(productInputs[1].value),
        productSize: productInputs[2].value,
    }

    try {
        const response = await fetch("http://localhost:8080/product/product", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });

        if(!response.ok) {
            throw await response.json();
        }

        const responseData = await response.json();
        console.log(responseData);
        alert(`${responseData.successCount}건의 상품 추가 완료`);

    } catch(error) {
        alert(error?.errorMessage);
    }

}