/*
京小超互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等Node.js用户在此处填写京小超商圈的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 SuperMarketShareCodes(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let SuperMarketShareCodes = [
  '-4msulYas0O2JsRhE-2TA5XZmBQ@eU9Yar_mb_9z92_WmXNG0w@eU9YaejjYv4g8T2EwnsVhQ',//账号一的好友shareCode,不同好友中间用@符号隔开
  'aURoM7PtY_Q@eU9Ya-y2N_5z9DvXwyIV0A@eU9YaOnjYK4j-GvWmXIWhA',//账号二的好友shareCode，不同好友中间用@符号隔开
]
// 判断github action里面是否有京小超商圈互助码
if (process.env.SuperMarketShareCodes) {
  if (process.env.SuperMarketShareCodes.indexOf('&') > -1) {
    console.log(`您的京小超商圈互助码选择的是用&隔开\n`)
    SuperMarketShareCodes = process.env.SuperMarketShareCodes.split('&');
  } else if (process.env.SuperMarketShareCodes.indexOf('\n') > -1) {
    console.log(`您的京小超商圈互助码选择的是用换行隔开\n`)
    SuperMarketShareCodes = process.env.SuperMarketShareCodes.split('\n');
  } else {
    SuperMarketShareCodes = process.env.SuperMarketShareCodes.split();
  }
}
for (let i = 0; i < SuperMarketShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['SuperMarketShareCode' + index] = SuperMarketShareCodes[i];
}