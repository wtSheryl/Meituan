import React from 'react';
import {getAreaList} from '../../api/area.js';
import './index.css';

export const alphabet_map = [
		{"id":"#capitalA", "alphabet":"A"},
		{"id":"#capitalB", "alphabet":"B"},
		{"id":"#capitalC", "alphabet":"C"},
		{"id":"#capitalD", "alphabet":"D"},
		{"id":"#capitalE", "alphabet":"E"},
		{"id":"#capitalF", "alphabet":"F"},
		{"id":"#capitalG", "alphabet":"G"},
		{"id":"#capitalH", "alphabet":"H"},
		{"id":"#capitalJ", "alphabet":"J"},
		{"id":"#capitalK", "alphabet":"K"},
		{"id":"#capitalL", "alphabet":"L"},
		{"id":"#capitalM", "alphabet":"M"},
		{"id":"#capitalN", "alphabet":"N"},
		{"id":"#capitalP", "alphabet":"P"},
		{"id":"#capitalQ", "alphabet":"Q"},
		{"id":"#capitalR", "alphabet":"R"},
		{"id":"#capitalS", "alphabet":"S"},
		{"id":"#capitalT", "alphabet":"T"},
		{"id":"#capitalW", "alphabet":"W"},
		{"id":"#capitalX", "alphabet":"X"},
		{"id":"#capitalY", "alphabet":"Y"},
		{"id":"#capitalZ", "alphabet":"Z"}];



export const capital_map = [["鞍山","安庆","安阳","安丘","安顺","安康","安州区","阿荣旗","阿克苏","阿图什市",
		"阿勒泰市","安吉","阿拉善盟","安岳","安平","安溪","安宁","安化","阿拉尔","安福","安陆市","澳门",
		"阿勒泰","阿里","阿坝"],["北京","包头","保定","蚌埠","滨州","宝鸡","白城","霸州","巴彦淖尔","北海",
		"百色","巴中","毕节","保山","本溪","白银","白山","璧山","拜城县","巴楚县","宝应","北流","博爱",
		"巴彦县","宝丰","博兴","泌阳","彬县","北安市","博山","宾阳","泊头市","博罗县","博白县","北镇市",
		"滨海","北碚","博尔塔拉","巴州"],["重庆","成都","常州","长沙","长春","沧州","赤峰","慈溪","滁州","常熟",
		"常德","承德","郴州","潮州","从化","巢湖","朝阳","长兴","昌邑","苍南","长葛","池州","澄江县",
		"长乐","昌吉","澄迈县","崇左","楚雄","赤壁","淳安","承德县","昌乐","曹妃甸","磁县","长垣",
		"成安","昌黎","岑溪","茌平","曹县","城固","长汀","潮安","长寿","常山","赤水","慈利","常宁市",
		"茶陵","长丰县","苍溪县","长清区","崇明区","成武县","崇州","昌都"],["大连","东莞","大同","大庆","丹东","东营","德州","德阳","达州","定西",
		"邓州","东阳","大丰","东台","登封","儋州","都江堰","大石桥","大理","丹阳","当阳","东港","大足区",
		"定边县","定远县","德清县","大冶","东兴","大厂回族自治县","灯塔","大悟县","大通","东方","东平","电白",
		"东海","定州","郸城","大荔","达拉特旗","大竹","大洼","大邑","砀山","敦化","东光","道县","大安市",
		"安定县","垫江","东明县","定陶区","调兵山","敦煌","迪庆","德宏","大兴安岭"],["鄂尔多斯","鄂州","恩施","恩平","峨眉山","额敏县","额尔古纳"],["福州","佛山","阜阳","抚州","抚顺","阜新","涪陵","福清","奉化","肥城",
		"富阳","阜宁","防城港","富民","凤城","汾阳","阜康","丰城","范县","繁昌","肥乡","封丘","扶风",
		"凤凰","抚松","富顺","费县","佛冈","丰宁","扶沟","凤台","奉新","方城","富源县","分宜",
		"扶绥县","肥西县","繁峙县","凤翔县","福安","福鼎市","府谷县","奉节","丰都","肥东县","丰县"],["广州","贵阳","赣州","贵港","桂林","广元","广安","高州","高碑店","高密",
		"巩义","高邮","广饶","光山县","桂平","公主岭","光泽","广汉","藁城","高平","固始县","个旧","公安",
		"盖州","古交","格尔木","固原","灌云","灌南","赣榆","高安","广德","共青城","高阳","高陵",
		"甘孜","鼓浪屿","甘南","果洛","高雄"],["杭州","合肥","哈尔滨","衡阳","邯郸","惠州","呼和浩特","海口","湖州","淮安",
		"淮南","菏泽","黄石","黄冈","怀化","衡水","葫芦岛","河池","黄山","呼伦贝尔","黑河","鹤壁","河源",
		"贺州","鹤岗","红河","汉中","花都","海宁","惠东","惠阳","海城","海门","海阳","淮北","海安","化州",
		"合川","横店","桦川县","鹤山","桦甸","黄陵县","环县","华阴","合江县","侯马","哈密","海伦市","霍州",
		"黄骅","横山区","海林","汉南区","贺兰县","海盐","华容","淮阳","汉阴","含山","和县","户县","辉县",
		"怀仁","滑县","惠安","韩城","海东","华亭","洪洞","河口","辉南","洪湖","海沧","霍邱","珲春","怀宁",
		"怀远县","会泽县","河间市","合浦县","衡阳县","衡山县","衡东县","潢川县","河津","恒春","花莲","和田",
		"海西","海南州","黄南","海北","香港"],["济南","济宁","江阴","吉林","江门","嘉兴","金华","荆州","锦州","佳木斯",
		"揭阳","九江","焦作","晋江","晋城","晋中","即墨","景德镇","江都","酒泉","吉安","鸡西","济源",
		"靖江","金坛","胶州","句容","嘉善","京山","江山","建湖","晋州","景谷","建德","简阳","介休","嘉峪关",
		"集安","靖西县","精河县","蛟河","建阳","陕县","金堂","监利","江津","巨野","嘉祥","金乡","缙云",
		"祁县","江油","莒南","金昌","金湖","集美","金沙","泾县","吉安县","吉水县","江川县","江华瑶族自治县",
		"晋宁县","江永","建水县","鄄城县","靖边","嘉鱼县","九台","井冈山","嘉义市","基隆","九寨沟"],["昆明","昆山","开封","克拉玛依","开平","库尔勒","开化","开阳","奎屯","开州区",
		"垦利","宽城","库车","康县","喀什地区","克州","垦丁"],["连云港","临沂","洛阳","柳州","兰州","聊城","廊坊","辽阳","丽水","六安",
		"乐山","拉萨","龙岩","临汾","林州","来宾","泸州","辽源","吕梁","六盘水","丽江","莱芜","漯河",
		"溧阳","临海","兰溪","龙口","耒阳","莱州","临安","莱阳","陆丰","浏阳","廉江","娄底","凉山","临泉县",
		"临沧","陆川县","灵宝","冷水江","乐陵","临夏","龙海","醴陵","莱西","乐昌","乐平","阆中","鹿泉",
		"利川","老河口","凌海","滦南","灵山","连州","禄劝彝族苗族自治县","临江","连江","临朐","乐亭",
		"滦县","栾城","鲁山","灵石","临漳县","临潼","蓝田","临清","隆昌","鹿邑","柳河","临猗","梁山",
		"利津","临邑","龙泉","陵川","隆尧","雷州","栾川","龙游","兰陵","临沭","涟水","澧县","辽中","罗平县",
		"涟源市","庐江县","临颍","蓝山","隆回","芦溪","卢氏县","隆化县","洛宁","兰考县","临澧",
		"利辛","灵丘县","禄丰县","溧水区","泸县","洛川县","罗定市","乐东","梁平","临高县","罗源县","陵水",
		"陇南","林芝"],["绵阳","牡丹江","马鞍山","茂名","梅州","眉山","满洲里","梅河口","汨罗","明光",
		"麻城","孟州","明水县","密山","牟平","眉县","民权","渑池","绵竹","蒙阴","蒙自市","蒙城","勐腊县",
		"米易县","闽侯县","孟津","漠河","冥王星","苗栗"],["南京","宁波","南宁","南昌","南通","南阳","宁德","南充","南平","内江",
		"宁海","南安","南川","宁乡","南沙","宁远县","讷河","南雄","嫩江县","南乐","南陵","宁阳","宁国",
		"宁晋","宁津","内丘","南宫","内黄","南和","南部县","南皮县","宁陵","南郑县","宁蒗彝族自治县","那曲",
		"怒江","南投"],["莆田","盘锦","平顶山","濮阳","攀枝花","普洱","平凉","邳州","萍乡","普宁",
		"平度","彭州","蓬莱","平阳","沛县","平湖","浦江","磐石","平原","普兰店","鄱阳","蒲城","盘县",
		"平江","濮阳县","平山","平泉","平邑","平舆","彭水苗族土家族自治县","平遥","平果","平罗县",
		"平陆县","平阴县","平昌县","平南县","平潭","澎湖"],["青岛","秦皇岛","泉州","曲靖","衢州","清远","齐齐哈尔","钦州","七台河","庆阳",
		"迁安","青州","启东","潜江","黔东南","黔西南","迁西县","琼海","沁阳","邛崃","黔南","清丰","淇县",
		"全椒","栖霞","青田","清河","庆云","潜山","青县","祁东县","安庆县","杞县","青冈县","岐山县","琼中",
		"青阳县","清镇","綦江","清徐","齐河"],["日照","瑞安","荣成","乳山","如皋","汝州","如东","仁怀","瑞金","荣昌区",
		"仁寿","任丘","汝阳","瑞丽","任县","汝城县","容县","瑞昌","日喀则"],["上海","深圳","石家庄","苏州","沈阳","三亚","汕头","绍兴","松原","韶关",
		"邵阳","宿迁","十堰","宿州","舜德","上饶","商丘","石河子","三门峡","随州","绥化","双鸭山","汕尾",
		"遂宁","商洛","石嘴山","四平","三明","石狮","上虞","寿光","嵊州","沭阳","射阳","三河","朔州","舒城",
		"双城","绥宁县","陕州区","韶山","沙河","四会","松滋","舒兰","邵东","睢县","泗阳","沙雅","涉县",
		"神木","绥中","上高","石泉","泗洪","单县","沈丘","三门","睢宁","上蔡","遂昌","石岛","什邡","上杭",
		"嵩县","遂平","射洪","商河","泗水","社旗","泗县","深州市","上林县","商水县","双峰","遂川","上栗",
		"莎车县","肃宁县","商城县","桑植","石门","鄯善县","绥德县","沙县","深泽县","石柱","邵武",
		"寿县","三台县","山丹县","沙湾","三清山","神农架","山南","三峡"],["天津","太原","泰州","台州","唐山","泰安","桐乡","太仓","天水","铜仁",
		"通化","铁岭","铜陵","通辽","台山","泰兴","滕州","天门","天长","铜川","台湾","屯昌县","桐庐",
		"通河县","塔城市","洮南","桐城","同心县","通江县","唐河","通榆县","台前","太和","天台","太谷","藤县",
		"汤阴","土默特右旗","郯城","铜梁","同安","桃源","泰和县","铜鼓","田东县","太康县","通许县","通海县",
		"桃园","台东","台中","腾冲","台北","塔城","吐鲁番","台南"],["武汉","无锡","温州","潍坊","威海","芜湖","乌鲁木齐","渭南","吴江","温岭",
		"乌海","万州","梧州","武安","乌兰察布","文登","吴川","瓦房店","武威","婺源","武冈市","吴忠","望奎县",
		"武夷山","文昌","武穴","万宁","舞钢","武定","武陵","乌苏","无为","芜湖县","卫辉","乌拉特前旗","微山",
		"汶上","武城","围场","文山","武义","武鸣","威宁","舞阳","无极","万荣","万载","威县",
		"武平县","尉氏县","武隆县","五常市","旺苍县","温县","乌镇","武当山"],["西安","厦门","徐州","襄阳","湘潭","西宁","宣城","咸阳","许昌","信阳",
		"邢台","孝感","新乡","新泰","咸宁","新余","兴安盟","仙桃","兴化","西双版纳","辛集","新沂","新郑",
		"新密","忻州","信宜","萧县","息县","锡林郭勒","湘西","荥阳","孝昌县","兴宁","新民","项城","孝义","湘乡",
		"兴城","兴平","象山","修武","旬阳县","湘阴","夏津","响水","新化","仙居","襄垣","宣威","霞浦",
		"新安","新乡县","盱眙","徐闻","夏邑","浚县","西乡","西平","新乐","新昌","薛城","西华","浠水","香河",
		"信丰","新蔡","溆浦","淅川","新干","兴国县","新田","寻乌县","祥云县","襄城县","新宁","献县","新洲区",
		"秀山土家族苗族自治县","新野","仙游县","新津县","新北","西塘","香格里拉","新竹市"],["烟台","扬州","银川","盐城","岳阳","宜昌","营口","宜春","阳江","运城",
		"宜宾","榆林","益阳","义乌","宜兴","余姚","乐清","玉林","永州","永川","云浮","兖州","鹰潭",
		"永康","延边","阳泉","英德","仪征","永城","禹州","伊宁","延安","玉溪","伊川","永嘉县","偃师","扬中",
		"盂县","永济","禹城","义马市","阳朔","宜城","原平","宜良县","沅江","玉环","宜州市","雅安","永年",
		"阳城","云阳","叶县","易县","宜阳","阎良","原阳","虞城","玉山","阳谷","郓城","伊金霍洛旗","杨凌","沂水",
		"沂南","于都","宜丰","营山县","永安","鄢陵","永丰","永新","永兴县","攸县","永顺县","裕民县",
		"酉阳土家族苗族自治县","应县","阳山县","榆树市","沅陵县","永登县","鱼台县","宜都","宜兰","伊犁",
		"玉树","伊春"],["郑州","淄博","珠海","镇江","湛江","株洲","中山","周口","枣庄","漳州",
		"舟山","肇庆","张家口","遵义","张家港","诸暨","驻马店","昭通","张掖","自贡","涿州","章丘","邹城",
		"增城","枣阳","张家界","诸城","庄河","招远","遵化","资阳","中宁县","钟祥","镇雄县","枝江","漳浦",
		"樟树","中江县","正定","中牟","中卫","赵县","柘城","准格尔旗","周至","芷江","织金","漳平","资兴市",
		"扎兰屯市","忠县","柘荣","邹平","彰化","周庄"]];

export const cityArea_map = [
{"id":"capitalA","title":"A","cites":capital_map[0].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalB","title":"B","cites":capital_map[1].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalC","title":"C","cites":capital_map[2].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalD","title":"D","cites":capital_map[3].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalE","title":"E","cites":capital_map[4].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalF","title":"F","cites":capital_map[5].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalG","title":"G","cites":capital_map[6].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalH","title":"H","cites":capital_map[7].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalJ","title":"J","cites":capital_map[8].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalK","title":"K","cites":capital_map[9].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalL","title":"L","cites":capital_map[10].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalM","title":"M","cites":capital_map[11].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalN","title":"N","cites":capital_map[12].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalP","title":"P","cites":capital_map[13].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalQ","title":"Q","cites":capital_map[14].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalR","title":"R","cites":capital_map[15].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalS","title":"S","cites":capital_map[16].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalT","title":"T","cites":capital_map[17].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalW","title":"W","cites":capital_map[18].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalX","title":"X","cites":capital_map[19].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalY","title":"Y","cites":capital_map[20].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
{"id":"capitalZ","title":"Z","cites":capital_map[21].map(function(data){return (<li key={data}><a>{data}</a></li>)})},
]

var arrayCity = [["北京","天津","上海"],["重庆","新疆","西藏"],["宁夏","甘肃","青海"],
["陕西","黑龙江","吉林"],["辽宁","内蒙古","河北"],["河南","四川","贵州"],["云南","安徽","湖北"],
["湖南","山东","山西"],["江苏","浙江","福建"],["江西","广东","广西"],["海南","香港","澳门"],["台湾"]];
export const content = (
  <div style={{width:160}}>
    {
    	arrayCity.map(function(arrayCity) {
    		return (<div key={arrayCity} className="wrapper_province">
    			<a>{ arrayCity[0] }</a>
    			<a>{ arrayCity[1] }</a>
    			<a>{ arrayCity[2] }</a></div>)
    	})
    }
  </div>
)
var hubei = [{value: '武汉',label: '武汉'},{value: '黄石',label: '黄石'},{value: '十堰',label: '十堰'},
{value: '恩施',label: '恩施'},{value: '宜昌',label: '宜昌'},{value: '襄阳',label: '襄阳'},{value: '鄂州',label: '鄂州'},{value: '汉中',label: '汉中'}];

var hunan = [{value: '长沙',label: '长沙'},{value: '岳阳',label: '岳阳'},{value: '常德',label: '常德'},{value: '张家界',label: '张家界'},{value: '娄底',label: '娄底'},{value: '怀化',label: '怀化'},{value: '邵阳',label: '邵阳'},{value: '湘西土家族苗族自治区',label: '湘西土家族苗族自治区'},{value: '郴州',label: '郴州'},{value:'永州',label:'永州'}]

export const cityOptions = [{
  value: '北京',
  label: '北京',
  children: [{
    value: '北京',
    label: '北京',
    children: [{value:'昌平区',label:'昌平区'},{value:'朝阳区',label:'朝阳区'}]
    }],
}, {
  value: '湖南',
  label: '湖南',
  children: hunan
  },{
  value: '湖北',
  label: '湖北',
  children: hubei
}];