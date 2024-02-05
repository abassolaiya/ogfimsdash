import React, { useState } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import { baseURL } from "../httpService";
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet/lib'

const Result = () => {
  return <p className="success-message">Registration Successful.</p>;
};

const generateArrayOfYears = () => {
  var max = new Date().getFullYear();
  var min = max - 100;
  var years = [];

  for (var i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
};

const lgas = [
  "Abeokuta-North",
  "Abeokuta-South",
  "Ado-Odo/Ota",
  "Ewekoro",
  "Ifo",
  "Ijebu-East",
  "Ijebu-North",
  "Ijebu-North-East",
  "Ijebu-Ode",
  "Ikenne",
  "Imeko-Afon",
  "Ipokia",
  "Obafemi-Owode",
  "Odeda",
  "Odogbolu",
  "Ogun-Waterside",
  "Remo-North",
  "Shagamu",
  "Yewa North",
];

const catArray = ["Farmers", "Traders", "Processors"];

const ServiceListOne = [
  {
    id: 1,
    name: "Farmers",
    option: "Farmers",
  },
  {
    id: 2,
    name: "Traders",
    option: "Traders",
  },
  {
    id: 3,
    name: "Processors",
    option: "Processors",
  },
  {
    id: 4,
    name: "Agro Dealers",
    option: "Agro Dealers",
  },

  {
    id: 5,
    name: "Extension Workers",
    option: "Extension Workers",
  },
  {
    id: 6,
    name: "Financial Service Providers",
    option: "Financial Service Providers",
  },

  {
    id: 7,
    name: "Input Providers",
    option: "Input Providers",
  },

  {
    id: 8,
    name: "Business Development Service Providers",
    option: "Business Development Service Providers",
  },

  {
    id: 9,
    name: "Off-takers",
    option: "Off-takers",
  },
  {
    id: 10,
    name: "Mechanization Service Providers",
    option: "Mechanization Service Providers",
  },
  {
    id: 11,
    name: "Experts (Plant & Animal)",
    option: "Experts",
  },
  {
    id: 12,
    name: "Transporters",
    option: "Transporters",
  },
];

const CommondityList = [
  {
    id: 1,
    name: "Cassava",
    option: "Cassava",
  },
  {
    id: 2,
    name: "Yam",
    option: "Yam",
  },
  {
    id: 3,
    name: "Cashew",
    option: "Cashew",
  },
  {
    id: 4,
    name: "Potato",
    option: "Potato",
  },
  {
    id: 4,
    name: "Sweet Potato",
    option: "Sweet Potato",
  },
];

const notify = (status, message) => {
  if (status === "success") {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  if (status === "error") {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  if (status === "warn") {
    toast.warn(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  if (status === "info") {
    toast.info(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

const Register = () => {
  const [result, showresult] = useState(false);

  const [primaryCategory, setPrimaryCategory] = useState([]);
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [lga, setLga] = useState("");
  const [town, setTown] = useState("");
  const [location, setLocation] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [geolocation, setGeolocation] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [address, setAddress] = useState("");
  const [householdSize, setHouseholdSize] = useState("");
  const [educationStatus, setEducationStatus] = useState("");
  const [cropsIncome, setCropsIncome] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [typeOfFarming, setTypeOfFarming] = useState([]);
  const [farmlandOwnership, setFarmlandOwnership] = useState("");
  const [accessToOffTakers, setAccessToOffTakers] = useState("");
  const [totalIncomeRevenue, setTotalIncomeRevenue] = useState("");
  const [accessToInputProviders, setAccessToInputProviders] = useState("");
  const [primaryPurposeOfFarming, setPrimaryPurposeOfFarming] = useState("");
  const [accessToAdvisoryServices, setAccessToAdvisoryServices] = useState("");
  const [nationalIdentificationNumber, setNationalIdentificationNumber] =
    useState("");
  const [
    accessToGovernmentLandForFarming,
    setAccessToGovernmentLandForFarming,
  ] = useState("");
  const [
    accessToFinancialServiceProviders,
    setAccessToFinancialServiceProviders,
  ] = useState("");
  const [accessToExtensionSuport, setAccessToExtensionSuport] = useState("");
  const [crops, setCrops] = useState([]);
  const [incentiveFromGovt, setIncentiveFromGovt] = useState("");
  const [
    accessToBusinessServiceProviders,
    setAccessToBusinessServiceProviders,
  ] = useState("");
  const [
    accessToMechanizatServiceProviders,
    setAccessToMechanizatServiceProviders,
  ] = useState("");
  const [cropManagementTechniques, setCropManagementTechniques] = useState("");
  const [soilManagementTechniques, setSoilManagementTechniques] = useState("");

  const [countrySelected, setCountrySelected] = useState("");
  const [yearList, setYearList] = useState(generateArrayOfYears());

  const history = useHistory();
  const countries = require("../countries");
  // console.log(countries);

  const submit = () => {
    if (!name) {
      notify("warn", "Please add name ");
      return;
    }

    if (!email) {
      notify("warn", "Please add email");
      return;
    }

    if (!primaryCategory) {
      notify("warn", "Please add primary Category");
      return;
    }

    if (!mobileNumber) {
      notify("warn", "Please add mobile number");
      return;
    }

    if (!age) {
      notify("warn", "Please add age");
      return;
    }

    if (!sex) {
      notify("warn", "Please add sex");
      return;
    }

    if (!lga) {
      notify("warn", "Please select local government");
      return;
    }

    if (!town) {
      notify("warn", "Please add town");
      return;
    }
    if (!maritalStatus) {
      notify("warn", "Please add marital Status");
      return;
    }

    if (!address) {
      notify("warn", "Please add address");
      return;
    }

    if (!householdSize) {
      notify("warn", "Please add household Size");
      return;
    }

    if (!educationStatus) {
      notify("warn", "Please add education Status");
      return;
    }

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const body = JSON.stringify({
      name: name,
      email: email,
      primaryCategory: primaryCategory,
      mobileNumber: mobileNumber,
      crops: crops,
      age: age,
      sex: sex,
      lga: lga,
      town: town,
      maritalStatus: maritalStatus,
      address: address,
      householdSize: householdSize,
      educationStatus: educationStatus,
      cropsIncome: cropsIncome,
      totalIncomeRevenue: totalIncomeRevenue,
      typeOfFarming: typeOfFarming,
      farmlandOwnership: farmlandOwnership,
      accessToInputProviders: accessToInputProviders,
      accessToInputProviders: accessToInputProviders,
      accessToExtensionSuport: accessToExtensionSuport,
      accessToAdvisoryServices: accessToAdvisoryServices,
      accessToBusinessServiceProviders: accessToBusinessServiceProviders,
      accessToFinancialServiceProviders: accessToFinancialServiceProviders,
      accessToMechanizatServiceProviders: accessToMechanizatServiceProviders,
      accessToGovernmentLandForFarming: accessToGovernmentLandForFarming,
      incentiveFromGovt: incentiveFromGovt,
      primaryPurposeOfFarming: primaryPurposeOfFarming,
      cropManagementTechniques: cropManagementTechniques,
      soilManagementTechniques: soilManagementTechniques,
      nationalIdentificationNumber: nationalIdentificationNumber,
      profileImage: profileImage,
      geolocation: geolocation,
    });
    fetch(`${baseURL}farmers`, { method: "POST", body, headers })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        if (responseJson.success === true) {
          notify("success", "Success");
          history.push("/");
        } else {
          notify("error", responseJson.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSelectCat = (selectedList, selectedItem) => {
    //const newItem = item.name;
    setPrimaryCategory((prevState) => [...prevState, selectedItem.name]);
  };

  const onRemoveCat = (selectedList, removedItem) => {
    setPrimaryCategory((current) =>
      current.filter((item) => item !== removedItem.name)
    );
  };

  const onSelectCrop = (selectedList, selectedItem) => {
    setCrops((prevState) => [...prevState, selectedItem.name]);
  };

  const onRemoveCrop = (selectedList, removedItem) => {
    setCrops((current) => current.filter((item) => item !== removedItem.name));
  };

  const onSelectFa = (selectedList, selectedItem) => {
    setTypeOfFarming((prevState) => [...prevState, selectedItem.name]);
  };

  const onRemoveFa = (selectedList, removedItem) => {
    setTypeOfFarming((current) =>
      current.filter((item) => item !== removedItem.name)
    );
  };

  return (
    <>
      <PageHelmet pageTitle="Register" />

      {/* Start Header Area  */}
      <Header
        headertransparent="header--transparent"
        headerPosition="header--fixed logoresize"
        logo="all-dark"
        colorblack="color--black"
      />
      {/* End Header Area  */}

      {/* Start Breadcrump Area */}
      {/*<Breadcrumb title={'Register'}   />*/}

      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--21"
        data-black-overlay="6"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title text-white">Register</h2>
                <p>Become a member of this platform to access more features!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper  */}
      <main className="page-wrapper">
        {/* Start Form  */}
        <div className="rn-contact-form-area ptb--120 bg_color--1">
          <div className="container">
            <div className="align-items-start">
              <div className="form-wrapper">
                <div className="row row--35">
                  <div
                    className="mb-5 row col-md-12"
                    style={{
                      boxShadow: "0 2px 5px rgb(0 0 0 / 0.1)",
                      padding: 20,
                    }}
                  >
                    <h5>SELECT PRIMARY CATEGORY(IES)</h5>
                    <div className="col-md-4">
                      <Form.Check type="checkBox" id="1" label="Farmer" />
                    </div>

                    <div className="col-md-4">
                      <Form.Check
                        type="checkBox"
                        id="2"
                        label="Agro Marketer"
                      />
                    </div>

                    <div className="col-md-4">
                      <Form.Check type="checkBox" id="3" label="Processor" />
                    </div>

                    <div className="col-md-4">
                      <Form.Check type="checkBox" id="4" label="Input dealer" />
                    </div>

                    <div className="col-md-4">
                      <Form.Check
                        type="checkBox"
                        id="5"
                        label="Extension services"
                      />
                    </div>

                    <div className="col-md-4">
                      <Form.Check
                        type="checkBox"
                        id="6"
                        label="Business Development Services"
                      />
                    </div>

                    <div className="col-md-4">
                      <Form.Check
                        type="checkBox"
                        id="7"
                        label="Off-taker / Aggregator"
                      />
                    </div>

                    <div className="col-md-4">
                      <Form.Check
                        type="checkBox"
                        id="8"
                        label="Mechanization service providers"
                      />
                    </div>

                    <div className="col-md-4">
                      <Form.Check
                        type="checkBox"
                        id="9"
                        label="Agro logistics/Transport"
                      />
                    </div>
                  </div>

                  <div
                    className="mb-5 row"
                    style={{
                      boxShadow: "0 2px 5px rgb(0 0 0 / 0.1)",
                      padding: 20,
                    }}
                  >
                    <h5>Biographic Information</h5>
                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="First Name"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          required
                          name="fullname"
                          placeholder="John"
                          onChange={(e) => setName(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Last Name"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          required
                          name="lastname"
                          placeholder="Doe"
                          onChange={(e) => setLastName(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Age"
                        className="mb-3"
                      >
                        <Form.Control
                          type="number"
                          required
                          name="age"
                          placeholder="30"
                          onChange={(e) => setAge(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingSelect"
                        label="Sex (Gender)"
                        size="lg"
                        onChange={(e) => setSex(e.target.value)}
                        required
                      >
                        <Form.Select aria-label="Sex (Gender)">
                          <option></option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </Form.Select>
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6 mb-3">
                      <FloatingLabel
                        controlId="floatingSelect"
                        label="Education"
                      >
                        <Form.Select
                          aria-label="Education"
                          name="educationStatus"
                          size="lg"
                          onChange={(e) => setEducationStatus(e.target.value)}
                          required
                        >
                          <option></option>
                          <option value="post_graduate">Post Graduate</option>
                          <option value="graduate">Graduate</option>
                          <option value="under_graduate">Under graduate</option>
                          <option value="ssce">SSCE</option>
                          <option value="school_leaving_certificate">
                            School Leaving Certificate
                          </option>
                        </Form.Select>
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingSelect"
                        label="Marital Status"
                      >
                        <Form.Select
                          aria-label="Marital Status"
                          name="maritalStatus"
                          size="lg"
                          onChange={(e) => setMaritalStatus(e.target.value)}
                          required
                        >
                          <option></option>
                          <option value="single">Single</option>
                          <option value="married">Married</option>
                          <option value="divorced">Divorced</option>
                          <option value="widowed">Widowed</option>
                        </Form.Select>
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Household Size"
                        className="mb-3"
                      >
                        <Form.Control
                          type="number"
                          required
                          name="householdSize"
                          placeholder="Household Size"
                          onChange={(e) => setHouseholdSize(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="National Identification Number(NIN)"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          required
                          name="nationalIdentificationNumber"
                          placeholder="National Identification Number(NIN)"
                          onChange={(e) =>
                            setNationalIdentificationNumber(e.target.value)
                          }
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>
                  </div>

                  {/** CONTACT START **/}

                  <div
                    className=" mb-5 row"
                    style={{
                      boxShadow: "0 2px 5px rgb(0 0 0 / 0.1)",
                      padding: 20,
                    }}
                  >
                    <h5>Contact Information</h5>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Mobile Number"
                        className="mb-3"
                      >
                        <Form.Control
                          type="tel"
                          required
                          name="mobileNumber"
                          placeholder="08030000000"
                          onChange={(e) => setMobileNumber(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Alternate Number"
                        className="mb-3"
                      >
                        <Form.Control
                          type="number"
                          required
                          name="mobileNumber"
                          placeholder="08030000000"
                          onChange={(e) => setMobileNumber(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email Address"
                        className="mb-3"
                      >
                        <Form.Control
                          type="email"
                          required
                          name="email"
                          placeholder="name@example.com"
                          onChange={(e) => setEmail(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="House Number"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          required
                          name="mobileNumber"
                          placeholder="08030000000"
                          onChange={(e) => setMobileNumber(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Street Name"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          required
                          name="streetname"
                          placeholder="Street Name"
                          onChange={(e) => setHouseholdSize(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Village/ Town / City"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          required
                          name="town"
                          placeholder="Town"
                          onChange={(e) => setTown(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingSelect"
                        label="Local Govement Of Residence"
                      >
                        <Form.Select
                          aria-label="Local Govement"
                          name="lga"
                          size="lg"
                          onChange={(e) => setLga(e.target.value)}
                          required
                        >
                          <option></option>
                          {lgas.map((item, i) => (
                            <option key={i} value={item}>
                              {item}
                            </option>
                          ))}
                        </Form.Select>
                      </FloatingLabel>
                    </div>

                    <div className="mb-3 rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingSelect"
                        label="Nationality"
                      >
                        <Form.Select
                          aria-label="Nationality"
                          name="nationality"
                          size="lg"
                          onChange={(e) => {
                            // console.log(JSON.parse(e.target.value));
                            setCountrySelected(JSON.parse(e.target.value));
                          }}
                          required
                        >
                          <option></option>
                          {countries?.countries
                            ? countries.countries.map((item, i) => (
                                <option key={i} value={JSON.stringify(item)}>
                                  {item.country}
                                </option>
                              ))
                            : null}
                        </Form.Select>
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-12">
                      <FloatingLabel
                        controlId="floatingSelect"
                        label="State of Origin"
                      >
                        <Form.Select
                          aria-label="State of Origin"
                          name="state"
                          size="lg"
                          onChange={(e) => setLga(e.target.value)}
                          required
                        >
                          <option></option>
                          {countrySelected?.states
                            ? countrySelected.states.map((item, i) => (
                                <option key={i} value={item}>
                                  {item}
                                </option>
                              ))
                            : null}
                        </Form.Select>
                      </FloatingLabel>
                    </div>
                  </div>
                  {/** CONTACT END **/}

                  {/** PROCESSOR STARTS **/}

                  <div
                    className=" mb-5 row"
                    style={{
                      boxShadow: "0 2px 5px rgb(0 0 0 / 0.1)",
                      padding: 20,
                    }}
                  >
                    <h5>Processor</h5>

                    <div className="rn-form-group col-md-12">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Business Name"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          required
                          placeholder="Business Name"
                          onChange={(e) => setBusinessName(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="row mb-3 rn-form-group col-md-12">
                      <h6>TYPE (S) OF COMMODITY</h6>

                      <div className="col-md-4">
                        <Form.Check type="checkBox" id="111" label="Cassava" />
                      </div>

                      <div className="col-md-4">
                        <Form.Check type="checkBox" id="112" label="Yam" />
                      </div>

                      <div className="col-md-4">
                        <Form.Check type="checkBox" id="113" label="Feed" />
                      </div>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Location"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          required
                          placeholder="Location"
                          onChange={(e) => setLocation(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingSelect"
                        label="Local Govement"
                      >
                        <Form.Select
                          aria-label="Local Govement"
                          name="lga"
                          size="lg"
                          onChange={(e) => setLga(e.target.value)}
                          required
                        >
                          <option></option>
                          {lgas.map((item, i) => (
                            <option key={i} value={item}>
                              {item}
                            </option>
                          ))}
                        </Form.Select>
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Business Address"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          required
                          placeholder="Business Address"
                          onChange={(e) => setLocation(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Business Phone Number"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          required
                          placeholder="Business Phone Number"
                          onChange={(e) => setLocation(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Business Email Address"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          required
                          placeholder="Business Email Address"
                          onChange={(e) => setLocation(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingSelect"
                        label="Year of Business Establishment"
                      >
                        <Form.Select
                          aria-label="Year of Business Establishment"
                          name="lga"
                          size="lg"
                          onChange={(e) => setLga(e.target.value)}
                          required
                        >
                          <option></option>
                          {yearList.map((item, i) => (
                            <option key={i} value={item}>
                              {item}
                            </option>
                          ))}
                        </Form.Select>
                      </FloatingLabel>
                    </div>

                    <div className="row rn-form-group col-md-12 mb-3">
                      <h6>PROCESSING / OFF TAKE CAPACITY</h6>
                      <div className="col-md-4">
                        <Form.Check
                          type="radio"
                          id="122"
                          label="< 10tons"
                          name="processing_capacity"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="radio"
                          id="123"
                          label=">100tons"
                          name="processing_capacity"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="radio"
                          id="123"
                          label="10 - 100tons"
                          name="processing_capacity"
                        />
                      </div>
                    </div>
                  </div>

                  {/** PROCESSOR ENDS **/}

                  {/** Agro Logistics / Transportation START **/}

                  <div
                    className=" mb-5 row"
                    style={{
                      boxShadow: "0 2px 5px rgb(0 0 0 / 0.1)",
                      padding: 20,
                    }}
                  >
                    <h5>Agro Logistics / Transportation</h5>

                    <div className="rn-form-group col-md-12">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Business Name"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          required
                          placeholder="Business Name"
                          onChange={(e) => setBusinessName(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="row rn-form-group col-md-12 mb-3">
                      <h6>BUSINESS /HAULAGE CAPACITY PER DAY</h6>
                      <div className="col-md-4">
                        <Form.Check
                          type="radio"
                          id="122"
                          label="< 10tons"
                          name="haulage_capacity"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="radio"
                          id="123"
                          label="10 - 100tons"
                          name="haulage_capacity"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="radio"
                          id="123"
                          label=">100tons"
                          name="haulage_capacity"
                        />
                      </div>
                    </div>

                    <div className="row mb-3 row rn-form-group col-md-12">
                      <h6>COMMODITY TRANSPORTED</h6>

                      <div className="col-md-4">
                        <Form.Check
                          type="checkBox"
                          id="121"
                          label="Agrochemicals and inputs"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="checkBox"
                          id="122"
                          label="Farm produce"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="checkBox"
                          id="123"
                          label="Livestock"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="checkBox"
                          id="123"
                          label="Cold chain"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check type="checkBox" id="123" label="Others" />
                      </div>
                    </div>

                    <div className="row mb-3 row rn-form-group col-md-12">
                      <h6>AREA OF OPERATION / COVERAGE</h6>

                      <div className="col-md-4">
                        <Form.Check
                          type="checkBox"
                          id="131"
                          label="Intrastate"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="checkBox"
                          id="132"
                          label="Interstate"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="checkBox"
                          id="133"
                          label="International"
                        />
                      </div>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Location"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          required
                          placeholder="Location"
                          onChange={(e) => setLocation(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingSelect"
                        label="Local Govement"
                      >
                        <Form.Select
                          aria-label="Local Govement"
                          name="lga"
                          size="lg"
                          onChange={(e) => setLga(e.target.value)}
                          required
                        >
                          <option></option>
                          {lgas.map((item, i) => (
                            <option key={i} value={item}>
                              {item}
                            </option>
                          ))}
                        </Form.Select>
                      </FloatingLabel>
                    </div>

                    {/*<div className="row rn-form-group col-md-12 mb-3">
                                            <h6>LOCATION OF DATA COLLECTION</h6>
                                            <div className="col-md-4">
                                                <Form.Check 
                                                    type="radio"
                                                    id="122"
                                                    label="On the Farm"
                                                    name="location_of_data_collection"
                                                />
                                            </div>

                                            <div className="col-md-4">
                                                <Form.Check 
                                                    type="radio"
                                                    id="123"
                                                    label="Other Location"
                                                    name="location_of_data_collection"
                                                />
                                            </div>
                                        </div>*/}

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Business Address"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          required
                          placeholder="Business Address"
                          onChange={(e) => setLocation(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Business Phone Number"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          required
                          placeholder="Business Phone Number"
                          onChange={(e) => setLocation(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Business Email Address"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          required
                          placeholder="Business Email Address"
                          onChange={(e) => setLocation(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingSelect"
                        label="Year of Business Establishment"
                      >
                        <Form.Select
                          aria-label="Year of Business Establishment"
                          name="lga"
                          size="lg"
                          onChange={(e) => setLga(e.target.value)}
                          required
                        >
                          <option></option>
                          {yearList.map((item, i) => (
                            <option key={i} value={item}>
                              {item}
                            </option>
                          ))}
                        </Form.Select>
                      </FloatingLabel>
                    </div>
                  </div>

                  {/** Agro Logistics / Transportation END **/}

                  {/** Household Information START **/}

                  <div
                    className=" mb-5 row"
                    style={{
                      boxShadow: "0 2px 5px rgb(0 0 0 / 0.1)",
                      padding: 20,
                    }}
                  >
                    <h5>Household Information</h5>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Total Adults in the Family"
                        className="mb-3"
                      >
                        <Form.Control
                          type="number"
                          required
                          placeholder="Total Adults in the Family"
                          onChange={(e) => setBusinessName(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="How many Adult Household members are employed (Total)?"
                        className="mb-3"
                      >
                        <Form.Control
                          type="number"
                          required
                          placeholder="How many Adult Household members are employed (Total)?"
                          onChange={(e) => setBusinessName(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>
                  </div>

                  {/** Household Information START **/}

                  {/** Cooperative Membership START **/}

                  <div
                    className=" mb-5 row"
                    style={{
                      boxShadow: "0 2px 5px rgb(0 0 0 / 0.1)",
                      padding: 20,
                    }}
                  >
                    <h5>Cooperative Membership</h5>

                    <div className="row rn-form-group col-md-12 mb-3">
                      <h6>
                        MEMBERSHIP OF COOPERATIVE ASSOCIATION/DIGITAL GROUP
                      </h6>
                      <div className="col-md-4">
                        <Form.Check
                          type="radio"
                          id="142"
                          label="Yes"
                          name="cooperative_membership"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="radio"
                          id="143"
                          label="No"
                          name="cooperative_membership"
                        />
                      </div>
                    </div>

                    <div className="row mb-3 row rn-form-group col-md-12">
                      <h6>BENEFITS OF COOPERATIVE MEMBERSHIP</h6>

                      <div className="col-md-4">
                        <Form.Check
                          type="checkBox"
                          id="151"
                          label="Access to credit"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="checkBox"
                          id="152"
                          label="Input supply"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="checkBox"
                          id="153"
                          label="Marketing of produce"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="checkBox"
                          id="153"
                          label="Technical assistance and extension services"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="checkBox"
                          id="155"
                          label="Others (specify)"
                        />
                      </div>
                    </div>
                  </div>

                  {/** Cooperative Membership END**/}

                  {/** Cooperative Membership START **/}

                  <div
                    className=" mb-5 row"
                    style={{
                      boxShadow: "0 2px 5px rgb(0 0 0 / 0.1)",
                      padding: 20,
                    }}
                  >
                    <h5>Digital Tools</h5>

                    <div className="row mb-3 row rn-form-group col-md-12">
                      <h6>
                        WHAT IS THE MAIN MEDIUM FOR INFORMATION (SELECT ALL THAT
                        APPLY)
                      </h6>

                      <div className="col-md-4">
                        <Form.Check type="checkBox" id="161" label="Radio" />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="checkBox"
                          id="162"
                          label="Television"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="checkBox"
                          id="163"
                          label="Mobile Phone"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="checkBox"
                          id="164"
                          label="Smartphone"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="checkBox"
                          id="165"
                          label="Newspaper"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="checkBox"
                          id="166"
                          label="Community group"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check type="checkBox" id="167" label="ADPs" />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="checkBox"
                          id="168"
                          label="Others (specify)"
                        />
                      </div>
                    </div>

                    <div className=" row mb-3 rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="What is the main challenge for using mobile phones?"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          required
                          placeholder="What is the main challenge for using mobile phones"
                          onChange={(e) => setBusinessName(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="row mb-3 rn-form-group col-md-6">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="What are the main advantages of using mobile phones?"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          required
                          placeholder="What are the main advantages of using mobile phones?"
                          onChange={(e) => setBusinessName(e.target.value)}
                          size="lg"
                        />
                      </FloatingLabel>
                    </div>

                    <div className="row mb-5 col-md-12">
                      <h6>
                        WHAT IS YOUR LEVEL OF PROFICIENCY IN USAGE OF INTERNET
                        AND SOFT INFRASTRUCTURE?
                      </h6>
                      <div className="col-md-4">
                        <Form.Check
                          type="radio"
                          id="172"
                          label="Low"
                          name="internet_proficiency"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="radio"
                          id="173"
                          label="Medium"
                          name="internet_proficiency"
                        />
                      </div>

                      <div className="col-md-4">
                        <Form.Check
                          type="radio"
                          id="174"
                          label="High"
                          name="internet_proficiency"
                        />
                      </div>
                    </div>
                  </div>

                  {/*
                                    <div className="rn-form-group mb-3 col-md-6">

                                        <Multiselect
                                            options={CommondityList}
                                            isObject = { true }
                                            avoidHighlightFirstOption = {true}
                                            onSelect={onSelectCrop}
                                            onRemove={onRemoveCrop}
                                            displayValue="name"
                                            placeholder="Commondities"
                                        />

                                    </div>


                                    <div className="rn-form-group mb-3 col-md-6">


                                        <Multiselect
                                            options={[{id:1,name:"Crop Farming", option:"crop farming"},{id:2,name:"Livestock", option:"Livestock"}, {id:3,name:"Poultry", option:"Poultry"},{id:4, name:"Aquaculture", option:"Aquaculture"},{id:5,name:"Horticulture",option:"Horticulture"}]}
                                            isObject = { true }
                                            avoidHighlightFirstOption = {true}
                                            onSelect={onSelectFa}
                                            onRemove={onRemoveFa}
                                            displayValue="name"
                                            placeholder="Type of Farming"
                                        />

                                    </div>

                                    

                                    <div className="rn-form-group mb-3 col-md-6">
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Crop Income  (to the nearest Naira)"
                                            className="mb-3"
                                        >
                                            <Form.Control type="number" aria-label="Crop Income (to the nearest Naira)" placeholder="Crop Income (to the nearest Naira)" onChange={(e)=>setCropsIncome(e.target.value)} />
                                        </FloatingLabel>
                                    </div>

                                    <div className="rn-form-group col-md-6">
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Total Income Revenue  (to the nearest Naira)"
                                            className="mb-3"
                                        >
                                            <Form.Control type="number" name="totalIncomeRevenue" aria-label="Total Income Revenue (to the nearest Naira)"  onChange={(e)=>setTotalIncomeRevenue(e.target.value)} placeholder="Total Income Revenue (to the nearest Naira)" />
                                        </FloatingLabel>
                                    </div>

                                    

                                    <div className="rn-form-group mb-3 col-md-6">

                                        <FloatingLabel controlId="floatingSelect" label="Primary Purpose of Farming">
                                          <Form.Select aria-label="Primary Purpose of Farming" name="primaryPurposeOfFarming" size="lg" onChange={(e)=>setPrimaryPurposeOfFarming(e.target.value)}  required>
                                            <option></option>
                                            <option value="subsistence">Subsistence</option>
                                            <option value="commercial">Commercial</option>
                                          </Form.Select>
                                        </FloatingLabel>
                                        
                                    </div>

                                    


                                    <div className="rn-form-group mb-3 col-md-6">

                                        <FloatingLabel controlId="floatingSelect" label="Farm Land Ownership">
                                          <Form.Select aria-label="Farm Land Ownership" name="accessToOffTakers" size="lg" onChange={(e)=>setAccessToOffTakers(e.target.value)} required>
                                            <option></option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                          </Form.Select>
                                        </FloatingLabel>
                                        
                                    </div>


                                    <div className="rn-form-group mb-3 col-md-6">

                                        <FloatingLabel controlId="floatingSelect" label="Do you have access to Input Providers">
                                          <Form.Select aria-label="Do you have access to Input Providers" name="accessToInputProviders" size="lg" onChange={(e)=>setAccessToInputProviders(e.target.value)} required>
                                            <option></option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                          </Form.Select>
                                        </FloatingLabel>
                                        
                                    </div>


                                    


                                    <div className="rn-form-group mb-3 col-md-6">
                                        <FloatingLabel controlId="floatingSelect" label="Do you have Access to Advisory Services">
                                          <Form.Select aria-label="Do you have Access to Advisory Services" name="accessToAdvisoryServices" size="lg" onChange={(e)=>setAccessToAdvisoryServices(e.target.value)} required>
                                            <option></option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                          </Form.Select>
                                        </FloatingLabel>
                                    </div>


                                    <div className="rn-form-group mb-3 col-md-6">
                                        <FloatingLabel controlId="floatingSelect" label="Do you have Access to Government Land for Farming">
                                          <Form.Select aria-label="Do you have Access to Government Land for Farming" name="accessToGovernmentLandForFarming" size="lg" onChange={(e)=>setAccessToGovernmentLandForFarming(e.target.value)} required>
                                            <option></option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                          </Form.Select>
                                        </FloatingLabel>
                                        
                                    </div>

                                    <div className="rn-form-group mb-3 col-md-6">

                                        <FloatingLabel controlId="floatingSelect" label="Do you have Access to Financial Service Providers">
                                          <Form.Select aria-label="Do you have Access to Financial Service Providers" name="accessToFinancialServiceProviders" size="lg" onChange={(e)=>setAccessToFinancialServiceProviders(e.target.value)} required>
                                            <option></option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                          </Form.Select>
                                        </FloatingLabel>
                                    </div>

                                    <div className="rn-form-group mb-3 col-md-6">

                                        <FloatingLabel controlId="floatingSelect" label="Do you have Access to Extension Suport">
                                          <Form.Select aria-label="Do you have Access to Extension Suport" name="accessToExtensionSuport" size="lg" onChange={(e)=>setAccessToExtensionSuport(e.target.value)} required>
                                            <option></option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                          </Form.Select>
                                        </FloatingLabel>
                                        
                                    </div>


                                    <div className="rn-form-group mb-3 col-md-6">

                                        <FloatingLabel controlId="floatingSelect" label="Incentive From Govt">
                                          <Form.Select aria-label="Incentive From Govt" name="incentiveFromGovt" size="lg" onChange={(e)=>setIncentiveFromGovt(e.target.value)} required>
                                            <option></option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                          </Form.Select>
                                        </FloatingLabel>
                                        
                                    </div>


                                    <div className="rn-form-group mb-3 col-md-6">

                                        <FloatingLabel controlId="floatingSelect" label="Do you have Access to Business Service Providers">
                                          <Form.Select aria-label="Do you have Access to Business Service Providers" name="accessToBusinessServiceProviders" onChange={(e)=>setAccessToBusinessServiceProviders(e.target.value)} size="lg" required>
                                            <option></option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                          </Form.Select>
                                        </FloatingLabel>
                                        
                                    </div>

                                    <div className="rn-form-group mb-3 col-md-6">

                                        <FloatingLabel controlId="floatingSelect" label="Do you have Access to Mechanization Service Providers">
                                          <Form.Select aria-label="Do you have Access to Mechanization Service Providers" name="accessToMechanizatServiceProviders" onChange={(e)=>setAccessToMechanizatServiceProviders(e.target.value)} size="lg" required>
                                            <option></option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                          </Form.Select>
                                        </FloatingLabel>
                                        
                                    </div>

                                    <div className="rn-form-group mb-3 col-md-6">
                                        <FloatingLabel controlId="floatingSelect" label="Crop Management Techniques">
                                          <Form.Select aria-label="Crop Management Techniques" name="cropManagementTechniques" size="lg" onChange={(e)=>setCropManagementTechniques(e.target.value)} required>
                                            <option></option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                          </Form.Select>
                                        </FloatingLabel>
                                    </div>


                                    <div className="rn-form-group mb-3 col-md-6">
                                        <FloatingLabel controlId="floatingSelect" label="Soil Management Techniques">
                                          <Form.Select aria-label="Soil Management Techniques" name="soilManagementTechniques" size="lg" onChange={(e)=>setSoilManagementTechniques(e.target.value)} required>
                                            <option></option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                          </Form.Select>
                                        </FloatingLabel>
                                    </div>

                                    
                                    <div className="rn-form-group col-sm-6">
                                        <textarea 
                                        name="message"
                                        placeholder="Your Message"
                                        required
                                        >
                                        </textarea>
                                    </div>*/}

                  <div className="rn-form-group col-sm-12 mb-3">
                    <button
                      className="btn-default"
                      type="submit"
                      onClick={() => submit()}
                      value="submit"
                      name="submit"
                      id="mc-embedded-subscribe"
                    >
                      Submit Now
                    </button>
                  </div>

                  <div className="rn-form-group">
                    {result ? <Result /> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start Contact Form  */}
      </main>
      {/* End Page Wrapper  */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area  */}
    </>
  );
};

export default Register;
