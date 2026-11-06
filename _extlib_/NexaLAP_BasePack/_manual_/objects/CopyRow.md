<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Actions</strong>
  <span style="color:#d0d7de;">›</span>
  <span>CopyRow</span>
</div>
<hr/>

## 📦 NexaLAP_BasePack Manual

### 🔹CopyRow
> 데이터의 특정 행 데이터를 복사하는 Action

<br/>

#### 1. 기능 정의
`From Dataset`에 지정된 행 데이터를 `Target Dataset`의 새로운 행으로 **복사**한다.

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
      <td>From Dataset</td>
      <td><code>DatasetID</code></td>
      <td></td>
      <td>복사 할 원본 데이터 오브젝트 설정</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>Target Dataset</td>
      <td><code>DatasetID</code></td>
      <td></td>
      <td>데이터를 복사받을 데이터 오브젝트 설정</td>
    </tr>
  </tbody>
</table>