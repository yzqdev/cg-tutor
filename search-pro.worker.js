const d=(o,a)=>{const i=o.toLowerCase(),e=a.toLowerCase(),s=[];let n=0,l=0;const c=(t,p=!1)=>{let r="";l===0?r=t.length>20?`… ${t.slice(-20)}`:t:p?r=t.length+l>100?`${t.slice(0,100-l)}… `:t:r=t.length>20?`${t.slice(0,20)} … ${t.slice(-20)}`:t,r&&s.push(r),l+=r.length,p||(s.push(["strong",a]),l+=a.length,l>=100&&s.push(" …"))};let h=i.indexOf(e,n);if(h===-1)return null;for(;h>=0;){const t=h+e.length;if(c(o.slice(n,h)),n=t,l>100)break;h=i.indexOf(e,n)}return l<100&&c(o.slice(n),!0),s},g=Object.entries,y=Object.keys,f=o=>o.reduce((a,{type:i})=>a+(i==="title"?50:i==="heading"?20:i==="custom"?10:1),0),$=(o,a)=>{var i;const e={};for(const[s,n]of g(a)){const l=((i=a[s.replace(/\/[^\\]*$/,"")])==null?void 0:i.title)||"",c=`${l?`${l} > `:""}${n.title}`,h=d(n.title,o);h&&(e[c]=[...e[c]||[],{type:"title",path:s,display:h}]),n.customFields&&g(n.customFields).forEach(([t,p])=>{p.forEach(r=>{const u=d(r,o);u&&(e[c]=[...e[c]||[],{type:"custom",path:s,index:t,display:u}])})});for(const t of n.contents){const p=d(t.header,o);p&&(e[c]=[...e[c]||[],{type:"heading",path:s+(t.slug?`#${t.slug}`:""),display:p}]);for(const r of t.contents){const u=d(r,o);u&&(e[c]=[...e[c]||[],{type:"content",header:t.header,path:s+(t.slug?`#${t.slug}`:""),display:u}])}}}return y(e).sort((s,n)=>f(e[s])-f(e[n])).map(s=>({title:s,contents:e[s]}))},m=JSON.parse("{\"/\":{\"/\":{\"title\":\"首页\",\"contents\":[]},\"/ae/\":{\"title\":\"ae\",\"contents\":[]},\"/blender/\":{\"title\":\"blender\",\"contents\":[{\"header\":\"目录\",\"slug\":\"目录\",\"contents\":[\"模型下载\",\"使用mmd\",\"mmd注意事项\",\"插件推荐\",\"blender\"]}]},\"/blender/blender-assets.html\":{\"title\":\"资产库\",\"contents\":[]},\"/blender/blender-models.html\":{\"title\":\"blender资源\",\"contents\":[{\"header\":\"模型下载\",\"slug\":\"模型下载\",\"contents\":[\"官方demo\",\"https://blendswap.com/blend/18811\",\"https://www.blender-3d.cn/\",\"https://sketchfab.com/\",\"https://www.blendermx.com/\",\"https://www.aigei.com/\",\"https://www.turbosquid.com/blender-models\",\"https://free3d.com/\",\"http://www.jusotu.com/category/3d.htm\",\"https://www.yunmoxing.com/\",\"http://blenderco.cn/\",\"https://blender.kim/\",\"https://www.artstation.com/\",\"https://www.blendermx.com/\"]},{\"header\":\"收费\",\"slug\":\"收费\",\"contents\":[\"收费珠峰\"]},{\"header\":\"材质下载\",\"slug\":\"材质下载\",\"contents\":[\"https://www.blendermx.com/\",\"https://www.poliigon.com/\",\"https://www.blenderkit.com/\",\"https://polyhaven.com/\",\"https://quixel.com/\",\"https://sketchfab.com/\",\"飞船模型 http://ship.shapewright.com/ ​\"]},{\"header\":\"原神模型下载\",\"slug\":\"原神模型下载\",\"contents\":[\"https://www.aplaybox.com/\",\"http://ys.biligame.com/pjdkx/\",\"http://ys.biligame.com/gczj/\",\"https://open3dlab.com/\",\"https://sketchfab.com/\",\"https://www.artstation.com/ ​\"]},{\"header\":\"使用blender和mmd\",\"slug\":\"使用blender和mmd\",\"contents\":[\"https://github.com/Manashiku/MMDGenshin\"]},{\"header\":\"mmd网站\",\"slug\":\"mmd网站\",\"contents\":[\"http://mmd.xiaolindraw.com/\",\"原神mmd\\nhttps://www.aplaybox.com/details/model/c9HNzdGMELyJhttps://www.bilibili.com/video/BV1wT4y1C7k9\"]}]},\"/blender/blender-rigging.html\":{\"title\":\"骨骼绑定\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"提示\",\"记得缩放之后要ctrl+a 应用全部变化,免得出问题\",\"打开Blender首选项设置，在插件搜索栏，搜索rig找到rigify 将模型调整到合适的比例(推荐使用单位M），Shift+A创建一个Human（Meta-RIg）\",\"绑定完成后,点击 generate rig,会生成一个rig\",\"后面绑定骨骼,先选中整个任务在选中rig(不要选metarig),ctrl+p点击自动权重,就绑定好了\",\"此时选中metaring就可以拖动做出动作了\"]}]},\"/blender/blender-shortkey.html\":{\"title\":\"快捷键\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"快捷键\"]}]},\"/blender/blender-use-mmd.html\":{\"title\":\"使用mmd\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"导入插件: blender_mmd_tools ​\",\"导入mmd https://github.com/GiveMeAllYourCats/cats-blender-plugin\"]},{\"header\":\"mmd使用\",\"slug\":\"mmd使用\",\"contents\":[\"先导入场景, \",\"隐藏底部坐标轴\",\"\\n然后导入人物,动作,相机动作,最后导入音乐wav\"]}]},\"/blender/mikumiku-dance.html\":{\"title\":\"mmd注意事项\",\"contents\":[{\"header\":\"地面不显示\",\"slug\":\"地面不显示\",\"contents\":[\"显示->关闭地面阴影\"]},{\"header\":\"背景异常\",\"slug\":\"背景异常\",\"contents\":[\"背景-> 模型绘制顺序->场景在最上面,模型在最下面\"]},{\"header\":\"导出镜头数据\",\"slug\":\"导出镜头数据\",\"contents\":[\"选择所有镜头帧->  文件=>保存动作数据(其他的类似)\"]}]},\"/blender/plugins.html\":{\"title\":\"插件推荐\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"提示\",\"https://github.com/agmmnn/awesome-blender\",\"blender插件目录\",\"https://docs.blender.org/manual/zh-hans/dev/advanced/blender_directory_layout.html For default installation location addons is usually found in;\",\"C:\\\\Program Files\\\\Blender Foundation\\\\blender[version]\\\\addons #steam D:\\\\SteamLibrary\\\\steamapps\\\\common\\\\Blender\\\\3.0\\\\scripts\\\\addons\",\"For the secondary \\\"User\\\" location, addons is usually found in;\",\"C:\\\\Users[profile]\\\\AppData\\\\Roaming\\\\Blender Foundation...\",\"Design note: the secondary location is typically used as a 'cache', the contents of which are copied back and forth between the temporary storage location and Blenders installation folder. This depends on the version of Blender used rather than the Operating System.\"]},{\"header\":\"bagapie\",\"slug\":\"bagapie\",\"contents\":[\"https://www.f12studio.fr/bagapiehttps://github.com/agmmnn/awesome-blender\"]},{\"header\":\"Poliigon Material Converter Addon for Blender\",\"slug\":\"poliigon-material-converter-addon-for-blender\",\"contents\":[\"https://help.poliigon.com/en/articles/2540839-poliigon-material-converter-addon-for-blender 万物有灵 https://shimo.im/docs/qjXWwYkGKccgXVgd/read\"]},{\"header\":\"Node Wrangler（免费，Blender自带）\",\"slug\":\"node-wrangler-免费-blender自带\",\"contents\":[]},{\"header\":\"MACHIN3tools\",\"slug\":\"machin3tools\",\"contents\":[\"MACHIN3tools 工具包是Blender软件的一个必装插件。作为一个免费的，不断发展的工具包，其在单个可自定义工具包中囊括了多种blender工具和pie菜单 官网MACHIN3tools\"]},{\"header\":\"Screencast-Keys\",\"slug\":\"screencast-keys\",\"contents\":[\"显示您的按键 https://github.com/nutti/Screencast-Keys\"]},{\"header\":\"drop it\",\"slug\":\"drop-it\",\"contents\":[\"https://github.com/maxivz/interactivetoolsblender\"]},{\"header\":\"super io\",\"slug\":\"super-io\",\"contents\":[\"https://github.com/atticus-lv/super_io\"]},{\"header\":\"edge flow\",\"slug\":\"edge-flow\",\"contents\":[\"https://github.com/BenjaminSauder/EdgeFlow\"]},{\"header\":\"blenderkit\",\"slug\":\"blenderkit\",\"contents\":[\"https://www.blenderkit.com/\"]}]},\"/blender/settings.html\":{\"title\":\"blender设置\",\"contents\":[{\"header\":\"界面\",\"slug\":\"界面\",\"contents\":[]},{\"header\":\"视图\",\"slug\":\"视图\",\"contents\":[]},{\"header\":\"其他设置\",\"slug\":\"其他设置\",\"contents\":[]},{\"header\":\"输入\",\"slug\":\"输入\",\"contents\":[]},{\"header\":\"视图切换\",\"slug\":\"视图切换\",\"contents\":[]},{\"header\":\"文件路径\",\"slug\":\"文件路径\",\"contents\":[]}]},\"/blender/sites.html\":{\"title\":\"一些网站\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"中文手册\",\"https://www.blendercn.org/\",\"https://www.blender.org/support/tutorials/\",\"斑斓魔法cg\"]}]},\"/blender/texture.html\":{\"title\":\"关于材质\",\"contents\":[]},\"/blender/tips.html\":{\"title\":\"一些小技巧\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"shift+d 复制物体\"]}]},\"/cg-tutor/\":{\"title\":\"cg教程\",\"contents\":[]},\"/cg-tutor/opensource.html\":{\"title\":\"开源软件\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"blender\",\"krita\",\"inkscape\",\"gimp\",\"shotcut\",\"mineimator\"]}]},\"/cg-tutor/sites.html\":{\"title\":\"一些网站\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"https://blendswap.com/\"]}]},\"/maya/\":{\"title\":\"maya教程\",\"contents\":[]},\"/maya/install.html\":{\"title\":\"安装maya软件\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"见龋齿一号\\n链接\\n设置语言切换:\\n在环境变量里面新建    MAYA_UI_LANGUAGE  并设置为zh_CN或者en_US切换中英文\"]}]},\"/ps/\":{\"title\":\"ps教程\",\"contents\":[]}}}");self.onmessage=({data:o})=>{self.postMessage($(o.query,m[o.routeLocale]))};
//# sourceMappingURL=original.js.map
