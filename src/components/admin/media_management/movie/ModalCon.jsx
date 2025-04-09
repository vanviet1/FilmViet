import {
  Button, 
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle, 
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
const ModalCon = ({
  openChoose,
  chooseType,
  handleCloseChoose,
  dataChoose,
  handleSelect,
  selectedItem
}) => {
    const isSelected = (item) => selectedItem.includes(item);

  return (

    <Dialog
      open={openChoose}
      onClose={handleCloseChoose}
      sx={{ "& .MuiDialog-paper": { width: "50%", maxWidth: "none" } }}
    >
      <DialogTitle className="flex justify-between items-center">
        {" "}
        <span>Choose Categories </span>
        <div className="relative w-52">
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search ..."
            className="w-full pl-8 pr-2 py-1 border rounded  text-sm"
          />
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="flex flex-wrap gap-2">
          {dataChoose?.map((element, index) =>
            chooseType === "categories" ? (
              <button onClick={() => handleSelect(element.id,chooseType)} 
               className={`px-3 py-1 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white transition ${isSelected(element.id) ? "bg-red-500" : ""}`}>
                {element?.name}
              </button>
            ) : (
              <button  onClick={() => handleSelect(element.id,chooseType)}
               className="flex flex-col items-center gap-2 hover:bg-gray-100 p-2 rounded transition ">
                <img
                  className={`w-20 h-20 rounded-full ${isSelected(element.id) ? "border border-4 border-blue-500" : ""}`}
                  src={element?.imgUrl}
                  alt=""
                />
                <span className={`${isSelected(element.id) ? "text-sm text-blue-600" : "text-sm text-gray-600"}`}>{element?.name}</span>
              </button>
            )
          )}
        </div>
      </DialogContent>
      <DialogActions>
       
        <Button onClick={handleCloseChoose}  color="primary">Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalCon;
