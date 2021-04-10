const Koa = require('koa');
const KoaRouter = require('koa-router');

/*
 1.创建服务器应用实例
 const app = express();
*/

const app = new Koa();

/*
	3.注册路由,实现响应返回
		app.get('/home',function(){})
		1)创建路由器实例
		2)使用中间件函数
			app.use(中间件函数)
			用处:
				1.修改请求报文数据
				2.修改响应头配置
		3)注册路由
			路由的回调函数
				express 
					1.请求报文对象 request
					2.响应报文对象 response
					3.执行下一个中间键 next
				koa
					1.ctx -> request+response
					2.next -> 执行下一个中间键
					ctx.body=想要返回的数据
*/
const router = new KoaRouter();
app.use(router.routes());
	// .use(router.allowMethods())
router.get('/test',function(ctx,next){
	console.log('/test success');
	ctx.body="test success"
})

const indexData = require('./datas/index.json');
router.get('/getIndexData',function(ctx){
	console.log('/test success');
	ctx.body=indexData
})


/*
	2.监听并运行koa服务器在电脑的某个端口上
*/
app.listen('3001',function(error){
	if(error){
		console.log("服务器运行失败",error);
		return;
	}else{
		console.log("服务器成功运行于http://localhost:3001");
	}
})