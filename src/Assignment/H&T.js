// import { useState } from "react";

// export default function HeadTail() {
//   const [selection, setSelection] = useState("NO");
//   const [data, setData] = useState([]);

//   const handleSelection = () => {
//     if (selection === "NO") return;
//     if (data.length === 0) {
//       setData((pre) => [[selection]]);
//       return;
//     }
//     const lastArr = data[data.length - 1];
//     const lastItem = lastArr[lastArr.length - 1];
//     const arr = [...data];
//     if (lastItem === selection)
//       arr[arr.length - 1] = [...arr[arr.length - 1], selection];
//     else arr.push([selection]);
//     setData(arr);
//   };

//   return (
//     <>
//     <hr /> <br />
//     <div className="App" style={{marginLeft:"100px"}}>
//       <select  
//         onChange={(e) => setSelection(e.target.value)}
//       >
//         <option>Select value</option>
//         <option value="H">H</option>
//         <option value="T">T</option>
//       </select>
//       <button onClick={handleSelection}>Select</button>
//       <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
//         {data.map((item, idx) => (
//           <Col key={idx} data={item} />
//         ))}
//       </div>
//     </div>
//   </>
//   );
// }

// function Col({ data }) {
//   const style = {
//     display: "flex",
//     flexDirection: "column"
//   };
//   return (
//     <div style={style}>
//       {data.map((item, idx) => (
//         <p key={`${item}${idx}`}>{item}</p>
//       ))}
//     </div>
//   );
// }

import { useState } from "react";

export default function HeadTail() {
  const [selection, setSelection] = useState("default");
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleSelection = (e) => {
    if (e.target.value === "default") setIsError(true);
    else setIsError(false);
    setSelection(e.target.value);
  };

  const handleClick = () => {
    if (selection === "default") {
      setIsError(true);
      return;
    }

    if (data.length === 0) {
      setData((pre) => [[selection]]);
      setSelection("default");
      return;
    }

    const lastArr = data[data.length - 1];
    const lastItem = lastArr[lastArr.length - 1];
    const arr = [...data];

    if (lastItem === selection)
      arr[arr.length - 1] = [...arr[arr.length - 1], selection];
    else arr.push([selection]);

    setData(arr);
    setSelection("default");
  };

  return (
    <>
    <hr /> <br />
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <select
          value={selection}
          style={{ width: "300px", height: "40px", padding: ".5rem" }}
          onChange={handleSelection}
        >
          <option value="default">Select value</option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>
        <button style={{ height: "40px" }} onClick={handleClick}>
          Select
        </button>
      </div>
      {isError && (
        <p style={{ color: "red", textAlign: "center" }}>
          Please select value first
        </p>
      )}
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {data.map((item, idx) => (
          <Col key={idx} data={item} />
        ))}
      </div>
    </div>
    </>
  );
}

function Col({ data }) {
  const style = {
    display: "flex",
    flexDirection: "column"
  };
  return (
    <div style={style}>
      {data.map((item, idx) => (
        <p key={`${item}${idx}`}>{item}</p>
      ))}
    </div>
  );
}