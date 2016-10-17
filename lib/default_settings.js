
var settings = {

    DEBUG: true,

    DATABASE: null, //数据库
    
    STATIC_URL: "/static/",     //http://localhost/static/[ you static files path]

    APPS: [
        "yinode#auth",
        "yinode#admin",
        "yinode#yinode"
    ]

}

function clone(myObj) {
    if (typeof (myObj) != 'object') return myObj;
    if (myObj == null) return myObj;
    
    var myNewObj;
    if (myObj.constructor) {
        myNewObj = new myObj.constructor();
    } else
        myNewObj = {}
    for (var i in myObj)
        myNewObj[i] = clone(myObj[i]);
    return myNewObj;
}

settings.clone = function (){
    return clone(this);
}

// 合并用户的设置
settings.marge = function (user_settings){
    if (!user_settings) {
        return;
    }
    
    for (var usi in user_settings) {
        if (this[usi] !== undefined) {
            if (this[usi] instanceof Array && user_settings[usi] instanceof Array) {
                this[usi] = user_settings[usi].concat(this[usi]);
            }else
                this[usi] = user_settings[usi];
        }
    }

}






module.exports = settings;