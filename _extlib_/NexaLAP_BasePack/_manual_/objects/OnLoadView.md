<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Actions</strong>
  <span style="color:#d0d7de;">›</span>
  <span>OnLoadView</span>
</div>
<hr/>

## 📦 NexaLAP_BasePack Manual

### 🔹OnLoadView
> View 로드 시점에 초기화 로직을 수행하는 Action

<br/>

#### 1. 기능 정의
**View 로드 시점**에 사용자가 작성한 Script 로직을 실행한다.



<br/>

#### 2. 사용 방법
1\) OnLoadView Action을 설정한다.

2\) 현재 편집중인 xfdl 파일을 코드 에디터에서 열어, OnLoadView Action이 설정된 Component가 위치한 View의 Script 태그에 아래 내용을 작성한다.

```javascript
this._fnViewOnLoad = function(objForm) {
  /* View 초기화 시점에 실행시키고 싶은 Script 작성 */
  };
```