<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Actions</strong>
  <span style="color:#d0d7de;">›</span>
  <span>CopyData</span>
</div>
<hr/>

## 📦 NexaLAP_BasePack Manual

### 🔹CopyData
> 다른 데이터 값을 지정한 데이터로 복사하는 Action

<br/>

#### 1. 기능 정의
`From Dataset`에 저장된 전체 데이터를 `Target Dataset`으로 **복사**하여 동일한 데이터 구조와 내용을 구성한다.

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