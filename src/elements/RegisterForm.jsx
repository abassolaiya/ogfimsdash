import React, { useState } from "react";
import { Badge, Button, Card, Col, Form, Row } from "react-bootstrap";
import { baseURL } from "../httpService";
import PageHelmet from "../component/common/Helmet";
import Header from "../component/header/Header";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { countries } from "../countries";
import isValidEmail from "../isValidEmail";
const { v4: uuidv4 } = require("uuid");
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const RegisterForm = () => {
  const title = "OGFIMS Form";
  const description = "OGFIMS form for users";

  const [validated, setValidated] = useState(false);

  // biographic information
  const [primaryCategory, setByPrimaryCategory] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [educationStatus, setEducationStatus] = useState("");
  const [maritalstatus, setMaritalStatus] = useState("");
  const [householdSize, setHouseholdSize] = useState("");
  const [nin, setNIN] = useState("");
  const [profileImage, setProfileImage] = useState({});

  // contact information
  const [phoneNumber, setPhoneNumber] = useState("");
  const [alternativePhoneNumber, setAlternativePhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [lga, setLga] = useState("");
  const [nationality, setNationality] = useState("");
  const [state, setState] = useState("");
  const [states, setStates] = useState([]);
  const [lgas, setLGAs] = useState([]);

  // household information
  const [totalAdults, setTotalAdults] = useState("");
  const [employedHouseHoldMembers, setEmployedHouseHoldMemebers] = useState("");
  const [cooperativeMembership, setCooperativeMembership] = useState("");
  const [benefitOfCooperative, setBenefitOfCooperative] = useState([]);

  // digital tools
  const [mediumOfInformation, setMediumOfInformation] = useState([]);
  const [challengeOfMobilePhone, setChallengeOfMobilePhone] = useState("");
  const [advantagesOfMobilePhone, setAdvantagesOfMobilePhone] = useState("");
  const [levelOfInrernetProficiency, setLevelOfInternetProficiency] =
    useState("");

  const [countrySearchTerm, setCountrySearchTerm] = useState("");
  const [stateSearchTerm, setStateSearchTerm] = useState("");
  const [otherCooperativeBenefits, setOtherCooperativeBenefits] = useState("");
  const [otherMediumofInformation, setOtherMediumofInformation] =
    useState(false);
  const [otherCooperativeBenefitsValue, setOtherCooperativeBenefitsValue] =
    useState("");
  const [otherMediumofInformationValue, setOtherMediumofInformationValue] =
    useState("");

  // farmers
  const [farmerLocation, setFarmerLocation] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [altitude, setAltitude] = useState("");
  const [accuracy, setAccuracy] = useState("");

  // income and assets
  const [typeOfFarming, setTypeOfFarming] = useState([]);
  const [totalFarmSizeOwned, setTotalFarmSizeOwned] = useState("");
  const [primaryPurposeOfFarming, setPrimaryPurposeOfFarming] = useState("");
  const [farmlandOwnership, setFarmLandOwnership] = useState([]);
  // crop farming
  const [cropsBeingFarmed, setCropsBeingFarmed] = useState([]);
  const [otherHorticulture, setOtherHorticulture] = useState("");
  const [otherCropsBeingFarmed, setOtherCropsBeingFarmed] = useState("");
  const [totalFarmSizeCultivated, setTotalFarmSizeCultivated] = useState("");
  const [producingSeed, setProducingSeed] = useState("");
  const [forWhichCrops, setForWhichCrops] = useState([]);
  const [otherForWhichCrop, setOtherForWhichCrop] = useState("");
  const [otherHorticultureForWhichCrop, setOtherHorticultureForWhichCrop] =
    useState("");
  const [plantForSeedOrSellHarvestAsSeed, setPlantForSeedOrSellHarvestAsSeed] =
    useState([]);

  const [startSeedProduction, setStartSeedProduction] = useState("");
  const [sellSeedOrFreeOrBarter, setSellSeedOrFreeOrBarter] = useState([]);
  const [sellSeedInLocalMarket, setSellSeedInLocalMarket] = useState("");
  const [motivationForSeedProduction, setMotivationForSeedProduction] =
    useState("");
  const [trainingToProduceSeed, setTrainingToProduceSeed] = useState("");

  // livestock farming
  const [typesOfLiveStockFarming, setTypesOfLiveStockFarming] = useState([]);
  const [otherTypeOfLivestockFarming, setOtherTypeOfLivestockFarming] =
    useState("");
  const [farmSizeForLiveStockFarming, setTotalFarmSizeForLiveStockFarming] =
    useState("");

  // farm productivity (crops)
  const [cassavaFarmSize, setCassavaFarmSize] = useState("");
  const [cassavaYield, setCassavaYield] = useState("");
  const [yamFarmSize, setYamFarmSize] = useState("");
  const [yamYield, setYamYield] = useState("");
  const [cowpeaFarmSize, setCowpeaFarmSize] = useState("");
  const [cowpeaYield, setCowpeaYield] = useState("");
  const [bananaFarmSize, setBananaFarmSize] = useState("");
  const [bananaYield, setBananaYield] = useState("");
  const [plantainFarmSize, setPlantainFarmSize] = useState("");
  const [plantainYield, setPlantainYield] = useState("");
  const [riceFarmSize, setRiceFarmSize] = useState("");
  const [riceYield, setRiceYield] = useState("");
  const [cocoaFarmSize, setCocoaFarmSize] = useState("");
  const [cocoaYield, setCocoaYield] = useState("");
  const [cashewFarmSize, setCashewFarmSize] = useState("");
  const [cashewYield, setCashewYield] = useState("");
  const [oilPalmFarmSize, setOilPalmFarmSize] = useState("");
  const [oilPalmYield, setOilPalmYield] = useState("");
  const [potatoFarmSize, setPotatoFarmSize] = useState("");
  const [potatoYield, setPotatoYield] = useState("");
  const [sweetPotatoFarmSize, setSweetPotatoFarmSize] = useState("");
  const [sweetPotatoYield, setSweetPotatoYield] = useState("");
  const [wheatFarmSize, setWheatFarmSize] = useState("");
  const [wheatYield, setWheatYield] = useState("");
  const [sesameFarmSize, setSesameFarmSize] = useState("");
  const [sesameYield, setSesameYield] = useState("");
  const [soyaFarmSize, setSoyaFarmSize] = useState("");
  const [soyaYield, setSoyaYield] = useState("");
  const [maizeFarmSize, setMaizeFarmSize] = useState("");
  const [maizeYield, setMaizeYield] = useState("");
  const [cottonFarmSize, setCottonFarmSize] = useState("");
  const [cottonYield, setCottonYield] = useState("");
  const [horticultureFarmSize, setHorticultureFarmSize] = useState("");
  const [horticultureYield, setHorticultureYield] = useState("");
  const [otherCropFarmSize, setOtherCropFarmSize] = useState("");
  const [otherCropYield, setOtherCropYield] = useState("");
  // farm productivity (livestock)
  const [poultryType, setPoultryType] = useState([]);
  const [poultryStockCapacity, setPoultryStockCapacity] = useState("");
  const [poultryAverageMortality, setPoultryAverageMortality] = useState("");
  const [poultryAverageHarvest, setPoultryAverageHarvest] = useState("");
  const [poultryTotalHarvest, setPoultryTotalHarvest] = useState("");
  const [poultryEggsProduced, setPoultryEggsProduced] = useState("");
  const [fisheryStockCapacity, setFisheryStockCapacity] = useState("");
  const [fisheryAverageMortality, setFisheryAverageMortality] = useState("");
  const [fisheryAverageHarvest, setFisheryAverageHarvest] = useState("");
  const [fisheryTotalHarvest, setFisheryTotalHarvest] = useState("");
  const [cattleStockCapacity, setCattleStockCapacity] = useState("");
  const [cattleAverageMortality, setCattleAverageMortality] = useState("");
  const [cattleAverageHarvest, setCattleAverageHarvest] = useState("");
  const [cattleTotalHarvest, setCattleTotalHarvest] = useState("");
  const [piggeryStockCapacity, setPiggeryStockCapacity] = useState("");
  const [piggeryAverageMortality, setPiggeryAverageMortality] = useState("");
  const [piggeryAverageHarvest, setPiggeryAverageHarvest] = useState("");
  const [piggeryTotalHarvest, setPiggeryTotalHarvest] = useState("");
  const [smallRuminantsStockCapacity, setSmallRuminantsStockCapacity] =
    useState("");
  const [smallRuminantsAverageMortality, setSmallRuminantsAverageMortality] =
    useState("");
  const [smallRuminantsAverageHarvest, setSmallRuminantsAverageHarvest] =
    useState("");
  const [smallRuminantsTotalHarvest, setSmallRuminantsTotalHarvest] =
    useState("");
  const [rabbitryStockCapacity, setRabbitryStockCapacity] = useState("");
  const [rabbitryAverageMortality, setRabbitryAverageMortality] = useState("");
  const [rabbitryAverageHarvest, setRabbitryAverageHarvest] = useState("");
  const [rabbitryTotalHarvest, setRabbitryTotalHarvest] = useState("");
  const [grasscutterStockCapacity, setGrasscutterStockCapacity] = useState("");
  const [grasscutterAverageMortality, setGrasscutterAverageMortality] =
    useState("");
  const [grasscutterAverageHarvest, setGrasscutterAverageHarvest] =
    useState("");
  const [grasscutterTotalHarvest, setGrasscutterTotalHarvest] = useState("");

  const [sericultureStockCapacity, setSericultureStockCapacity] = useState("");
  const [sericultureAverageMortality, setSericultureAverageMortality] =
    useState("");
  const [sericultureAverageHarvest, setSericultureAverageHarvest] =
    useState("");
  const [sericultureTotalHarvest, setSericultureTotalHarvest] = useState("");
  const [beekeepingStockCapacity, setBeekeepingStockCapacity] = useState("");
  const [beekeepingAverageMortality, setBeekeepingAverageMortality] =
    useState("");
  const [beekeepingAverageHarvest, setBeekeepingAverageHarvest] = useState("");
  const [beekeepingTotalHarvest, setBeekeepingTotalHarvest] = useState("");

  const [snailryStockCapacity, setSnailryStockCapacity] = useState("");
  const [snailryAverageMortality, setSnailryAverageMortality] = useState("");
  const [snailryAverageHarvest, setSnailryAverageHarvest] = useState("");
  const [snailryTotalHarvest, setSnailryTotalHarvest] = useState("");
  const [otherLivestockStockCapacity, setOtherLivestockStockCapacity] =
    useState("");
  const [otherLivestockAverageMortality, setOtherLivestockAverageMortality] =
    useState("");
  const [otherLivestockAverageHarvest, setOtherLivestockAverageHarvest] =
    useState("");
  const [otherLivestockTotalHarvest, setOtherLivestockTotalHarvest] =
    useState("");

  // acces and utilization service
  const [accessToInputProviders, setAccesToInputProviders] = useState("");
  const [accessToBDS, setAccessToBDS] = useState("");
  const [accessToOfftakers, setAccessToOffTakers] = useState("");
  const [accessToFSP, setAccessToFSP] = useState("");
  const [accessToMSP, setAccessToMSP] = useState("");
  const [accessToAdvisoryService, setAccessToAdvisoryService] = useState("");
  // state benefits
  const [govermentIncentives, setGovermentIncentives] = useState("");
  const [accessToGovtLand, setAccessToGovtLand] = useState("");
  const [ogstepFarmer, setogstepFarmer] = useState("");
  const [vcdf, setVcdf] = useState("");
  const [groupname, setGroupName] = useState("");
  // annual farm income
  const [cropsIncome, setCropsIncome] = useState("");
  const [livestockIncome, setLivestockIncome] = useState("");
  const [costOfProduction, setCostOfProduction] = useState("");
  const [totalRevenue, setTotalRevenue] = useState("");
  // annual non-farm income
  const [serviceProvisionIncome, setServiceProvisionIncome] = useState("");
  const [regularEmploymentIncome, setRegularEmploymentIncome] = useState("");
  const [incomeFromBusiness, setIncomeFromBusiness] = useState("");
  const [otherIncomeMeans, setOtherIncomeMeans] = useState("");

  // business information
  const [businessLocation, setBusinessLocation] = useState("");
  const [businessLGA, setBusinessLGA] = useState("");
  const [locationOfDataCollection, setLocationOfDataCollection] = useState("");
  const [businessAddress, setBusinessAdress] = useState("");
  const [businessTelNo, setBusinessTelNo] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  // const [location, setLocation] = useState("");
  // const [marketerLGA, setMarketerLGA] = useState("");
  // const [marketerBusinessAddress, setAddress] = useState("");
  // const [marketerPhoneNumber, setMarketerPhoneNumber] = useState("");
  // const [marketerEmail, setMarketerEmail] = useState("");
  const [businessCategory, setBusinessCategory] = useState("");
  const [yearOfBusinessEstablishment, setYearOfBusinessEstablishment] =
    useState("");

  // agro marketer
  const [businessName, setBusinessName] = useState("");
  const [typeOfCommodity, setTypeOfCommodity] = useState([]);
  const [otherTypeOfCommodity, setOtherTypeOfCommodity] = useState("");
  const [areaOfMarketingOperation, setAreaOfMarketingOperation] = useState([]);
  const [otherTypeOfCommodityTransported, setOtherTypeOfCommodityTransported] =
    useState("");
  // processor
  const [offtakeCapacity, setOfftakeCapacity] = useState("");
  // mechanization service
  const [areaOfSpecialization, setAreaOfSpecialization] = useState([]);
  // logistics
  const [haulageCapacity, setHaulageCapacity] = useState("");
  const [commodityTransported, setCommodityTransported] = useState([]);

  const agroMarketerCommodity = [
    "Food crops",
    "Livestock",
    "Fishery",
    "Processed farm products",
    "Others",
  ];

  const processorCommodity = ["Cassava", "Yam", "Feed"];

  const inputDealerCommodity = [
    "Farm tools",
    "Agrochemicals",
    "Fertilizers",
    "Feed",
    "Others",
  ];

  const offtakerTypeOfCommodity = [
    "Food crops",
    "Cash crops",
    "Livestock",
    "Fish",
    "Others",
  ];
  // bds and extension service
  const areasOfSpecialization = [
    "Agribusiness",
    "Aquaculture",
    "Crops",
    "Livestock",
    "Others",
  ];

  const MechServiceAreaOfSpecialization = [
    "Land clearing",
    "Land preparation",
    "Planting and harvesting",
    "Weed control",
    "Process automation",
  ];

  const commoditiesTransported = [
    "Agrochemicals and inputs",
    "Farm produce",
    "Livestock",
    "Cold chain",
    "Others",
  ];

  const secondaryCategoryOptions = [
    "agroMarketer",
    "processor",
    "inputDelear",
    "extension",
    "bds",
    "offtaker",
    "logistic",
    "mechanizationService",
  ];
  const years = [
    1980, 1981, 1982, 1983, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990,
    1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
    2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020, 2021, 2023,
  ];

  const businessLocationLGAs = [
    {
      option: "Abeokuta North",
      value: "Abeokuta_North",
    },
    {
      option: "Abeokuta South",
      value: "Abeokuta_South",
    },
    {
      option: "Ado-Odo/Ota",
      value: "Ado_Odo_Ota",
    },
    {
      option: "Ewekoro",
      value: "Ewekoro",
    },
    {
      option: "Ifo",
      value: "Ifo",
    },
    {
      option: "Ijebu East",
      value: "Ijebu_East",
    },
    {
      option: "Ijebu North",
      value: "Ijebu_North",
    },
    {
      option: "Ijebu North-East",
      value: "Ijebu_North_East",
    },
    {
      option: "Ijebu Ode",
      value: "Ijebu_Ode",
    },
    {
      option: "Ikenne",
      value: "Ikenne",
    },
    {
      option: "Imeko Afon",
      value: "Imeko_Afon",
    },
    {
      option: "Ipokia",
      value: "Ipokia",
    },
    {
      option: "Obafemi Owode",
      value: "Obafemi_Owode",
    },
    {
      option: "Odeda",
      value: "Odeda",
    },
    {
      option: "Odogbolu",
      value: "Odogbolu",
    },
    {
      option: "Ogun Waterside",
      value: "Ogun_Waterside",
    },
    {
      option: "Remo North",
      value: "Remo_North",
    },
    {
      option: "Shagamu",
      value: "Shagamu",
    },
    {
      option: "Yewa North",
      value: "Yewa_North",
    },
  ];

  const cropsList = [
    {
      id: "cassava",
      name: "Cassava",
      value: "cassava",
    },
    {
      id: "yam",
      name: "Yam",
      value: "yam",
    },
    {
      id: "cowpea",
      name: "Cowpea",
      value: "cowpea",
    },
    {
      id: "banana",
      name: "Banana",
      value: "banana",
    },
    {
      id: "plantain",
      name: "Plantain",
      value: "plantain",
    },
    {
      id: "rice",
      name: "Rice",
      value: "rice",
    },
    {
      id: "cocoa",
      name: "Cocoa",
      value: "cocoa",
    },
    {
      id: "cashew",
      name: "Cashew",
      value: "cashew",
    },
    {
      id: "oil_palm",
      name: "Oil Palm",
      value: "Oil Palm",
    },
    {
      id: "potato",
      name: "Potato",
      value: "potato",
    },
    {
      id: "maize",
      name: "Maize",
      value: "maize",
    },

    {
      id: "cotton",
      name: "Cotton",
      value: "cotton",
    },
    {
      id: "Sweet_potato",
      name: "Sweet Potato",
      value: "sweet_potato",
    },
    {
      id: "Wheat",
      name: "Wheat",
      value: "wheat",
    },
    {
      id: "Sesame",
      name: "Sesame",
      value: "sesame",
    },
    {
      id: "horticulture",
      name: "Horticulture (specify)",
      value: "horticulture_specify",
    },
    {
      id: "Other",
      name: "Other",
      value: "other",
    },
  ];

  const liveStocksList = [
    {
      id: "poultry",
      name: "Poultry",
      value: "poultry",
    },
    {
      id: "fishery",
      name: "Fishery & Aquaculture",
      value: "Fishery & Aquaculture",
    },
    {
      id: "cattle",
      name: "Cattle",
      value: "Cattle",
    },
    {
      id: "piggery",
      name: "Piggery",
      value: "Piggery",
    },
    {
      id: "small_ruminants",
      name: "Small Ruminants (Goat, Sheep etc.)",
      value: "small_ruminants",
    },
    {
      id: "rabbitry",
      name: "Rabbitry",
      value: "Rabbitry",
    },
    {
      id: "snailry",
      name: "Snailry",
      value: "Snailry",
    },
    {
      id: "grasscutter_farming",
      name: "Grasscutter farming",
      value: "Grasscutter farming",
    },
    {
      id: "Sericulture",
      name: "Sericulture (Silkworm production)",
      value: "Sericulture (Silkworm production)",
    },
    {
      id: "bee_keeping",
      name: "Bee-keeping",
      value: "Bee-keeping",
    },
    {
      id: "other",
      name: "Other",
      value: "Other",
    },
  ];

  const steps = [1, 2, 3, 4, 5];
  const [currentStep, setCurrentStep] = useState(1);

  // handle select country
  const handleSelectCountry = (evt) => {
    // console.log("countries => ", countries);
    // console.log("states => ", states);
    const country = evt.target.value;
    setNationality(country);
    if (countries && country) {
      const selectedCountry = countries.find(
        (item) => item.country === country
      );

      if (selectedCountry) {
        setStates(selectedCountry.states);
      }
    }
  };

  // handle select state
  const handleSelectState = (evt) => {
    const state = evt.target.value;
    setState(state);
    if (states && state) {
      const selectedState = states.find((item) => item.name === state);
      // console.log("selectedState =>", selectedState);
      if (selectedState) {
        setLGAs(selectedState.locals);
      }
    }
  };

  // handle multiple select checkbox

  const handleTypeOfFarming = (evt) => {
    const value = evt.target.value;
    setTypeOfFarming((prevCheckedItems) => {
      if (prevCheckedItems.includes(value)) {
        return prevCheckedItems.filter((item) => item !== value);
      } else {
        return [...prevCheckedItems, value];
      }
    });

    // console.log("typeOfFarming => ", value, typeOfFarming);
  };

  const handleCropsBeingFarmed = (evt) => {
    const value = evt.target.value;
    setCropsBeingFarmed((prevCheckedItems) => {
      if (prevCheckedItems.includes(value)) {
        return prevCheckedItems.filter((item) => item !== value);
      } else {
        return [...prevCheckedItems, value];
      }
    });
    // console.log("cropsBeingFarmed =>", cropsBeingFarmed);
  };

  const handleForWhichCrops = (evt) => {
    const value = evt.target.value;
    setForWhichCrops((prevCheckedItems) => {
      if (prevCheckedItems.includes(value)) {
        return prevCheckedItems.filter((item) => item !== value);
      } else {
        return [...prevCheckedItems, value];
      }
    });
    // console.log("forWhichCrops => ", forWhichCrops);
  };

  const handlePlantForSeedOrSellHarvestAsSeed = (evt) => {
    const value = evt.target.value;
    setPlantForSeedOrSellHarvestAsSeed((prevCheckedItems) => {
      if (prevCheckedItems.includes(value)) {
        return prevCheckedItems.filter((item) => item !== value);
      } else {
        return [...prevCheckedItems, value];
      }
    });
  };

  const handleSellSeedOrFreeOrBarter = (evt) => {
    const value = evt.target.value;
    setSellSeedOrFreeOrBarter((prevCheckedItems) => {
      if (prevCheckedItems.includes(value)) {
        return prevCheckedItems.filter((item) => item !== value);
      } else {
        return [...prevCheckedItems, value];
      }
    });
  };

  const handleTypesOfLivestockFarming = (evt) => {
    const value = evt.target.value;
    setTypesOfLiveStockFarming((prevCheckedItems) => {
      if (prevCheckedItems.includes(value)) {
        return prevCheckedItems.filter((item) => item !== value);
      } else {
        return [...prevCheckedItems, value];
      }
    });
    // console.log("typesOfLiveStockFarming => ", typesOfLiveStockFarming);
  };

  const handlePoultryType = (evt) => {
    const value = evt.target.value;
    setPoultryType((prevCheckedItems) => {
      if (prevCheckedItems.includes(value)) {
        return prevCheckedItems.filter((item) => item !== value);
      } else {
        return [...prevCheckedItems, value];
      }
    });
  };

  const handleTypesOfCommodity = (evt) => {
    const value = evt.target.value;
    setTypeOfCommodity((prevCheckedItems) => {
      if (prevCheckedItems.includes(value)) {
        return prevCheckedItems.filter((item) => item !== value);
      } else {
        return [...prevCheckedItems, value];
      }
    });
  };

  const handleAreaOfMarketingOperation = (evt) => {
    const value = evt.target.value;
    setAreaOfMarketingOperation((prevCheckedItems) => {
      if (prevCheckedItems.includes(value)) {
        return prevCheckedItems.filter((item) => item !== value);
      } else {
        return [...prevCheckedItems, value];
      }
    });
  };

  const handleAreaOfSpecialization = (evt) => {
    const value = evt.target.value;
    setAreaOfSpecialization((prevCheckedItems) => {
      if (prevCheckedItems.includes(value)) {
        return prevCheckedItems.filter((item) => item !== value);
      } else {
        return [...prevCheckedItems, value];
      }
    });
  };

  const handleCommodityTransported = (evt) => {
    const value = evt.target.value;
    setCommodityTransported((prevCheckedItems) => {
      if (prevCheckedItems.includes(value)) {
        return prevCheckedItems.filter((item) => item !== value);
      } else {
        return [...prevCheckedItems, value];
      }
    });
  };

  const handlefarmLandOwnership = (evt) => {
    const value = evt.target.value;
    setFarmLandOwnership((prevCheckedItems) => {
      if (prevCheckedItems.includes(value)) {
        return prevCheckedItems.filter((item) => item !== value);
      } else {
        return [...prevCheckedItems, value];
      }
    });
  };

  const handleBenefitOfCooperative = (evt) => {
    const value = evt.target.value;
    setBenefitOfCooperative((prevCheckedItems) => {
      if (prevCheckedItems.includes(value)) {
        return prevCheckedItems.filter((item) => item !== value);
      } else {
        return [...prevCheckedItems, value];
      }
    });
  };

  const handleMediumOfInformation = (evt) => {
    const value = evt.target.value;
    setMediumOfInformation((prevCheckedItems) => {
      if (prevCheckedItems.includes(value)) {
        return prevCheckedItems.filter((item) => item !== value);
      } else {
        return [...prevCheckedItems, value];
      }
    });
  };

  // handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    // last step and if all have been verifed, submit data

    let farmer = {};
    let agroMarketer = {};
    let inputDelear = {};
    let offtaker = {};
    let processor = {};
    let extension = {};
    let logistic = {};
    let mechanizationService;
    let bds = {};

    if (primaryCategory === "farmer") {
      farmer = {
        data_collection_location: locationOfDataCollection,
        gps: "",
        latitude: "",
        longitude: "",
        altitude: "",
        gps_precision: "",
        crop_farming: typeOfFarming.includes("Crop farming") ? "TRUE" : "FALSE",
        livestocks: typeOfFarming.includes("Livestocks") ? "TRUE" : "FALSE",
        total_farmsize_crops: totalFarmSizeCultivated,
        primary_purpose_of_farming: primaryPurposeOfFarming,
        farmland_ownership: {
          inherited: farmlandOwnership.includes("Inherited") ? "TRUE" : "FALSE",
          purchased: farmlandOwnership.includes("Purchased") ? "TRUE" : "FALSE",
          lease: farmlandOwnership.includes("Leased") ? "TRUE" : "FALSE",
        },
        crops_being_farmed: {
          cassava: cropsBeingFarmed.includes("cassava") ? "TRUE" : "FALSE",
          yam: cropsBeingFarmed.includes("yam") ? "TRUE" : "FALSE",
          cowpea: cropsBeingFarmed.includes("cowpea") ? "TRUE" : "FALSE",
          banana: cropsBeingFarmed.includes("banana") ? "TRUE" : "FALSE",
          plantain: cropsBeingFarmed.includes("plantain") ? "TRUE" : "FALSE",
          rice: cropsBeingFarmed.includes("rice") ? "TRUE" : "FALSE",
          cocoa: cropsBeingFarmed.includes("cocoa") ? "TRUE" : "FALSE",
          cashew: cropsBeingFarmed.includes("cashew") ? "TRUE" : "FALSE",
          oil_palm: cropsBeingFarmed.includes("oil_palm") ? "TRUE" : "FALSE",
          potato: cropsBeingFarmed.includes("potato") ? "TRUE" : "FALSE",
          sweet_potato: cropsBeingFarmed.includes("sweet_potato")
            ? "TRUE"
            : "FALSE",
          wheat: cropsBeingFarmed.includes("wheat") ? "TRUE" : "FALSE",
          sesame: cropsBeingFarmed.includes("sesame") ? "TRUE" : "FALSE",
          soya: cropsBeingFarmed.includes("soya") ? "TRUE" : "FALSE",
          maize: cropsBeingFarmed.includes("maize") ? "TRUE" : "FALSE",
          cotton: cropsBeingFarmed.includes("cotton") ? "TRUE" : "FALSE",
          horticulture: cropsBeingFarmed.includes("Horticulture (specify)")
            ? "TRUE"
            : "FALSE",
          horticulture_other: otherHorticulture,
          other_specify: cropsBeingFarmed.includes("other_specify")
            ? "TRUE"
            : "FALSE",
          other_crop: otherCropsBeingFarmed,
        },

        farm_size_under_cultivation: totalFarmSizeCultivated,
        are_you_producing_seed: producingSeed,
        seeds: {
          cassava: forWhichCrops.includes("Cassava") ? "TRUE" : "FALSE",
          yam: forWhichCrops.includes("yam") ? "TRUE" : "FALSE",
          cowpea: forWhichCrops.includes("cowpea") ? "TRUE" : "FALSE",
          banana: forWhichCrops.includes("banana") ? "TRUE" : "FALSE",
          plantain: forWhichCrops.includes("plantain") ? "TRUE" : "FALSE",
          rice: forWhichCrops.includes("rice") ? "TRUE" : "FALSE",
          cassava: forWhichCrops.includes("Cassava") ? "TRUE" : "FALSE",
          cocoa: forWhichCrops.includes("cocoa") ? "TRUE" : "FALSE",
          cashew: forWhichCrops.includes("cashew") ? "TRUE" : "FALSE",
          oil_palm: forWhichCrops.includes("Oil palm") ? "TRUE" : "FALSE",
          potato: forWhichCrops.includes("potato") ? "TRUE" : "FALSE",
          maize: forWhichCrops.includes("maize") ? "TRUE" : "FALSE",
          cotton: forWhichCrops.includes("cotton") ? "TRUE" : "FALSE",
          sweet_potato: forWhichCrops.includes("Sweet potato")
            ? "TRUE"
            : "FALSE",
          wheat: forWhichCrops.includes("wheat") ? "TRUE" : "FALSE",
          sesame: forWhichCrops.includes("sesame") ? "TRUE" : "FALSE",
          horticulture: forWhichCrops.includes("Horticulture (specify)")
            ? "TRUE"
            : "FALSE",
          horticulture_other: otherHorticultureForWhichCrop,
          other_specify: forWhichCrops.includes("Other") ? "TRUE" : "FALSE",
          other_crop: otherForWhichCrop,
        },
        plant_for_seed: plantForSeedOrSellHarvestAsSeed.includes(
          "Plant for seed"
        )
          ? "TRUE"
          : "FALSE",
        sell_harvest_as_seed: plantForSeedOrSellHarvestAsSeed.includes(
          "Sell harvest as seed"
        )
          ? "TRUE"
          : "FALSE",
        when_did_you_start_seed_production: startSeedProduction,
        sell_seed: sellSeedOrFreeOrBarter === "Sell seed" ? "TRUE" : "FALSE",
        give_for_free:
          sellSeedOrFreeOrBarter === "Give for free" ? "TRUE" : "FALSE",
        barter: sellSeedOrFreeOrBarter === "Barter" ? "TRUE" : "FALSE",
        do_you_sell_seed_in_local_markets: sellSeedInLocalMarket,
        what_is_the_motivati_for_seed_production: motivationForSeedProduction,
        did_you_receive_any_vice_to_produce_seed: trainingToProduceSeed,
        livestoc_farming: {
          poultry: typesOfLiveStockFarming.includes("poultry")
            ? "TRUE"
            : "FALSE",
          fishery: typesOfLiveStockFarming.includes("Fishery & Aquaculture")
            ? "TRUE"
            : "FALSE",
          cattle: typesOfLiveStockFarming.includes("Cattle") ? "TRUE" : "FALSE",
          piggery: typesOfLiveStockFarming.includes("Piggery")
            ? "TRUE"
            : "FALSE",
          small_ruminants: typesOfLiveStockFarming.includes(
            "Small Ruminants (Goat, Sheep etc.)"
          )
            ? "TRUE"
            : "FALSE",
          rabbitry: typesOfLiveStockFarming.includes("Rabbitry")
            ? "TRUE"
            : "FALSE",
          snailry: typesOfLiveStockFarming.includes("Snailry")
            ? "TRUE"
            : "FALSE",
          grasscutter: typesOfLiveStockFarming.includes("Grasscutter farming")
            ? "TRUE"
            : "FALSE",
          sericulture: typesOfLiveStockFarming.includes(
            "Sericulture (Silkworm production)"
          )
            ? "TRUE"
            : "FALSE",
          bee_keeping: typesOfLiveStockFarming.includes("Bee-keeping")
            ? "TRUE"
            : "FALSE",
          other_specify: typesOfLiveStockFarming.includes("Other")
            ? "TRUE"
            : "FALSE",
          other_livestock: otherTypeOfLivestockFarming,
        },
        farmproductivitycrop: {
          total_farmsize_livestock: farmSizeForLiveStockFarming,
          cassava_totalfarmsize: cassavaFarmSize,
          cassava_yield: cassavaYield,
          yam_totalfarmsize: yamFarmSize,
          yam_yield: yamYield,
          cowpea_totalfarmsize: cowpeaFarmSize,
          cowpea_yield: cowpeaYield,
          banana_totalfarmsize: bananaFarmSize,
          banana_yield: bananaYield,
          plantain_totalfarmsize: plantainFarmSize,
          plantain_yield: plantainYield,
          rice_totalfarmsize: riceFarmSize,
          rice_yield: riceYield,
          cocoa_totalfarmsize: cocoaFarmSize,
          cocoa_yield: cocoaYield,
          cashew_totalfarmsize: cashewFarmSize,
          cashew_yield: cashewYield,
          oilpalm_totalfarmsize: oilPalmFarmSize,
          oilpalm_yield: oilPalmYield,
          potato_totalfarmsize: potatoFarmSize,
          potato_yield: potatoYield,
          sweetpotato_totalfarmsize: sweetPotatoFarmSize,
          sweetpotato_yield: sweetPotatoYield,
          wheat_totalfarmsize: wheatFarmSize,
          wheat_yield: wheatYield,
          sesame_totalfarmsize: sesameFarmSize,
          sesame_yield: sesameYield,
          soy_totalfarmsize: soyaFarmSize,
          soy_yield: soyaYield,
          maize_totalfarmsize: maizeFarmSize,
          maize_yield: maizeYield,
          cotton_totalfarmsize: cottonFarmSize,
          cotton_yield: cottonYield,
          other_crop_totalfarmsize: cottonFarmSize,
          other_crop_yield: cottonYield,
        },
        farmproductivitylivestock: {
          broilers: poultryType === "broilers" ? "TRUE" : "FALSE",
          layers: poultryType === "layers" ? "TRUE" : "FALSE",
          poultry_stockcapacity: poultryStockCapacity,
          poultry_mortality: poultryAverageMortality,
          poultry_harvestweight: poultryAverageHarvest,
          poultry_totalharvestweight: poultryTotalHarvest,
          poultry_totaleggprod: poultryEggsProduced,
          fishery_stockcapacity: fisheryStockCapacity,
          fishery_mortality: fisheryAverageMortality,
          fishery_harvestweight: fisheryAverageHarvest,
          fishery_totalharvestweight: fisheryTotalHarvest,
          cattle_stockcapacity: cattleStockCapacity,
          cattle_mortality: cattleAverageMortality,
          cattle_harvestweight: cattleAverageHarvest,
          cattle_totalharvestweight: cattleTotalHarvest,
          piggery_stockcapacity: piggeryStockCapacity,
          piggery_mortality: piggeryAverageMortality,
          piggery_harvestweight: piggeryAverageHarvest,
          piggery_totalharvestweight: piggeryTotalHarvest,
          small_ruminantsstockcapacity: smallRuminantsStockCapacity,
          small_ruminantsmortality: smallRuminantsAverageMortality,
          small_ruminantsharvestweight: smallRuminantsAverageHarvest,
          small_ruminantstotalharvestweight: smallRuminantsTotalHarvest,
          rabbitry_stockcapacity: rabbitryStockCapacity,
          rabbitry_mortality: rabbitryAverageMortality,
          rabbitry_harvestweight: rabbitryAverageHarvest,
          rabbitry_totalharvestweight: rabbitryTotalHarvest,
          grasscutter_stockcapacity: grasscutterStockCapacity,
          grasscutter_mortality: grasscutterAverageMortality,
          grasscutter_harvestweight: grasscutterAverageHarvest,
          grasscutter_totalharvestweight: grasscutterTotalHarvest,
          sericulture_stockcapacity: sericultureStockCapacity,
          sericulture_mortality: sericultureAverageMortality,
          sericulture_harvestweight: sericultureAverageHarvest,
          sericulture_totalharvestweight: sericultureTotalHarvest,
          bee_keeping_stockcapacity: beekeepingStockCapacity,
          bee_keeping_mortality: beekeepingAverageMortality,
          bee_keeping_harvestweight: beekeepingAverageHarvest,
          bee_keeping_totalharvestweight: beekeepingTotalHarvest,
          snailry_stockcapacity: snailryStockCapacity,
          snailry_mortality: snailryAverageMortality,
          snailry_harvestweight: snailryAverageHarvest,
          snailry_totalharvestweight: snailryTotalHarvest,
          other_livestock_stockcapacity: otherLivestockStockCapacity,
          other_livestock_mortality: otherLivestockAverageMortality,
          other_livestock_harvestweight: otherLivestockAverageHarvest,
          other_livestock_totalharvestweight: otherLivestockTotalHarvest,
        },
        access_to_Input_providers: accessToInputProviders,
        access_to_Business_D_nt_Service_providers: accessToBDS,
        access_to_Off_takers: accessToOfftakers,
        access_to_Financial_Service_providers: accessToFSP,
        access_to_Mechanizat_on_Service_providers: accessToMSP,
        access_to_Advisory_services: accessToAdvisoryService,
        any_incentive_receiv_es_soft_loans_others: govermentIncentives,
        access_to_Government_land_for_farming: accessToGovtLand,
        ogstep_farmer: ogstepFarmer,
        vcdf: vcdf,
        groupname: groupname,
        crops_income: cropsIncome,
        livestock_income: livestockIncome,
        total_Expenditure: costOfProduction,
        total_revenue: totalRevenue,
        income_from_serviceprovision: serviceProvisionIncome,
        income_from_regular_employment: regularEmploymentIncome,
        income_from_business: incomeFromBusiness,
        income_from_other_means: otherIncomeMeans,
      };
    }
    // agro marketer
    if (primaryCategory === "agroMarketer") {
      agroMarketer = {
        Agro_Business_Name: businessName,
        Food_crops: typeOfCommodity,
        type_of_commodity: {
          Livestock: typeOfCommodity.includes("livestock") ? "TRUE" : "FALSE",
          fishery: typeOfCommodity.includes("fishery") ? "TRUE" : "FALSE",
          processed_farm_products: typeOfCommodity.includes(
            "processed farm products"
          )
            ? "TRUE"
            : "FALSE",
          others: typeOfCommodity.includes("Other") ? "TRUE" : "FALSE",
          other_commodity: otherTypeOfCommodity,
        },
        area_of_Marketing_Operation: {
          intrastate: areaOfMarketingOperation.includes("Intrastate")
            ? "TRUE"
            : "FALSE",
          interstate: areaOfMarketingOperation.includes("Interstate")
            ? "TRUE"
            : "FALSE",
          international: areaOfMarketingOperation.includes("International")
            ? "TRUE"
            : "FALSE",
        },
        location: businessLocation,
        lga: lga,
        data_collection_location: locationOfDataCollection,
        gps: "",
        latitude: "",
        longitude: "",
        altitude: "",
        gps_precision: "",
        business_Address: businessAddress,
        telephone_number: businessTelNo,
        email_address: businessEmail,
        business_category: businessCategory,
        year_of_Business_establishment: yearOfBusinessEstablishment,
      };
    }

    // inputDealer
    if (primaryCategory === "inputDealer") {
      inputDelear = {
        business_Name: businessName,
        type_of_commodity: {
          farm_tools: typeOfCommodity.includes("Farm tools") ? "TRUE" : "FALSE",
          agrochemicals: typeOfCommodity.includes("Agrochemicals")
            ? "TRUE"
            : "FALSE",
          fertilizers: typeOfCommodity.includes("Fertilizers")
            ? "TRUE"
            : "FALSE",
          feed: typeOfCommodity.includes("Feed") ? "TRUE" : "FALSE",
          other: typeOfCommodity.includes("others") ? "TRUE" : "FALSE",
        },
        area_of_Marketing_Operation: {
          intrastate: areaOfMarketingOperation.includes("Intrastate")
            ? "TRUE"
            : "FALSE",
          interstate: areaOfMarketingOperation.includes("Interstate")
            ? "TRUE"
            : "FALSE",
          international: areaOfMarketingOperation.includes("International")
            ? "TRUE"
            : "FALSE",
        },
        location: businessLocation,
        lga: lga,
        data_collection_location: locationOfDataCollection,
        gps: "",
        latitude: "",
        longitude: "",
        altitude: "",
        gps_precision: "",
        business_Address: businessAddress,
        telephone_number: businessTelNo,
        email_address: businessEmail,
        business_category: businessCategory,
        year_of_Business_establishment: yearOfBusinessEstablishment,
      };
    }

    // offtaker
    if (primaryCategory === "offtaker") {
      offtaker = {
        business_Name: businessName,
        type_of_commodity: {
          food_crops: typeOfCommodity.includes("Food crops") ? "TRUE" : "FALSE",
          cash_crops: typeOfCommodity.includes("Cash crops") ? "TRUE" : "FALSE",
          livestock: typeOfCommodity.includes("livestock") ? "TRUE" : "FALSE",
          fish: typeOfCommodity.includes("Fish") ? "TRUE" : "FALSE",
          others: typeOfCommodity.includes("Others") ? "TRUE" : "FALSE",
        },
        area_of_Marketing_Operation: {
          intrastate: areaOfMarketingOperation.includes("Intrastate")
            ? "TRUE"
            : "FALSE",
          interstate: areaOfMarketingOperation.includes("Interstate")
            ? "TRUE"
            : "FALSE",
          international: areaOfMarketingOperation.includes("International")
            ? "TRUE"
            : "FALSE",
        },
        location: businessLocation,
        lga: lga,
        data_collection_location: locationOfDataCollection,
        gps: "",
        latitude: "",
        longitude: "",
        altitude: "",
        gps_precision: "",
        business_Address: businessAddress,
        telephone_number: businessTelNo,
        email_address: businessEmail,
        business_category: businessCategory,
        year_of_Business_establishment: yearOfBusinessEstablishment,
      };
    }

    // processor
    if (primaryCategory === "processor") {
      processor = {
        business_Name: businessName,
        type_of_commodity: {
          cassava: typeOfCommodity.includes("Cassava") ? "TRUE" : "FALSE",
          yam: typeOfCommodity.includes("Yam") ? "TRUE" : "FALSE",
          feed: typeOfCommodity.includes("Feed") ? "TRUE" : "FALSE",
        },

        location: businessLocation,
        lga: lga,
        data_collection_location: locationOfDataCollection,
        gps: "",
        latitude: "",
        longitude: "",
        altitude: "",
        gps_precision: "",
        business_Address: businessAddress,
        telephone_number: businessTelNo,
        email_address: businessEmail,
        capacity: offtakeCapacity,
        year_of_Business_establishment: yearOfBusinessEstablishment,
      };
    }

    // advisory service
    if (primaryCategory === "advisoryService") {
      extension = {
        business_Name: businessName,
        specialization: {
          livestock: areaOfSpecialization.includes("farm tools")
            ? "TRUE"
            : "FALSE",
          aquaculture: areaOfSpecialization.includes("aquaculture")
            ? "TRUE"
            : "FALSE",
          crops: areaOfSpecialization.includes("crops") ? "TRUE" : "FALSE",
          agribusiness: areaOfSpecialization.includes("agribusiness")
            ? "TRUE"
            : "FALSE",
          others: areaOfSpecialization.includes("other") ? "TRUE" : "FALSE",
        },

        location: businessLocation,
        lga: lga,
        data_collection_location: locationOfDataCollection,
        gps: "",
        latitude: "",
        longitude: "",
        altitude: "",
        gps_precision: "",
        business_Address: businessAddress,
        telephone_number: businessTelNo,
        email_address: businessEmail,
        business_category: businessCategory,
        year_of_Business_establishment: yearOfBusinessEstablishment,
      };
    }

    // logistic
    if (primaryCategory === "logistic") {
      logistic = {
        business_Name: businessName,
        capacity: haulageCapacity,
        commodity_transported: {
          agrochemicals_inputs: commodityTransported.includes(
            "Agrochemicals and inputs"
          )
            ? "TRUE"
            : "FALSE",
          farm_produce: commodityTransported.includes("Farm produce")
            ? "TRUE"
            : "FALSE",
          livestock: commodityTransported.includes("Livestock")
            ? "TRUE"
            : "FALSE",
          cold_chain: commodityTransported.includes("Cold chain")
            ? "TRUE"
            : "FALSE",
          others: commodityTransported.includes("Others") ? "TRUE" : "FALSE",
          other_commodity: otherTypeOfCommodityTransported,
        },
        area_of_Operation: {
          intrastate: areaOfMarketingOperation.includes("Intrastate")
            ? "TRUE"
            : "FALSE",
          interstate: areaOfMarketingOperation.includes("Interstate")
            ? "TRUE"
            : "FALSE",
          international: areaOfMarketingOperation.includes("International")
            ? "TRUE"
            : "FALSE",
        },

        location: businessLocation,
        lga: lga,
        data_collection_location: locationOfDataCollection,
        gps: "",
        latitude: "",
        longitude: "",
        altitude: "",
        gps_precision: "",
        business_Address: businessAddress,
        telephone_number: businessTelNo,
        email_address: businessEmail,
        business_category: businessCategory,
        year_of_Business_establishment: yearOfBusinessEstablishment,
      };
    }

    // mechanization service provider
    if (primaryCategory === "mechanizationService") {
      mechanizationService = {
        business_Name: businessName,
        specialization: {
          Land_clearing: areaOfSpecialization.includes("Land clearing")
            ? "TRUE"
            : "FALSE",
          land_preparation: areaOfSpecialization.includes("Land preparation")
            ? "TRUE"
            : "FALSE",
          planting_harvesting: areaOfSpecialization.includes(
            "Planting and harvesting"
          )
            ? "TRUE"
            : "FALSE",
          weed_control: areaOfSpecialization.includes("Weed control")
            ? "TRUE"
            : "FALSE",
          process_automation: areaOfSpecialization.includes(
            "Process automation"
          )
            ? "TRUE"
            : "FALSE",
        },

        location: businessLocation,
        lga: lga,
        data_collection_location: locationOfDataCollection,
        gps: "",
        latitude: "",
        longitude: "",
        altitude: "",
        gps_precision: "",
        business_Address: businessAddress,
        telephone_number: businessTelNo,
        email_address: businessEmail,
        business_category: businessCategory,
        year_of_Business_establishment: yearOfBusinessEstablishment,
      };
    }

    // business_development_service_provider
    if (primaryCategory === "bds") {
      bds = {
        business_Name: businessName,
        specialization: {
          livestock: areaOfSpecialization.includes("farm tools")
            ? "TRUE"
            : "FALSE",
          aquaculture: areaOfSpecialization.includes("aquaculture")
            ? "TRUE"
            : "FALSE",
          crops: areaOfSpecialization.includes("crops") ? "TRUE" : "FALSE",
          agribusiness: areaOfSpecialization.includes("agribusiness")
            ? "TRUE"
            : "FALSE",
          others: areaOfSpecialization.includes("other") ? "TRUE" : "FALSE",
        },

        location: businessLocation,
        lga: lga,
        data_collection_location: locationOfDataCollection,
        gps: "",
        latitude: "",
        longitude: "",
        altitude: "",
        gps_precision: "",
        business_Address: businessAddress,
        telephone_number: businessTelNo,
        email_address: businessEmail,
        business_category: businessCategory,
        year_of_Business_establishment: yearOfBusinessEstablishment,
      };
    }
    const user_id = uuidv4();
    // console.log(user_id);

    let newdata = {
      _uuid: user_id,
      firstName: firstName,
      lastName: lastName,
      age: age,
      sex: sex,
      educationStatus: educationStatus,
      maritalstatus: maritalstatus,
      householdSize: householdSize,
      nationalIdentificationNumber: nin,
      profileImage: profileImage,
      mobileNumber: phoneNumber,
      alternateMobileNumber: alternativePhoneNumber,
      email: email,
      houseNumber: houseNumber,
      streetName: streetName,
      city: city,
      lga: lga,
      nationality: nationality,
      stateOfOrigin: state,
      lgaOrigin: lga,
      totalAdultInTheFamily: totalAdults,
      employedAdultInTheFamily: employedHouseHoldMembers,
      memberofCooperativeGroup: cooperativeMembership,
      benefits_of_cooperative: {
        access_to_credit: benefitOfCooperative.includes("Access to credit")
          ? "TRUE"
          : "FALSE",
        input_supply: benefitOfCooperative.includes("Input supply")
          ? "TRUE"
          : "FALSE",
        marketing_of_produce: benefitOfCooperative.includes(
          "Marketing of produce"
        )
          ? "TRUE"
          : "FALSE",
        technical_assistance_and_extension_service:
          benefitOfCooperative.includes(
            "Technical assistance and extension services"
          )
            ? "TRUE"
            : "FALSE",
        others_specify: otherCooperativeBenefitsValue,
      },
      info_medium: {
        radio: mediumOfInformation.includes("Radio") ? "TRUE" : "FALSE",
        television: mediumOfInformation.includes("Television")
          ? "TRUE"
          : "FALSE",
        mobile_phone: mediumOfInformation.includes("Mobile Phone")
          ? "TRUE"
          : "FALSE",
        smartphone: mediumOfInformation.includes("Smartphone")
          ? "TRUE"
          : "FALSE",
        newspaper: mediumOfInformation.includes("Newspaper") ? "TRUE" : "FALSE",
        community_group: mediumOfInformation.includes("Community group")
          ? "TRUE"
          : "FALSE",
        ADPs: mediumOfInformation.includes("ADPs") ? "TRUE" : "FALSE",
        other_specify: otherMediumofInformation ? "TRUE" : "FALSE",
        other_medium: otherMediumofInformationValue,
      },
      challengesOfUsingMobilePhone: challengeOfMobilePhone,
      advantagesOfUsingMobilePhone: advantagesOfMobilePhone,
      proficiencyInUsingInternet: levelOfInrernetProficiency,
      dateOfDataCollection: "",
      enumeratorName: "",
      otherEnumerator: "",
      canFarmerbeListedOnAgroshop: "",
      enumeratorComment: "",
      farmer,
      agroMarketer,
      processor,
      inputDelear,
      extension,
      bds,
      offtaker,
      mechanizationService,
      logistic,
    };

    fetch(`${baseURL}user`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${currentUser.token}`,
      },

      body: JSON.stringify(newdata),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log("newdata => ", newdata);
        // console.log("result => ", result);
        if (result.success === true) {
          toast.success("user registration successul!");
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        }
      })
      .catch((error) => {
        toast.error(error);
        console.log("error => ", error);
      });
  };

  // upload profile image to database and save the returned url
  const handleProfileImage = (e) => {
    const image = e.target.files[0];
    if (image) {
      const formData = new FormData();
      formData.append("filetoupload", image);

      fetch(`${baseURL}file-upload`, {
        method: "POST",
        body: formData,
      })
        .then((resp) => {
          if (!resp.ok) {
            throw new Error(`File upload failed with status: ${resp.status}`);
          }
          return resp.json();
        })
        .then((result) => {
          // console.log(result.data);
          setProfileImage(result.data);
        })
        .catch((error) => {
          console.error(error);
          toast.error(`File upload failed: ${error.message}`);
        });
    }
  };

  const handleNextButton = () => {
    if (currentStep <= 5) {
      // step 1
      if (currentStep === 1) {
        if (!primaryCategory) {
          toast.error("Select primary category");
        } else if (!firstName) {
          toast.error("Input first name");
        } else if (!lastName) {
          toast.error("Input last name");
        } else if (!age) {
          toast.error("Input age");
        } else if (!sex) {
          toast.error("Select sex");
        } else if (!educationStatus) {
          toast.error("Select education status");
        } else if (!maritalstatus) {
          toast.error("Select marital status");
        } else if (!householdSize) {
          toast.error("Input household size");
        } else if (nin.length !== 11) {
          toast.error("Input a valid NIN");
        } else if (Object.keys(profileImage).length === 0) {
          toast.error("Select a valid image to continue");
        } else {
          setCurrentStep(currentStep + 1);
        }
      }

      // step 2
      if (currentStep === 2) {
        if (!phoneNumber) {
          toast.error("Input phone number");
        } else if (!isValidEmail(email)) {
          toast.error("Input a valid email");
        } else if (!nationality) {
          toast.error("Select nationality");
        } else if (!state) {
          toast.error("Select state of origin");
        } else if (!lga) {
          toast.error("Select local goverment of residence");
        } else if (!city) {
          toast.error("Input city");
        } else if (!streetName) {
          toast.error("Input street name");
        } else if (!houseNumber) {
          toast.error("Input house number");
        } else {
          setCurrentStep(currentStep + 1);
        }
      }

      // step 3 => business information
      // nb: typeofCommodity, otherTypeOfCommodity, setOtherTypeOfCommodity, handleTypeOfCommodity handle type of commodity in each category
      // the validation logic considers one category at a time
      // so nb usestate hooks above can be applied to all categories with commodity
      if (currentStep === 3) {
        if (primaryCategory !== "farmer" && !businessName) {
          toast.error("Input business name");
        } else if (primaryCategory === "logistic" && !haulageCapacity) {
          toast.error("Select haulage capacity");
        } else if (
          primaryCategory !== "farmer" &&
          primaryCategory !== "logistic" &&
          typeOfCommodity.length === 0
        ) {
          toast.error("Select type of commodity");
        } else if (
          primaryCategory !== "farmer" &&
          typeOfCommodity.length === 1 &&
          typeOfCommodity.includes("Others") &&
          !otherTypeOfCommodity
        ) {
          toast.error("Input other type of commodity");
        }
        // logistic
        else if (
          primaryCategory === "logistic" &&
          commodityTransported.length === 0
        ) {
          toast.error("Select commodity transported");
        } else if (
          primaryCategory === "logistic" &&
          commodityTransported.length === 1 &&
          commodityTransported.includes("Others") &&
          !otherTypeOfCommodityTransported
        ) {
          toast.error("Input other type(s) of commodity transported");
        }
        // mechanization service
        else if (
          primaryCategory === "mechanizationService" &&
          typeOfCommodity.length === 0
        ) {
          toast.error("Select area of specialization");
        }

        //  logistics
        else if (primaryCategory === "logistic" && !haulageCapacity) {
          toast.error("Select business/haulage capacity per day");
        } else if (
          primaryCategory === "logistic" &&
          commodityTransported.length === 0
        ) {
          toast.error("Select commodity transported");
        } else if (
          primaryCategory === "logistic" &&
          typeOfCommodity.length === 1 &&
          typeOfCommodity.includes("Others") &&
          !otherTypeOfCommodity
        ) {
          toast.error("Input other commodity transported");
        }
        // else if (
        //   primaryCategory !== "farmer" &&
        //   (typeOfCommodity.length === 0 ||
        //     areaOfSpecialization.length === 0 ||
        //     commodityTransported.length === 0)
        // ) {
        //   toast.error("Select type of commodity");
        // }
        else if (
          (primaryCategory === "agroMarketer" ||
            primaryCategory === "inputDealer" ||
            primaryCategory === "offtaker" ||
            primaryCategory === "logistic" ||
            primaryCategory === "mechanizationService") &&
          areaOfMarketingOperation.length === 0
        ) {
          toast.error(
            `Select area of ${
              primaryCategory === "agroMarketer" ? "marketing" : ""
            } operation`
          );
        } else if (!businessLocation) {
          toast.error("Input location");
        } else if (!businessLGA) {
          toast.error("Input business local government area");
        } else if (!locationOfDataCollection) {
          toast.error("Select location of data collection");

          // farmer section
        } else if (primaryCategory === "farmer" && typeOfFarming.length === 0) {
          toast.error("Select type of farming");
        } else if (primaryCategory === "farmer" && !totalFarmSizeOwned) {
          toast.error("Input total farm size owned in hectares");
        } else if (primaryCategory === "farmer" && !primaryPurposeOfFarming) {
          toast.error("Select primary purpose of farming");
        } else if (
          primaryCategory === "farmer" &&
          farmlandOwnership.length === 0
        ) {
          toast.error("Select farmland ownership");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.length === 0
        ) {
          toast.error("Select crops being farmed");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.length === 1 &&
          cropsBeingFarmed.includes("Horticulture (specify)") &&
          !otherHorticulture
        ) {
          toast.error("Input horticulture type");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.length === 1 &&
          cropsBeingFarmed.includes("Other") &&
          !otherCropsBeingFarmed
        ) {
          toast.error("Input other crop type");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.length === 2 &&
          cropsBeingFarmed.includes("Horticulture (specify)") &&
          cropsBeingFarmed.includes("Other") &&
          !otherHorticulture &&
          !otherCropsBeingFarmed
        ) {
          toast.error("Input crop type");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          !totalFarmSizeCultivated
        ) {
          toast.error("Input total farm size cultivated in hectares");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          !producingSeed
        ) {
          toast.error("Selcet producing seed");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          producingSeed === "Yes" &&
          forWhichCrops.length === 0
        ) {
          toast.error("Select producing seed for which crops");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          producingSeed === "Yes" &&
          forWhichCrops.length === 1 &&
          forWhichCrops.includes("Horticulture (specify)") &&
          !otherHorticultureForWhichCrop
        ) {
          toast.error("Input horticulture type");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          producingSeed === "Yes" &&
          forWhichCrops.length === 1 &&
          forWhichCrops.includes("Other") &&
          !otherForWhichCrop
        ) {
          toast.error("Input other crop type");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          producingSeed === "Yes" &&
          forWhichCrops.length === 2 &&
          forWhichCrops.includes("Horticulture (specify)") &&
          forWhichCrops.includes("Other") &&
          !otherHorticultureForWhichCrop &&
          !otherForWhichCrop
        ) {
          toast.error("Input crop type");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          producingSeed == "Yes" &&
          plantForSeedOrSellHarvestAsSeed.length === 0
        ) {
          toast.error(
            "Select do you specifically plant for seed or just sell harvest as seed based on the opportunity "
          );
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          producingSeed === "Yes" &&
          !startSeedProduction
        ) {
          toast.error("Select when you started seed production");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          producingSeed === "Yes" &&
          sellSeedOrFreeOrBarter.length === 0
        ) {
          toast.error("Select do you sell the seed, give it free, or barter");
        } else if (
          primaryCategory === "farmer" &&
          producingSeed === "Yes" &&
          !sellSeedInLocalMarket
        ) {
          toast.error("Select do you sell seed in local markets");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          producingSeed === "Yes" &&
          !motivationForSeedProduction
        ) {
          toast.error(" What is the motivation for seed production");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          producingSeed === "Yes" &&
          !trainingToProduceSeed
        ) {
          toast.error(
            "Select did you receive any training or advice to produce seed?"
          );
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.length === 0
        ) {
          toast.error("Select type of livestock farming");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.length === 1 &&
          typesOfLiveStockFarming.includes("Other") &&
          !otherTypeOfLivestockFarming
        ) {
          toast.error("Input other type of livestock farming");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          !farmSizeForLiveStockFarming
        ) {
          toast.error("Input total farmsize for livestock farming");
        }

        /*****  farm productivity(crops)  *****/
        // farm productivity(livestock) / cassava
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Cassava") &&
          !cassavaFarmSize
        ) {
          toast.error("Input total farm sive used to cultivate Cassava (HA)");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Cassava") &&
          !cassavaYield
        ) {
          toast.error("Input total  Cassava yield/HA (Kg)");
        }
        // farm productivity(livestock) / yam
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Yam") &&
          !yamFarmSize
        ) {
          toast.error("Input total farm sive used to cultivate Yam (HA)");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Yam") &&
          !yamYield
        ) {
          toast.error("Input total Yam yield/HA (Kg)");
        }
        // farm productivity(livestock) / cowpea
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Cowpea") &&
          !cowpeaFarmSize
        ) {
          toast.error("Input total farm sive used to cultivate Cowpea (HA)");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Cowpea") &&
          !cowpeaYield
        ) {
          toast.error("Input total  Cowpea yield/HA (Kg)");
        }
        // farm productivity(livestock) / banana
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Banana") &&
          !bananaFarmSize
        ) {
          toast.error("Input total farm sive used to cultivate Banana (HA)");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Banana") &&
          !bananaYield
        ) {
          toast.error("Input total  Banana yield/HA (Kg)");
        }
        // farm productivity(livestock) / plantain
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Plantain") &&
          !plantainFarmSize
        ) {
          toast.error("Input total farm sive used to cultivate Plantain (HA)");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Plantain") &&
          !plantainYield
        ) {
          toast.error("Input total  Plantain yield/HA (Kg)");
        }
        // farm productivity(livestock) / rice
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Rice") &&
          !riceFarmSize
        ) {
          toast.error("Input total farm sive used to cultivate Rice (HA)");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Rice") &&
          !riceYield
        ) {
          toast.error("Input total  Rice yield/HA (Kg)");
        }
        // farm productivity(livestock) / cocoa
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Cocoa") &&
          !cocoaFarmSize
        ) {
          toast.error("Input total farm sive used to cultivate Cocoa (HA)");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Cocoa") &&
          !cocoaYield
        ) {
          toast.error("Input total Cocoa yield/HA (Kg)");
        }
        // farm productivity(livestock) / cashew
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Cashew") &&
          !cashewFarmSize
        ) {
          toast.error("Input total farm sive used to cultivate Cashew (HA)");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Cashew") &&
          !cashewYield
        ) {
          toast.error("Input total Cashew yield/HA (Kg)");
        }
        // farm productivity(livestock) / Oil Palm
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Oil Palm") &&
          !oilPalmFarmSize
        ) {
          toast.error("Input total farm sive used to cultivate Oil Palm (HA)");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Oil Palm") &&
          !oilPalmYield
        ) {
          toast.error("Input total  Oil Palm yield/HA (Kg)");
        }
        // farm productivity(livestock) / potato
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Potato") &&
          !potatoFarmSize
        ) {
          toast.error("Input total farm sive used to cultivate Potato (HA)");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Potato") &&
          !potatoYield
        ) {
          toast.error("Input total Potato yield/HA (Kg)");
        }
        // farm productivity(livestock) / maize
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Maize") &&
          !maizeFarmSize
        ) {
          toast.error("Input total farm sive used to cultivate Maize (HA)");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Maize") &&
          !maizeYield
        ) {
          toast.error("Input total Maize yield/HA (Kg)");
        }
        // farm productivity(livestock) / cotton
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Cotton") &&
          !cottonFarmSize
        ) {
          toast.error("Input total farm sive used to cultivate Cotton (HA)");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Cotton") &&
          !cottonYield
        ) {
          toast.error("Input total Cotton yield/HA (Kg)");
        }
        // farm productivity(livestock) / sweet_potato
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Sweet Potato") &&
          !sweetPotatoFarmSize
        ) {
          toast.error(
            "Input total farm sive used to cultivate Sweet Potato (HA)"
          );
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Sweet Potato") &&
          !sweetPotatoYield
        ) {
          toast.error("Input total Sweet Potato yield/HA (Kg)");
        }
        // farm productivity(livestock) / wheat
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Wheat") &&
          !wheatFarmSize
        ) {
          toast.error("Input total farm sive used to cultivate Wheat (HA)");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Wheat") &&
          !wheatYield
        ) {
          toast.error("Input total  Wheat yield/HA (Kg)");
        }
        // farm productivity(livestock) / sesame
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Sesame") &&
          !sesameFarmSize
        ) {
          toast.error("Input total farm sive used to cultivate Sesame (HA)");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Sesame") &&
          !sesameYield
        ) {
          toast.error("Input total Sesame yield/HA (Kg)");
        }
        // farm productivity(livestock) / horticulture (specify)"
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Horticulture (specify)") &&
          !horticultureFarmSize
        ) {
          toast.error(
            "Input total farm sive used to cultivate Horticulture (specify) (HA)"
          );
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Horticulture (specify)") &&
          !horticultureYield
        ) {
          toast.error("Input total  Horticulture (specify) yield/HA (Kg)");
        }
        // farm productivity(livestock) / other
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Other") &&
          !otherCropFarmSize
        ) {
          toast.error(
            "Input total farm sive used to cultivate other crop(s)(HA)"
          );
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          cropsBeingFarmed.includes("Other") &&
          !otherCropYield
        ) {
          toast.error("Input total  other crop (s) yield/HA (Kg)");
        }

        /*****  productivity(livestock)  *****/
        // farm productivity(livestock) / poultry
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Poultry") &&
          poultryType.length === 0
        ) {
          toast.error("Select type of poultry");
        }
        // farm productivity(livestock) / poultry / broilers
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Poultry") &&
          poultryType.includes("Broilers") &&
          !poultryStockCapacity
        ) {
          toast.error("Input poultry stock capacity/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Poultry") &&
          poultryType.includes("Broilers") &&
          !poultryAverageMortality
        ) {
          toast.error("Input poultry average mortality/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Poultry") &&
          poultryType.includes("Broilers") &&
          !poultryAverageHarvest
        ) {
          toast.error("Input poultry average harvest weight/animal");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Poultry") &&
          poultryType.includes("Broilers") &&
          !poultryTotalHarvest
        ) {
          toast.error("Input poultry total harvest weight");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Poultry") &&
          poultryType.includes("Layers") &&
          !poultryEggsProduced
        ) {
          toast.error("Input total crates of eggs produced");
        }

        // farm productivity(livestock) / Fishery & Aquaculture
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Fishery") &&
          !fisheryStockCapacity
        ) {
          toast.error("Input fishery stock capacity/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Fishery") &&
          !fisheryAverageMortality
        ) {
          toast.error("Input fishery average mortality/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Fishery") &&
          !fisheryAverageHarvest
        ) {
          toast.error("Input fishery average harvest weight/animal");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Fishery") &&
          !fisheryTotalHarvest
        ) {
          toast.error("Input fishery total harvest weight");
        }

        // farm productivity(livestock) / Cattle
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Cattle") &&
          !cattleStockCapacity
        ) {
          toast.error("Input cattle stock capacity/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Cattle") &&
          !cattleAverageMortality
        ) {
          toast.error("Input cattle average mortality/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Cattle") &&
          !cattleAverageHarvest
        ) {
          toast.error("Input cattle average harvest weight/animal");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Cattle") &&
          !cattleTotalHarvest
        ) {
          toast.error("Input cattle total harvest weight");
        }

        // farm productivity(livestock) / piggery
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Piggery") &&
          !piggeryStockCapacity
        ) {
          toast.error("Input piggery stock capacity/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Piggery") &&
          !piggeryAverageMortality
        ) {
          toast.error("Input piggery average mortality/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Piggery") &&
          !piggeryAverageHarvest
        ) {
          toast.error("Input piggery average harvest weight/animal");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Piggery") &&
          !piggeryTotalHarvest
        ) {
          toast.error("Input piggery total harvest weight");
        }
        // farm productivity(livestock) / Small Ruminants (Goat, Sheep etc.)
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes(
            "Small Ruminants (Goat, Sheep etc.)"
          ) &&
          !smallRuminantsStockCapacity
        ) {
          toast.error("Input small ruminants stock capacity/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes(
            "Small Ruminants (Goat, Sheep etc.)"
          ) &&
          !smallRuminantsAverageMortality
        ) {
          toast.error("Input smallRuminants average mortality/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes(
            "Small Ruminants (Goat, Sheep etc.)"
          ) &&
          !smallRuminantsAverageHarvest
        ) {
          toast.error("Input small ruminants average harvest weight/animal");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes(
            "Small Ruminants (Goat, Sheep etc.)"
          ) &&
          !smallRuminantsTotalHarvest
        ) {
          toast.error("Input small ruminants total harvest weight");
        }
        // farm productivity(livestock) / Rabbitry
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Rabbitry") &&
          !rabbitryStockCapacity
        ) {
          toast.error("Input Rabbitry stock capacity/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Rabbitry") &&
          !rabbitryAverageMortality
        ) {
          toast.error("Input Rabbitry average mortality/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Rabbitry") &&
          !rabbitryAverageHarvest
        ) {
          toast.error("Input Rabbitry average harvest weight/animal");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Rabbitry") &&
          !rabbitryTotalHarvest
        ) {
          toast.error("Input Rabbitry total harvest weight");
        }
        // farm productivity(livestock) / Snailry
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Snailry") &&
          !snailryStockCapacity
        ) {
          toast.error("Input Snailry stock capacity/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Snailry") &&
          !snailryAverageMortality
        ) {
          toast.error("Input Snailry average mortality/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Snailry") &&
          !snailryAverageHarvest
        ) {
          toast.error("Input Snailry average harvest weight/animal");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Snailry") &&
          !snailryTotalHarvest
        ) {
          toast.error("Input Snailry total harvest weight");
        }
        // farm productivity(livestock) / Grasscutter farming
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Grasscutter farming") &&
          !grasscutterStockCapacity
        ) {
          toast.error("Input Grasscutter  stock capacity/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Grasscutter farming") &&
          !grasscutterAverageMortality
        ) {
          toast.error("Input Grasscutter average mortality/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Grasscutter farming") &&
          !grasscutterAverageHarvest
        ) {
          toast.error(
            "Input Grasscutter farming average harvest weight/animal"
          );
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Grasscutter farming") &&
          !grasscutterTotalHarvest
        ) {
          toast.error("Input Grasscutter farming total harvest weight");
        }
        // farm productivity(livestock) / Sericulture (Silkworm production)
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes(
            "Sericulture (Silkworm production)"
          ) &&
          !sericultureStockCapacity
        ) {
          toast.error("Input Sericulture stock capacity/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes(
            "Sericulture (Silkworm production)"
          ) &&
          !sericultureAverageMortality
        ) {
          toast.error("Input Sericulture average mortality/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes(
            "Sericulture (Silkworm production)"
          ) &&
          !sericultureAverageHarvest
        ) {
          toast.error("Input Sericulture average harvest weight/animal");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes(
            "Sericulture (Silkworm production)"
          ) &&
          !sericultureTotalHarvest
        ) {
          toast.error("Input Sericulture total harvest weight");
        }
        // farm productivity(livestock) / Bee-keeping
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Bee-keeping") &&
          !beekeepingStockCapacity
        ) {
          toast.error("Input Bee-keeping stock capacity/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Bee-keeping") &&
          !beekeepingAverageMortality
        ) {
          toast.error("Input Bee-keeping average mortality/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Bee-keeping") &&
          !beekeepingAverageHarvest
        ) {
          toast.error("Input Bee-keeping average harvest weight/animal");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Bee-keeping") &&
          !beekeepingTotalHarvest
        ) {
          toast.error("Input Bee-keeping total harvest weight");
        }

        // farm productivity(livestock) / other
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Other") &&
          !otherLivestockStockCapacity
        ) {
          toast.error("Input Other stock capacity/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Other") &&
          !otherLivestockAverageMortality
        ) {
          toast.error("Input Other average mortality/cycle");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Other") &&
          !otherLivestockAverageHarvest
        ) {
          toast.error("Input Other average harvest weight/animal");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          typesOfLiveStockFarming.includes("Other") &&
          !otherLivestockTotalHarvest
        ) {
          toast.error("Input Other total harvest weight");
        }

        // Access and Utilization of Services
        else if (primaryCategory === "farmer" && !accessToInputProviders) {
          toast.error("Select access to input providers");
        } else if (primaryCategory === "farmer" && !accessToBDS) {
          toast.error("Select access to business development service");
        } else if (primaryCategory === "farmer" && !accessToOfftakers) {
          toast.error("Select access to off-takers");
        } else if (primaryCategory === "farmer" && !accessToFSP) {
          toast.error("Select access to financial service providers");
        } else if (primaryCategory === "farmer" && !accessToMSP) {
          toast.error("Select access to mechanisation service providers");
        } else if (primaryCategory === "farmer" && !accessToAdvisoryService) {
          toast.error("Select access to advisory services");
        } else if (primaryCategory === "farmer" && !govermentIncentives) {
          toast.error(
            "Select any incentive received from the government (grants, subsidies, soft loans, others)"
          );
        } else if (primaryCategory === "farmer" && !accessToGovtLand) {
          toast.error("Select access to government land for farming");
        } else if (primaryCategory === "farmer" && !ogstepFarmer) {
          toast.error("Select OGSTEP farmer");
        }
        //fields below are not compulsory => vcdf and groupname
        // else if (primaryCategory === "farmer" && ogstepFarmer && !vcdf) {
        //   toast.error("Select OGSTEP farmer");
        // } else if (primaryCategory === "farmer" && ogstepFarmer && !groupname) {
        //   toast.error("Select OGSTEP farmer");
        // }
        else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Crop farming") &&
          !cropsIncome
        ) {
          toast.error("Input annual crops income");
        } else if (
          primaryCategory === "farmer" &&
          typeOfFarming.includes("Livestocks") &&
          !livestockIncome
        ) {
          toast.error("Input annual livestock income");
        } else if (primaryCategory === "farmer" && !costOfProduction) {
          toast.error("Select total annual cost of production");
        } else if (primaryCategory === "farmer" && !totalRevenue) {
          toast.error("Select total annual revenue");
        } else if (primaryCategory === "farmer" && !serviceProvisionIncome) {
          toast.error("Select Income from service provision (daily wage work)");
        } else if (primaryCategory === "farmer" && !regularEmploymentIncome) {
          toast.error("Select income from regular employment");
        } else if (primaryCategory === "farmer" && !incomeFromBusiness) {
          toast.error("Select income from business");
        } else if (primaryCategory === "farmer" && !otherIncomeMeans) {
          toast.error("Select income from other means");
        }
        // ends farmer section

        /*****   agro marketer   *****/

        // general business info
        else if (primaryCategory !== "farmer" && !businessAddress) {
          toast.error("Input business address");
        } else if (!businessTelNo) {
          toast.error("Input business telephone number");
        } else if (isValidEmail(businessEmail) === false) {
          console.log("isvaidemail ==> ", isValidEmail(businessEmail));
          toast.error("Input a valid business email");

          // business category except for  farmers
        } else if (primaryCategory !== "farmer" && !businessCategory) {
          toast.error("Input business category");
        } else if (primaryCategory == "processor" && !offtakeCapacity) {
          toast.error("Select processing / offtake capacity");
        } else if (!yearOfBusinessEstablishment) {
          toast.error("Select year of business establishment");
        } else {
          setCurrentStep(currentStep + 1);
        }
      }

      // step 4
      if (currentStep === 4) {
        if (!totalAdults) {
          toast.error("Input total adults in the family");
        } else if (!employedHouseHoldMembers) {
          toast.error("Input total number of employed household members");
        } else if (!cooperativeMembership) {
          toast.error("Select membership of cooperative associatin");
        } else if (
          benefitOfCooperative.length === 0 &&
          !otherCooperativeBenefits
        ) {
          toast.error("Select benefits of cooperative membership");
        } else if (otherCooperativeBenefits && !otherCooperativeBenefitsValue) {
          toast.error("Input other benefits of cooperative membership");
        } else {
          setCurrentStep(currentStep + 1);
        }
      }

      // step 5
      if (currentStep === 5) {
        if (mediumOfInformation.length === 0 && !otherMediumofInformation) {
          toast.error("Select medium of information");
        } else if (otherMediumofInformation && !otherMediumofInformationValue) {
          toast.error("Input other medium of information");
        } else if (!challengeOfMobilePhone) {
          toast.error("Input main challenge(s) of using mobile phone");
        } else if (!advantagesOfMobilePhone) {
          toast.error("Input advantage(s) of using mobile phone");
        } else if (!levelOfInrernetProficiency) {
          toast.error("Select level of internet proficiency");
        } else {
          // alert("validated");
          // setValidated(true);
          handleSubmit();
        }
      }
    }
  };

  const handlePreviousButton = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Register" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* Start Breadcrump Area */}

      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--32"
        data-black-overlay="6"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title text-white">Register</h2>
                <p> </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Breadcrump Area */}

      {/* Start About Area */}
      <div className="rn-blog-details ptb--120 bg_color--1">
        <div className="about-wrapper">
          <div
            className="container p-5"
            style={{ borderRadius: 16, backgroundColor: "#f8f9fa" }}
          >
            <Col className="body-bg ">
              {/* Title Start */}
              <Col className="mb-2 px-3">
                <h6 className="mb-2 pb-0 display-6 text-center">{title}</h6>
                <div className="text-muted font-heading text-small">
                  {/* {description} */}
                </div>
              </Col>

              {/* Title End */}

              <Card
                className="mb-5 standard col-lg-6 col-md-6 col-sm-12 d-flex mx-auto"
                style={{ borderColor: "#fff", borderRadius: "1rem" }}
              >
                <Card.Body>
                  {/* form header */}
                  <Row className="justify-content-between my-3">
                    <Col>
                      <Card.Title>
                        {currentStep === 1
                          ? "Biographic Information"
                          : currentStep === 2
                          ? "Contact Information"
                          : currentStep === 3
                          ? "Business Information"
                          : currentStep === 4
                          ? "Household Information"
                          : currentStep === 5
                          ? "Digital Tools"
                          : ""}
                      </Card.Title>
                    </Col>
                    <Col xs="auto">
                      <Badge className="p-2 mb-2 justify-self-right">
                        {currentStep}/5
                      </Badge>
                    </Col>
                  </Row>

                  {/* form content */}
                  <div
                    style={{
                      padding: 0,
                      // overflowY: "scroll",
                      // width: "80%",
                      // margin: "auto",
                      // height: "80vh",
                    }}
                  >
                    <div style={{}}>
                      {currentStep === 1 ? (
                        //{/* form 1 =>  Biographic Information  */}
                        <Form
                        // noValidate
                        // validated={validated}
                        // onSubmit={handleSubmit}
                        >
                          {/* select primary category */}
                          <Form.Group
                            className="mb-4"
                            controlId="primary_category"
                          >
                            <Form.Label className="mb-2">
                              Select Primary Category
                            </Form.Label>
                            <Form.Select
                              aria-label="Primary Category"
                              style={{ fontSize: 15 }}
                              size="sm"
                              value={primaryCategory}
                              onChange={(e) => {
                                setByPrimaryCategory(e.target.value);
                              }}
                            >
                              <option value="">Category</option>
                              <option value="farmer">Farmers</option>
                              <option value="agroMarketer">
                                Marketer/Trader
                              </option>
                              <option value="processor">Processors</option>
                              <option value="offtaker">Off-takers</option>
                              <option value="logistic">
                                Transport/Logistics
                              </option>
                              <option value="extension">
                                Extension Workers
                              </option>
                              <option value="mechanizationService">
                                Mechanization Service
                              </option>
                              <option value="inputDelear">Input Delears</option>
                              <option value="bds">
                                Business Development Service
                              </option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="mb-4" controlId="firstname">
                            <Form.Label className="mb-2">First Name</Form.Label>
                            <Form.Control
                              type="text"
                              value={firstName}
                              placeholder="Segun"
                              onChange={(e) => setFirstName(e.target.value)}
                              required
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Input first name
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-4" controlId="lastname">
                            <Form.Label className="mb-2">Last Name</Form.Label>
                            <Form.Control
                              type="text"
                              value={lastName}
                              placeholder="Ajibade"
                              onChange={(e) => setLastName(e.target.value)}
                              required
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Input last name
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-4" controlId="age">
                            <Form.Label className="mb-2">Age</Form.Label>
                            <Form.Control
                              className=""
                              type="number"
                              value={age}
                              placeholder={39}
                              onChange={(e) => setAge(e.target.value)}
                              required
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Input age
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-4" controlId="sex">
                            <Form.Label className="mb-2">Sex</Form.Label>
                            <Form.Check
                              type="radio"
                              aria-label="male"
                              value={"male"}
                              id="male"
                              label="Male"
                              name="sex"
                              checked={sex === "male"}
                              onChange={(e) => setSex(e.target.value)}
                              required
                              feedback="Seelect sex before continuing"
                              feedbackType="invalid"
                            />
                            <Form.Check
                              type="radio"
                              aria-label="female"
                              id="female"
                              value={"female"}
                              label="Female"
                              name="sex"
                              checked={sex === "female"}
                              onChange={(e) => setSex(e.target.value)}
                              required
                              feedback="Select sex before continuing"
                              feedbackType="invalid"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-4"
                            controlId="education_status"
                          >
                            <Form.Label className="mb-2">
                              Education Status
                            </Form.Label>
                            <Form.Check
                              type="radio"
                              aria-label="primary"
                              id="primary"
                              label="Primary"
                              name="education"
                              value={"primary"}
                              checked={educationStatus === "primary"}
                              onChange={(e) =>
                                setEducationStatus(e.target.value)
                              }
                              required
                              feedback="Select education continuing"
                              feedbackType="invalid"
                            />
                            <Form.Check
                              type="radio"
                              aria-label="secondary"
                              id="secondary"
                              label="Secondary"
                              name="education"
                              value={"secondary"}
                              checked={educationStatus === "secondary"}
                              onChange={(e) =>
                                setEducationStatus(e.target.value)
                              }
                              required
                              feedback="Select education continuing"
                              feedbackType="invalid"
                            />
                            <Form.Check
                              type="radio"
                              aria-label="Tertiary"
                              id="tertiary"
                              label="Tertiary"
                              name="education"
                              value={"tertiary"}
                              checked={educationStatus === "tertiary"}
                              onChange={(e) =>
                                setEducationStatus(e.target.value)
                              }
                              required
                              feedback="Select education continuing"
                              feedbackType="invalid"
                            />
                            <Form.Check
                              type="radio"
                              aria-label="no_formal_education"
                              id="no_formal_education"
                              label="No formal education"
                              name="education"
                              value={"no_formal_education"}
                              checked={
                                educationStatus === "no_formal_education"
                              }
                              onChange={(e) =>
                                setEducationStatus(e.target.value)
                              }
                              required
                              feedback="Select education continuing"
                              feedbackType="invalid"
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Select education status
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group
                            className="mb-4"
                            controlId="marital_status"
                          >
                            <Form.Label className="mb-2">
                              Marital Status
                            </Form.Label>
                            <Form.Check
                              type="radio"
                              aria-label="single"
                              id="single"
                              label="Single"
                              name="marital_status"
                              value={"single"}
                              checked={maritalstatus === "single"}
                              onChange={(e) => setMaritalStatus(e.target.value)}
                              required
                              feedback="Seelect marital status before continuing"
                              feedbackType="invalid"
                            />
                            <Form.Check
                              type="radio"
                              aria-label="married"
                              id="married"
                              label="Married"
                              name="marital_status"
                              value={"married"}
                              checked={maritalstatus === "married"}
                              onChange={(e) => setMaritalStatus(e.target.value)}
                              required
                              feedback="Seelect marital status before continuing"
                              feedbackType="invalid"
                            />
                            <Form.Check
                              type="radio"
                              aria-label="separated"
                              id="separated"
                              label="Separated"
                              name="marital_status"
                              value={"separated"}
                              checked={maritalstatus === "separated"}
                              onChange={(e) => setMaritalStatus(e.target.value)}
                              required
                              feedback="Seelect marital status before continuing"
                              feedbackType="invalid"
                            />
                            <Form.Check
                              type="radio"
                              aria-label="divorced"
                              id="divorced"
                              label="Divorced"
                              name="marital_status"
                              value={"divorced"}
                              checked={maritalstatus === "divorced"}
                              onChange={(e) => setMaritalStatus(e.target.value)}
                              required
                              feedback="Seelect marital status before continuing"
                              feedbackType="invalid"
                            />
                            <Form.Check
                              type="radio"
                              aria-label="widowed"
                              id="widowed"
                              label="Widowed"
                              name="marital_status"
                              value={"widowed"}
                              checked={maritalstatus === "widowed"}
                              onChange={(e) => setMaritalStatus(e.target.value)}
                              required
                              feedback="Seelect marital status before continuing"
                              feedbackType="invalid"
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Select marital status
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group
                            className="mb-4"
                            controlId="household_size"
                          >
                            <Form.Label className="mb-2">
                              Household Size
                            </Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="Household Size"
                              onChange={(e) => setHouseholdSize(e.target.value)}
                              value={householdSize}
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Input household size
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-4" controlId="nin">
                            <Form.Label className="mb-2">
                              National Identification Number (NIN)
                            </Form.Label>
                            <Form.Control
                              type="number"
                              maxLength={11}
                              max={11}
                              placeholder="National Identification Number (NIN)"
                              onChange={(e) => setNIN(e.target.value)}
                              value={nin}
                            />
                            {/* <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Input NIN
                            </Form.Control.Feedback> */}
                          </Form.Group>
                          {/* profile image */}
                          <Form.Group
                            className="mb-4"
                            controlId="profile_image"
                          >
                            <Form.Label className="mb-2">
                              Profile Image
                            </Form.Label>
                            <Form.Control
                              type="file"
                              accept="image/*"
                              name="filetoupload"
                              placeholder="Profile Image"
                              onChange={handleProfileImage}
                              required
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Select profile image
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Form>
                      ) : null}

                      {currentStep === 2 ? (
                        //{/* form 2 =>  Contact Information */}
                        <Form>
                          <Form.Group className="mb-4" controlId="phone">
                            <Form.Label className="mb-2">Phone</Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="Phone"
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              required
                              value={phoneNumber}
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Input Phone number
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-4" controlId="alt_phone">
                            <Form.Label className="mb-2">
                              Alternative Phone Number
                              {/* ALTERNATIVE PHONE NUMBER */}
                            </Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="Alternative Phone Number"
                              value={alternativePhoneNumber}
                              onChange={(e) =>
                                setAlternativePhoneNumber(e.target.value)
                              }
                            />
                          </Form.Group>
                          <Form.Group className="mb-4" controlId="email">
                            <Form.Label className="mb-2">Email</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Input Email
                            </Form.Control.Feedback>
                          </Form.Group>
                          {/* Address */}

                          {/* select nationality */}
                          <Form.Label className="mb-2">Nationality</Form.Label>
                          {/* search country */}
                          <Form.Control
                            list="nationality"
                            className="mb-3"
                            type="text"
                            placeholder="Select country"
                            value={nationality}
                            onChange={handleSelectCountry}
                          />
                          <datalist id="nationality">
                            {countries.map((country, index) => (
                              <option key={index} value={country.country}>
                                {/* {country.option} */}
                              </option>
                            ))}
                          </datalist>

                          <Form.Control.Feedback></Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">
                            Select nationality
                          </Form.Control.Feedback>

                          {/* select state of origin */}
                          <Form.Group className="mb-4">
                            <Form.Label className="mb-2">
                              State of Origin
                            </Form.Label>
                            {/* search state */}
                            <Form.Control
                              className="mb-1"
                              type="text"
                              list="state"
                              placeholder="Select state"
                              value={state}
                              onChange={handleSelectState}
                            />
                            <datalist
                              id="state"
                              aria-label="State of origin"
                              style={{ fontSize: 15 }}
                              size="sm"
                            >
                              <option></option>
                              {states.map((state, index) => (
                                <option key={index} value={state.name}>
                                  {/* {state.name} */}
                                </option>
                              ))}
                            </datalist>
                            {/* <Form.Control type="text" placeholder="VILLAGE / TOWN / CITY" /> */}
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Select state of origin
                            </Form.Control.Feedback>
                          </Form.Group>

                          {/* select lga */}
                          <Form.Group className="mb-4" controlId="grouplga">
                            <Form.Label className="mb-2">
                              Local Government of residence
                            </Form.Label>
                            <Form.Control
                              className="mb-1"
                              type="text"
                              list="lga"
                              placeholder="Select LGA"
                              value={lga}
                              onChange={(e) => setLga(e.target.value)}
                            />
                            <datalist
                              id="lga"
                              aria-label="Category"
                              style={{ fontSize: 15 }}
                              onChange={(e) => {
                                setLga(e.target.value);
                              }}
                              required
                            >
                              {lgas.map((lga, index) => (
                                <option key={index} value={lga.name}>
                                  {/* {lga.option} */}
                                </option>
                              ))}
                            </datalist>
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Select Local Government of residence
                            </Form.Control.Feedback>
                          </Form.Group>

                          {/* input village or town or city */}
                          <Form.Group className="mb-4" controlId="village">
                            <Form.Label className="mb-2">
                              Village / Town / City
                            </Form.Label>
                            <Form.Control
                              type="text"
                              value={city}
                              placeholder="Village / Town / City"
                              onChange={(e) => setCity(e.target.value)}
                              required
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Input Village / Town / City
                            </Form.Control.Feedback>
                          </Form.Group>
                          {/* input strret name */}
                          <Form.Group className="mb-4" controlId="street_name">
                            <Form.Label className="mb-2">
                              Street Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Street Name"
                              value={streetName}
                              required
                              onChange={(e) => setStreetName(e.target.value)}
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Input street name
                            </Form.Control.Feedback>
                          </Form.Group>
                          {/* input house number */}
                          <Form.Group className="mb-4" controlId="house_number">
                            <Form.Label className="mb-2">
                              House Number
                            </Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="House Number"
                              onChange={(e) => setHouseNumber(e.target.value)}
                              required
                              value={houseNumber}
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Input house number
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Form>
                      ) : null}

                      {currentStep === 3 ? (
                        //{/* form 3 => dynamic information */}
                        <>
                          {/* business name */}
                          {primaryCategory !== "farmer" ? (
                            <Form.Group
                              className="mb-4"
                              controlId="businessName"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Business name"
                                onChange={(e) =>
                                  setBusinessName(e.target.value.trim())
                                }
                                value={businessName}
                                required
                              />
                              <Form.Control.Feedback type="invalid">
                                Input business name
                              </Form.Control.Feedback>
                            </Form.Group>
                          ) : null}

                          {/* type of commodity in agro marketing */}
                          {primaryCategory === "agroMarketer" ? (
                            <Form.Group className="mb-4">
                              <Form.Label className="mb-2">
                                Type of Commodity
                                {/* SELECT PRIMARY CATEGORY(IES) */}
                              </Form.Label>
                              {agroMarketerCommodity.map((item, index) => (
                                <Form.Check
                                  key={index}
                                  label={item}
                                  value={item}
                                  checked={typeOfCommodity.includes(item)}
                                  onChange={handleTypesOfCommodity}
                                />
                              ))}
                            </Form.Group>
                          ) : null}

                          {/* type of commodity in processor category */}
                          {primaryCategory === "processor" ? (
                            <Form.Group className="mb-4">
                              <Form.Label className="mb-2">
                                Type of Commodity
                                {/* SELECT PRIMARY CATEGORY(IES) */}
                              </Form.Label>
                              {processorCommodity.map((item, index) => (
                                <Form.Check
                                  key={index}
                                  label={item}
                                  value={item}
                                  checked={typeOfCommodity.includes(item)}
                                  onChange={handleTypesOfCommodity}
                                />
                              ))}
                            </Form.Group>
                          ) : null}

                          {/* type of commodity in inputDealer category */}
                          {primaryCategory === "inputDealer" ? (
                            <Form.Group className="mb-4">
                              <Form.Label className="mb-2">
                                Type of Commodity
                              </Form.Label>
                              {inputDealerCommodity.map((item, index) => (
                                <Form.Check
                                  key={index}
                                  label={item}
                                  value={item}
                                  checked={typeOfCommodity.includes(item)}
                                  onChange={handleTypesOfCommodity}
                                />
                              ))}
                            </Form.Group>
                          ) : null}

                          {/* area of specialization/type of commodity in extension service */}
                          {primaryCategory === "extension" ||
                          primaryCategory === "bds" ? (
                            <Form.Group className="mb-4">
                              <Form.Label className="mb-2">
                                Area of specialization
                              </Form.Label>
                              {areasOfSpecialization.map((item, index) => (
                                <Form.Check
                                  key={index}
                                  label={item}
                                  value={item}
                                  checked={typeOfCommodity.includes(item)}
                                  onChange={handleTypesOfCommodity}
                                />
                              ))}
                            </Form.Group>
                          ) : null}

                          {/* type of commodity in offtaker category */}
                          {primaryCategory === "offtaker" ? (
                            <Form.Group className="mb-4">
                              <Form.Label className="mb-2">
                                Type(s) of Commodity
                              </Form.Label>
                              {offtakerTypeOfCommodity.map((item, index) => (
                                <Form.Check
                                  key={index}
                                  label={item}
                                  value={item}
                                  checked={typeOfCommodity.includes(item)}
                                  onChange={handleTypesOfCommodity}
                                />
                              ))}
                            </Form.Group>
                          ) : null}
                          {/* other types of commodity */}
                          {typeOfCommodity.includes("Others") ? (
                            <Form.Group
                              className="mb-4"
                              controlId="other_type_of_commodity"
                            >
                              <Form.Label className="mb-2">
                                Other Types(s) of Commodity
                              </Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={3}
                                value={otherTypeOfCommodity}
                                onChange={(e) =>
                                  setOtherTypeOfCommodity(e.target.value)
                                }
                              />
                            </Form.Group>
                          ) : null}

                          {/* alogistics haulage capacity and commodity transported */}
                          {primaryCategory === "logistic" ? (
                            <>
                              {/*  */}
                              <Form.Group className="mb-4">
                                <Form.Label className="mb-2">
                                  Business/Haulage Capacity per Day
                                </Form.Label>
                                <Form.Check
                                  type="radio"
                                  label="< 10tons"
                                  value={"< 10tons"}
                                  checked={haulageCapacity === "< 10tons"}
                                  onChange={(e) =>
                                    setHaulageCapacity(e.target.value)
                                  }
                                />
                                <Form.Check
                                  type="radio"
                                  label="10 - 100tons"
                                  value={"10 - 100tons"}
                                  checked={haulageCapacity === "10 - 100tons"}
                                  onChange={(e) =>
                                    setHaulageCapacity(e.target.value)
                                  }
                                />
                                <Form.Check
                                  type="radio"
                                  label=">100tons"
                                  value={">100tons"}
                                  checked={haulageCapacity === ">100tons"}
                                  onChange={(e) =>
                                    setHaulageCapacity(e.target.value)
                                  }
                                />
                              </Form.Group>

                              <Form.Group className="mb-4">
                                <Form.Label className="mb-2">
                                  Commodity Transported
                                </Form.Label>
                                {commoditiesTransported.map((item, index) => (
                                  <Form.Check
                                    key={index}
                                    label={item}
                                    value={item}
                                    checked={commodityTransported.includes(
                                      item
                                    )}
                                    onChange={handleCommodityTransported}
                                  />
                                ))}
                              </Form.Group>

                              {/* other type of commodity transported */}
                              {commodityTransported.includes("Others") ? (
                                <Form.Group
                                  className="mb-4"
                                  controlId="other_type_of_commodity"
                                >
                                  <Form.Label className="mb-2">
                                    Other Types(s) of Commodity Transported
                                  </Form.Label>
                                  <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={otherTypeOfCommodityTransported}
                                    onChange={(e) =>
                                      setOtherTypeOfCommodityTransported(
                                        e.target.value
                                      )
                                    }
                                  />
                                </Form.Group>
                              ) : null}
                            </>
                          ) : null}

                          {/* area of marketing operation for agro marketer */}
                          {primaryCategory === "agroMarketer" ||
                          primaryCategory === "offtaker" ||
                          primaryCategory === "inputDelear" ||
                          primaryCategory === "logistic" ||
                          primaryCategory === "mechanizationService" ? (
                            <Form.Group className="mb-4">
                              <Form.Label className="mb-2">
                                Area of{" "}
                                {primaryCategory === "agroMarketer"
                                  ? "Marketing"
                                  : ""}{" "}
                                Operation
                              </Form.Label>
                              <Form.Check
                                label="Intrastate"
                                value={"Intrastate"}
                                checked={areaOfMarketingOperation.includes(
                                  "Intrastate"
                                )}
                                onChange={handleAreaOfMarketingOperation}
                              />
                              <Form.Check
                                label="Interstate"
                                value={"Interstate"}
                                checked={areaOfMarketingOperation.includes(
                                  "Interstate"
                                )}
                                onChange={handleAreaOfMarketingOperation}
                              />
                              <Form.Check
                                label="International"
                                value={"International"}
                                checked={areaOfMarketingOperation.includes(
                                  "International"
                                )}
                                onChange={handleAreaOfMarketingOperation}
                              />
                            </Form.Group>
                          ) : null}

                          {/* area of specialization/type of commodity in mechanization service
                          use typeofcommodity state
                           */}
                          {primaryCategory === "mechanizationService" ? (
                            <Form.Group className="mb-4">
                              <Form.Label className="mb-2">
                                Area of specialization
                              </Form.Label>
                              {MechServiceAreaOfSpecialization.map(
                                (item, index) => (
                                  <Form.Check
                                    key={index}
                                    label={item}
                                    value={item}
                                    checked={areaOfSpecialization.includes(
                                      item
                                    )}
                                    onChange={handleAreaOfSpecialization}
                                  />
                                )
                              )}
                            </Form.Group>
                          ) : null}

                          {/*  location/address  of primary category*/}
                          <Form.Group className="mb-4">
                            <Form.Label className="mb-2">Location</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Location"
                              value={businessLocation}
                              onChange={(e) =>
                                setBusinessLocation(
                                  e.target.value.trim().trim()
                                )
                              }
                            />
                            {/* <Form.Control.Feedback type="invlid">
                                Input address
                              </Form.Control.Feedback> */}
                          </Form.Group>

                          {/* lga of primary category => applies to all types */}
                          <Form.Group
                            className="mb-4"
                            controlId="enumerator_names"
                          >
                            <Form.Label className="mb-2">LGA</Form.Label>
                            <Form.Select
                              aria-label="LGA"
                              style={{ fontSize: 15 }}
                              size="sm"
                              checked={businessLGA}
                              onChange={(e) => {
                                setBusinessLGA(e.target.value);
                              }}
                            >
                              <option value="">none selected</option>
                              {businessLocationLGAs.map((lga, index) => (
                                <option key={index} value={lga.value}>
                                  {lga.option}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>

                          {/* location of data collection => applies to all types */}
                          <Form.Group className="mb-4">
                            <Form.Label className="mb-2">
                              Select Location of Data Collection
                            </Form.Label>
                            <Form.Check
                              type="radio"
                              aria-label="On the farm"
                              value={"On the farm"}
                              id="on_the_farm"
                              label="On the farm"
                              name="location"
                              checked={
                                locationOfDataCollection === "On the farm"
                              }
                              onChange={(e) =>
                                setLocationOfDataCollection(e.target.value)
                              }
                              required
                              feedbackType="invalid"
                              feedback="Select location of data collection"
                            />
                            <Form.Check
                              type="radio"
                              aria-label="Other location"
                              value={"Other location"}
                              id="other_location"
                              label="Other location"
                              checked={
                                locationOfDataCollection === "Other location"
                              }
                              name="location"
                              onChange={(e) =>
                                setLocationOfDataCollection(e.target.value)
                              }
                              required
                              feedback="Select location of data collection"
                              feedbackType="invalid"
                            />
                          </Form.Group>

                          {/* type of farming, total farm size and primary purpose of farming, etc */}
                          {primaryCategory === "farmer" ? (
                            <>
                              {/* type of farming */}
                              <Form.Group
                                className="mb-4"
                                controlId="govt_incentive"
                              >
                                <Form.Label className="mb-2">
                                  Type of Farming
                                </Form.Label>

                                <Form.Check
                                  type="checkbox"
                                  aria-label="Crop farming"
                                  id="crop_farming"
                                  value={"Crop farming"}
                                  checked={typeOfFarming.includes(
                                    "Crop farming"
                                  )}
                                  label="Crop farming"
                                  name="type_of_farming"
                                  onChange={handleTypeOfFarming}
                                  required
                                  feedback="Select type of farming"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="checkbox"
                                  aria-label="Livestocks"
                                  value={"Livestocks"}
                                  checked={typeOfFarming.includes("Livestocks")}
                                  id="livestocks"
                                  label="Livestocks"
                                  name="type_of_farming"
                                  onChange={handleTypeOfFarming}
                                  required
                                  feedback="Select type of farming"
                                  feedbackType="invalid"
                                />
                              </Form.Group>

                              {/* total farm size owned */}
                              <Form.Group className="mb-4" controlId="farmSize">
                                <Form.Label className="mb-2">
                                  Total Farm Size Owned (Hectarage)
                                </Form.Label>
                                <Form.Control
                                  placeholder="6"
                                  type="number"
                                  value={totalFarmSizeOwned}
                                  onChange={(e) =>
                                    setTotalFarmSizeOwned(e.target.value.trim())
                                  }
                                />
                              </Form.Group>

                              {/* primary purpose of farming */}
                              <Form.Group
                                className="mb-4"
                                controlId="type_of_farming"
                              >
                                <Form.Label className="mb-2">
                                  Primary Purpose of Farming
                                </Form.Label>

                                <Form.Check
                                  type="radio"
                                  aria-label="Subsistence"
                                  id="subsistence"
                                  value={"Subsistence"}
                                  label="Subsistence"
                                  name="primary_purpose_of_farming"
                                  checked={
                                    primaryPurposeOfFarming === "Subsistence"
                                  }
                                  onChange={(e) =>
                                    setPrimaryPurposeOfFarming(
                                      e.target.value.trim()
                                    )
                                  }
                                  required
                                  feedback="Select primary purpose of farming"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="radio"
                                  aria-label="Commercial"
                                  value={"Commercial"}
                                  id="Commercial"
                                  label="Commercial"
                                  name="primary_purpose_of_farming"
                                  checked={
                                    primaryPurposeOfFarming === "Commercial"
                                  }
                                  onChange={(e) =>
                                    setPrimaryPurposeOfFarming(
                                      e.target.value.trim()
                                    )
                                  }
                                  required
                                  feedback="Select primary purpose of farming"
                                  feedbackType="invalid"
                                />
                              </Form.Group>

                              {/* farm land ownership */}
                              <Form.Group
                                className="mb-4"
                                controlId="farmland_ownership"
                              >
                                <Form.Label className="mb-2">
                                  Farmland Ownership
                                </Form.Label>
                                <Form.Check
                                  type="checkbox"
                                  aria-label="Inherited"
                                  id="Inherited"
                                  checked={farmlandOwnership.includes(
                                    "Inherited"
                                  )}
                                  value={"Inherited"}
                                  label="Inherited"
                                  name="farmland_ownership"
                                  onChange={handlefarmLandOwnership}
                                  required
                                  feedback="Select farmland ownership"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="checkbox"
                                  aria-label="Purchased"
                                  value={"Purchased"}
                                  checked={farmlandOwnership.includes(
                                    "Purchased"
                                  )}
                                  id="Purchased"
                                  label="Purchased"
                                  name="farmland_ownership"
                                  onChange={handlefarmLandOwnership}
                                  required
                                  feedback="Select farmland ownership"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="checkbox"
                                  aria-label="Lease"
                                  value={"Lease"}
                                  checked={farmlandOwnership.includes("Lease")}
                                  id="Lease"
                                  label="Lease"
                                  name="farmland_ownership"
                                  onChange={handlefarmLandOwnership}
                                  required
                                  feedback="Select farmland ownership"
                                  feedbackType="invalid"
                                />
                              </Form.Group>

                              {/* crops being farmed*/}
                              {primaryCategory === "farmer" &&
                              typeOfFarming.includes("Crop farming") ? (
                                <>
                                  <Form.Group className="mb-4">
                                    <Form.Label className="mb-2">
                                      Select crops being farmed
                                    </Form.Label>

                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        gap: "10px",
                                      }}
                                    >
                                      {cropsList &&
                                        cropsList.map((item, index) => (
                                          <Form.Check
                                            key={index}
                                            type="checkbox"
                                            aria-label={`${item.name}`}
                                            id={`${item.id}`}
                                            label={`${item.name}`}
                                            name="crops_being_farmed"
                                            value={`${item.name}`}
                                            checked={cropsBeingFarmed.includes(
                                              `${item.name}`
                                            )}
                                            onChange={handleCropsBeingFarmed}
                                          />
                                        ))}
                                    </div>
                                  </Form.Group>

                                  {/* crops being farmed horticulture */}
                                  {cropsBeingFarmed.includes(
                                    "Horticulture (specify)"
                                  ) ? (
                                    <Form.Group className="mb-4">
                                      <Form.Label className="mb-2">
                                        Specify Horticulture Type
                                      </Form.Label>
                                      <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Specify Horticulture Type"
                                        type="text"
                                        value={otherHorticulture}
                                        onChange={(e) =>
                                          setOtherHorticulture(e.target.value)
                                        }
                                      />
                                    </Form.Group>
                                  ) : null}

                                  {cropsBeingFarmed.includes("Other") ? (
                                    <Form.Group className="mb-4">
                                      <Form.Label className="mb-2">
                                        Other Crops
                                      </Form.Label>
                                      <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Other crops"
                                        value={otherCropsBeingFarmed}
                                        onChange={(e) =>
                                          setOtherCropsBeingFarmed(
                                            e.target.value
                                          )
                                        }
                                      />
                                    </Form.Group>
                                  ) : null}

                                  {/* total farm size cultivated */}
                                  {/* <Form.Group className="mb-4" controlId="farmSize">
                                <Form.Label className="mb-2">
                                  Total Farm Size Cultivated (Hectarage)
                                </Form.Label>
                                <Form.Control
                                  placeholder="6"
                                  type="number"
                                  value={totalFarmSizeCultivated}
                                  onChange={(e) =>
                                    setTotalFarmSizeCultivated(e.target.value.trim())
                                  }
                                />
                              </Form.Group> */}

                                  {/* total farm size under cultivation */}
                                  {primaryCategory === "farmer" ? (
                                    <Form.Group
                                      className="mb-4"
                                      controlId="farmsize_under_cultivation"
                                    >
                                      <Form.Label className="mb-2">
                                        Total Farm Size under Cultivation
                                        (Hectarage)
                                      </Form.Label>
                                      <Form.Control
                                        placeholder="10000"
                                        type="number"
                                        value={totalFarmSizeCultivated}
                                        onChange={(e) =>
                                          setTotalFarmSizeCultivated(
                                            e.target.value.trim()
                                          )
                                        }
                                      />
                                    </Form.Group>
                                  ) : null}

                                  {/* are you producing seed */}
                                  <Form.Group
                                    className="mb-4"
                                    controlId="producingSeed"
                                  >
                                    <Form.Label className="mb-2">
                                      Are You Producing Seed?
                                    </Form.Label>

                                    <Form.Check
                                      type="radio"
                                      aria-label="Yes"
                                      id="producing_seed_yes"
                                      value={"Yes"}
                                      label="Yes"
                                      name="producing_seed"
                                      checked={producingSeed === "Yes"}
                                      onChange={(e) =>
                                        setProducingSeed(e.target.value.trim())
                                      }
                                      required
                                      feedback="Are you producing seed?"
                                      feedbackType="invalid"
                                    />

                                    <Form.Check
                                      type="radio"
                                      aria-label="No"
                                      value={"No"}
                                      id="producing_seed_no"
                                      label="No"
                                      name="producing_seed"
                                      checked={producingSeed === "No"}
                                      onChange={(e) =>
                                        setProducingSeed(e.target.value.trim())
                                      }
                                      required
                                      feedback="Are you producing seed?"
                                      feedbackType="invalid"
                                    />
                                  </Form.Group>

                                  {/* if producing seeds */}
                                  {producingSeed === "Yes" ? (
                                    <>
                                      <Form.Group className="mb-4">
                                        <Form.Label className="mb-2">
                                          For Which Crops?
                                        </Form.Label>
                                        <div
                                          style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            flexWrap: "wrap",
                                            gap: "10px",
                                          }}
                                        >
                                          {cropsList &&
                                            cropsList.map((item, index) => (
                                              <Form.Check
                                                key={index}
                                                type="checkbox"
                                                aria-label={`${item.name}`}
                                                id={`for_which_crop_${item.id}`}
                                                label={`${item.name}`}
                                                name="for_which_crop"
                                                value={`${item.name}`}
                                                checked={forWhichCrops.includes(
                                                  `${item.name}`
                                                )}
                                                onChange={handleForWhichCrops}
                                              />
                                            ))}
                                        </div>
                                      </Form.Group>

                                      {/* for which crops - specify horticulture */}
                                      {forWhichCrops.includes(
                                        "Horticulture (specify)"
                                      ) ? (
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Horticulture (specify)
                                          </Form.Label>
                                          <Form.Control
                                            as="textarea"
                                            rows={3}
                                            value={
                                              otherHorticultureForWhichCrop
                                            }
                                            onChange={(e) =>
                                              setOtherHorticultureForWhichCrop(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                      ) : null}

                                      {/* for which crops - specify other */}
                                      {forWhichCrops.includes("Other") ? (
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Other (Specify)
                                          </Form.Label>
                                          <Form.Control
                                            as="textarea"
                                            rows={3}
                                            value={otherForWhichCrop}
                                            onChange={(e) =>
                                              setOtherForWhichCrop(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                      ) : null}

                                      {/* DO YOU SPECIFICALLY PLANT FOR SEED OR JUST SELL HARVEST AS SEED BASED ON THE OPPORTUNITY?
                                       */}
                                      <Form.Group className="mb-4">
                                        <Form.Label className="mb-2">
                                          Do You Specifically Plant for Seed or
                                          Just Sell Harvest as Seed Based on the
                                          Opportunity?
                                        </Form.Label>
                                        <Form.Check
                                          type="checkbox"
                                          aria-label="Plant for seed"
                                          id="plant_for_seed"
                                          label="Plant for seed"
                                          name="Plant for seed"
                                          value="Plant for seed"
                                          checked={plantForSeedOrSellHarvestAsSeed.includes(
                                            "Plant for seed"
                                          )}
                                          onChange={
                                            handlePlantForSeedOrSellHarvestAsSeed
                                          }
                                        />
                                        <Form.Check
                                          type="checkbox"
                                          aria-label="Sell harvest as seed"
                                          id="sell_harvest_as_seed"
                                          label="Sell harvest as seed"
                                          name="Sell harvest as seed"
                                          value="Sell harvest as seed"
                                          checked={plantForSeedOrSellHarvestAsSeed.includes(
                                            "Sell harvest as seed"
                                          )}
                                          onChange={
                                            handlePlantForSeedOrSellHarvestAsSeed
                                          }
                                        />
                                      </Form.Group>

                                      {/* When Did You Start Seed Production? */}
                                      <Form.Group className="mb-4">
                                        <Form.Label className="mb-2">
                                          When Did You Start Seed Production?
                                        </Form.Label>

                                        <Form.Check
                                          type="radio"
                                          aria-label="Less than 1 year ago"
                                          id="less_than_1_year_ago"
                                          label="Less than 1 year ago"
                                          name="Less than 1 year ago"
                                          value="Less than 1 year ago"
                                          checked={
                                            startSeedProduction ===
                                            "Less than 1 year ago"
                                          }
                                          onChange={(e) =>
                                            setStartSeedProduction(
                                              e.target.value
                                            )
                                          }
                                        />
                                        <Form.Check
                                          type="radio"
                                          aria-label="1 year ago"
                                          id="1_year_ago"
                                          label="1 year ago"
                                          name="1 year ago"
                                          value="1 year ago"
                                          checked={
                                            startSeedProduction === "1 year ago"
                                          }
                                          onChange={(e) =>
                                            setStartSeedProduction(
                                              e.target.value
                                            )
                                          }
                                        />
                                        <Form.Check
                                          type="radio"
                                          aria-label="2 - 5 years ago"
                                          id="2_5_years_ago"
                                          label="2 - 5 years ago"
                                          name="2 - 5 years ago"
                                          value="2 - 5 years ago"
                                          checked={
                                            startSeedProduction ===
                                            "2 - 5 years ago"
                                          }
                                          onChange={(e) =>
                                            setStartSeedProduction(
                                              e.target.value
                                            )
                                          }
                                        />
                                        <Form.Check
                                          type="radio"
                                          aria-label="5-10 years ago"
                                          id="5_10_years_ago"
                                          label="5-10 years ago"
                                          name="5-10 years ago"
                                          value="5-10 years ago"
                                          checked={
                                            startSeedProduction ===
                                            "5-10 years ago"
                                          }
                                          onChange={(e) =>
                                            setStartSeedProduction(
                                              e.target.value
                                            )
                                          }
                                        />
                                        <Form.Check
                                          type="radio"
                                          aria-label="More than 10 years ago"
                                          id="more_than_10_years_ago"
                                          label="More than 10 years ago"
                                          name="More than 10 years ago"
                                          value="More than 10 years ago"
                                          checked={
                                            startSeedProduction ===
                                            "More than 10 years ago"
                                          }
                                          onChange={(e) =>
                                            setStartSeedProduction(
                                              e.target.value
                                            )
                                          }
                                        />
                                        <Form.Check
                                          type="radio"
                                          aria-label="More than 20 years ago"
                                          id="more_than_20_years_ago"
                                          label="More than 20 years ago"
                                          name="More than 20 years ago"
                                          value="More than 20 years ago"
                                          checked={
                                            startSeedProduction ===
                                            "More than 20 years ago"
                                          }
                                          onChange={(e) =>
                                            setStartSeedProduction(
                                              e.target.value
                                            )
                                          }
                                        />
                                      </Form.Group>

                                      {/* Do You Sell the Seed, Give It Free, or Barter? */}
                                      <Form.Group className="mb-4">
                                        <Form.Label className="mb-2">
                                          Do You Sell the Seed, Give It Free, or
                                          Barter?
                                        </Form.Label>

                                        <Form.Check
                                          type="checkbox"
                                          aria-label="Sell seed"
                                          id="sell_seed"
                                          label="Sell seed"
                                          name="Sell seed"
                                          value="Sell seed"
                                          checked={sellSeedOrFreeOrBarter.includes(
                                            "Sell seed"
                                          )}
                                          onChange={
                                            handleSellSeedOrFreeOrBarter
                                          }
                                        />
                                        <Form.Check
                                          type="checkbox"
                                          aria-label="Give for free"
                                          id="give_for_free"
                                          label="Give for free"
                                          name="Give for free"
                                          value="Give for free"
                                          checked={sellSeedOrFreeOrBarter.includes(
                                            "Give for free"
                                          )}
                                          onChange={
                                            handleSellSeedOrFreeOrBarter
                                          }
                                        />
                                        <Form.Check
                                          type="checkbox"
                                          aria-label="Barter"
                                          id="barter"
                                          label="Barter"
                                          name="Barter"
                                          value="Barter"
                                          checked={sellSeedOrFreeOrBarter.includes(
                                            "Barter"
                                          )}
                                          onChange={
                                            handleSellSeedOrFreeOrBarter
                                          }
                                        />
                                      </Form.Group>

                                      {/* Do You Sell Seed in Local Markets? */}
                                      <Form.Group className="mb-4">
                                        <Form.Label className="mb-2">
                                          Do You Sell Seed in Local Markets?
                                        </Form.Label>

                                        <Form.Check
                                          type="radio"
                                          aria-label="Yes"
                                          id="sell_in_market_yes"
                                          label="Yes"
                                          name="sell_in_market"
                                          value="Yes"
                                          checked={
                                            sellSeedInLocalMarket === "Yes"
                                          }
                                          onChange={(e) =>
                                            setSellSeedInLocalMarket(
                                              e.target.value
                                            )
                                          }
                                        />
                                        <Form.Check
                                          type="radio"
                                          aria-label="No"
                                          id="sell_in_market_no"
                                          label="No"
                                          name="sell_in_market"
                                          value="No"
                                          checked={
                                            sellSeedInLocalMarket === "No"
                                          }
                                          onChange={(e) =>
                                            setSellSeedInLocalMarket(
                                              e.target.value
                                            )
                                          }
                                        />
                                      </Form.Group>

                                      {/* What Is the Motivation for Seed Production? */}
                                      <Form.Group className="mb-4">
                                        <Form.Label className="mb-2">
                                          What Is the Motivation for Seed
                                          Production?
                                        </Form.Label>
                                        <Form.Control
                                          placeholder="What Is the Motivation for Seed Production?"
                                          type="text"
                                          checked={motivationForSeedProduction}
                                          onChange={(e) =>
                                            setMotivationForSeedProduction(
                                              e.target.value
                                            )
                                          }
                                        />
                                      </Form.Group>

                                      {/* Do You Sell Seed in Local Markets? */}
                                      <Form.Group className="mb-4">
                                        <Form.Label className="mb-2">
                                          Did You Receive Any Training or Advice
                                          to Produce Seed?
                                        </Form.Label>

                                        <Form.Check
                                          type="radio"
                                          aria-label="Yes"
                                          id="training_or_advice_yes"
                                          label="Yes"
                                          name="training_or_advice"
                                          value="Yes"
                                          checked={
                                            trainingToProduceSeed === "Yes"
                                          }
                                          onChange={(e) =>
                                            setTrainingToProduceSeed(
                                              e.target.value
                                            )
                                          }
                                        />
                                        <Form.Check
                                          type="radio"
                                          aria-label="No"
                                          id="training_or_advice_no"
                                          label="No"
                                          name="training_or_advice"
                                          value="No"
                                          checked={
                                            trainingToProduceSeed === "No"
                                          }
                                          onChange={(e) =>
                                            setTrainingToProduceSeed(
                                              e.target.value
                                            )
                                          }
                                        />
                                      </Form.Group>
                                    </>
                                  ) : null}
                                </>
                              ) : null}

                              {/* type of commodity in livestocks */}
                              {primaryCategory === "farmer" &&
                              typeOfFarming.includes("Livestocks") ? (
                                <>
                                  <Form.Group className="mb-4">
                                    <Form.Label className="mb-2">
                                      Select Types of LiveStock Farming
                                    </Form.Label>
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        gap: "10px",
                                      }}
                                    >
                                      {liveStocksList &&
                                        liveStocksList.map((item, index) => (
                                          <Form.Check
                                            key={index}
                                            type="checkbox"
                                            aria-label={`${item.name}`}
                                            id={`${item.id}`}
                                            label={`${item.name}`}
                                            name="types_of_livestock_farming"
                                            value={`${item.name}`}
                                            checked={typesOfLiveStockFarming.includes(
                                              `${item.name}`
                                            )}
                                            onChange={
                                              handleTypesOfLivestockFarming
                                            }
                                          />
                                        ))}
                                    </div>
                                  </Form.Group>
                                  {typesOfLiveStockFarming.includes("Other") ? (
                                    <Form.Group
                                      className="mb-4"
                                      controlId="other_for_which_crop"
                                    >
                                      <Form.Label className="mb-2">
                                        Other (Specify)
                                      </Form.Label>
                                      <Form.Control
                                        as="textarea"
                                        type="text"
                                        rows={3}
                                        value={otherTypeOfLivestockFarming}
                                        onChange={
                                          setOtherTypeOfLivestockFarming
                                        }
                                      />
                                    </Form.Group>
                                  ) : null}
                                </>
                              ) : null}

                              {/* Total farm size in use for livestock farming (hectarage)*/}
                              {primaryCategory === "farmer" &&
                              typeOfFarming.includes("Livestocks") ? (
                                <Form.Group
                                  className="mb-4"
                                  controlId="farmsize_for_livestock_farming"
                                >
                                  <Form.Label className="mb-2">
                                    Total Farm Size in Use for Livestock Farming
                                    (Hectarage)
                                  </Form.Label>
                                  <Form.Control
                                    placeholder="6"
                                    type="number"
                                    value={farmSizeForLiveStockFarming}
                                    onChange={(e) =>
                                      setTotalFarmSizeForLiveStockFarming(
                                        e.target.value.trim()
                                      )
                                    }
                                  />
                                </Form.Group>
                              ) : null}

                              {/* farm productivity (crops) */}
                              {primaryCategory === "farmer" &&
                                typeOfFarming.includes("Crop farming") && (
                                  <>
                                    {cropsBeingFarmed.includes("Cassava") ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Farm Size Used to Cultivate
                                            Cassava (ha)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Farm Size Used to Cultivate Cassava (ha)"
                                            type="number"
                                            id="cassava_farmsize"
                                            value={cassavaFarmSize}
                                            onChange={(e) =>
                                              setCassavaFarmSize(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Cassava Yield/ha (kg)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Cassava Yield/ha (kg)"
                                            type="number"
                                            id="cassava_yield"
                                            value={cassavaYield}
                                            onChange={(e) =>
                                              setCassavaYield(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* farm productivity (crops) => yam */}
                                    {cropsBeingFarmed.includes("Yam") ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Farm Size Used to Cultivate
                                            Yam (ha)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Farm Size Used to Cultivate Yam (ha)"
                                            type="number"
                                            id="yam_farmsize"
                                            value={yamFarmSize}
                                            onChange={(e) =>
                                              setYamFarmSize(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Yam Yield/ha (kg)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Yam Yield/ha (kg)"
                                            type="number"
                                            id="yam_yield"
                                            value={yamYield}
                                            onChange={(e) =>
                                              setYamYield(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* farm productivity (crops) => cowpea */}
                                    {cropsBeingFarmed.includes("Cowpea") ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Farm Size Used to Cultivate
                                            Cowpea (ha)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Farm Size Used to Cultivate Cowpea (ha)"
                                            type="number"
                                            id="cowpea_farmsize"
                                            value={cowpeaFarmSize}
                                            onChange={(e) =>
                                              setCowpeaFarmSize(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Cowpea Yield/ha (kg)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Cowpea Yield/ha (kg)"
                                            type="number"
                                            id="cowpea_yield"
                                            value={cowpeaYield}
                                            onChange={(e) =>
                                              setCowpeaYield(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* farm productivity (crops) => banana */}

                                    {cropsBeingFarmed.includes("Banana") ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Farm Size Used to Cultivate
                                            Banana (ha)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Farm Size Used to Cultivate Banana (ha)"
                                            type="number"
                                            id="banana_farmsize"
                                            value={bananaFarmSize}
                                            onChange={(e) =>
                                              setBananaFarmSize(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Banana Yield/ha (kg)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Banana Yield/ha (kg)"
                                            type="number"
                                            id="banana_yield"
                                            value={bananaYield}
                                            onChange={(e) =>
                                              setBananaYield(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* farm productivity (crops) => plantain */}
                                    {cropsBeingFarmed.includes("Plantain") ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Farm Size Used to Cultivate
                                            Plantain (ha)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Farm Size Used to Cultivate Plantain (ha)"
                                            type="number"
                                            id="plantain_farmsize"
                                            value={plantainFarmSize}
                                            onChange={(e) =>
                                              setPlantainFarmSize(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Plantain Yield/ha (kg)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Plantain Yield/ha (kg)"
                                            type="number"
                                            id="plantain_yield"
                                            value={plantainYield}
                                            onChange={(e) =>
                                              setPlantainYield(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* farm productivity (crops) => rice */}
                                    {cropsBeingFarmed.includes("Rice") ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Farm Size Used to Cultivate
                                            Rice (ha)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Farm Size Used to Cultivate Rice (ha)"
                                            type="number"
                                            id="rice_farmsize"
                                            value={riceFarmSize}
                                            onChange={(e) =>
                                              setRiceFarmSize(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Rice Yield/ha (kg)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Rice Yield/ha (kg)"
                                            type="number"
                                            id="rice_yield"
                                            value={riceYield}
                                            onChange={(e) =>
                                              setRiceYield(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* farm productivity (crops) => cocoa */}
                                    {cropsBeingFarmed.includes("Cocoa") ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Farm Size Used to Cultivate
                                            Cocoa (ha)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Farm Size Used to Cultivate Cocoa (ha)"
                                            type="number"
                                            id="cocoa_farmsize"
                                            value={cocoaFarmSize}
                                            onChange={(e) =>
                                              setCocoaFarmSize(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Cocoa Yield/ha (kg)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Cocoa Yield/ha (kg)"
                                            type="number"
                                            id="cocoa_yield"
                                            value={cocoaYield}
                                            onChange={(e) =>
                                              setCocoaYield(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* farm productivity (crops) => cashew */}
                                    {cropsBeingFarmed.includes("Cashew") ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Farm Size Used to Cultivate
                                            Cashew (ha)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Farm Size Used to Cultivate Cashew (ha)"
                                            type="number"
                                            id="cashew_farmsize"
                                            value={cashewFarmSize}
                                            onChange={(e) =>
                                              setCashewFarmSize(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Cashew Yield/ha (kg)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Cashew Yield/ha (kg)"
                                            type="number"
                                            id="cashew_yield"
                                            value={cashewYield}
                                            onChange={(e) =>
                                              setCashewYield(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* farm productivity (crops) => oil_palm */}
                                    {cropsBeingFarmed.includes("Oil Palm") ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Farm Size Used to Cultivate
                                            Oil Palm (ha)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Farm Size Used to Cultivate Oil Palm (ha)"
                                            type="number"
                                            id="oil_palm_farmsize"
                                            value={oilPalmFarmSize}
                                            onChange={(e) =>
                                              setOilPalmFarmSize(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Oil Palm Yield/ha (kg)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Oil Palm Yield/ha (kg)"
                                            type="number"
                                            id="oil_palm_yield"
                                            value={oilPalmYield}
                                            onChange={(e) =>
                                              setOilPalmYield(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* farm productivity (crops) => potato */}
                                    {cropsBeingFarmed.includes("Potato") ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Farm Size Used to Cultivate
                                            Potato (ha)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Farm Size Used to Cultivate Potato (ha)"
                                            type="number"
                                            id="potato_farmsize"
                                            value={potatoFarmSize}
                                            onChange={(e) =>
                                              setPotatoFarmSize(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Potato Yield/ha (kg)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Potato Yield/ha (kg)"
                                            type="number"
                                            id="potato_yield"
                                            value={potatoYield}
                                            onChange={(e) =>
                                              setPotatoYield(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* farm productivity (crops) => sweet_potato */}
                                    {cropsBeingFarmed.includes(
                                      "Sweet Potato"
                                    ) ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Farm Size Used to Cultivate
                                            Sweet Potato (ha)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Farm Size Used to Cultivate Sweet Potato (ha)"
                                            type="number"
                                            id="sweet_potato"
                                            value={sweetPotatoFarmSize}
                                            onChange={(e) =>
                                              setSweetPotatoFarmSize(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Sweet Potato Yield/ha (kg)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Sweet Potato Yield/ha (kg)"
                                            type="number"
                                            id="sweet_potato_yield"
                                            value={sweetPotatoYield}
                                            onChange={(e) =>
                                              setSweetPotatoYield(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* farm productivity (crops) => wheat */}
                                    {cropsBeingFarmed.includes("Wheat") ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Farm Size Used to Cultivate
                                            Wheat (ha)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Farm Size Used to Wheat (ha)"
                                            type="number"
                                            id="wheat_farmsize"
                                            value={wheatFarmSize}
                                            onChange={(e) =>
                                              setWheatFarmSize(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Wheat Yield/ha (kg)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Wheat Yield/ha (kg)"
                                            type="number"
                                            id="wheat_yield"
                                            value={wheatYield}
                                            onChange={(e) =>
                                              setWheatYield(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* farm productivity (crops) => Sesame */}
                                    {cropsBeingFarmed.includes("Sesame") ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Farm Size Used to Cultivate
                                            Sesame (ha)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Farm Size Used to Cultivate Sesame (ha)"
                                            type="number"
                                            id="sesame_farmsize"
                                            value={sesameFarmSize}
                                            onChange={(e) =>
                                              setSesameFarmSize(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Sesame Yield/ha (kg)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Sesame Yield/ha (kg)"
                                            type="number"
                                            id="sesame_yield"
                                            value={sesameYield}
                                            onChange={(e) =>
                                              setSesameYield(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* farm productivity (crops) => Soya */}

                                    {cropsBeingFarmed.includes("Soya") ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Farm Size Used to Cultivate
                                            Soya (ha)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Farm Size Used to Cultivate Soya (ha)"
                                            type="number"
                                            id="soya_farmsize"
                                            value={soyaFarmSize}
                                            onChange={(e) =>
                                              setSoyaFarmSize(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Soya Yield/ha (kg)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Soya Yield/ha (kg)"
                                            type="number"
                                            id="soya_yield"
                                            value={soyaYield}
                                            onChange={(e) =>
                                              setSoyaYield(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* farm productivity (crops) => maize */}

                                    {cropsBeingFarmed.includes("Maize") ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Farm Size Used to Cultivate
                                            Maize (ha)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Farm Size Used to Cultivate Maize  (ha)"
                                            type="number"
                                            id="maize_farmsize"
                                            value={maizeFarmSize}
                                            onChange={(e) =>
                                              setMaizeFarmSize(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Maize Yield/ha (kg)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Maize Yield/ha (kg)"
                                            type="number"
                                            id="maize_yield"
                                            value={maizeYield}
                                            onChange={(e) =>
                                              setMaizeYield(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* farm productivity (crops) => cotton */}

                                    {cropsBeingFarmed.includes("Cotton") ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Farm Size Used to Cultivate
                                            Cotton (ha)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Farm Size Used to Cultivate Cotton (ha)"
                                            type="number"
                                            id="cotton_farmsize"
                                            value={cottonFarmSize}
                                            onChange={(e) =>
                                              setCottonFarmSize(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Cotton Yield/ha (kg)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Cotton Yield/ha (kg)"
                                            type="number"
                                            id="cotton_yield"
                                            value={cottonYield}
                                            onChange={(e) =>
                                              setCottonYield(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {cropsBeingFarmed.includes("Other") ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Farm Size Used to Cultivate
                                            Other crops
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Farm Size Used to Cultivate Other crops (ha)"
                                            type="number"
                                            id="other_crop_farmsize"
                                            value={otherCropFarmSize}
                                            onChange={(e) =>
                                              setOtherCropFarmSize(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Other Crop Yield/ha (kg)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Other Crop Yield/ha (kg)"
                                            type="number"
                                            id="other_crop_yield"
                                            value={otherCropYield}
                                            onChange={(e) =>
                                              setOtherCropYield(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}
                                    {cropsBeingFarmed.includes(
                                      "Horticulture (specify)"
                                    ) ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Farm Size Used to Cultivate
                                            Horticulture Type (ha)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Farm Size Used to Cultivate Horticulture Type (ha)"
                                            type="number"
                                            id="other_horticulture_farmsize"
                                            value={horticultureFarmSize}
                                            onChange={(e) =>
                                              setHorticultureFarmSize(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Total Horticulture Yield/ha (kg)
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Total Horticulture Yield/ha (kg)"
                                            type="number"
                                            id="other_horticulture_yield"
                                            value={horticultureYield}
                                            onChange={(e) =>
                                              setHorticultureYield(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}
                                  </>
                                )}

                              {/* farm productivity (livestock) */}

                              {primaryCategory === "farmer" &&
                                typeOfFarming.includes("Livestocks") && (
                                  <>
                                    {/* poultry */}
                                    {typesOfLiveStockFarming.includes(
                                      "Poultry"
                                    ) ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Type of Poultry
                                          </Form.Label>
                                          <Form.Check
                                            placeholder="Broilers"
                                            value={"Broilers"}
                                            label="Broilers"
                                            id="broilers"
                                            checked={poultryType.includes(
                                              "Broilers"
                                            )}
                                            onChange={handlePoultryType}
                                          />
                                          <Form.Check
                                            placeholder="Layers"
                                            value={"Layers"}
                                            label="Layers"
                                            id="layers"
                                            checked={poultryType.includes(
                                              "Layers"
                                            )}
                                            onChange={handlePoultryType}
                                          />
                                        </Form.Group>

                                        {/* broiler poultry type */}
                                        {poultryType.includes("Broilers") ? (
                                          <>
                                            <Form.Group
                                              className="mb-4"
                                              controlId=""
                                            >
                                              <Form.Label className="mb-2">
                                                Poultry - Stock Capacity/Cycle
                                              </Form.Label>
                                              <Form.Control
                                                placeholder="Poultry - Stock Capacity/Cycle"
                                                type="number"
                                                id="Poultry_stock_capacity"
                                                value={poultryStockCapacity}
                                                onChange={(e) =>
                                                  setPoultryStockCapacity(
                                                    e.target.value
                                                  )
                                                }
                                              />
                                            </Form.Group>
                                            <Form.Group className="mb-4">
                                              <Form.Label className="mb-2">
                                                Poultry - Average Mortality /
                                                Cycle
                                              </Form.Label>
                                              <Form.Control
                                                placeholder="Poultry - Average Mortality / Cycle"
                                                type="number"
                                                id="Poultry_average_mortality"
                                                value={poultryAverageMortality}
                                                onChange={(e) =>
                                                  setPoultryAverageMortality(
                                                    e.target.value
                                                  )
                                                }
                                              />
                                            </Form.Group>
                                            <Form.Group className="mb-4">
                                              <Form.Label className="mb-2">
                                                Poultry - Average Harvest
                                                Weight/Animal
                                              </Form.Label>
                                              <Form.Control
                                                placeholder="Poultry - Average Harvest Weight/Animal)"
                                                type="number"
                                                id="Poultry_average_harvest"
                                                value={poultryAverageHarvest}
                                                onChange={(e) =>
                                                  setPoultryAverageHarvest(
                                                    e.target.value
                                                  )
                                                }
                                              />
                                            </Form.Group>
                                            <Form.Group className="mb-4">
                                              <Form.Label className="mb-2">
                                                Poultry - Total Harvest Weight
                                              </Form.Label>
                                              <Form.Control
                                                placeholder="Poultry - Total Harvest Weight"
                                                type="number"
                                                id="Poultry_total_harvest"
                                                value={poultryTotalHarvest}
                                                onChange={(e) =>
                                                  setPoultryTotalHarvest(
                                                    e.target.value
                                                  )
                                                }
                                              />
                                            </Form.Group>
                                          </>
                                        ) : null}

                                        {/* layers egg production */}
                                        {poultryType.includes("Layers") ? (
                                          <Form.Group
                                            controlId=""
                                            className="mb-4"
                                          >
                                            <Form.Label className="mb-2">
                                              Poultry - Total Crates of Eggs
                                              Produced
                                            </Form.Label>
                                            <Form.Control
                                              placeholder="Poultry - Total Crates of Eggs Produced"
                                              type="number"
                                              id="poiltry_eggs"
                                              value={poultryEggsProduced}
                                              onChange={(e) =>
                                                setPoultryEggsProduced(
                                                  e.target.value
                                                )
                                              }
                                            />
                                          </Form.Group>
                                        ) : null}
                                      </>
                                    ) : null}

                                    {/* Fishery & Aquaculture */}
                                    {typesOfLiveStockFarming.includes(
                                      "Fishery & Aquaculture"
                                    ) ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Fishery - Stock Capacity/Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Fishery - Stock Capacity/Cycle"
                                            type="number"
                                            id="fishery_stock_capacity"
                                            value={fisheryStockCapacity}
                                            onChange={(e) =>
                                              setFisheryStockCapacity(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Fishery - Average Mortality / Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Fishery - Average Mortality / Cycle"
                                            type="number"
                                            id="fishery_average_mortality"
                                            value={fisheryAverageMortality}
                                            onChange={(e) =>
                                              setFisheryAverageMortality(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Fishery - Average Harvest
                                            Weight/Animal
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Fishery - Average Harvest Weight/Animal)"
                                            type="number"
                                            id="fishery_average_harvest"
                                            value={fisheryAverageHarvest}
                                            onChange={(e) =>
                                              setFisheryAverageHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Fishery - Total Harvest Weight
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Fishery - Total Harvest Weight"
                                            type="number"
                                            id="fishery_total_harvest"
                                            value={fisheryTotalHarvest}
                                            onChange={(e) =>
                                              setFisheryTotalHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* cattle */}
                                    {typesOfLiveStockFarming.includes(
                                      "Cattle"
                                    ) ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Cattle - Stock Capacity/Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Cattle - Stock Capacity/Cycle"
                                            type="number"
                                            id="cattle_stock_capacity"
                                            value={cattleStockCapacity}
                                            onChange={(e) =>
                                              setCattleStockCapacity(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Cattle - Average Mortality / Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Cattle - Average Mortality / Cycle"
                                            type="number"
                                            id="cattle_average_mortality"
                                            value={cattleAverageMortality}
                                            onChange={(e) =>
                                              setCattleAverageMortality(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Cattle - Average Harvest
                                            Weight/Animal
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Cattle - Average Harvest Weight/Animal)"
                                            type="number"
                                            id="cattle_average_harvest"
                                            value={cattleAverageHarvest}
                                            onChange={(e) =>
                                              setCattleAverageHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Cattle - Total Harvest Weight
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Cattle - Total Harvest Weight"
                                            type="number"
                                            id="cattle_total_harvest"
                                            value={cattleTotalHarvest}
                                            onChange={(e) =>
                                              setCattleTotalHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* piggery */}
                                    {typesOfLiveStockFarming.includes(
                                      "Piggery"
                                    ) ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Piggery - Stock Capacity/Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Piggery - Stock Capacity/Cycle"
                                            type="number"
                                            id="Piggery_stock_capacity"
                                            value={piggeryStockCapacity}
                                            onChange={(e) =>
                                              setPiggeryStockCapacity(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Piggery - Average Mortality / Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Piggery - Average Mortality / Cycle"
                                            type="number"
                                            id="Piggery_average_mortality"
                                            value={piggeryAverageMortality}
                                            onChange={(e) =>
                                              setPiggeryAverageMortality(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Piggery - Average Harvest
                                            Weight/Animal
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Piggery - Average Harvest Weight/Animal)"
                                            type="number"
                                            id="Piggery_average_harvest"
                                            value={piggeryAverageHarvest}
                                            onChange={(e) =>
                                              setPiggeryAverageHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Piggery - Total Harvest Weight
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Piggery - Total Harvest Weight"
                                            type="number"
                                            id="Piggery_total_harvest"
                                            value={piggeryTotalHarvest}
                                            onChange={(e) =>
                                              setPiggeryTotalHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* Small Ruminants (Goat, Sheep etc.) */}
                                    {typesOfLiveStockFarming.includes(
                                      "Small Ruminants (Goat, Sheep etc.)"
                                    ) ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Small Ruminants - Stock
                                            Capacity/Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Small Ruminants - Stock Capacity/Cycle"
                                            type="number"
                                            id="small_ruminants_stock_capacity"
                                            value={smallRuminantsStockCapacity}
                                            onChange={(e) =>
                                              setSmallRuminantsStockCapacity(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Small Ruminants - Average Mortality
                                            / Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Small Ruminants - Average Mortality / Cycle"
                                            type="number"
                                            id="small_ruminants_average_mortality"
                                            value={
                                              smallRuminantsAverageMortality
                                            }
                                            onChange={(e) =>
                                              setSmallRuminantsAverageMortality(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Small Ruminants - Average Harvest
                                            Weight/Animal
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Small Ruminants - Average Harvest Weight/Animal)"
                                            type="number"
                                            id="small_ruminants_average_harvest"
                                            value={smallRuminantsAverageHarvest}
                                            onChange={(e) =>
                                              setSmallRuminantsAverageHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Small Ruminants - Total Harvest
                                            Weight
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Small Ruminants - Total Harvest Weight"
                                            type="number"
                                            id="small_ruminants_total_harvest"
                                            value={smallRuminantsTotalHarvest}
                                            onChange={(e) =>
                                              setSmallRuminantsTotalHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* rabiitry */}
                                    {typesOfLiveStockFarming.includes(
                                      "Rabbitry"
                                    ) ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Rabbitry - Stock Capacity/Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Rabbitry - Stock Capacity/Cycle"
                                            type="number"
                                            id="Rabbitry_stock_capacity"
                                            value={rabbitryStockCapacity}
                                            onChange={(e) =>
                                              setRabbitryStockCapacity(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Rabbitry - Average Mortality / Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Rabbitry - Average Mortality / Cycle"
                                            type="number"
                                            id="Rabbitry_average_mortality"
                                            value={rabbitryAverageMortality}
                                            onChange={(e) =>
                                              setRabbitryAverageMortality(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Rabbitry - Average Harvest
                                            Weight/Animal
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Rabbitry - Average Harvest Weight/Animal)"
                                            type="number"
                                            id="Rabbitry_average_harvest"
                                            value={rabbitryAverageHarvest}
                                            onChange={(e) =>
                                              setRabbitryAverageHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Rabbitry - Total Harvest Weight
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Rabbitry - Total Harvest Weight"
                                            type="number"
                                            id="Rabbitry_total_harvest"
                                            value={rabbitryTotalHarvest}
                                            onChange={(e) =>
                                              setRabbitryTotalHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {typesOfLiveStockFarming.includes(
                                      "Snailry"
                                    ) ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Snailry - Stock Capacity/Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Snailry - Stock Capacity/Cycle"
                                            type="number"
                                            id="Snailry_stock_capacity"
                                            value={snailryStockCapacity}
                                            onChange={(e) =>
                                              setSnailryStockCapacity(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Snailry - Average Mortality / Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Snailry - Average Mortality / Cycle"
                                            type="number"
                                            id="Snailry_average_mortality"
                                            value={snailryAverageMortality}
                                            onChange={(e) =>
                                              setSnailryAverageMortality(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Snailry - Average Harvest
                                            Weight/Animal
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Snailry - Average Harvest Weight/Animal)"
                                            type="number"
                                            id="Snailry_average_harvest"
                                            value={snailryAverageHarvest}
                                            onChange={(e) =>
                                              setSnailryAverageHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Snailry - Total Harvest Weight
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Snailry - Total Harvest Weight"
                                            type="number"
                                            id="Snailry_total_harvest"
                                            value={snailryTotalHarvest}
                                            onChange={(e) =>
                                              setSnailryTotalHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* grass cutter farming */}
                                    {typesOfLiveStockFarming.includes(
                                      "Grasscutter farming"
                                    ) ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Grasscutter - Stock Capacity/Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Grasscutter - Stock Capacity/Cycle"
                                            type="number"
                                            id="Grasscutter_stock_capacity"
                                            value={grasscutterStockCapacity}
                                            onChange={(e) =>
                                              setGrasscutterStockCapacity(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Grasscutter - Average Mortality /
                                            Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Grasscutter - Average Mortality / Cycle"
                                            type="number"
                                            id="Grasscutter_average_mortality"
                                            value={grasscutterAverageMortality}
                                            onChange={(e) =>
                                              setGrasscutterAverageMortality(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Grasscutter - Average Harvest
                                            Weight/Animal
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Grasscutter - Average Harvest Weight/Animal)"
                                            type="number"
                                            id="Grasscutter_average_harvest"
                                            value={grasscutterAverageHarvest}
                                            onChange={(e) =>
                                              setGrasscutterAverageHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Grasscutter - Total Harvest Weight
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Grasscutter - Total Harvest Weight"
                                            type="number"
                                            id="Grasscutter_total_harvest"
                                            value={grasscutterTotalHarvest}
                                            onChange={(e) =>
                                              setGrasscutterTotalHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {typesOfLiveStockFarming.includes(
                                      "Sericulture (Silkworm production)"
                                    ) ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Sericulture - Stock Capacity/Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Sericulture - Stock Capacity/Cycle"
                                            type="number"
                                            id="Sericulture_stock_capacity"
                                            value={sericultureStockCapacity}
                                            onChange={(e) =>
                                              setSericultureStockCapacity(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Sericulture - Average Mortality /
                                            Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Sericulture - Average Mortality / Cycle"
                                            type="number"
                                            id="Sericulture_average_mortality"
                                            value={sericultureAverageMortality}
                                            onChange={(e) =>
                                              setSericultureAverageMortality(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Sericulture - Average Harvest
                                            Weight/Animal
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Sericulture - Average Harvest Weight/Animal)"
                                            type="number"
                                            id="Sericulture_average_harvest"
                                            value={sericultureAverageHarvest}
                                            onChange={(e) =>
                                              setSericultureAverageHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Sericulture - Total Harvest Weight
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Sericulture - Total Harvest Weight"
                                            type="number"
                                            id="Sericulture_total_harvest"
                                            value={sericultureTotalHarvest}
                                            onChange={(e) =>
                                              setSericultureTotalHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {typesOfLiveStockFarming.includes(
                                      "Bee-keeping"
                                    ) ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Beekeeping - Stock Capacity/Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Bee-keeping - Stock Capacity/Cycle"
                                            type="number"
                                            id="bee_keeping_stock_capacity"
                                            value={beekeepingStockCapacity}
                                            onChange={(e) =>
                                              setBeekeepingStockCapacity(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Bee-keeping - Average Mortality /
                                            Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Bee-keeping - Average Mortality / Cycle"
                                            type="number"
                                            id="bee_keeping_average_mortality"
                                            value={beekeepingAverageMortality}
                                            onChange={(e) =>
                                              setBeekeepingAverageMortality(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Bee-keeping - Average Harvest
                                            Weight/Animal
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Bee-keeping - Average Harvest Weight/Animal)"
                                            type="number"
                                            id="bee_keeping_average_harvest"
                                            value={beekeepingAverageHarvest}
                                            onChange={(e) =>
                                              setBeekeepingAverageHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Bee-keeping - Total Harvest Weight
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Bee-keeping - Total Harvest Weight"
                                            type="number"
                                            id="bee_keeping_total_harvest"
                                            value={beekeepingTotalHarvest}
                                            onChange={(e) =>
                                              setBeekeepingTotalHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}

                                    {/* other type of livestock farming */}
                                    {typesOfLiveStockFarming.includes(
                                      "Other"
                                    ) ? (
                                      <>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Other Livestock - Stock
                                            Capacity/Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Other Livestock - Stock Capacity/Cycle"
                                            type="number"
                                            id="bee_keeping_stock_capacity"
                                            value={otherLivestockStockCapacity}
                                            onChange={(e) =>
                                              setOtherLivestockStockCapacity(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Other Livestock - Average Mortality
                                            / Cycle
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Other Livestock - Average Mortality / Cycle"
                                            type="number"
                                            id="other_livestock_average_mortality"
                                            value={
                                              otherLivestockAverageMortality
                                            }
                                            onChange={(e) =>
                                              setOtherLivestockAverageMortality(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Other Livestock - Average Harvest
                                            Weight/Animal
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Other Livestock - Average Harvest Weight/Animal)"
                                            type="number"
                                            id="other_livestock_average_harvest"
                                            value={otherLivestockAverageHarvest}
                                            onChange={(e) =>
                                              setOtherLivestockAverageHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                          <Form.Label className="mb-2">
                                            Other Livestock - Total Harvest
                                            Weight
                                          </Form.Label>
                                          <Form.Control
                                            placeholder="Other Livestock - Total Harvest Weight"
                                            type="number"
                                            id="other_livestock_total_harvest"
                                            value={otherLivestockTotalHarvest}
                                            onChange={(e) =>
                                              setOtherLivestockTotalHarvest(
                                                e.target.value
                                              )
                                            }
                                          />
                                        </Form.Group>
                                      </>
                                    ) : null}
                                  </>
                                )}

                              {/* Access and Utilization of Services/state benefits/ ACCESS TO INPUT PROVIDERS */}
                              <Form.Group
                                className="mb-4"
                                controlId="accessInputProviders"
                              >
                                <Form.Label className="mb-2">
                                  Access to Input Providers
                                </Form.Label>

                                <Form.Check
                                  type="radio"
                                  aria-label="Yes"
                                  id="input_providers_yes"
                                  value={"Yes"}
                                  label="Yes"
                                  name="input_providers"
                                  checked={accessToInputProviders === "Yes"}
                                  onChange={(e) =>
                                    setAccesToInputProviders(
                                      e.target.value.trim()
                                    )
                                  }
                                  required
                                  feedback="Select access to input providers"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="radio"
                                  aria-label="No"
                                  value={"No"}
                                  id="input_providers_no"
                                  label="No"
                                  name="input_providers"
                                  checked={accessToInputProviders === "No"}
                                  onChange={(e) =>
                                    setAccesToInputProviders(
                                      e.target.value.trim()
                                    )
                                  }
                                  required
                                  feedback="Select access to input providers"
                                  feedbackType="invalid"
                                />
                              </Form.Group>

                              {/* Access and Utilization of Services/state benefits/ Access to Business Development Service Providers*/}
                              <Form.Group
                                className="mb-4"
                                controlId="accessBDS"
                              >
                                <Form.Label className="mb-2">
                                  Access to Business Development Service
                                  Providers
                                </Form.Label>

                                <Form.Check
                                  type="radio"
                                  aria-label="Yes"
                                  id="access_bds_yes"
                                  value={"Yes"}
                                  label="Yes"
                                  name="access_bds"
                                  checked={accessToBDS === "Yes"}
                                  onChange={(e) =>
                                    setAccessToBDS(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select access to business developer service"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="radio"
                                  aria-label="No"
                                  value={"No"}
                                  id="access_bds_no"
                                  label="No"
                                  name="access_bds"
                                  checked={accessToBDS === "No"}
                                  onChange={(e) =>
                                    setAccessToBDS(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select access to business developer service"
                                  feedbackType="invalid"
                                />
                              </Form.Group>

                              {/* Access and Utilization of Services/state benefits/ Access to off-takers*/}
                              <Form.Group
                                className="mb-4"
                                controlId="accessOfftakers"
                              >
                                <Form.Label className="mb-2">
                                  Access to Off-takers
                                </Form.Label>

                                <Form.Check
                                  type="radio"
                                  aria-label="Yes"
                                  id="access_offtakers_yes"
                                  value={"Yes"}
                                  label="Yes"
                                  name="access_offtakers"
                                  checked={accessToOfftakers === "Yes"}
                                  onChange={(e) =>
                                    setAccessToOffTakers(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select access to off takers"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="radio"
                                  aria-label="No"
                                  value={"No"}
                                  id="access_offtakers_no"
                                  label="No"
                                  name="access_offtakers"
                                  checked={accessToOfftakers === "No"}
                                  onChange={(e) =>
                                    setAccessToOffTakers(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select access to off takers"
                                  feedbackType="invalid"
                                />
                              </Form.Group>

                              {/* Access and Utilization of Services/state benefits/ Access to FSP*/}
                              <Form.Group
                                className="mb-4"
                                controlId="accessMSP"
                              >
                                <Form.Label className="mb-2">
                                  Access to Financial Service Providers
                                </Form.Label>

                                <Form.Check
                                  type="radio"
                                  aria-label="Yes"
                                  id="access_toFSP_yes"
                                  value={"Yes"}
                                  label="Yes"
                                  name="access_toFSP"
                                  checked={accessToFSP === "Yes"}
                                  onChange={(e) =>
                                    setAccessToFSP(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select access to financial service providers"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="radio"
                                  aria-label="No"
                                  value={"No"}
                                  id="access_toFSP_no"
                                  label="No"
                                  name="access_toFSP"
                                  checked={accessToFSP === "No"}
                                  onChange={(e) =>
                                    setAccessToFSP(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select access to financial service providers"
                                  feedbackType="invalid"
                                />
                              </Form.Group>

                              {/* Access and Utilization of Services/state benefits/ Access to MSP*/}
                              <Form.Group
                                className="mb-4"
                                controlId="accessMSP"
                              >
                                <Form.Label className="mb-2">
                                  Access to Mechanization Service Providers
                                </Form.Label>

                                <Form.Check
                                  type="radio"
                                  aria-label="Yes"
                                  id="access_toMSP_yes"
                                  value={"Yes"}
                                  label="Yes"
                                  name="access_toMSP"
                                  checked={accessToMSP === "Yes"}
                                  onChange={(e) =>
                                    setAccessToMSP(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select access to mechanization service providers"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="radio"
                                  aria-label="No"
                                  value={"No"}
                                  id="access_toMSP_no"
                                  label="No"
                                  name="access_toMSP"
                                  checked={accessToMSP === "No"}
                                  onChange={(e) =>
                                    setAccessToMSP(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select access to mechanization service providers"
                                  feedbackType="invalid"
                                />
                              </Form.Group>

                              {/* Access and Utilization of Services/state benefits/ Access to AdvisoryService*/}
                              <Form.Group
                                className="mb-4"
                                controlId="accessAdvisoryService"
                              >
                                <Form.Label className="mb-2">
                                  Access to Advisory Services
                                </Form.Label>

                                <Form.Check
                                  type="radio"
                                  aria-label="Yes"
                                  id="access_toAdvisoryService_yes"
                                  value={"Yes"}
                                  label="Yes"
                                  name="access_toAdvisoryService"
                                  checked={accessToAdvisoryService === "Yes"}
                                  onChange={(e) =>
                                    setAccessToAdvisoryService(
                                      e.target.value.trim()
                                    )
                                  }
                                  required
                                  feedback="Select access to advisory services"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="radio"
                                  aria-label="No"
                                  value={"No"}
                                  id="access_toAdvisoryService_no"
                                  label="No"
                                  name="access_toAdvisoryService"
                                  checked={accessToAdvisoryService === "No"}
                                  onChange={(e) =>
                                    setAccessToAdvisoryService(
                                      e.target.value.trim()
                                    )
                                  }
                                  required
                                  feedback="Select access to advisory services"
                                  feedbackType="invalid"
                                />
                              </Form.Group>

                              {/* Access and Utilization of Services/state benefits/ govt incentive */}
                              <Form.Group
                                className="mb-4"
                                controlId="govt_incentive"
                              >
                                <Form.Label className="mb-2">
                                  Any Incentive Received from the Government
                                  (Grants/Subsidies/Soft Loans/Others?)
                                </Form.Label>

                                <Form.Check
                                  type="radio"
                                  aria-label="Yes"
                                  id="government_incentive_yes"
                                  value={"Yes"}
                                  label="Yes"
                                  name="government_incentive"
                                  checked={govermentIncentives === "Yes"}
                                  onChange={(e) =>
                                    setGovermentIncentives(
                                      e.target.value.trim()
                                    )
                                  }
                                  required
                                  feedback="Select any incentive received from the government (grants, subsidies, soft loans, others)"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="radio"
                                  aria-label="No"
                                  value={"No"}
                                  id="government_incentive_no"
                                  label="No"
                                  name="government_incentive"
                                  checked={govermentIncentives === "No"}
                                  onChange={(e) =>
                                    setGovermentIncentives(
                                      e.target.value.trim()
                                    )
                                  }
                                  required
                                  feedback="Select any incentive received from the government (grants, subsidies, soft loans, others)?"
                                  feedbackType="invalid"
                                />
                              </Form.Group>

                              {/* Access and Utilization of Services/state benefits/ govt farm land */}
                              <Form.Group
                                className="mb-4"
                                controlId="govtFarmland"
                              >
                                <Form.Label className="mb-2">
                                  Access to Government Land for Farming
                                </Form.Label>

                                <Form.Check
                                  type="radio"
                                  aria-label="Yes"
                                  id="government_farmland_yes"
                                  value={"Yes"}
                                  label="Yes"
                                  name="government_farmland"
                                  checked={accessToGovtLand === "Yes"}
                                  onChange={(e) =>
                                    setAccessToGovtLand(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select access to government land for farming."
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="radio"
                                  aria-label="No"
                                  value={"No"}
                                  id="government_farmland_no"
                                  label="No"
                                  name="government_farmland"
                                  checked={accessToGovtLand === "No"}
                                  onChange={(e) =>
                                    setAccessToGovtLand(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select access to government land for farming."
                                  feedbackType="invalid"
                                />
                              </Form.Group>

                              {/* Access and Utilization of Services/state benefits/ ogstep  farmer? */}
                              <Form.Group
                                className="mb-4"
                                controlId="ogstepFarmer"
                              >
                                <Form.Label className="mb-2">
                                  Are You an OGSTEP Farmer?
                                </Form.Label>

                                <Form.Check
                                  type="radio"
                                  aria-label="Yes"
                                  id="ogstep_farmer_yes"
                                  value={"Yes"}
                                  label="Yes"
                                  name="ogstep_farmer"
                                  checked={ogstepFarmer === "Yes"}
                                  onChange={(e) =>
                                    setogstepFarmer(e.target.value.trim())
                                  }
                                  required
                                  feedback="Are you an OGSTEP farmer?"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="radio"
                                  aria-label="No"
                                  value={"No"}
                                  id="ogstep_farmer_no"
                                  label="No"
                                  name="ogstep_farmer"
                                  checked={ogstepFarmer === "No"}
                                  onChange={(e) =>
                                    setogstepFarmer(e.target.value.trim())
                                  }
                                  required
                                  feedback="Are you an OGSTEP farmer?."
                                  feedbackType="invalid"
                                />
                              </Form.Group>

                              {ogstepFarmer === "Yes" ? (
                                <>
                                  <Form.Group className="mb-4">
                                    <Form.Label className="mb-2">
                                      Select VCDF
                                    </Form.Label>
                                    <Form.Check
                                      type="radio"
                                      aria-label="RBS"
                                      value={"RBS"}
                                      id="RBS"
                                      label="RBS"
                                      name="ogstep_vcdf"
                                      checked={vcdf === "RBS"}
                                      onChange={(e) =>
                                        setVcdf(e.target.value.trim())
                                      }
                                    />
                                    <Form.Check
                                      type="radio"
                                      aria-label="IITA"
                                      value={"IITA"}
                                      id="IITA"
                                      label="IITA"
                                      name="ogstep_vcdf"
                                      checked={vcdf === "IITA"}
                                      onChange={(e) =>
                                        setVcdf(e.target.value.trim())
                                      }
                                    />
                                    <Form.Check
                                      type="radio"
                                      aria-label="AgriQ"
                                      value={"AgriQ"}
                                      id="AgriQ"
                                      label="AgriQ"
                                      name="ogstep_vcdf"
                                      checked={vcdf === "AgriQ"}
                                      onChange={(e) =>
                                        setVcdf(e.target.value.trim())
                                      }
                                    />
                                    <Form.Check
                                      type="radio"
                                      aria-label="OKD"
                                      value={"OKD"}
                                      id="OKD"
                                      label="OKD"
                                      name="ogstep_vcdf"
                                      checked={vcdf === "OKD"}
                                      onChange={(e) =>
                                        setVcdf(e.target.value.trim())
                                      }
                                    />
                                  </Form.Group>

                                  <Form.Group className="mb-4">
                                    <Form.Label className="mb-2">
                                      What Group Does Farmer Belong?
                                    </Form.Label>
                                    <Form.Control
                                      placeholder="What Group Does Farmer Belong?"
                                      type="text"
                                      value={groupname}
                                      onChange={(e) =>
                                        setGroupName(e.target.value)
                                      }
                                    />
                                  </Form.Group>
                                </>
                              ) : null}

                              {/* Annual farm income (NGN)/ crops income
                               */}

                              {typeOfFarming.includes("Crop farming") && (
                                <Form.Group
                                  className="mb-4"
                                  controlId="annual_income"
                                >
                                  <Form.Label className="mb-2">
                                    Annual Crops Income (NGN)
                                  </Form.Label>
                                  <Form.Control
                                    placeholder="10000"
                                    type="number"
                                    value={cropsIncome}
                                    onChange={(e) =>
                                      setCropsIncome(e.target.value.trim())
                                    }
                                  />
                                </Form.Group>
                              )}

                              {/* Annual farm income (NGN)/ livestock income
                               */}
                              {typeOfFarming.includes("Livestocks") && (
                                <Form.Group
                                  className="mb-4"
                                  controlId="annual_income"
                                >
                                  <Form.Label className="mb-2">
                                    Annual Livestock Income (NGN)
                                  </Form.Label>
                                  <Form.Control
                                    placeholder="10000"
                                    type="number"
                                    value={livestockIncome}
                                    onChange={(e) =>
                                      setLivestockIncome(e.target.value.trim())
                                    }
                                  />
                                </Form.Group>
                              )}

                              {/* total  annual cost of production/expenditure (farmer) */}
                              <Form.Group
                                className="mb-4"
                                controlId="totalExpenditure"
                              >
                                <Form.Label className="mb-2">
                                  Total Annual Cost Of Production (Expenditure)
                                </Form.Label>

                                <Form.Check
                                  type="radio"
                                  aria-label="<100,000"
                                  id="exp_below_100k"
                                  value={"<100,000"}
                                  label="<100,000"
                                  name="total_expenditure"
                                  checked={costOfProduction === "<100,000"}
                                  onChange={(e) =>
                                    setCostOfProduction(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select total cost of production"
                                  feedbackType="invalid"
                                />

                                <Form.Check
                                  type="radio"
                                  aria-label="100,000 - 200,000"
                                  value={"100,000 - 200,000"}
                                  id="exp_btw_100_and_200k"
                                  label="100,000 - 200,000"
                                  name="total_expenditure"
                                  checked={
                                    costOfProduction === "100,000 - 200,000"
                                  }
                                  onChange={(e) =>
                                    setCostOfProduction(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select total cost of production"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="radio"
                                  aria-label="200,000-300,000"
                                  value={"200,000-300,000"}
                                  id="exp_btw_200_and_300k"
                                  label="200,000-300,000"
                                  name="total_expenditure"
                                  checked={
                                    costOfProduction === "200,000-300,000"
                                  }
                                  onChange={(e) =>
                                    setCostOfProduction(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select total cost of production"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="radio"
                                  aria-label="300,000 - 400,000"
                                  value={"300,000 - 400,000"}
                                  id="exp_btw_300_and_400k"
                                  label="300,000 - 400,000"
                                  name="total_expenditure"
                                  checked={
                                    costOfProduction === "300,000 - 400,000"
                                  }
                                  onChange={(e) =>
                                    setCostOfProduction(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select total cost of production"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="radio"
                                  aria-label="400,000 - 500,000"
                                  value={"400,000 - 500,000"}
                                  id="exp_btw_400_and_500k"
                                  label="400,000 - 500,000"
                                  name="total_expenditure"
                                  checked={
                                    costOfProduction === "400,000 - 500,000"
                                  }
                                  onChange={(e) =>
                                    setCostOfProduction(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select total cost of production"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="radio"
                                  aria-label=">500,000"
                                  value={">500,000"}
                                  id="exp_above_500k"
                                  label=">500,000"
                                  name="total_expenditure"
                                  checked={costOfProduction === ">500,000"}
                                  onChange={(e) =>
                                    setCostOfProduction(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select total cost of production"
                                  feedbackType="invalid"
                                />
                              </Form.Group>

                              {/* total annual income/revenue (farmer) */}
                              <Form.Group
                                className="mb-4"
                                controlId="totalRevenue"
                              >
                                <Form.Label className="mb-2">
                                  Total Annual Income (Revenue)
                                </Form.Label>

                                <Form.Check
                                  type="radio"
                                  aria-label="<100,000"
                                  id="rev_below_100k"
                                  value={"<100,000"}
                                  label="<100,000"
                                  name="total_revenue"
                                  checked={totalRevenue === "<100,000"}
                                  onChange={(e) =>
                                    setTotalRevenue(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select total annual revenue"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="radio"
                                  aria-label="100,000 - 200,000"
                                  value={"100,000 - 200,000"}
                                  id="rev_btw_100_and_200k"
                                  label="100,000 - 200,000"
                                  name="total_revenue"
                                  checked={totalRevenue === "100,000 - 200,000"}
                                  onChange={(e) =>
                                    setTotalRevenue(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select total annual revenue"
                                  feedbackType="invalid"
                                />

                                <Form.Check
                                  type="radio"
                                  aria-label="200,000-300,000"
                                  value={"200,000-300,000"}
                                  id="rev_btw_200_and_300k"
                                  label="200,000-300,000"
                                  name="total_revenue"
                                  checked={totalRevenue === "200,000-300,000"}
                                  onChange={(e) =>
                                    setTotalRevenue(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select total annual revenue"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="radio"
                                  aria-label="300,000 - 400,000"
                                  value={"300,000 - 400,000"}
                                  id="rev_btw_300_and_400k"
                                  label="300,000 - 400,000"
                                  name="total_revenue"
                                  checked={totalRevenue === "300,000 - 400,000"}
                                  onChange={(e) =>
                                    setTotalRevenue(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select total annual revenue"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="radio"
                                  aria-label="400,000 - 500,000"
                                  value={"400,000 - 500,000"}
                                  id="rev_btw_400_and_500k"
                                  label="400,000 - 500,000"
                                  name="total_revenue"
                                  checked={totalRevenue === "400,000 - 500,000"}
                                  onChange={(e) =>
                                    setTotalRevenue(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select total annual revenue"
                                  feedbackType="invalid"
                                />
                                <Form.Check
                                  type="radio"
                                  aria-label=">500,000"
                                  value={">500,000"}
                                  id="rev_above_500k"
                                  label=">500,000"
                                  name="total_revenue"
                                  checked={totalRevenue === ">500,00"}
                                  onChange={(e) =>
                                    setTotalRevenue(e.target.value.trim())
                                  }
                                  required
                                  feedback="Select total annual revenue"
                                  feedbackType="invalid"
                                />
                              </Form.Group>

                              {/* Annual non-farm income (NGN)/ Income from Service Provision (Daily Wage Work)
                               */}
                              <Form.Group
                                className="mb-4"
                                controlId="service_provision"
                              >
                                <Form.Label className="mb-2">
                                  Income from Service Provision (Daily Wage
                                  Work)
                                </Form.Label>
                                <Form.Control
                                  placeholder="10000"
                                  type="number"
                                  value={serviceProvisionIncome}
                                  onChange={(e) =>
                                    setServiceProvisionIncome(
                                      e.target.value.trim()
                                    )
                                  }
                                />
                              </Form.Group>

                              {/* Annual non-farm income (NGN)/ Income from regular employment
                               */}
                              <Form.Group
                                className="mb-4"
                                controlId="regular_employment"
                              >
                                <Form.Label className="mb-2">
                                  Income from Regular Employment
                                </Form.Label>
                                <Form.Control
                                  placeholder="10000"
                                  type="number"
                                  value={regularEmploymentIncome}
                                  onChange={(e) =>
                                    setRegularEmploymentIncome(
                                      e.target.value.trim()
                                    )
                                  }
                                />
                              </Form.Group>

                              {/* Annual non-farm income (NGN)/ Income from business
                               */}
                              <Form.Group
                                className="mb-4"
                                controlId="income_from_busines"
                              >
                                <Form.Label className="mb-2">
                                  Income from Business
                                </Form.Label>
                                <Form.Control
                                  placeholder="10000"
                                  type="number"
                                  value={incomeFromBusiness}
                                  onChange={(e) =>
                                    setIncomeFromBusiness(e.target.value.trim())
                                  }
                                />
                              </Form.Group>

                              {/* Annual non-farm income (NGN)/ Income from other means
                               */}
                              <Form.Group
                                className="mb-4"
                                controlId="service_provision"
                              >
                                <Form.Label className="mb-2">
                                  Income from Other Means
                                </Form.Label>
                                <Form.Control
                                  placeholder="10000"
                                  type="number"
                                  value={otherIncomeMeans}
                                  onChange={(e) =>
                                    setOtherIncomeMeans(e.target.value.trim())
                                  }
                                />
                              </Form.Group>
                            </>
                          ) : null}

                          {/* business address */}
                          {primaryCategory !== "farmer" ? (
                            <Form.Group
                              className="mb-4"
                              controlId="business_address"
                            >
                              <Form.Label className="mb-2">
                                Business Address
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Business Address"
                                value={businessAddress}
                                onChange={(e) =>
                                  setBusinessAdress(e.target.value.trim())
                                }
                                required
                              />
                              <Form.Control.Feedback></Form.Control.Feedback>
                              <Form.Control.Feedback type="invalid">
                                Input business address
                              </Form.Control.Feedback>
                            </Form.Group>
                          ) : null}

                          {/* category telephone number */}
                          <Form.Group className="mb-4" controlId="bus_tel_no">
                            <Form.Label className="mb-2">
                              Telephone Number
                            </Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="Telephone number"
                              value={businessTelNo}
                              onChange={(e) => setBusinessTelNo(e.target.value)}
                              required
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Input telephone number
                            </Form.Control.Feedback>
                          </Form.Group>

                          {/* category Email Addreess */}
                          <Form.Group className="mb-4" controlId="bus_email">
                            <Form.Label className="mb-2">
                              Email Addreess
                            </Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Email Addreess"
                              value={businessEmail}
                              onChange={(e) => setBusinessEmail(e.target.value)}
                              required
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Input Email Addreess
                            </Form.Control.Feedback>
                          </Form.Group>

                          {/* Business category for all categories except farmers => small, medium, large */}
                          {primaryCategory !== "farmer" ? (
                            <Form.Group className="mb-4" controlId="bus_cat">
                              <Form.Label className="mb-2">
                                Business Category
                              </Form.Label>

                              <Form.Check
                                type="radio"
                                aria-label="Small"
                                id="small"
                                value={"Small"}
                                label="Small"
                                name="business_category"
                                checked={businessCategory === "Small"}
                                onChange={(e) =>
                                  setBusinessCategory(e.target.value)
                                }
                                required
                                feedback="Select business category before continuing"
                                feedbackType="invalid"
                              />
                              <Form.Check
                                type="radio"
                                aria-label="Medium"
                                value={"Medium"}
                                id="Medium"
                                label="Medium"
                                name="business_category"
                                checked={businessCategory === "Medium"}
                                onChange={(e) =>
                                  setBusinessCategory(e.target.value)
                                }
                                required
                                feedback="Select business category before continuing"
                                feedbackType="invalid"
                              />
                              <Form.Check
                                type="radio"
                                aria-label="Large"
                                value={"large"}
                                id="large"
                                label="Large"
                                name="business_category"
                                checked={businessCategory === "large"}
                                onChange={(e) =>
                                  setBusinessCategory(e.target.value)
                                }
                                required
                                feedback="Select business category before continuing"
                                feedbackType="invalid"
                              />
                            </Form.Group>
                          ) : null}

                          {primaryCategory === "processor" ? (
                            <Form.Group className="mb-4">
                              <Form.Label className="mb-2">
                                Processing / off take capacity
                              </Form.Label>
                              <Form.Check
                                type="radio"
                                label="< 10tons"
                                value={"< 10tons"}
                                checked={offtakeCapacity === "< 10tons"}
                                onChange={(e) =>
                                  setOfftakeCapacity(e.target.value)
                                }
                              />
                              <Form.Check
                                type="radio"
                                label="10 - 100tons"
                                value={"10 - 100tons"}
                                checked={offtakeCapacity === "10 - 100tons"}
                                onChange={(e) =>
                                  setOfftakeCapacity(e.target.value)
                                }
                              />
                              <Form.Check
                                type="radio"
                                label=">100tons"
                                value={">100tons"}
                                checked={offtakeCapacity === ">100tons"}
                                onChange={(e) =>
                                  setOfftakeCapacity(e.target.value)
                                }
                              />
                            </Form.Group>
                          ) : null}

                          {/* year of business establishment */}
                          <Form.Group className="mb-4">
                            <Form.Label className="mb-2">
                              Year of Business Establishment
                              {/* SELECT PRIMARY CATEGORY(IES) */}
                            </Form.Label>
                            <Form.Select
                              aria-label="Year of Business Establishment"
                              style={{ fontSize: 15 }}
                              size="sm"
                              value={yearOfBusinessEstablishment}
                              onChange={(e) => {
                                setYearOfBusinessEstablishment(e.target.value);
                              }}
                              required
                            >
                              <option value="">
                                Select year of business establishment
                              </option>
                              {years.map((item, index) => (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              ))}
                            </Form.Select>
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Select year of business establishment
                            </Form.Control.Feedback>
                          </Form.Group>
                        </>
                      ) : null}
                      {/* ends step 3 */}

                      {currentStep === 4 ? (
                        //{/**** form 4 => Household Information *****/}
                        <Form>
                          {/* input total adult in the family */}
                          <Form.Group
                            className="mb-4"
                            controlId="total_adults_in_the_family"
                          >
                            <Form.Label className="mb-2">
                              Total Adults in the Family
                              {/* TOTAL ADULTS IN THE FAMILY */}
                            </Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="Total Adults in the Family"
                              value={totalAdults}
                              onChange={(e) => setTotalAdults(e.target.value)}
                            />
                          </Form.Group>

                          {/* input total number of employed household members */}
                          <Form.Group
                            className="mb-4"
                            controlId="total_emplyed"
                          >
                            <Form.Label className="mb-2">
                              How Many Adult Household Members Are Employed
                              (Total)?
                              {/* HOW MANY ADULT HOUSEHOLD MEMBERS ARE EMPLOYED (TOTAL)? */}
                            </Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="How Many Adult Household Members Are Employed (Total)?"
                              value={employedHouseHoldMembers}
                              onChange={(e) =>
                                setEmployedHouseHoldMemebers(e.target.value)
                              }
                            />
                          </Form.Group>

                          {/* Cooperative Membership */}
                          <Form.Group
                            className="mb-4"
                            controlId="cooperative_association"
                          >
                            <Form.Label className="mb-2">
                              Membership of Cooperative Association/Digit Group
                              {/* MEMBERSHIP OF COOPERATIVE ASSOCIATION/DIGITAL GROUP */}
                            </Form.Label>
                            <Form.Check
                              type="radio"
                              aria-label="Yes"
                              id="cooperative_association_yes"
                              label="Yes"
                              value={"Yes"}
                              name="cooperative_association"
                              checked={cooperativeMembership === "Yes"}
                              onChange={(e) =>
                                setCooperativeMembership(e.target.value)
                              }
                            />
                            <Form.Check
                              type="radio"
                              aria-label="No"
                              id="cooperative_association_no"
                              label="No"
                              value={"No"}
                              name="cooperative_association"
                              checked={cooperativeMembership === "No"}
                              onChange={(e) =>
                                setCooperativeMembership(e.target.value)
                              }
                            />
                          </Form.Group>

                          {/* BENEFITS OF COOPERATIVE MEMBERSHIP */}
                          <Form.Group
                            className="mb-4"
                            controlId="benefits_of_membership"
                          >
                            <Form.Label className="mb-2">
                              Benefits of Cooperative Membership
                              {/* BENEFITS OF COOPERATIVE MEMBERSHIP */}
                            </Form.Label>
                            <Form.Check
                              type="checkbox"
                              aria-label="Access to credit"
                              id="access_to_credit"
                              label="Access to credit"
                              name="benefit_of_cooperative_association"
                              value={"Access to credit"}
                              checked={benefitOfCooperative.includes(
                                "Access to credit"
                              )}
                              onChange={handleBenefitOfCooperative}
                              // required
                              // feedback="Provide benefit of cooperative society before continuing"
                              // feedbackType="invalid"
                            />
                            <Form.Check
                              type="checkbox"
                              aria-label="Input supply"
                              id="input_supply"
                              label="Input supply"
                              name="benefit_of_cooperative_association"
                              value={"Input supply"}
                              checked={benefitOfCooperative.includes(
                                "Input supply"
                              )}
                              onChange={handleBenefitOfCooperative}
                              // required
                              // feedback="Provide benefit of cooperative society before continuing"
                              // feedbackType="invalid"
                            />
                            <Form.Check
                              type="checkbox"
                              aria-label="Marketing of produce"
                              id="marketing_of_produce"
                              label="Marketing of produce"
                              name="benefit_of_cooperative_association"
                              value={"Marketing of produce"}
                              checked={benefitOfCooperative.includes(
                                "Marketing of produce"
                              )}
                              onChange={handleBenefitOfCooperative}
                              // required
                              // feedback="Provide benefit of cooperative society before continuing"
                              // feedbackType="invalid"
                            />
                            <Form.Check
                              type="checkbox"
                              aria-label="Technical assistance and extension services"
                              id="technical_assistance"
                              label="Technical assistance and extension services"
                              name="benefit_of_cooperative_association"
                              value={
                                "Technical assistance and extension services"
                              }
                              checked={benefitOfCooperative.includes(
                                "Technical assistance and extension services"
                              )}
                              onChange={handleBenefitOfCooperative}
                              // required
                              // feedback="Provide benefit of cooperative society before continuing"
                              // feedbackType="invalid"
                            />

                            <Form.Check
                              type="checkbox"
                              aria-label="Others (specify)"
                              id="other_benefits"
                              label="Others (specify)"
                              name="benefit_of_cooperative_association"
                              value={"Other"}
                              checked={otherCooperativeBenefits === "Other"}
                              onChange={(e) =>
                                setOtherCooperativeBenefits(e.target.value)
                              }
                              // required
                              // feedback="Provide benefit of cooperative society before continuing"
                              // feedbackType="invalid"
                            />
                            {otherCooperativeBenefits ? (
                              <Form.Group
                                className="mb-4"
                                controlId="other_cooperative_benefit"
                              >
                                <Form.Label className="mb-2">
                                  Other Benefit (Specify)
                                  {/* OTHER BENEFIT (SPECIFY) */}
                                </Form.Label>
                                <Form.Control
                                  as="textarea"
                                  type="text"
                                  rows={3}
                                  value={otherCooperativeBenefitsValue}
                                  onChange={(e) =>
                                    setOtherCooperativeBenefitsValue(
                                      e.target.value
                                    )
                                  }
                                />
                              </Form.Group>
                            ) : null}

                            {/* <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Select medium of information
                </Form.Control.Feedback> */}
                          </Form.Group>
                        </Form>
                      ) : null}

                      {currentStep === 5 ? (
                        //{/* form 5 =>  {/***** Digital Tools *****/}
                        <Form>
                          {/* medium of information */}
                          <Form.Group className="mb-4">
                            <Form.Label className="mb-2">
                              What is the Main Medium for Information (Select
                              all that Apply)
                              {/* WHAT IS THE MAIN MEDIUM FOR INFORMATION (SELECT ALL THAT
                  APPLY) */}
                            </Form.Label>
                            <Form.Check
                              type="checkbox"
                              aria-label="Radio"
                              id="radio"
                              label="Radio"
                              value={"Radio"}
                              checked={mediumOfInformation.includes("Radio")}
                              name="medium_of_information"
                              // required
                              // feedback="Provide medium of information before continuing"
                              // feedbackType="invalid"
                              onChange={handleMediumOfInformation}
                            />
                            <Form.Check
                              type="checkbox"
                              aria-label="Television"
                              id="television"
                              label="Television"
                              name="medium_of_information"
                              value={"Television"}
                              checked={mediumOfInformation.includes(
                                "Television"
                              )}
                              // required
                              // feedback="Provide medium of information before continuing"
                              // feedbackType="invalid"
                              onChange={handleMediumOfInformation}
                            />
                            <Form.Check
                              type="checkbox"
                              aria-label="Mobile Phone"
                              id="mobile_phone"
                              label="Mobile Phone"
                              name="medium_of_information"
                              value={"Mobile Phone"}
                              checked={mediumOfInformation.includes(
                                "Mobile Phone"
                              )}
                              // required
                              // feedback="Provide medium of information before continuing"
                              // feedbackType="invalid"
                              onChange={handleMediumOfInformation}
                            />
                            <Form.Check
                              type="checkbox"
                              aria-label="Smartphone"
                              id="smartphone"
                              label="Smartphone"
                              name="medium_of_information"
                              value={"Smartphone"}
                              checked={mediumOfInformation.includes(
                                "Smartphone"
                              )}
                              // required
                              // feedback="Provide medium of information before continuing"
                              // feedbackType="invalid"
                              onChange={handleMediumOfInformation}
                            />
                            <Form.Check
                              type="checkbox"
                              aria-label="Newspaper"
                              id="newspaper"
                              label="Newspaper"
                              name="medium_of_information"
                              value={"Newspaper"}
                              checked={mediumOfInformation.includes(
                                "Newspaper"
                              )}
                              // onChange={(e) => null(e.target.value)}
                              // required
                              // feedback="Provide medium of information before continuing"
                              // feedbackType="invalid"
                              onChange={handleMediumOfInformation}
                            />
                            <Form.Check
                              type="checkbox"
                              aria-label="Community group"
                              id="community_group"
                              label="Community group"
                              name="medium_of_information"
                              value={"Community group"}
                              checked={mediumOfInformation.includes(
                                "Community group"
                              )}
                              // required
                              // feedback="Provide medium of information before continuing"
                              // feedbackType="invalid"
                              onChange={handleMediumOfInformation}
                            />
                            <Form.Check
                              type="checkbox"
                              aria-label="ADPs"
                              id="adps"
                              label="ADPs"
                              name="medium_of_information"
                              value={"ADPs"}
                              checked={mediumOfInformation.includes("ADPs")}
                              // required
                              // feedback="Provide medium of information before continuing"
                              // feedbackType="invalid"
                              onChange={handleMediumOfInformation}
                            />
                            <Form.Check
                              type="checkbox"
                              aria-label="Others (specify)"
                              id="other_medium_of_information"
                              label="Others (specify)"
                              name="medium_of_information"
                              value={"Others"}
                              checked={otherMediumofInformation === "Others"}
                              onChange={(e) =>
                                setOtherMediumofInformation(e.target.value)
                              }
                              // required
                              // feedback="Provide medium of information before continuing"
                              // feedbackType="invalid"
                            />
                            {otherMediumofInformation ? (
                              <Form.Group
                                className="mb-4"
                                controlId="other_medium"
                              >
                                <Form.Label className="mb-2">
                                  {/* OTHER MEDIUM (SPECIFY) */}
                                  Other Medium (Specify)
                                </Form.Label>
                                <Form.Control
                                  as="textarea"
                                  rows={3}
                                  value={otherMediumofInformationValue}
                                  required
                                  onChange={(e) =>
                                    setOtherMediumofInformationValue(
                                      e.target.value
                                    )
                                  }
                                />
                                <Form.Control.Feedback></Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                  Select medium of information
                                </Form.Control.Feedback>
                              </Form.Group>
                            ) : null}
                          </Form.Group>

                          {/* challenges of using mobile phone */}
                          <Form.Group
                            className="mb-4"
                            controlId="challenges_of_mobile"
                          >
                            <Form.Label className="mb-2">
                              What is the Main Challenge for Using Mobile Phone?
                              {/* WHAT IS THE MAIN CHALLENGE FOR USING MOBILE PHONE? */}
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              value={challengeOfMobilePhone}
                              onChange={(e) =>
                                setChallengeOfMobilePhone(e.target.value.trim())
                              }
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Input challenge of using mobile phone
                            </Form.Control.Feedback>
                          </Form.Group>

                          {/* advantages of using mobile phones */}
                          <Form.Group
                            className="mb-4"
                            controlId="advantages_of_mobile_phones"
                          >
                            <Form.Label className="mb-2">
                              What are the Main Advantages of Using Mobile
                              Phones?
                              {/* WHAT ARE THE MAIN ADVANTAGES OF USING MOBILE PHONES? */}
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              value={advantagesOfMobilePhone}
                              onChange={(e) =>
                                setAdvantagesOfMobilePhone(
                                  e.target.value.trim()
                                )
                              }
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Input advantage(s) of using mobile phone
                            </Form.Control.Feedback>
                          </Form.Group>

                          {/* level of proficiency in using internet and soft infrastructure */}
                          <Form.Group className="mb-4">
                            <Form.Label className="mb-2">
                              What Is Your Level of Proficiency in Usage of the
                              Internet and Soft Infrastructure?
                              {/* WHAT IS YOUR LEVEL OF PROFICIENCY IN USAGE OF INTERNET AND
                  SOFT INFRASTRUCTURE? */}
                            </Form.Label>
                            <Form.Check
                              type="radio"
                              aria-label="Low"
                              id="low"
                              label="Low"
                              value={"Low"}
                              name="internet_proficiency"
                              checked={levelOfInrernetProficiency === "Low"}
                              onChange={(e) =>
                                setLevelOfInternetProficiency(e.target.value)
                              }
                            />
                            <Form.Check
                              type="radio"
                              aria-label="Medium"
                              id="medium"
                              label="Medium"
                              name="internet_proficiency"
                              value={"Medium"}
                              checked={levelOfInrernetProficiency === "Medium"}
                              onChange={(e) =>
                                setLevelOfInternetProficiency(e.target.value)
                              }
                            />
                            <Form.Check
                              type="radio"
                              aria-label="High"
                              id="high"
                              label="High"
                              name="internet_proficiency"
                              value={"High"}
                              checked={levelOfInrernetProficiency === "High"}
                              onChange={(e) =>
                                setLevelOfInternetProficiency(e.target.value)
                              }
                            />
                          </Form.Group>

                          {/* date */}
                        </Form>
                      ) : null}
                    </div>
                  </div>

                  {/* form navigation buttons */}
                  <Row
                    className="my-3"
                    style={{
                      width: "92%",
                      margin: "auto",
                    }}
                  >
                    <Col>
                      <Button
                        disabled={currentStep === 1 ? true : false}
                        onClick={handlePreviousButton}
                        style={{ color: "white" }}
                      >
                        Previous
                      </Button>
                    </Col>
                    <Col xs="auto">
                      {/* {validated === true ? (
                        <Button
                          className=""
                          style={{ color: "white" }}
                          type="submit"
                          onClick={handleSubmit}
                        >
                          Submit form
                        </Button> */}
                      {/* ) : ( */}
                      <Button
                        className="d-flex justify-content-end"
                        style={{ color: "white" }}
                        onClick={handleNextButton}
                      >
                        {currentStep === 5 ? "Submit" : "Next"}
                      </Button>
                      {/* )} */}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>
      </div>

      {/* Start Header Area  */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
      <ToastContainer />
    </React.Fragment>
  );
};

export default RegisterForm;
