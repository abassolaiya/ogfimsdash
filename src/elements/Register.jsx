import React, { useState } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "./common/Breadcrumb";
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
          <div className="container"></div>
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
