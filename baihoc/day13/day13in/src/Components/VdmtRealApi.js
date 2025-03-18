import React from 'react'
import axios from 'axios'

export function vdmtRealApi() {
    const [listuser , setListuser] = useState([])

    const apiURL = 'http://localhost:3001/users'

    useEffect(() => {
        axios
           .get(apiURL)
           .then(response => {
                setListuser(response.data)
            })
            .catch(error => {
                console.error('Error fetching data: ', error)

            })
    })
  return (
    <div>
        <h2>Doc du lieu tu api</h2>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {listuser.map((user, index) => (
                    <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
