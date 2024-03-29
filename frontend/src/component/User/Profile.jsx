import React, { Fragment,useEffect } from 'react';
import MetaData from '../layout/MetaData';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import './Profile.css'

const Profile = ({history}) => {
    

    const {user, loading, isAuthenticated} = useSelector((state) => state.user);
    useEffect(()=> {
        if(isAuthenticated === false){
            history.push("/login")
        }
    }, [isAuthenticated,history]);

  return (
    <Fragment>
        {!user || loading? (<Loader/>
        ) : (
        <Fragment>
        < MetaData title={`${user.name}'s Profile`} />
        <div className="profileContainer">
            <div>
                <h1>My Profile</h1>
                {/* <img src={user.avatar.url} alt={user.name} /> */}
                {user.avatar && user.avatar.url && (
                <img src={user.avatar.url} alt={user.name} />
                 )}
                <Link to="/me/update" >Edit Profile</Link>
            </div>
        <div>
          <div>
            <h4>Full Name</h4>
            <p>{user.name}</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>{user.email}</p>
          </div>
        <div>
            <h4>Joined On</h4>
            <p>{String(user.createdAt).substring(0,10)}</p>
        </div>

        <div className='profileContainerLast'>
            <Link to='/orders' >My Orders</Link>
            <Link to='/password/update' >Change Password</Link>
        </div>
        </div>
     </div>
    </Fragment>
    )}

    </Fragment>
  )
}

export default Profile