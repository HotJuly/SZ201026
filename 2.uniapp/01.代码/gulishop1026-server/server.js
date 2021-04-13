const Koa = require('koa');
const KoaRouter = require('koa-router');
const Fly=require("flyio/src/node");
const jwt=require("jsonwebtoken");

const fly=new Fly;

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
	console.log('/getIndexData success');
	ctx.body=indexData
})


const categoryDatas = require('./datas/categoryDatas.json');
router.get('/getCategoryDatas',function(ctx){
	console.log('/getCategoryDatas success');
	ctx.body=categoryDatas;
})

const indexCateList = require('./datas/indexCateList.json');
router.get('/getindexCateList',async function(ctx){
	console.log('/getindexCateList success');
	await new Promise((resolve)=>{
		setTimeout(()=>{
			resolve()
		},2000)
	});
	ctx.body=indexCateList;
})

const goods = require('./datas/goods.json');
router.get('/getGoodDetail',function(ctx){
	let {goodId} = ctx.query;
	console.log('goodId',goodId)
	let good = goods.find((good)=>{
		return good.id===goodId>>>0;
	})
	console.log('/getGoodDetail success');
	ctx.body=good;
})

// 用于请求用户唯一标识OpenId
router.get('/getOpenId',async function(ctx){
	console.log('/getOpenId success');
	let {code} = ctx.query;
	let appid = "wxe5931a68ea66cece";
	let appsecret = "1288bbcdcba8c2d397c488982d38df2b";
	let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${appsecret}&js_code=${code}&grant_type=authorization_code`;
	let result = await fly.get(url);
	// console.log('result',result)
	let {openid} = JSON.parse(result.data);
	// console.log('openid',openid)
	
	// 加密openid
	// jwt.sign(需要加密的数据,盐)
	let salt = 'atguigu';
	let token = jwt.sign(openid,salt);
	// console.log('token',token);
	
	// 解密token
	// jwt.verify(token,盐)
	let newOpenId = jwt.verify(token,salt);
	console.log(openid,newOpenId);
	
	ctx.body=token;
	// ctx.body=categoryDatas;
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