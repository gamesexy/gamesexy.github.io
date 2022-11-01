//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号

var backimg =[

  "url(/img/backimg/bg1.JPG)",

  "url(/img/backimg/bg2.jpg)",

  "url(/img/backimg/bg3.jpg)",

  "url(/img/backimg/bg4.JPG)",

  "url(/img/backimg/bg5.jpg)",

  "url(/img/backimg/bg6.jpg)",

  "url(/img/backimg/bg7.JPG)",

  "url(/img/backimg/bg8.jpg)",

  "url(/img/backimg/bg9.jpg)",

  "url(/img/backimg/bg10.jpg)"

];

//获取背景图片总数，生成随机数

var bgindex =Math.floor(Math.random() * (backimg.length));

//重设背景图片

document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];

//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号

var bannerimg =[

  "url(/img/backimg/bg1.JPG)",

  "url(/img/backimg/bg2.jpg)",

  "url(/img/backimg/bg3.jpg)",

  "url(/img/backimg/bg4.JPG)",

  "url(/img/backimg/bg5.jpg)",

  "url(/img/backimg/bg6.jpg)",

  "url(/img/backimg/bg7.JPG)",

  "url(/img/backimg/bg8.jpg)",

  "url(/img/backimg/bg9.jpg)",

  "url(/img/backimg/bg10.jpg)"
];

//获取banner图片总数，生成随机数

var bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));

//重设banner图片

document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];
