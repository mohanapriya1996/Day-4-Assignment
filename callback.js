let browser="chrome";
function checkBrowserVersion(callback)
{
    setTimeout(()=>
    {
        callback(browser)
    },     

2000);
}

function printBrowserVersion(version)
{
    console.log("The Browser Version is " +version);

}
checkBrowserVersion(printBrowserVersion);