const puppeteer = require('puppeteer');

let config = {
    launchOptions: {
        headless: false
    }
}

//locators: OR, PF

const homepage = {
    searchbar: 'input[id="twotabsearchtextbox"]',
    addtocartbtn: 'input[id="add-to-cart-button"]',
    cartbtn: 'a[id="hlb-view-cart-announce"]',
    proceedtobuybtn: 'span[id="sc-buy-box-ptc-button-announce"]',
   

}

puppeteer.launch(config.launchOptions).then(async broswer => {
    const page = await broswer.newPage();
    await page.goto('https://www.amazon.in/Giordano-Analog-Digital-Black-Dial-Watch/dp/B07ZRTZ69N/ref=sr_1_1_sspa?dchild=1&keywords=watch&qid=1593587780&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFLNFNJT1dWU0lZOFAmZW5jcnlwdGVkSWQ9QTAwNTcxMDAxRVBYTU9VWlVGTEMyJmVuY3J5cHRlZEFkSWQ9QTA3MDQ5NzAzNTlENEJKUFhaQkRaJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==');
    //await page.waitFor(homepage.searchbar);
    //await page.type(homepage.searchbar, "watch");
    //await page.keyboard.press('Enter');
   
      
      //await new Promise(resolve => setTimeout(resolve, 7000));
      //await page.evaluate(() => {
        //document.querySelector('.a-price-whole').click();
          
       //});
      



       await (await page.waitFor(homepage.addtocartbtn)).click();
       await (await page.waitFor(homepage.cartbtn)).click();
       await (await page.waitFor(homepage.proceedtobuybtn)).click();

     
    
})