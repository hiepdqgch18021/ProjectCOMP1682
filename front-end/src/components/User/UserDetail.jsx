import axios from "axios";
import React from "react";

class UserDetail extends React.Component {
    
    state = {
        user:{}
    }
    async componentDidMount() {
          if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            
            let res = await axios.get(`http://localhost:5000/api/user/getOneUsers/${id}`)
        this.setState({
            user: res && res.data && res.data.id ? res.data.id :{}
        }) 
        console.log('>>> check res user',res) 
        }
    }

    render() {
        let {user} = this.state;
        let isEmptyObj = Object.keys(user).length ===  0;
        console.log('>>> check prop',this.props)
        return(
            <>

            <div> user detail </div>

            {isEmptyObj === false &&
            <div className="display-userDetail">
                <div>username : {user.username}</div>
                <div>email : {user.email}</div>
                <div>
                    <img src={user.imageAvatar} alt="" />
                    
                </div>
  
            </div>
            }
            
            </>
        )
    }
}

export default UserDetail;





























