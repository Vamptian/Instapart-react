import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageWrapper from './components/reusables/PageWrapper';

import Home from './components/pages/Home';
import SignUp from './components/pages/Sign-up';
import SignIn from './components/pages/Sign-in';
import UserPage from './components/pages/User-Page';
import AllPost from './components/pages/All-post';
import AllParts from './components/pages/All-parts';
import ViewOffers from './components/pages/View-Offers';

function App() {

  
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const email = localStorage.getItem("email")
    if (email !== null) {
      axios.get(`http://localhost:8080/getUserByEmail/${email}`)
        .then((response) => {
          console.log(response.data)
          setUser(response.data)
          setIsLoading(false)
        // .then(props)
        })
        .catch((e) => {
          console.log(e)
          setIsLoading(false)
        })
    }
  }, [])



  return (
    <PageWrapper user={user} setUser={setUser}>
      <Routes>
      <Route path="/" element={<Home user={user} />} />
      <Route path="/Sign-up" element={<SignUp user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
      <Route path="/Sign-In" element={<SignIn user={user} setUser={setUser}  isLoading={isLoading} setIsLoading={setIsLoading} />} />
      <Route path="/User-Page" element={<UserPage user={user} setUser={setUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
      <Route path="/All-post" element={<AllPost user={user} setUser={setUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
      <Route path="/All-parts" element={<AllParts user={user} setUser={setUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
      <Route path="/View-Offers" element={<ViewOffers user={user} setUser={setUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
