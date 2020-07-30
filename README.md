### vue 后台项目建立记录



#### 1、创建一个vue项目

​	

运行下面的命令创建一个新项目：

```

vue create test-project

```

![1596093449767](C:\Users\liyi\AppData\Roaming\Typora\typora-user-images\1596093449767.png)



接下来会提示选择一个 preset (预设)

默认 （babel + esling）适合快速创建新项目，适合初学者使用

Manually select features  手动设置，可以配置更多的选项



看一下手动设置的选项

![1596093634388](C:\Users\liyi\AppData\Roaming\Typora\typora-user-images\1596093634388.png)



babel   必选

typeScript   可选

progressive web app support 支持渐进式网页应用程序  可选 

router  路由管理器 必选

vuex  状态管理器 必选

css  Pre-processors    css预处理  必选

linter / formatter  代码风格、格式校验

unit Testing  单元测试 可选

e2e Test  端对端测试  可选



看了一下有几个都不太知道啥意思，于是又去网上搜了一下。



babel

​	共分为三个阶段： 解析、转换、生成

​	我大概理解就是处理编译过程中的兼容性问题，从这三个阶段也不难猜出，大概意思就是把不同语言进行解析，转换生成同一种浏览器可以识别的语言。

​	可以参考知乎的文章：<https://zhuanlan.zhihu.com/p/43249121>



progressive web app support 渐进式网页应用 PWA

​	弥合了网站 (Website) 和移动应用（Mobile APP）之间的差异，大概意思就是说，你觉得自己用的是一个移动应用，实际上它的运行机制是网站。可以直接通过 url 连接在浏览器中访问，不需要提交到应用商店去。

​	说白了，这个 PWA 就是使用制作网站的方式去做移动应用。

​	参考文章：<https://www.jianshu.com/p/8905357e6f2f>



css  Pre-processors    CSS 预处理器

“用一种专门的编程语言，进行 Web 页面样式设计，再通过编译器转化为正常的 CSS 文件，以供项目使用”。

大白话就是，使用一种特殊的编程语言，把我们写的 css 变成可以复用变量，函数等，然后再通过编译器把这种语言转化为 css 语言。

常用的 CSS 预处理器：

- SASS：基于 Ruby，通过服务端处理，功能强大。解析效率高。需要学习 Ruby 语言，上手难度高于 LESS。
- LESS：基于 NodeJS，通过客户端处理，使用简单。功能比 SASS 简单，解析效率也低于 SASS，但在实际开发中足够了，所以我们后台人员如果需要的话，建议使用 LESS。



所以最终我选择： babel 、progressive web app support、router 、vuex  、css  Pre-processors、linter / formatter 六项。

然后会有其他的选项，比如css预处理语言  less  sass选择，我这里选的 node-scss



到这里一个vue项目基本就创建完成了。



> 结尾：
>
> 需要注意的是，在创建项目之前我们需要先安装好项目运行环境。所以就需要提前安装好node并配置好node环境，然后安装vue-cli才能用上面命令安装。如果没有安装，可以继续往下看： 2、node 安装及环境配置



#### 2、node 安装及环境配置



1、官网下载安装包 <https://nodejs.org/en/>

![1596098390960](C:\Users\liyi\AppData\Roaming\Typora\typora-user-images\1596098390960.png)





2、下载完成后，双击"node-vx.x.x-x64.msi",开始安装

![img](https://img.jbzj.com/file_images/article/201709/201709181401222.png)



点击【Next】



![img](https://img.jbzj.com/file_images/article/201709/201709181401223.png)

点击【Next】

![img](https://img.jbzj.com/file_images/article/201709/201709181401234.png)



修改目录之后，继续点击【Next】按钮

![img](https://img.jbzj.com/file_images/article/201709/201709181401235.png)

这里需要点击第四项，直接将node.js 添加到环境变量中，不选这一项的话，后面需要自己去配置环境变量。然后点击【Next】按钮

![img](https://img.jbzj.com/file_images/article/201709/201709181401236.png)

安装完成之后，点击【finishh】按钮完成安装

![img](https://img.jbzj.com/file_images/article/201709/201709181401237.png)



3、测试安装

node.js基本已经安装好了，可以通过下面的方式测试是否安装成功

【win + R】键，输入 cmd ，回车， 打开命令窗口

![img](https://img.jbzj.com/file_images/article/201709/201709181401238.png)



输入 node -v

![img](https://img.jbzj.com/file_images/article/201709/201709181401239.png)



node 安装后的目录

![img](https://img.jbzj.com/file_images/article/201709/2017091814012310.png)



> 新版的Node.js已自带npm，安装Node.js时会一起安装，npm的作用就是对Node.js依赖的包进行管理，也可以理解为用来安装/卸载Node.js需要装的东西



4、环境配置

这里的环境配置，主要是配置npm安装的全局模块所在的路径，以及缓存cache的路径；

比如我们运行命令： npm install yarn -g   就可以把npm安装好的全局的 yarn 放在我们配置好的路径下。

这样可以避免C盘空间占用。



具体操作：

打开我们上面看到的nodeJS目录，创建两个文件夹【node_global】和【node_cache】

![img](https://img.jbzj.com/file_images/article/201709/2017091814012311.png)



创建完之后，按键【win + R】, 输入 cmd, 打开命令框，输入

npm config set prefix "D:\Develop\nodejs\node_global"

npm config set cache "D:\Develop\nodejs\node_cache"

![img](https://img.jbzj.com/file_images/article/201709/2017091814012412.png)



配置好之后，开始设置环境变量。

关闭命令窗口， 我的电脑-右键-属性-高级系统设置-高级-环境变量











了解vue配置参数

 

文档学习：

​	有些针对 `@vue/cli` 的全局配置，例如你惯用的包管理器和你本地保存的 preset，都保存在 home 目录下一个名叫 `.vuerc` 的 JSON 文件。你可以用编辑器直接编辑这个文件来更改已保存的选项。

你也可以使用 `vue config` 命令来审查或修改全局的 CLI 配置。



这里看到一个 preset ，不知道什么意思，于是就去查了一下。

> preset（预设）。preset其实是你在create新vue项目的时候，生成的插件配置项预设，也就是你在项目中需要用到的插件安装成功了之后，会生成一个关于preset的文件，当你再次create新的vue项目的时候，就不需要再去选择同样的插件，直接用preset安装就好了。



