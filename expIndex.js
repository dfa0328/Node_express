var express=require('express');
var app=express();


var fortunes=[
	'一二三四五',
	'上山打老虎',
	'老虎打不着',
	'打到小松鼠',
	'哈哈哈哈哈'
];	
	//设置handlebars视图引擎
var handlebars=require('express3-handlebars').create({defaultLayout:'main'});

	app.engine('handlebars',handlebars.engine);
	app.set('view engine','handlebars');

	app.set('port',process.env.PORT || 3000);

	app.use(express.static(__dirname + '/public'))
	
	app.get('/',function(req,res){
		res.render('home');
	});
	app.get('/about',function(req,res){
		var randomFortune=fortunes[Math.floor(Math.random()*fortunes.length)];
		res.render('about',{fortunes:randomFortune});
	})




	//定制404页面
	app.use(function(req,res,next){
		
		res.status(404);
		res.render('404');

	});

	//定制500页面

	app.use(function(err,req,res,next){
		console.log(err.stack);
		res.status(500);
		res.render('500');

	});

	app.listen(app.get('port'),function(){
		console.log('Express started on http://localhost:'+app.get('port')+';press Ctrl-C to terminate');
	});

