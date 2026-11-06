<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Actions</strong>
  <span style="color:#d0d7de;">›</span>
  <span>Transaction</span>
</div>
<hr/>

## 📦 NexaLAP_BasePack Manual

### 🔹Transaction
> 서비스를 호출해 데이터를 처리하는 Action

<br/>

#### 1. 기능 정의
`Service`에 지정된 Service를 `Parameters` 정보와 함께 호출하여 **데이터를 처리**한다.

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
      <td>Service</td>
      <td><code>ModelServiceID</code></td>
      <td></td>
      <td>트랜잭션을 호출할 Service 설정</td>
    </tr>
    <tr>
      <td>Parameters</td>
      <td><code>Contents</code></td>
      <td></td>
      <td>트랜잭션 호출 시 함께 전송할 파라미터 정보 설정</td>
    </tr>
  </tbody>
</table>