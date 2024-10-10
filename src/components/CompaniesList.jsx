import React, { useEffect, useState } from "react";
import {
  Table,
  Container,
  Title,
  Text,
  Card,
  ScrollArea,
  Divider,
} from "@mantine/core";
import { fetchCompanies } from "../utils/apis";
import {
  HEADER_STYLE,
  CARD_STYLES,
  SCROLL_AREA_STYLES,
  TABLE_STYLES,
  HEADER_CELL_STYLES,
  DATA_CELL_STYLES,
  TEXT_WEIGHT_MEDIUM,
  TEXT_COLOR_DIMMED,
  CONTAINER_STYLES_2,
  LOGOUT_BUTTON_STYLE,
  TABLE_WRAPPER,
  ADD_BUTTON_STYLE,
  HEADER_DIV_STYLE,
} from "../utils/style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AUTH_PATH } from "../utils/constants";
import { logout } from "../redux/authSlice";
import { addCompaniesInBulk } from "../redux/companiesListSlice";
import AddCompany from "./AddCompany";

const CompaniesList = () => {
  const [modalOpen, setModalOpen] = useState(false); // State for modal

  const authDataFromStore = useSelector((state) => state.auth);
  const companiesListFromStore =
    useSelector((state) => state.companiesList?.data) || [];

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authDataFromStore?.name) {
      navigateTo(AUTH_PATH);
    }

    const getCompanies = async () => {
      const response = await fetchCompanies();
      if (response?.data) {
        dispatch(addCompaniesInBulk(response?.data));
      }
    };

    if (!companiesListFromStore?.length) {
      getCompanies();
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigateTo(AUTH_PATH);
  };

  const handleAddCompany = () => {
    setModalOpen(true); // Open the modal
  };

  return (
    <Container style={CONTAINER_STYLES_2}>
      <button style={LOGOUT_BUTTON_STYLE} onClick={handleLogout}>
        Logout
      </button>
      <button style={ADD_BUTTON_STYLE} onClick={handleAddCompany}>
        Add Company
      </button>
      <div style={HEADER_DIV_STYLE}>
        <Title style={HEADER_STYLE}>Companies List</Title>
      </div>
      <Card {...CARD_STYLES}>
        <ScrollArea style={SCROLL_AREA_STYLES}>
          <div style={TABLE_WRAPPER}>
            <Table
              striped
              highlightOnHover
              verticalSpacing="md"
              style={TABLE_STYLES}
            >
              <thead>
                <tr>
                  <th style={HEADER_CELL_STYLES}>Name</th>
                  <th style={HEADER_CELL_STYLES}>Location</th>
                </tr>
              </thead>
              <tbody>
                {companiesListFromStore?.map((company, index) => (
                  <tr
                    key={company.id}
                    style={
                      index % 2 === 0
                        ? { backgroundColor: "white" }
                        : { backgroundColor: "#e5e7eb" }
                    }
                  >
                    <td style={DATA_CELL_STYLES}>
                      <Text style={TEXT_WEIGHT_MEDIUM}>{company.name}</Text>
                    </td>
                    {company?.location ? (
                      <td style={DATA_CELL_STYLES}>
                        <Text style={TEXT_COLOR_DIMMED}>
                          {`${company.location || "India"}`}
                        </Text>
                      </td>
                    ) : (
                      <td style={DATA_CELL_STYLES}>
                        <Text style={TEXT_COLOR_DIMMED}>
                          {`${
                            company.headOffice.address.cityName || "India"
                          }, ${company.headOffice.address.countryName || ""}`}
                        </Text>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </ScrollArea>
      </Card>
      <Divider my="lg" />

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">Add New Company</h2>
            <AddCompany closeModal={() => setModalOpen(false)} />
          </div>
        </div>
      )}
    </Container>
  );
};

export default CompaniesList;
