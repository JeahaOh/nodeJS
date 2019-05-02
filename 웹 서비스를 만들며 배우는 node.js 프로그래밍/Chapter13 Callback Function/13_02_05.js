const main = () => {
    for( let i = 0; i < 10; i++) {
        Crawling();
    }
};

const Crawling = () => {
    setTimeout( () => {
        console.log("Get Page");
        GetPage();
    }, 1000);
};

let page = 0;
const GetPage = () => {
    console.log("Page Process: %d", page);
    page++;
    if( page == 10 ) {
        console.log("Process Ended");
    }
};

main();