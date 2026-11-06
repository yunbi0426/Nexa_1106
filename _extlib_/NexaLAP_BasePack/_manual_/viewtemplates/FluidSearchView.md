<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Viewtemplates</strong>
  <span style="color:#d0d7de;">›</span>
  <span>FluidSearchView</span>
</div>
<hr/>

## 📦 NexaLAP_BasePack Manual

### 🔸FluidSearchView
 > Fluid 레이아웃 기반으로 화면 크기에 따라 검색 영역 배치가 유연하게 조정되는 검색 화면 구성을 위한 ViewTemplate

![image](../images/FluidSearchView.gif)


<br/>

#### 1. 기능 정의
Fluid 레이아웃 기반으로 화면 크기에 따라 조회 조건 필드 배치가 유연하게 조정되며, `searchbuttontype`에 따라 조회 버튼 위치를 설정하여 **검색 조건 입력 화면**을 효율적으로 구성할 수 있도록 제공되는 ViewTemplate입니다.

<br/>

#### 2.View Property
<table>
  <thead>
    <tr>
      <th style="text-align:center; min-width:100px;">그룹</th>
      <th style="text-align:center; min-width:100px;">Property명</th>
      <th style="text-align:center; min-width:80px;">유형</th>
      <th style="text-align:center; min-width:80px;">값</th>
      <th style="text-align:center; min-width:200px;">설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Basic</td>
      <td>Layout</td>
      <td><code>Layout</code></td>
      <td></td>
      <td>View layout 설정</td>
    </tr>
    <tr>
      <td>Field</td>
      <td>Field width</td>
      <td><code>String</code></td>
      <td></td>
      <td>Component width 값 설정</td>
    </tr>
    <tr>
      <td>Label</td>
      <td>Label width</td>
      <td><code>String</code></td>
      <td></td>
      <td>Label width 값 설정</td>
    </tr>
    <tr>
      <td>Search Button</td>
      <td>Search button type</td>
      <td><code>Enum</code></td>
      <td>top | middle | bottom | full</td>
      <td>Search button 위치 설정</td>
    </tr>
  </tbody>
</table>

<br/>

#### 3.Field Property
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
      <td>Component type 설정</td>
    </tr>
  </tbody>
</table>