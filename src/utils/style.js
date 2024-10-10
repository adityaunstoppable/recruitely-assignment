export const CONTAINER_STYLES = {
  backgroundColor: "black",
  borderRadius: "8px",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
  color: "white",
  padding: "20px",
};

export const BG_IMAGE_STYLE = { height: "100vh", width: "100vw" };

export const CENTER_STYLE = {
  width: "30vw",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)", // Centers the element
};

export const TEXT_INPUT_STYLE = {
  input: {
    backgroundColor: "black",
    color: "#F5F5DC	",
    padding: "5px",
    width: "100%",
    border: "none !important",
    borderBottom: "1px solid white",
    marginBottom: "20px",
    "&:focus": {
      border: "none !important",
      borderBottom: "1px solid lightgrey",
      outline: "none",
    },
    "&::placeholder": {
      color: "lightgrey",
    },
  },
  label: { color: "white" },
};
export const TEXT_INPUT_STYLE_2 = {
  input: {
    backgroundColor: "white",
    color: "black	",
    padding: "5px",
    width: "100%",
    border: "none !important",
    borderBottom: "1px solid white",
    marginBottom: "20px",
    "&:focus": {
      border: "none !important",
      borderBottom: "1px solid lightgrey",
      outline: "none",
    },
    "&::placeholder": {
      color: "black",
    },
  },
  label: { color: "black" },
};

export const ERROR_TEXT_STYLE = { color: "red" };

export const BUTTON_STYLE = {
  backgroundColor: "transparent",
  color: "white",
  border: "1px solid white",
  padding: "5px",
  borderRadius: "10px",
  marginTop: "30px",
  width: "100%",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
};

export const TITLE_STYLE = { color: "white", fontSize: "20px" , marginBottom:'20px' };
export const TITLE_STYLE_ALT = { color: "#D8D8D8", fontSize: "20px" , marginBottom:'20px' };

export const CONTAINER_STYLES_2 = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  marginTop: "20px",
};

export const HEADER_STYLE = {
  color: "black",
  fontSize: "20px",
  textAlign: "center",
};

export const HEADER_DIV_STYLE ={
  backgroundColor:"#e5e7eb",
  borderRadius:"15px",
  textAlign:"center",
  justifyContent:"center",
  width:"200px",
  padding:"10px 10px",
  marginBottom:"20px",
}

export const CARD_STYLES = {
  shadow: "sm",
  padding: "lg",
  borderRadius: "15px",
};

export const SCROLL_AREA_STYLES = {
  height: "",
};

export const TABLE_STYLES = {
  borderRadius:"15px",
  width: "70%",
};

export const TABLE_WRAPPER = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  backgroundColor: "#e5e7eb"
}


export const HEADER_CELL_STYLES = {
  padding: "12px",
  borderBottom: "2px solid #eaeaea",
  color: "black",
};

export const DATA_CELL_STYLES = {
  padding: "12px",
  borderBottom: "1px solid #eaeaea",
};

export const TEXT_WEIGHT_MEDIUM = {
  fontWeight: 500,
};

export const TEXT_COLOR_DIMMED = {
  color: "dimmed",
};

export const LOGOUT_BUTTON_STYLE = {
  position: "fixed",
  top: "30px",
  right: "30px",
  backgroundColor: "#E31837", 
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "10px 15px",
  cursor: "pointer",
  zIndex: 1000,
};

export const ADD_BUTTON_STYLE = {
  position: "fixed",
  top: "30px",
  right: "150px",
  backgroundColor: "#17B169", 
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "10px 15px",
  cursor: "pointer",
  zIndex: 1000,
};

export const ADD_BUTTON_STYLE_2 = {
  backgroundColor: "#17B169", 
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "10px 15px",
  cursor: "pointer",
  zIndex: 1000,
};
