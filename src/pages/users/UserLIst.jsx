import React, { Component } from "react";
import ajaxObs from "../../shared/services/api-service";
class UserList extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            users: [],
            total: 0
        }
    }
    componentWillMount() {
        this.getAllUsers()
    }

    getAllUsers(){
      const payload = {
        url:'users',
        method:'GET',
      }
      ajaxObs(payload).subscribe({
        next: (data) => {
            console.log('data', data)
            this.setState({users:data.users})
        },
        error: err => {
            console.log(err)
        }
      })
    }
    loginUser (){
        console.log('Users');
    }

    
    render() {
    const { users } = this.state;
      return (
        <div className="card custom-card">
            <div className="card-header">
                <strong>Users</strong>
                <button type="button" onClick={(e) => this.loginUser()}>Login</button>
            </div>
            <div className="card-body">
                <div className="custom-table">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Phone</th>
                                <th>Birth Date</th>
                                <th>Age</th>
                                <th>University</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => (
                               <tr key={item.id}>
                                    <td>{item.firstName} {item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.birthDate}</td>
                                    <td>{item.age}</td>
                                    <td>{item.university}</td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      );
    }
}

export default UserList;