/*
num编号number,最好不要重复
name名字string,一般是中文
race种族,做人不要有种族歧视,不做人也一样,建议改成数字常量比如枚举
lv等级number,还没发现具体作用
moveType移动类型,与地形共同影响移动速度,建议改成数字常量比如枚举

health生命number,不大于0就屎了...
skill技能number,0表示无特殊技能,非0表示技能冷却时间
attack攻击力number,表示能对敌人造成的正常伤害
range攻击范围number,敌人的距离在自己范围内的时候可以发动攻击
speed攻击速度number,值为40表示每秒可攻击一次
move移动速度number,单位时间内能移动的距离
mp法力number,召唤时候需要消耗的量
summon召唤时间number,召唤单个怪物所需的时间
physicDamage物理损伤有效率number,乘以攻击方的攻击力可得到损伤值
magicDamage魔法损伤有效率number,乘以攻击方的攻击力可得到损伤值

explain解释,用来说明这是什么东西

atkType攻击类型Array,成员解释如下
attrib属性Attribute,可能是相克时候用到
indirect直间性boolean,直接攻击为false,间接攻击为true
isMagic物魔性boolean,物理为false,魔法为true
through贯通boolean,是否能贯通攻击,false表示攻击会被对方接下而不会往后继续传递
*/
const Race={//种族
	Human=0,//人类
	Beast=1,//兽族
	Dragon=2,//龙族
	Magic=3,//

}
const MoveType{//移动类型
	Walk=0,//步行
	Swin=1,//游泳
	Fly=2,//飞行
}
const Attribute={//属性
	None=0,//无
	Fire=1,//火
	Ice=2,//冰
	Thunder=3,//雷
	Ground=4//地
}

const monsterDataList=[
	{num:1,name:"弧光龙",race:Race.Dragon,lv:2,moveType:MoveType.Walk,
	health:50,skill:0,attack:25,range:8,speed:26,move:6,mp:6,summon:15,physicDamage:0.7,magicDamage:1.2,
	explain:"龙族之中最普通的龙，也可以说是在战斗方面，非常平衡的龙",
	atkType:{attrib:Attribute.None,indirect:false,isMagic:false,through:false}},

	{num:2,name:"大地龙",race:Race.Dragon,lv:3,moveType:MoveType.Walk,
	health:480,skill:0,attack:1,range:7,speed:14,move:5,mp:20,summon:30,physicDamage:0.7,magicDamage:1.3,
	explain:"4大元素龙之一。借助大地之力的技能，能让敌人陷入混沌之中",
	atkType:{attrib:Attribute.Ground,indirect:true,isMagic:false,through:true}},

	{num:3,name:"冰霜龙",race:Race.Dragon,lv:3,moveType:MoveType.Walk,
	health:440,skill:0,attack:1,range:7,speed:16,move:6,mp:20,summon:29,physicDamage:0.7,magicDamage:1.3,
	explain:"4大元素龙之一。受到它攻击的对手会附带冰冻伤害，身体变得无法动弹。",
	atkType:{attrib:Attribute.Ice,indirect:true,isMagic:false,through:true}},

	{num:4,name:"亚马逊女战士",race:Race.Beast,lv:2,moveType:MoveType.Walk,
	health:140,skill:0,attack:14,range:9,speed:29,move:7,mp:6,summon:12,physicDamage:1.0,magicDamage:1.0,
	explain:"从费门森林来的战斗民族。不知道她们会从战斗中找到怎样的生存意义.",
	atkType:{attrib:Attribute.None,indirect:true,isMagic:false,through:false}},
]

module.exports = {
	Race,
	MoveType,
	Attribute,
	monsterDataList
}