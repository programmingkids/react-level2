const ControlBox = ({handleChange, handleClick, data}) => (
  <div id="control">
    <div>
      項目：
      <input 
        type="text" 
        id="item" 
        autoComplete="off" 
        onChange={handleChange}
        value={data.item}
      />
    </div>
    <div>
      入出金：
      <select 
        id="payment" 
        onChange={handleChange} 
        value={data.payment}
      >
        <option value="">選択</option>
        <option value="in">入金</option>
        <option value="out">出金</option>
      </select>
    </div>
    <div>
      金額：
      <input 
        type="number" 
        id="amount" 
        autoComplete="off" 
        onChange={handleChange}
        value={data.amount}
      />
    </div>
    <div>
      <button onClick={handleClick}>登録</button>
    </div>
  </div>
);

export {ControlBox};
