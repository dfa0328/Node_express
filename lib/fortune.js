var fortuneCookies=[
	'一二三四五',
	'上山打老虎',
	'老虎打不着',
	'打到小松鼠',
	'哈哈哈哈哈'
];

exports.getFortune=function(){
	var idx=Math.floor(Math.random()*fortuneCookies.length);
	return fortuneCookies[idx];
}	