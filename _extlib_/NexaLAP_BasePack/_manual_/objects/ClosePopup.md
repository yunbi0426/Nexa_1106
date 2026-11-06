<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Actions</strong>
  <span style="color:#d0d7de;">›</span>
  <span>ClosePopup</span>
</div>
<hr/>

## 📦 NexaLAP_BasePack Manual

### 🔹ClosePopup
> 현재 표시 중인 Popup을 닫는 Action

<br/>

#### 1. 기능 정의
현재 **Popup을 닫고**, `Return data flag` 설정에 따라 `Return dataset`에 지정된 데이터를 부모 화면에 **반환**한다.

<br/>

#### 2. Action Property
<table>
  <thead>
    <tr>
      <th width="150">Property명</th>
      <th width="100">유형</th>
      <th width="100">값</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Return dataset</td>
      <td><code>DatasetID</code></td>
      <td></td>
      <td>팝업 닫을 때 부모 화면에 반환할 데이터 오브젝트 설정</td>
    </tr>
    <tr>
      <td>Return data flag</td>
      <td><code>Boolean</code></td>
      <td>true | false</td>
      <td>팝업 닫을 때 데이터 반환 여부 설정</td>
    </tr>
  </tbody>
</table>