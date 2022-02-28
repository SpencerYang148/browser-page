## 搜索首页

### 本地开发
- `yarn dev`
- [开发环境链接](http://localhost:9000)

### 部署：Github Page
> 如果部署到Github Page，则使用该方式
- `yarn build:static`
- git push origin
- [Github Page](https://spenceryang148.github.io/browser-page/dist-static/)
  > Github Page的更新需等待1分钟才生效

### 部署：服务器
> 如果部署到服务器，则使用该方式
```shell
yarn
yarn build
yarn start
```