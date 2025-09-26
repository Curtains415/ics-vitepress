# ICS组件文档

这是一个使用 VitePress 构建的文档网站，用于展示 ICS 组件和 hooks。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建静态文件
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 部署

### 部署到 Netlify

1. 将代码推送到 GitHub 仓库
2. 在 [Netlify](https://netlify.com) 上创建新站点
3. 选择您的仓库
4. Netlify 会自动检测到 `netlify.toml` 配置文件并使用以下设置：
   - 构建命令: `npm run docs:build`
   - 发布目录: `docs/.vitepress/dist`
5. 点击部署

### 部署到 GitHub Pages

项目已配置 GitHub Actions 工作流，推送到 `main` 分支时会自动部署到 GitHub Pages。

### 部署到 GitLab Pages

项目已配置 `.gitlab-ci.yml`，推送到 `main` 分支时会自动部署到 GitLab Pages。