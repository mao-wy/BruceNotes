# *React* 人事管理系统学前必读



1. 如何将完整版项目跑起来

首先需要修改服务器文件所连接的数据库地址

![image-20221124150944666](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-24-070945.png)

接下来你需要恢复韩老师给你的数据

在配套课件的第6课《本地搭建服务器环境》，里面有一个 *data_base_file* 的压缩包，解压之后就是 *csv* 格式的备份数据

> 第 6 课韩老师也详细介绍了如何进行数据库的恢复，同学们可以先耐心看到第 6 课后，之后再恢复数据把完整版项目跑起来

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-24-071317.png" alt="image-20221124151317231" style="zoom:50%;" />

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-11-24-071424.png" alt="image-20221124151423308" style="zoom:50%;" />

账号：*admin*

密码：*123qwe*



2. 关于 24 课部门信息模块的一个小 bug

该 *bug* 会导致在新增部门的时候出现错误，所以我们需要将 *client* 里面对应

*src ---> pages ---> department ---> component ---> FormComponent ---> index.jsx*

*127* 行

由原来的代码：

```js
updateDepartment({ type: 'departmentLeader' })
```

修改为：

```js
 modalType === 'update' && updateDepartment({ type: 'departmentLeader' });
```

对应第 24 课视频里面，也有对应提示，同学们到时候记得修改一下

