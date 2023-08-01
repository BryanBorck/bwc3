import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import CourseDetails from './pages/Courses/CourseDetail'
import Settings from './pages/Settings/Settings'
import AddCourses from './pages/AddCourses/AddCourses'
import { connectMetamask } from './utils/connectMetamask'

function App() {

  //handle Metamask wallet connection
  const [isMetamaskInstalled, setIsMetamaskInstalled] = React.useState<boolean>(false);
  const [account, setAccount] = React.useState<string | null>(null);
  const [provider, setProvider] = React.useState<any>(null);
  const [signer, setSigner] = React.useState<any>(null);

  React.useEffect(() => {
    if ((window as any).ethereum) {
      //check if Metamask wallet is installed
      setIsMetamaskInstalled(true);
      setAccount((window as any).ethereum.selectedAddress);
    }
  }, []);

  async function connectWallet(): Promise<void> {
    const connection = await connectMetamask();
    setAccount(connection?.address);
    setProvider(connection?.web3Provider);
    setSigner(connection?.web3Signer);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={
          <Layout
            isMetamaskInstalled={isMetamaskInstalled}
            connectWallet={connectWallet}
            account={account}
            provider={provider}
            signer={signer}
          />
        }>
          <Route path="/courses" element={<Courses />} />
          <Route path="/add-courses" element={<AddCourses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
