require.config({
	urlArgs: "ver=1.0_0",
	
	paths:{
		"vue":'vue.min2',
		"sortablejs":'Sortable',
		"vuedraggable":'vuedraggable'
		
	},
	shim:{
		'vue':{
            exports:'vue'
        } 
	}
}),

require(['vue','vuedraggable'],function(Vue,draggable){
	Vue.component('draggable', draggable);
	 new Vue({
        el: '#example',
        data: {
           list2:[
           {id:"id1",it:{name:'bbbb'}},
           {id:"id2",it:{name:'2222'}},
           {id:"id3",it:{name:'3333'}},
           {id:"id4",it:{name:'4444'}}
           ]
        },
        methods:{
			getdata: function(evt){
				console.log(evt.draggedContext.element.id);
			},
        	datadragEnd:function(evt){
				console.log('拖动前的索引：'+evt.oldIndex);
        		console.log('拖动后的索引：'+evt.newIndex);
				
        	}
        	
        }
    })
	
})
