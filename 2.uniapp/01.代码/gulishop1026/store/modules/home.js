import ajax from '../../utils/ajax.js';
import {SETINDEXDATA} from '../mutation-types.js';
const state = {
	initData:"我是初始化数据",
	indexData:{}
};

const mutations = {
	[SETINDEXDATA](state,indexData){
		state.indexData = indexData;
	}
};

const actions = {
	async getIndexData({commit}){
		// 注意:action不是我们调用的,我们调用的是dispatch,所以action能接受什么参数,都是由Vuex决定
		let indexData = await ajax('/getIndexData');
		// this.indexData=indexData;
		console.log('indexData',indexData)
		commit(SETINDEXDATA,indexData);
	}
};

const getters = {
	
};

export default{
	state,
	mutations,
	actions,
	getters
}