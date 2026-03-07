const { chromium } = require('playwright');

(async () => {
    // Launch browser
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    // Listen for all network responses to catch the cart API call
    page.on('response', async response => {
        if (response.url().includes('/api/v1/cart') && response.request().method() === 'POST') {
            console.log('--- CART API RESPONSE ---');
            console.log('Status:', response.status());
            const text = await response.text();
            console.log('Body:', text);
            console.log('Headers Sent:', response.request().headers());
            console.log('-------------------------');
        }
    });

    console.log("Navigating to localhost:3000...");
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

    console.log("Waiting for products to load and Add to Cart button...");
    await page.waitForSelector('button:has-text("Add to cart")');

    console.log("Clicking the first Add to Cart button...");
    const buttons = await page.$$('button:has-text("Add to cart")');
    if (buttons.length > 0) {
        await buttons[0].click();
        
        // Wait a bit to let the API call happen
        await page.waitForTimeout(3000);
    } else {
        console.log("No Add to Cart button found");
    }

    await browser.close();
})();
