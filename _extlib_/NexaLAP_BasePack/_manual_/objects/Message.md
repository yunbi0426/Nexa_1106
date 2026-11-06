<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Actions</strong>
  <span style="color:#d0d7de;">›</span>
  <span>Message</span>
</div>
<hr/>

## 📦 NexaLAP_BasePack Manual

### 🔹Message
> 알림, 확인 등의 메시지를 출력하는 Action

<br/>

#### 1. 기능 정의
`Message`에 설정된 문자열을 `Message type`에 따라 **알림창 또는 확인창**으로 출력한다.

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
      <td>Message</td>
      <td><code>MultilineString</code></td>
      <td></td>
      <td>메시지로 출력할 문자열 설정</td>
    </tr>
    <tr>
      <td>Message type</td>
      <td><code>Enum</code></td>
      <td>alert | confirm</td>
      <td>메시지 출력 타입 설정 <br/>
       (alert: 알림창, confirm: 확인창)</td>
    </tr>
  </tbody>
</table>