import './profile.css'
import { useAuthValue } from './AuthContext'
import { signOut } from 'firebase/auth'
import { auth, db } from './firebase'
import QRCode from 'react-qr-code'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'


function Profile() {
  const { currentUser } = useAuthValue()
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if (currentUser?.uid) {
      getDoc(doc(db, "users", currentUser?.uid)).then((doc) => {
        const data = doc.data();
        setUserData(`Name : ${data.name} Phone Number : ${data.phoneNumber} Email : ${currentUser?.email}`)
      })
    }
  }, [currentUser])
  return (
    <div className='center'>
      <div className='profile'>
        <h1>Profile</h1>
        <p><strong>Email: </strong>{currentUser?.email}</p>
        <p>
          <strong>Email verified: </strong>
          {`${currentUser?.emailVerified}`}
        </p>
        {userData && <QRCode value={userData} />}
        <span onClick={() => signOut(auth)}>Sign Out</span>
      </div>
    </div>
  )
}

export default Profile
