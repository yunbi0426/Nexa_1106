<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Actions</strong>
  <span style="color:#d0d7de;">›</span>
  <span>OpenPopup</span>
</div>
<hr/>

## 📦 NexaLAP_BasePack Manual

### 🔹OpenPopup
> 지정한 Form을 Popup 형태로 표시하는 Action

<br/>

#### 1. 기능 정의
`Form url`에 지정된 Form을 `Popup style` 설정에 따라 **Popup으로 오픈**하고, `Param dataset`으로 데이터를 전달하며 닫힐 때 `Return dataset`으로 **결과 데이터를 수신**한다.

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
      <td>Title</td>
      <td><code>MultilineString</code></td>
      <td></td>
      <td>팝업 타이틀로 표시할 텍스트 설정</td>
    </tr>
    <tr>
      <td>Form url</td>
      <td><code>URL</code></td>
      <td></td>
      <td>팝업으로 호출할 Form Url 설정</td>
    </tr>
    <tr>
      <td>Param dataset</td>
      <td><code>DatasetID</code></td>
      <td></td>
      <td>팝업 호출 시 전달할 파라미터 데이터 오브젝트 설정</td>
    </tr>
    <tr>
      <td>Return dataset</td>
      <td><code>DatasetID</code></td>
      <td></td>
      <td>팝업 닫힐 때 결과 데이터를 수신할 데이터 오브젝트 설정</td>
    </tr>
    <tr>
      <td>Auto size</td>
      <td><code>Boolean</code></td>
      <td>true | false</td>
      <td>팝업 크기 자동 조절 여부 설정</td>
    </tr>
    <tr>
      <td>Popup style</td>
      <td><code>Enum</code></td>
      <td>modal | modeless</td>
      <td>팝업 표시 방식 설정 <br/>(modal: 부모화면 제어 불가, modeless: 부모화면 독립)</td>
    </tr>
  </tbody>
</table>