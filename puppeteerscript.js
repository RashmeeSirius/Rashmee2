const puppeteer = require('puppeteer');

let config = {
    launchOptions: {
        headless: false
    }
}

//locators: OR, PF

const homepage = {
    closebutton: 'button[class="_2AkmmA _29YdH8"]',
    searchbar: 'input[title="Search for products, brands and more"]',
   
    checklink: 'span[class="_2m9c-p"]',
    addtocartbutton: 'button[class="_2AkmmA _2Npkh4 _2MWPVK _18WSRq"]',
    cartbutton: 'a[class="_3ko_Ud"]',
   

}

puppeteer.launch(config.launchOptions).then(async broswer => {
    const page = await broswer.newPage();
    await page.goto('https://www.flipkart.com');
    await page.waitFor(homepage.closebutton);
    await page.click(homepage.closebutton);
    await page.waitFor(homepage.searchbar);
    await page.click(homepage.searchbar);
    await page.type(homepage.searchbar, "dress");
    await page.keyboard.press('Enter');
   
    

      const newPagePromise = getNewPageWhenLoaded()
      await new Promise(resolve => setTimeout(resolve, 7000));
      await page.evaluate(() => {
          document.querySelector('._2W-UZw').click();
          
        });
     
    
})