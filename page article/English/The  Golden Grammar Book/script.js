var price1 = [0,0];
var price2 = [0,0];
var price3 = [20,3];
var price4 = [0,0];
var contentGGB = {
    title: "The Golden Grammar Book",
    href: "page article/English/The Golden Grammar Book/index.html",
    alt:"The Golden Grammar Book",
    itemName: "The Golden Grammar Book",
    price1:price1,
    price2:price2,
    price3:price3,
    price4:price4,
    priceArray: [price1,price2,price3,price4],
    tags: ["English"]
}
for (let i = 0; i < contentGGB.priceArray.length; i++) {
    if(contentGGB.priceArray[i][1] != 0){
        contentGGB.tags.push(i);
    }
}
export const GGB = contentGGB;