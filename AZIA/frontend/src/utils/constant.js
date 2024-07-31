

const API_END_POINT ="http://localhost:8000/api/v1/user"
const KEY = import.meta.env.VITE_WEB_FORM_KEY;

const EMPTY_CART_IMAGE = "";
//https://media.istockphoto.com/id/1820157930/photo/question-mark-inside-shopping-cart-social-media-post-banner-poster-web-banner-discount.jpg?s=612x612&w=0&k=20&c=ArswooZn1gDBKgN7yWYmGJPKmyDSesSQA-1rkXhZBt8=
const ABOUT_AVTAAR = ""
//https://www.bing.com/images/search?view=detailV2&ccid=lk%2fDry1w&id=53C5D2B5B41F3057CA01E95EB8B22EF62BCC3711&thid=OIP.lk_Dry1wafucQMHsFB5LkAAAAA&mediaurl=https%3a%2f%2fwww.theridgemall.co.za%2fimages%2fST0RE-DIRECTORY%2fnew%2ffashion-fusion2.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.964fc3af2d7069fb9c40c1ec141e4b90%3frik%3dETfMK%252fYusrhe6Q%26pid%3dImgRaw%26r%3d0&exph=159&expw=250&q=fashion+fusion+logo&simid=608004509003222156&FORM=IRPRST&ck=1D0E6D89DBABFB5040E9DFD5DD1613FE&selectedIndex=2&itb=0
const supportLanguage = [
    {identifier : "en" , name : "Eng-EN"},
    //{identifier : "hin" , name : "हिंदी-HI"},
    //{identifier : "mar" , name : "मराठी-MR"},

  ];

export {API_END_POINT , KEY , supportLanguage ,EMPTY_CART_IMAGE ,ABOUT_AVTAAR}