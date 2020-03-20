import React, {useState, useEffect} from "react";
import { useAdmin } from "../../context/admin-context";





export const LandingTest = () => {
  const [tenants, setTenants] = useState([]);
  const { getAllAdminTenants } = useAdmin()
  const getAllTenants = async () => {
    console.log('await getAllAdminTenants()')
    console.log(await getAllAdminTenants())
    let res = await getAllAdminTenants();
    console.log('res')
    console.log(res)
    return res
  };

  useEffect(() => {
    getAllTenants().then(result => {
      setTenants( result)
    });
  }, [])

  return (
    
   <>
    <h2>In the admin section</h2>
     {tenants.map(tenant => <h3>{tenant}</h3>)}
   </>
  );
};
