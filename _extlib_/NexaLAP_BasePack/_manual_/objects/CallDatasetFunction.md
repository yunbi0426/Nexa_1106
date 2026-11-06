<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Actions</strong>
  <span style="color:#d0d7de;">›</span>
  <span>CallDatasetFunction</span>
</div>
<hr/>

## 📦 NexaLAP_BasePack Manual

### 🔹CallDatasetFunction
> 선택한 데이터를 기반으로 다양한 데이터 관련 Function을 실행하는 Action

<br/>

#### 1. 기능 정의
선택한 데이터를 기반으로 **다양한 데이터 관련 Function을 실행**한다.

`Function list` Property를 통해 실행할 Function을 선택할 수 있으며, 데이터 추가, 복사, 삭제, 초기화, 필터링 등의 기능을 수행할 수 있다.

제공되는 Function은 아래와 같다.
- `popupCopyData`  : **Popup의 데이터**를 지정한 데이터로 **복사**한다.

- `addRow`  : 데이터의 마지막 위치에 **새로운 행을 추가**한다.

- `insertRow`  : 데이터의 특정 위치에 **새로운 행을 삽입**한다.

- `copyData`  : **전체 데이터**를 다른 데이터로 **복사**한다.

- `copyRow`  : 특정 행 데이터를 **다른 데이터의 새로운 행으로 복사**한다.

- `deleteData`  : 데이터의 **전체 데이터를 삭제**한다.

- `deleteRow`  : 데이터의 **특정 행 데이터를 삭제**한다.

- `clearData`  : 데이터의 **전체 데이터를 초기화**한다.

- `filterData`  : 지정한 Column과 값을 기준으로 **데이터를 필터링**한다.

<br/>

#### 2. Action Property
<table>
  <thead>
    <tr>
      <th width="150">Property명</th>
      <th width="100">유형</th>
      <th>값</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Function list</td>
      <td><code>Enum</code></td>
      <td>popupCopyData | addRow | insertRow | copyData | copyRow | deleteData | deleteRow | clearData | filterData</td>
      <td>실행할 데이터 관련 Function 설정</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>Source dataset</td>
      <td><code>DatasetID</code></td>
      <td></td>
      <td>Function 실행 기준이 될 데이터 오브젝트 설정</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>Target dataset</td>
      <td><code>DatasetID</code></td>
      <td></td>
      <td>Function 실행 대상이 될 데이터 오브젝트 설정</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>Filter column</td>
      <td><code>ColumnID</code></td>
      <td></td>
      <td>데이터 필터링 기준이 될 Column 설정</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>Filter value</td>
      <td><code>String</code></td>
      <td></td>
      <td>필터링에 사용할 값 설정</td>
    </tr>
  </tbody>
</table>