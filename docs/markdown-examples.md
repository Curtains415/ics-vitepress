# usePreviewImg

一个用于图片预览的 Vue 组合式函数（composable），基于 Ant Design Vue 的 Image 组件实现。

## 功能说明

`usePreviewImg` 提供了一个简单的方式来显示图片预览，支持多张图片的轮播预览功能。该 hooks 采用单例模式设计，确保在整个应用中只创建一个预览实例。

## API

### usePreviewImg()

获取图片预览实例的函数。

```ts
function usePreviewImg(): PreviewInstance
```

### PreviewInstance

返回的预览实例对象，包含以下方法：

#### show(config)

显示图片预览。

```ts
function show(config: PreviewConfig): void
```

##### 参数

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| config | PreviewConfig | 是 | 预览配置对象 |

##### PreviewConfig 配置项

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| list | string[] | 是 | 图片 URL 列表 |
| current | number | 否 | 当前显示的图片索引，默认为 0 |
<!-- | visible | Ref<boolean> | 否 | 控制预览显示状态的 Ref 对象 | -->

#### destroy()

销毁预览实例。

```ts
function destroy(): void
```

### 返回值

## 使用示例

```ts
import usePreviewImg from '@/composables/usePreviewImg';

// 获取预览实例
const previewInstance = usePreviewImg();

// 显示图片预览
previewInstance.show({
  list: [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
  ],
  current: 0 // 默认显示第一张图片
});

// 销毁预览实例（通常在组件卸载时调用）
previewInstance.destroy();
```

## 实现细节

1. **单例模式**: 通过 `instance` 变量确保全局只有一个预览实例。
2. **动态渲染**: 使用 Vue 的 `createVNode` 和 `render` 方法动态创建和渲染预览组件。
3. **DOM 管理**: 自动创建和清理用于挂载预览组件的 DOM 容器。
4. **响应式控制**: 利用 Vue 的响应式系统控制预览的显示和隐藏状态。

## 注意事项

1. 该 hooks 依赖 Ant Design Vue 的 `Image` 和 `ImagePreviewGroup` 组件，请确保已正确安装和配置。
2. 预览组件会自动在 body 下创建一个带有 `data-mark="image-preview"` 属性的 div 容器。
3. 当预览关闭时，会自动销毁组件并清理 DOM 元素。
