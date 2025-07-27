if ($response.statusCode != 200) {
    $done(null);
}

var city0 = "薩格爾市";
var isp0 = "習維尼的中南海私人ISP";
var org0 = "習匪禁評姐夫的巴拿馬公司";

function City_ValidCheck(para, regionName, city) {
    if (regionName === "Taiwan") {
        return city;
    } else if (para) {
        return para;
    } else {
        return city0;
    }
}

function ISP_ValidCheck(para) {
    if (para) {
        return para;
    } else {
        return isp0;
    }
}

function ORG_ValidCheck(para) {
    if (para) {
        return para;
    } else {
        return org0;
    }
}

//version: 1.0
//no-sullah-bandits
//except: 亞塞拜然共和國🇦🇿 阿爾巴尼亞共和國🇦🇱 科索沃共和國🇽🇰 南蘇丹共和國🇸🇩
//no-communist-bandits
var flags = new Map([
    ["AC", "🇦🇨"],
    ["AE", "🐖7️⃣"],
    ["AF", "🐖💀"],
    ["AI", "🇦🇮"],
    ["AL", "🇦🇱"],
    ["AQ", "🇦🇶"],
    ["AR", "🇦🇷"],
    ["AS", "🇦🇸"],
    ["AT", "🇦🇹"],
    ["AU", "🇦🇺"],
    ["AW", "🇦🇼"],
    ["AX", "🇦🇽"],
    ["AZ", "🇦🇿"],
    ["BA", "🇧🇦"],
    ["BB", "🇧🇧"],
    ["BD", "🐖"],
    ["BE", "🇧🇪"],
    ["BF", "🇧🇫"],
    ["BG", "🇧🇬"],
    ["BH", "🐖"],
    ["BI", "🇧🇮"],
    ["BJ", "🇧🇯"],
    ["BM", "🇧🇲"],
    ["BN", "🐖"],
    ["BO", "🇧🇴"],
    ["BR", "🇧🇷"],
    ["BS", "🇧🇸"],
    ["BT", "🇧🇹"],
    ["BV", "🇧🇻"],
    ["BW", "🇧🇼"],
    ["BY", "⚪️🔴⚪️"],
    ["BZ", "🇧🇿"],
    ["CA", "🇨🇦"],
    ["CF", "🇨🇫"],
    ["CH", "🇨🇭"],
    ["CK", "🇨🇰"],
    ["CL", "🇨🇱"],
    ["CM", "🇨🇲"],
    ["CN", "💩🕷️"],
    ["CO", "🇨🇴"],
    ["CP", "🇨🇵"],
    ["CR", "🇨🇷"],
    ["CU", "💩🚬"],
    ["CV", "🇨🇻"],
    ["CW", "🇨🇼"],
    ["CX", "🇨🇽"],
    ["CY", "🇨🇾"],
    ["CZ", "🇨🇿"],
    ["DE", "🇩🇪"],
    ["DG", "🇩🇬"],
    ["DJ", "🇩🇯"],
    ["DK", "🇩🇰"],
    ["DM", "🇩🇲"],
    ["DO", "🇩🇴"],
    ["DZ", "🐖"],
    ["EA", "🇪🇦"],
    ["EC", "🇪🇨"],
    ["EE", "🇪🇪"],
    ["EG", "🐖"],
    ["EH", "🐖"],
    ["ER", "🐖"],
    ["ES", "🇪🇸"],
    ["ET", "🇪🇹"],
    ["EU", "🇪🇺"],
    ["FI", "🇫🇮"],
    ["FJ", "🇫🇯"],
    ["FK", "🇫🇰"],
    ["FM", "🇫🇲"],
    ["FO", "🇫🇴"],
    ["FR", "🇫🇷"],
    ["GA", "🇬🇦"],
    ["GB", "🇬🇧"],
    ["HK", "🏴"],
    ["HU", "🇭🇺"],
    ["ID", "🐖🐒"],
    ["IE", "🇮🇪"],
    ["IL", "🇮🇱"],
    ["IM", "🇮🇲"],
    ["IN", "🇮🇳"],
    ["IS", "🇮🇸"],
    ["IT", "🇮🇹"],
    ["JP", "🇯🇵"],
    ["KR", "🇰🇷"],
    ["LU", "🇱🇺"],
    ["MO", "🎰"],
    ["MX", "🇲🇽"],
    ["MY", "🐖🐎"],
    ["NL", "🇳🇱"],
    ["PH", "🇵🇭"],
    ["RO", "🇷🇴"],
    ["RS", "🇷🇸"],
    ["RU", "💩🏳️🖕"],
    ["RW", "🇷🇼"],
    ["SA", "🐖"],
    ["SB", "🇸🇧"],
    ["SC", "🇸🇨"],
    ["SD", "🐖"],
    ["SE", "🇸🇪"],
    ["SG", "🐖🍌"],
    ["TH", "🇹🇭"],
    ["TN", "🐖"],
    ["TO", "🇹🇴"],
    ["TR", "🐖🦃"],
    ["TV", "🇹🇻"],
    ["TW", "🇹🇼"],
    ["UK", "🇬🇧"],
    ["UM", "🇺🇲"],
    ["US", "🇺🇸"],
    ["UY", "🇺🇾"],
    ["UZ", "🇺🇿"],
    ["VA", "🇻🇦"],
    ["VE", "💩🚌"],
    ["VG", "🇻🇬"],
    ["VI", "🇻🇮"],
    ["VN", "🟡🔴🟡"],
    ["ZA", "⚫️"],
    ["UA", "🇺🇦"],
    ["MD", "🇲🇩"],
    ["AD", "🇦🇩"],
    ["AM", "🇦🇲"],
    ["AO", "🇦🇴"],
    ["KP", "🐖*️⃣3️⃣"],
    ["KY", "🇰🇾"],
    ["KZ", "🇰🇿"],
    ["NZ", "🇳🇿"],
    ["PK", "🐖"],
    ["NO", "🇳🇴"],
    ["PT", "🇵🇹"],
    ["PL", "🇵🇱"],
    ["GR", "🇬🇷"],
    ["NG", "🇳🇬"],
    ["MV", "🐖"],
    ["KH", "🇰🇭"],
    ["LA", "💩"],
    ["GU", "🇬🇺"],
    ["MN", "🇲🇳"],
    ["JO", "🐖"],
    ["IR", "🦁"],
    ["OM", "🇴🇲"],
    ["PS", "🐖🐸💩"],
    ["NP", "🇳🇵"],
    ["LB", "🐖"],
    ["IQ", "🐖"],
    ["SY", "🐖"],
    ["QA", "🐖☠️"],
    ["GE", "🇬🇪"],
    ["LK", "🇱🇰"],
    ["KG", "🇰🇬"],
    ["ME", "🇲🇪"],
    ["LT", "🇱🇹"],
    ["MT", "🇲🇹"],
    ["MC", "🇲🇨"],
    ["HR", "🇭🇷"],
    ["MK", "🇲🇰"],
    ["LV", "🇱🇻"],
    ["SK", "🇸🇰"],
    ["GI", "🇬🇮"],
    ["SM", "🇸🇲"],
    ["LI", "🇱🇮"],
    ["RE", "🇷🇪"],
    ["PA", "🇵🇦"],
    ["GL", "🇬🇱"],
    ["PE", "🇵🇪"],
    ["PY", "🇵🇾"],
    ["JM", "🇯🇲"],
    ["SR", "🇸🇷"],
    ["GT", "🇬🇹"],
    ["PR", "🇵🇷"],
    ["HN", "🇭🇳"],
    ["NI", "🇳🇮"],
    ["GH", "🇬🇭"],
    ["MA", "🐖"],
    ["LY", "🐖🟩"],
    ["KE", "🇰🇪"],
    ["MU", "🇲🇺"],
    ["TL", "🇹🇱"],
    ["SI", "🇸🇮"],
    ["GF", "🇬🇫"],
    ["TG", "🇹🇬"],
    ["XK", "🇽🇰"],
]);

var body = $response.body;
var obj = JSON.parse(body);
if (obj.timezone && obj.timezone.includes("Kiev")) {
    obj.timezone = obj.timezone.replace("Kiev", "Kyiv");
} //Glory to Ukraine🇺🇦
//var city = City_ValidCheck(obj['city'], obj['regionName'], obj['city']); //解決api將新北市等城市regionName返回為Taiwan問題
var title = flags.get(obj["countryCode"]) + " " + City_ValidCheck(obj["city"]);
var subtitle = obj["asname"];
var ip = obj["query"];
var description = "國家:" + obj["country"] + "\n" + "地區:" + obj["regionName"] + "\n" + "城市:" + City_ValidCheck(obj["city"]) + "\n" + "時區:" + obj["timezone"] + "\n" + "🌐" + "\n" + "IP地址:" + obj["query"] + "\n" + "供應商:" + ISP_ValidCheck(obj["isp"]) + "\n" + "資料中心:" + ORG_ValidCheck(obj["org"]);
$done({
    title,
    subtitle,
    ip,
    description
});