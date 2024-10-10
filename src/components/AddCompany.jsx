import { useState } from "react";
import { TextInput, Container } from "@mantine/core";
import { ADD_BUTTON_STYLE_2, TEXT_INPUT_STYLE_2 } from "../utils/style";
import { useDispatch } from "react-redux";
import { addNewCompany } from "../redux/companiesListSlice";

const AddCompany = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const dispatch = useDispatch()

  const handleAddCompany = () => {
    dispatch(addNewCompany({name, location, id: Math.random()}))
    closeModal();
  };

  return (
    <Container>
      <TextInput
        label="Name"
        placeholder="Enter Company's Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        mb="xl"
        styles={TEXT_INPUT_STYLE_2}
      />

      <TextInput
        label="Name"
        placeholder="Enter Company's Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        mb="xl"
        styles={TEXT_INPUT_STYLE_2}
      />

      <button style={ADD_BUTTON_STYLE_2} onClick={handleAddCompany}>
        Add Company
      </button>
      <button
              className="mt-4 ml-10 bg-red-500 text-white py-[10px] px-4 rounded"
              onClick={() => closeModal()}
            >
              Close
            </button>
    </Container>
  );
};

export default AddCompany;
