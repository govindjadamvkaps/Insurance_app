import React, { useEffect, useState } from 'react'
import axios from "axios";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
const GetInsurance = () => {
    const navigate = useNavigate()
    const [insurance,setInsurance]=useState({})
    const {id} = useParams()
    const [price,setPrice] = useState()
    const getInsurance = async() =>{
        
        const {data} = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/insurance/resume-insurance/${id}`)
        console.log("data",data)
        setInsurance(data)
   
         }
         useEffect(()=>{
            getInsurance()
           },[])
           const edit = () =>{
            navigate(`/edit-insurance/${id}`)
           }
           const handleSubmit = async() =>{
            const {data} = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/insurance/get-price`,{
                insuranceId : id
            })
            setPrice(data?.price)
           }
  return (
    <div>
      <h1>{insurance?.insurance?.firstName} Your Vehicles Insurance</h1>
      <table class="table-auto">
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Edit</th>
      <th>Submit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{insurance?.insurance?.firstName}</td>
      <td>{insurance?.insurance?.lastName}</td>
      <td><button onClick={edit}>Edit</button></td>
      {
        price ? price :  <td><button onClick={handleSubmit}>Submit</button></td>
      }
     
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default GetInsurance
