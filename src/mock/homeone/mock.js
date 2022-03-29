let Mock = require("mockjs")
// 随机数据
// let data = Mock.mock([{
//     "list|48": [{
//         "id|+1": 0,
//         "title": "@cword(20,30)",
//         "name": "@cname()",
//         "text1": "@increment(1000)",
//         "text2": "@increment(100)"
//     }]
// }])

// 自己写的数据
let data = [{
        id: 0,
        title: "aaaa",
        name: "肖战",
        text1: "16666",
        text2: "12"
    },
    {
        id: 1,
        title: "bbb",
        name: "嗷嗷",
        text1: "1222",
        text2: "12"
    },
    {
        id: 2,
        title: "cccc",
        name: "嘿嘿",
        text1: "1111",
        text2: "12"
    }, {
        id: 3,
        title: "dddd",
        name: "姐姐",
        text1: "1234",
        text2: "12"
    }
]
Mock.mock("/api/text1", "get", function (config) {
    return data
})
// 删除
Mock.mock(/\/api\/text1\/\d/, "delete", function (config) {
    let arr = config.url.split("/")
    let id = arr.pop()
    data.splice(id, 1)
    data = data.map(function (item, index) {
        return {
            id,
            title: item.title,
            name: item.name,
            text1: item.text1,
            text2: item.text2
        }
    })
    return data
})

// 添加
Mock.mock("/api/text1", "post", function (config) {
    let obj = JSON.parse(config.body)
    let name = obj.name
    let text = obj.text
    data.push({
        id: data.length,
        title,
        name,
        text1,
        text2
    })
    return data
})