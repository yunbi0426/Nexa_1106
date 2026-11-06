<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Viewtemplates</strong>
  <span style="color:#d0d7de;">›</span>
  <span>FluidFreeformView</span>
</div>
<hr/>

## 📦 NexaLAP_BasePack Manual

### 🔸FluidFreeformView
 > Fluid 레이아웃 기반으로 다양한 컴포넌트를 활용한 단건 화면 구성을 지원하는 ViewTemplate

![image](../images/FluidFreeFormView.gif)


<br/>

#### 1. 기능 정의
Fluid 레이아웃 기반으로 화면 크기에 따라 컴포넌트 배치가 유연하게 조정되며, 데이터 유형에 맞는 다양한 컴포넌트를 활용하여 단건 입력·조회 중심의 화면을 효율적으로 구성할 수 있도록 제공되는 ViewTemplate입니다.

<br/>

#### 2. View Property
<table>
  <thead>
    <tr>
      <th style="text-align:center; min-width:100px;">Property명</th>
      <th style="text-align:center; min-width:80px;">유형</th>
      <th style="text-align:center; min-width:80px;">값</th>
      <th style="text-align:center; min-width:200px;">설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Layout</td>
      <td><code>Layout</code></td>
      <td></td>
      <td>View layout 설정</td>
    </tr>
    <tr>
      <td>Field width</td>
      <td><code>String</code></td>
      <td></td>
      <td>Component width 값 설정</td>
    </tr>
    <tr>
      <td>Label width</td>
      <td><code>String</code></td>
      <td></td>
      <td>Label width 값 설정</td>
    </tr>
  </tbody>
</table>

<br/>

#### 3. Field Property
<table>
  <thead>
    <tr>
      <th style="text-align:center; min-width:100px;">Property명</th>
      <th style="text-align:center; min-width:80px;">유형</th>
      <th style="text-align:center; min-width:80px;">값</th>
      <th style="text-align:center; min-width:200px;">설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Component type</td>
      <td><code>Enum</code></td>
      <td>auto | button | combo | edit | maskedit | textarea | static | radio | checkbox | spin | calendar | imageviewer | multicombo | checkboxset | progressbar | textfield | multilinetextfield | datefield</td>
      <td>Component의 Type 설정</td>
    </tr>
    <tr>
      <td>Left spacing</td>
      <td><code>String</code></td>
      <td></td>
      <td>왼쪽 Panel Padding 값 설정</td>
    </tr>
  </tbody>
</table>