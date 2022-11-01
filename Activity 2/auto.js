let fs = require("fs");
let puppeteer = require('puppeteer');


let outputJSON=fs.readFileSync("output.json","utf-8");
let outputJSO=JSON.parse(outputJSON);
console.log(outputJSO);

async function run(){
    let browser=await puppeteer.launch({
        headless:false, //show browser opening
        args:[
            '--start-maximized'
        ],
        defaultViewport:null
    });

 

    let pages=await browser.pages(); //give all pages(tabs) available or already opened
    let page =pages[0];
    await page.goto("https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1635056153&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f0%2f%3fstate%3d1%26redirectTo%3daHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvMC8%26RpsCsrfState%3d225b28dd-1f58-b779-3bc4-d0a88353d269&id=292841&aadredir=1&whr=gmail.com&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015");
    
    await page.waitForSelector("div.placeholderContainer");//email
    await page.type("div.placeholderContainer","oshimanwal@gmail.com",{delay:200});

    await page.waitForSelector("input[type='submit']");//click next
    await page.click("input[type='submit']");

    await page.waitFor(5000);

    await page.waitForSelector("div.placeholderContainer");//pasword
    await page.type("div.placeholderContainer","siyaram95",{delay:200});

    await page.waitForSelector("input#idSIButton9");//click next
    await page.click("input#idSIButton9");

    await page.waitForSelector("input[type='submit']");//yes,keep login
    await page.click("input[type='submit']");



    for(let i=0;i<outputJSO.length;i++)
    {
             await page.waitFor(8000);

        //await page.waitForSelector("div._2nxYvsT9VmpG24V7lwcfcu");//newmsgtab
        //await page.click("div._2nxYvsT9VmpG24V7lwcfcu");

              await page.waitForSelector("button.ms-Button.m2Lea.b4BZP.ms-Button--commandBar.UhijP.root-173");//newmsgtab
               await page.click("button.ms-Button.m2Lea.b4BZP.ms-Button--commandBar.UhijP.root-173");

               await page.waitFor(5000);

       //<div dir="ltr" role="textbox" aria-multiline="true" aria-label="To" tabindex="0" class="QdX2d VOlRn" spellcheck="false" contenteditable="true" style="user-select: text;" aria-owns="suggestionHeader-list" aria-activedescendant=""><span id="sentinel">​</span></div>

        //await page.waitForSelector("input.ms-BasePicker-input.pickerInput_cc9894a7");//email of other
     // await page.type("input.ms-BasePicker-input.pickerInput_cc9894a7",outputJSO[i].Email,{delay:200});


             await page.waitForSelector( "div.QdX2d.VOlRn");//email of other
             await page.type("div.QdX2d.VOlRn",outputJSO[i].Email,{delay:200});
              await page.waitFor(3000);
             await page.keyboard.press('Enter');
             await page.waitFor(2000);


      //<input type="text" id="TextField63" class="ms-TextField-field field-231" maxlength="255" autocomplete="off" spellcheck="true" placeholder="Add a subject" aria-label="Add a subject" aria-invalid="false" value=""></input>

           await page.waitForSelector("div.LmMx2");//subject
           await page.click("div.LmMx2");
           await page.type("div.LmMx2","Your Project",{delay:100});


    //await page.waitForSelector("div._17TXFBLwNSbFtzG-omWTmr");//subject
    //await page.click("div._17TXFBLwNSbFtzG-omWTmr");
    //await page.type("div._17TXFBLwNSbFtzG-omWTmr","Your Project",{delay:100});

     
   // <div tabindex="0" dir="ltr" class="dbf5I Umiif tEMfE sBugl FiU6T" aria-multiline="true" aria-label="Message body, press Alt+F10 to exit" contenteditable="true" style="user-select: text; color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);" spellcheck="false"><div style="font-family: Calibri, Arial, Helvetica, sans-serif; font-size: 12pt; color: rgb(0, 0, 0);"><br></div></div>
    
   //await page.waitForSelector("div._16VySYOFix816mo3KsgOhw._1m89yrwkVHJAoAZ_JC8cw3._3VMDfFa1O01ntQj14k1rpD._2h8akM49fdZRv6KHq8jy75._3VQzn9yg47NIR2H1tIIeag");
    //await page.click("div._16VySYOFix816mo3KsgOhw._1m89yrwkVHJAoAZ_JC8cw3._3VMDfFa1O01ntQj14k1rpD._2h8akM49fdZRv6KHq8jy75._3VQzn9yg47NIR2H1tIIeag");
   // await page.type("div._16VySYOFix816mo3KsgOhw._1m89yrwkVHJAoAZ_JC8cw3._3VMDfFa1O01ntQj14k1rpD._2h8akM49fdZRv6KHq8jy75._3VQzn9yg47NIR2H1tIIeag",outputJSO[i].Name+" ,your project is on "+ outputJSO[i].Project,{delay:100});


          await page.waitForSelector("div.dbf5I.Umiif.tEMfE.sBugl.FiU6T");
          await page.click("div.dbf5I.Umiif.tEMfE.sBugl.FiU6T");
           await page.type("div.dbf5I.Umiif.tEMfE.sBugl.FiU6T",outputJSO[i].Name+" ,your project is on "+ outputJSO[i].Project,{delay:100});

           await page.waitFor(1000);

           await page.waitForSelector("button[title='Send (⌘+Enter)']");//newmsg
           await page.click("button[title='Send (⌘+Enter)']");


           //<span class="ms-Button-label ZZgmc label-175" id="id__226">New message</span>

           //await page.waitForSelector("button.ms-Button.m2Lea.b4BZP.ms-Button--commandBar.UhijP.root-173");//newmsgtab
           //await page.click("button.ms-Button.m2Lea.b4BZP.ms-Button--commandBar.UhijP.root-173");

          // <button type="button" class="ms-Button m2Lea b4BZP ms-Button--commandBar UhijP root-173" data-is-focusable="true" tabindex="0"><span class="ms-Button-flexContainer flexContainer-163" data-automationid="splitbuttonprimary"><i data-icon-name="ComposeRegular" aria-hidden="true" class="ms-Button-icon U7B9I icon-177"><span role="presentation" aria-hidden="true" class="rtm3y"><svg class="d36TZ" viewBox="0 0 16 16" focusable="false"><path d="M14.85 1.85a.5.5 0 10-.7-.7l-8 8L6 10l.85-.15 8-8zM4.5 2A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h7a2.5 2.5 0 002.5-2.5v-5a.5.5 0 00-1 0v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 11.5v-7C3 3.67 3.67 3 4.5 3h5a.5.5 0 000-1h-5z"></path></svg></span></i><span class="ms-Button-textContainer textContainer-164"><span class="ms-Button-label ZZgmc label-175" id="id__788">New message</span></span></span></button>
    }
    
    

    

    
  
        
    

       
    
       
    

    

    
  
        
    

       

       
        
}

run();