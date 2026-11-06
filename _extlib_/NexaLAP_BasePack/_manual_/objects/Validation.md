<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Actions</strong>
  <span style="color:#d0d7de;">›</span>
  <span>Validation</span>
</div>
<hr/>

## 📦 NexaLAP_BasePack Manual

### 🔹Validation
> 데이터의 유효성을 검증하는 Action

<br/>

#### 1. 기능 정의
`Target dataset`에 지정된 데이터를 `Rules`에 설정된 **유효성 검증 규칙**에 따라 검증한다.

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
      <td>Target dataset</td>
      <td><code>DatasetID</code></td>
      <td></td>
      <td>유효성 검증 대상 데이터 오브젝트 설정</td>
    </tr>
    <tr>
      <td>Rules</td>
      <td><code>ValidationRule</code></td>
      <td></td>
      <td>적용할 유효성 검증 규칙 설정</td>
    </tr>
  </tbody>
</table>