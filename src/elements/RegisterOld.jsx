import React , {useState} from 'react';
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { toast } from 'react-toastify';
import {useHistory} from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown';
import { baseURL } from '../httpService';

const Result = () => {
    return (
        <p className="success-message">Registration Successful.</p>
    )
}


const lgas = [
            "Abeokuta-North",
            "Abeokuta-South",
            "Ado-Odo\/Ota",
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
            "Yewa North"
        ];
const catArray = [
    "Farmers",
    "Traders",
    "Processors"
]

const ServiceListOne = [
    {
      id:1,  name: "Farmers", option:"Farmers"
    },
    {
       id:2, name: "Traders",option:"Traders"
    },
    {
      id:3,  name: "Processors",option:"Processors"
    },
    {
       id:4, name: "Agro Dealers",option:"Agro Dealers"
    },

    {
       id:5, name: "Extension Workers",option:"Extension Workers"
    },
    {
       id:6, name: "Financial Service Providers",option:"Financial Service Providers"
    },

    {
      id:7,  name: "Input Providers", option:"Input Providers"
    },

    {
       id:8, name: "Business Development Service Providers", option:"Business Development Service Providers"
    },

    {
       id:9, name: "Off-takers", option:"Off-takers"
    },
    {
       id:10, name: "Mechanization Service Providers",option:"Mechanization Service Providers"
    },
    {
       id:11, name: "Experts (Plant & Animal)",option:"Experts"
    },
    {
       id:12, name: "Transporters",option:"Transporters"
    }
]

    const CommondityList =[
        {
          id:1,  name: "Cassava", option:"Cassava"
        },
        {
           id:2, name: "Yam",option:"Yam"
        },
        {
          id:3,  name: "Cashew",option:"Cashew"
        },
        {
           id:4, name: "Potato",option:"Potato"
        },
        {
           id:4, name: "Sweet Potato",option:"Sweet Potato"
        },
    ];


  const notify = (status, message) => {

    if(status === 'success'){
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    if(status === 'error'){
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    if(status === 'warn'){
      toast.warn(message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    if(status === 'info'){
      toast.info(message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }


const Register = () => {

    const [ result,showresult ] = useState(false);



    const [primaryCategory, setPrimaryCategory] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [lga, setLga] = useState('');
    const [town, setTown] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [geolocation, setGeolocation] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [address, setAddress] = useState('');
    const [householdSize, setHouseholdSize] = useState('');
    const [educationStatus, setEducationStatus] = useState('');
    const [cropsIncome, setCropsIncome] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [typeOfFarming, setTypeOfFarming] = useState([]);
    const [farmlandOwnership, setFarmlandOwnership] = useState('');
    const [accessToOffTakers, setAccessToOffTakers] = useState('');
    const [totalIncomeRevenue, setTotalIncomeRevenue] = useState('');
    const [accessToInputProviders, setAccessToInputProviders] = useState('');
    const [primaryPurposeOfFarming, setPrimaryPurposeOfFarming] = useState('');
    const [accessToAdvisoryServices, setAccessToAdvisoryServices] = useState('');
    const [nationalIdentificationNumber, setNationalIdentificationNumber] = useState('');
    const [accessToGovernmentLandForFarming, setAccessToGovernmentLandForFarming] = useState('');
    const [accessToFinancialServiceProviders, setAccessToFinancialServiceProviders] = useState('');
    const [accessToExtensionSuport, setAccessToExtensionSuport] = useState('');
    const [crops, setCrops] = useState([]);
    const [incentiveFromGovt, setIncentiveFromGovt] = useState('');
    const [accessToBusinessServiceProviders, setAccessToBusinessServiceProviders] = useState('');
    const [accessToMechanizatServiceProviders, setAccessToMechanizatServiceProviders] = useState('');
    const [cropManagementTechniques, setCropManagementTechniques] = useState('');
    const [soilManagementTechniques, setSoilManagementTechniques] = useState('');

    const history = useHistory();


    const submit = ()=>{

    // if(!name){
    //   notify('warn', "Please add name ");
    //   return;
    // }

    // if(!email){
    //   notify('warn', "Please add email");
    //   return;
    // }

    // if(!primaryCategory){
    //    notify('warn', "Please add primary Category");
    //   return;
    // }

    // if(!mobileNumber){
    //    notify('warn', "Please add mobile number");
    //   return;
    // }

    // if(!age){
    //    notify('warn', "Please add age");
    //   return;
    // }

    // if(!sex){
    //    notify('warn', "Please add sex");
    //   return;
    // }

    // if(!lga){
    //    notify('warn', "Please select local government");
    //   return;
    // }

    // if(!town){
    //    notify('warn', "Please add town");
    //   return;
    // }
    // if(!maritalStatus){
    //    notify('warn', "Please add marital Status");
    //   return;
    // }

    // if(!address){
    //    notify('warn', "Please add address");
    //   return;
    // }

    // if(!householdSize){
    //    notify('warn', "Please add household Size");
    //   return;
    // }

    // if(!educationStatus){
    //    notify('warn', "Please add education Status");
    //   return;
    // }



    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    const body = JSON.stringify({"name": name, "email": email, "primaryCategory": primaryCategory, "mobileNumber":mobileNumber, crops:crops, age:age, sex:sex, lga:lga, town:town, maritalStatus: maritalStatus, address:address, householdSize:householdSize, educationStatus:educationStatus, cropsIncome:cropsIncome, totalIncomeRevenue:totalIncomeRevenue, typeOfFarming:typeOfFarming, farmlandOwnership:farmlandOwnership, accessToInputProviders:accessToInputProviders, accessToInputProviders:accessToInputProviders, accessToExtensionSuport:accessToExtensionSuport, accessToAdvisoryServices:accessToAdvisoryServices, accessToBusinessServiceProviders:accessToBusinessServiceProviders, accessToFinancialServiceProviders:accessToFinancialServiceProviders, accessToMechanizatServiceProviders:accessToMechanizatServiceProviders, accessToGovernmentLandForFarming:accessToGovernmentLandForFarming, incentiveFromGovt:incentiveFromGovt,primaryPurposeOfFarming: primaryPurposeOfFarming, cropManagementTechniques:cropManagementTechniques, soilManagementTechniques:soilManagementTechniques, nationalIdentificationNumber:nationalIdentificationNumber, profileImage:profileImage, geolocation:geolocation});
    console.log(body);
    fetch(`${baseURL}farmers`, {method: 'POST', body, headers})
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      if(responseJson.success === true){
          notify('success', "Success");
          history.push("/");
      }else{
          notify('error', responseJson.message);
          console.log(responseJson);
      }
      
    })
    .catch((error) => {
      console.log(error);
    });
  }

    const onSelectCat = (selectedList, selectedItem) =>{
            //const newItem = item.name;
        setPrimaryCategory(prevState =>([...prevState, selectedItem.name]));
    }
    

    const onRemoveCat = (selectedList, removedItem) =>{
        setPrimaryCategory((current) =>
          current.filter((item) => item !== removedItem.name)
        );
    }


    const onSelectCrop = (selectedList, selectedItem) =>{
        setCrops(prevState =>([...prevState, selectedItem.name]));
    }
    

    const onRemoveCrop = (selectedList, removedItem) =>{
        setCrops((current) =>
          current.filter((item) => item !== removedItem.name)
        );
    }


    const onSelectFa = (selectedList, selectedItem) =>{
        setTypeOfFarming(prevState =>([...prevState, selectedItem.name]));
    }
    

    const onRemoveFa = (selectedList, removedItem) =>{
        setTypeOfFarming((current) =>
          current.filter((item) => item !== removedItem.name)
        );
    }

    return (
        <>
            <PageHelmet pageTitle='Register' />

            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" headerPosition="header--fixed logoresize"  logo="all-dark" colorblack="color--black"  />
            {/* End Header Area  */}
            
            {/* Start Breadcrump Area */}
            {/*<Breadcrumb title={'Register'}   />*/}

            <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--21"  data-black-overlay="6">
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
            <main className="page-wrapper" >

                {/* Start Form  */}
                <div className="rn-contact-form-area ptb--120 bg_color--1">

                    <div className="contact-form--1">
                        <div className="container">
                            <div className="align-items-start">

                                <div className="form-wrapper">
                                    <div className="row row--35" >                                        

                                        <div className="rn-form-group col-md-6">

                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Full Name"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" required name="fullname" placeholder="John Doe" onChange={(e)=>setName(e.target.value)} size="lg"/>
                                            </FloatingLabel>
                                   
                                        </div>

                                        <div className="rn-form-group col-md-6">
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Email Address"
                                                className="mb-3"
                                            >
                                                <Form.Control type="email" required name="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} size="lg" />
                                            </FloatingLabel>
                                        </div>

                                        <div className="rn-form-group col-md-6">

                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Mobile Number"
                                                className="mb-3"
                                            >
                                                <Form.Control type="number" required name="mobileNumber" placeholder="08030000000"  onChange={(e)=>setMobileNumber(e.target.value)} size="lg"/>
                                            </FloatingLabel>
                                        </div>

                                        <div className="rn-form-group col-md-6">

                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Age"
                                                className="mb-3"
                                            >
                                                <Form.Control type="number" required name="age" placeholder="30" onChange={(e)=>setAge(e.target.value)} size="lg"/>
                                            </FloatingLabel>

                                        </div>

                                        <div className="rn-form-group col-md-6">

                                            <FloatingLabel controlId="floatingSelect" label="Sex (Gender)" size="lg" onChange={(e)=>setSex(e.target.value)} required>
                                              <Form.Select aria-label="Sex (Gender)">
                                                <option></option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                              </Form.Select>
                                            </FloatingLabel>
                                        </div>

                                        <div className="rn-form-group col-md-6 mb-3">

                                            <FloatingLabel controlId="floatingSelect" label="Education">
                                              <Form.Select aria-label="Education" name="educationStatus" size="lg" onChange={(e)=>setEducationStatus(e.target.value)} required>
                                                <option></option>
                                                <option value="post_graduate">Post Graduate</option>
                                                <option value="graduate">Graduate</option>
                                                <option value="under_graduate">Under graduate</option>
                                                <option value="ssce">SSCE</option>
                                                <option value="school_leaving_certificate">School Leaving Certificate</option>
                                              </Form.Select>
                                            </FloatingLabel>
                                            
                                        </div>

                                        <div className="rn-form-group col-md-6">

                                            <FloatingLabel controlId="floatingSelect" label="Marital Status">
                                              <Form.Select aria-label="Marital Status" name="maritalStatus" size="lg" onChange={(e)=>setMaritalStatus(e.target.value)}  required>
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
                                                label="Address"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" required name="address" placeholder="Address" onChange={(e)=>setAddress(e.target.value)}  size="lg"/>
                                            </FloatingLabel>
                                        </div>

                                        <div className="rn-form-group col-md-6">

                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Town"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" required name="town" placeholder="Town" onChange={(e)=>setTown(e.target.value)} size="lg"/>
                                            </FloatingLabel>
                                        </div>

                                        <div className="rn-form-group col-md-6">

                                            <FloatingLabel controlId="floatingSelect" label="Local Govement">
                                              <Form.Select aria-label="Local Govement" name="lga" size="lg" onChange={(e)=>setLga(e.target.value)} required>
                                                <option></option>
                                                {
                                                   lgas.map((item, i)=>(
                                                       <option key={i} value={item}>{item}</option>
                                                   )) 
                                                }
                                              </Form.Select>
                                            </FloatingLabel>
                                        </div>

                                        <div className="rn-form-group col-md-6">

                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="National Identification Number(NIN)"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" required name="nationalIdentificationNumber" placeholder="National Identification Number(NIN)" onChange={(e)=>setNationalIdentificationNumber(e.target.value)} size="lg"/>
                                            </FloatingLabel>
                                        </div>


                                        <div className="rn-form-group col-md-6">

                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Household Size"
                                                className="mb-3"
                                            >
                                                <Form.Control type="number" required name="householdSize" placeholder="Household Size" onChange={(e)=>setHouseholdSize(e.target.value)} size="lg"/>
                                            </FloatingLabel>

                                        </div>


                                        <div className=" mb-3 col-md-6">

                                            <Multiselect
                                                options={ServiceListOne}
                                                isObject = { true }
                                                avoidHighlightFirstOption = {true}
                                                onSelect={onSelectCat}
                                                onRemove={onRemoveCat}
                                                displayValue="name"
                                                placeholder="Primary Category"
                                            />

                                            
                                        </div>


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

                                        
                                        {/*<div className="rn-form-group col-sm-6">
                                            <textarea 
                                            name="message"
                                            placeholder="Your Message"
                                            required
                                            >
                                            </textarea>
                                        </div>*/}

                                        <div className="rn-form-group col-sm-12 mb-3">
                                            <button className="btn-default" type="submit" onClick={()=>submit()} value="submit" name="submit" id="mc-embedded-subscribe">Submit Now</button>
                                        </div> 

                                        <div className="rn-form-group">
                                            {result ? <Result /> : null}
                                        </div> 
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
        
    )
}

export default Register;