import "./App.css";
import * as React from "react";
import { useAreaSelection, useSelected } from "./area-selection";
import ImageMixer from "./ImageMixer";

const SelectionContext = React.createContext(null);

const boxStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#fff",
  width: "10px",
  height: "10px",
};

let sIndex = [];

const Box = ({ index }) => {
  const ref = React.useRef(null);
  const selection = React.useContext(SelectionContext);
  const isSelected = useSelected(ref, selection);
  if (isSelected) {
    let find = sIndex.find((a) => a === index);
    if (!find && find !== 0) {
      sIndex.push(index);
    }
  } else {
    let i = sIndex.indexOf(index);
    if (i > -1) {
      sIndex.splice(i, 1);
    }
  }
  return (
    <div
      ref={ref}
      style={{
        ...boxStyles,
        ...(isSelected && {
          background: "#ff0000",
        }),
      }}
    />
  );
};

const containerStyles = {
  display: "flex",
  flexWrap: "wrap",
  gap: "1px",
  width: "1057px",
  maxWidth: "100%",
  margin: "15px auto",
  background: "#e5e5e5",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  border: "1px solid #e5e5e5",
};

const Container = React.forwardRef(({ children }, ref) => {
  return (
      <div ref={ref} style={containerStyles}>
        {children}
      </div>
  );
});
import FileUpload from "./FileUpload";
export default function Grid() {
  const [open, setOpen] = React.useState(false);
  const selectContainerRef = React.useRef(null);
  const mouseRelease = () => {
    if(sIndex?.length){
      setOpen(sIndex.sort((a,b) => a-b));
    }
  };
  const selection = useAreaSelection({
    container: selectContainerRef,
    mouseRelease,
  });
  const boxes = [...Array(8160).keys()].map((d, i) => <Box index={i} />);

  const closeHandler = () =>{
    setOpen(false)
    sIndex = []
  }

  return (
    <div className="App">
      <SelectionContext.Provider value={selection}>
        <Container ref={selectContainerRef}>{boxes}</Container>
      </SelectionContext.Provider>
      {open && <FileUpload closeHandler={() => setOpen(false)} sIndex={open} />}
    </div>
  );
}
