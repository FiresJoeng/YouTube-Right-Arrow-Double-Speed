# <img src="icon128.png" alt="YouTube-Right-Arrow-Double-Speed" width="32" height="32"> YouTube-Right-Arrow-Double-Speed
YouTube 右箭头二倍速

---

### 描述 / Description

将 YouTube 的长按 2 倍速快捷键修改为右箭头键，以便与中国大陆视频网站统一快捷键。  
A Chrome Extension. Designed to change YouTube's double-speed shortcut to the Right-Arrow key.  

### 安装 / Installation

1. 将仓库克隆或下载到本地。  
   Clone or download the repository to your local machine.
2. 打开 Chrome 浏览器，访问 `chrome://extensions/`。  
   Open Chrome and navigate to `chrome://extensions/`.
3. 启用“开发者模式”。  
   Enable "Developer Mode."
4. 点击“加载已解压的扩展程序”，选择包含项目文件的文件夹。  
   Click "Load unpacked" and select the folder containing the project files.

### 使用 / Usage

- 打开 YouTube 视频页面（包括 `www.youtube.com` 和 `youtu.be` 地址）。  
  Open any YouTube video page (including URLs like `www.youtube.com` and `youtu.be`).
- 按住右箭头键（→）超过 500 毫秒，视频将以 2 倍速播放；松开后恢复正常播放速度。  
  Long press the Right-Arrow key ( → ) for over 500 milliseconds to switch the video to double speed; releasing the key will revert the speed to normal.

### 文件结构 / File Structure

- **manifest.json** – Chrome 扩展的配置文件 / Configuration file for the Chrome extension.
- **content.js** – 主要脚本文件，处理快捷键逻辑 / Main script handling the key events.

### 注意事项 / Notes

- 请确保 Chrome 浏览器启用了开发者模式。  
  Make sure Developer Mode is enabled in Chrome.
- 此扩展仅适用于 YouTube 视频页面。  
  This extension is only applicable to YouTube video pages.
- 使用时可能与 YouTube 的原生快捷键产生冲突，必要时请调整相应按键事件。  
  There might be conflicts with YouTube's native shortcuts; adjust key events as necessary.
  