import axios from "axios";
import { useEffect, useState } from "react"



export default function Users(){
    const [Users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchUsers() {

        try {
            setLoading(true);
            const res = await axios.get("http://localhost:3500/users", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
                setUsers(res.data.users);
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchUsers();
    }, []);

    if(loading){
        return(
            <p className="">Loading...</p>
        )
    }
    return(
        <div className="px-5">
            <table className="border">
                <thead>
                    <tr>
                        <th className="border">ID</th>
                        <th className="border">Username</th>
                        <th className="border">Email</th>
                        <th className="border">Joined</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map((user)=>(
                        <tr key={user.id}>
                            <td className="border">{user.id}</td>
                            <td className="border">{user.username}</td>
                            <td className="border">{user.email}</td>
                            <td className="border">{new Date(user.createdAt).toLocaleDateString()}</td>
                         
                            {/* <td align="center" className="border">
                                <div className="flex gap-2">
                                <EdituserModal user={pst} Users={Users} setUsers={hUsers}/>
                                <Deleteuser id={Users.id} Users={Users} setusers={setPosts}/>
                                </div>
                            </td> */}

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}