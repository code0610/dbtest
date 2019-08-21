import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Book from "@/components/Book"
import GuangBo from "@/components/GuangBo"
import Group from "@/components/Group"
import My from "@/components/My"

import DianYing from "@/components/Book/DianYing"
import DuShu from "@/components/Book/DuShu"
import DianShi from "@/components/Book/DianShi"
import TongChen from "@/components/Book/TongChen"
import Music from "@/components/Book/Music"

Vue.use(Router)

export default new Router({
	mode:"history",
  routes: [
   	{
   		path:"/",
   		component:Home
   	},
   	{
   		path:"/home",
   		name:"Home",
   		component:Home
   	},
   	{
   		path:"/book",
   		name:"Book",
   		component:Book,
   		children:[
   			{
   				path:"dy",
   				component:DianYing
   			},
   			{
   				path:"ds",
   				component:DuShu
   			},
   			{
   				path:"tv",
   				component:DianShi
   			},
   			{
   				path:"tc",
   				component:TongChen
   			},
   			{
   				path:"mc",
   				component:Music
   			}
   		]
   	},
   	{
   		path:"/guangbo",
   		name:"GuangBo",
   		component:GuangBo
   	},
   	{
   		path:"/group",
   		name:"Group",
   		component:Group
   	},
   	{
   		path:"/my",
   		name:"My",
   		component:My
   	}
  ]
})
