const axios = require('axios');

async function testCart() {
    try {
        console.log("1. Logging in...");
        const loginRes = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', {
            email: 'ahmed@example.com', // Need temp creds or just assume error
            password: 'Password123'
        });
        
        console.log("Login success! Token:", loginRes.data.token.substring(0, 15) + "...");
        
        console.log("\n2. Getting products...");
        const prodRes = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
        const firstProdId = prodRes.data.data[0].id;
        // console.log("First Product ID:", firstProdId); // This is what UI sends
        const firstProd_id = prodRes.data.data[0]._id;
        // console.log("First Product _id:", firstProd_id); 
        
        console.log("\n3. Adding to cart with product.id:", firstProdId);
        try {
            const addRes1 = await axios.post(
                'https://ecommerce.routemisr.com/api/v1/cart',
                { productId: firstProdId },
                { headers: { token: loginRes.data.token } }
            );
            console.log("SUCCESS with id:", addRes1.data);
        } catch (e) {
            console.log("FAILED with id:", e.response?.data || e.message);
        }
        
    } catch (e) {
        console.log("Error:", e.response?.data || e.message);
        // Let's just test product endpoint if login fails
        console.log("\nGetting products without login...");
        const prodRes = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
        console.log("First product id vs _id:");
        console.log(`id: ${prodRes.data.data[0].id}`);
        console.log(`_id: ${prodRes.data.data[0]._id}`);
    }
}

testCart();
