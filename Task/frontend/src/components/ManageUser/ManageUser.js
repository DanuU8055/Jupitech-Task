import axios from "axios";
import { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";
import {Delete,Verified,Block} from "@mui/icons-material";


export default function ManageUser() {

    const navigate=useNavigate();
    
    const [ fetchData , setFetchData ] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/user/fetch?role=user").then((res)=>{
            setFetchData(res.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[fetchData]);

    const changeStatus=(condition , content)=>{
        if(content=="Unverified"){

            var updateUser={"condition_obj":{"_id":condition},"content_obj":{"status":0}}
            axios.patch("http://localhost:3001/user/update",updateUser).then(()=>{
                navigate("/manageuser")
            }).catch((error)=>{
                    console.log(error);
            })
        }
        else if(content=="Verified"){
            var updateUser={"condition_obj":{"_id":condition},"content_obj":{"status":1}};
            axios.patch("http://localhost:3001/user/update",updateUser).then(()=>{
                navigate("/manageuser");
            }).catch((error)=>{
                console.log(error);
            })
        }
        else{
            var deleteUser={data:{"_id":condition}};
            axios.delete("http://localhost:3001/user/remove",deleteUser).then(()=>{
                navigate("/manageuser")
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
  return (
    <>
    <table cellPadding={5} border={2}>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>status</th>
        <th>Action</th>
        

        {
            fetchData.map((x)=>(
<tr>
    <td>{x._id}</td>
    <td>{x.name}</td>
    <td>{x.email}</td>
    <td>{x.mobile}</td>
    <td>{x.status==1 && <font onClick={()=>{changeStatus(x._id,"Unverified")}} color="green">Verified{<Verified/>}</font>}
    {x.status==0 && <font onClick={()=>{changeStatus(x._id,"Verified")}} color="orange">Unverified{<Block/>}</font>}
    </td>
    <td><font  onClick ={()=>{changeStatus(x._id,"remove")}}color="red" variant="contained" size="small"> Remove User{ <Delete/>}</font></td>
    
</tr>
            ))
        }
    </table>
      
    </>
  )
}
