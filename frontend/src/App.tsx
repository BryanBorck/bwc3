import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import CourseDetails from './pages/Courses/CourseDetail'
import Settings from './pages/Settings/Settings'
import AddCourses from './pages/AddCourses/AddCourses'
import Info from './pages/Info/Info'

function App() {

  //handle Metamask wallet connection
  const [isMetamaskInstalled, setIsMetamaskInstalled] = React.useState<boolean>(false);
  const [account, setAccount] = React.useState<string | null>(null);

  React.useEffect(() => {
    if ((window as any).ethereum) {
      //check if Metamask wallet is installed
      setIsMetamaskInstalled(true);
      setAccount((window as any).ethereum.selectedAddress);
    }
  }, []);

  async function connectWallet(): Promise<void> {
    console.log("connectWallet");
    //to get around type checking
    (window as any).ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts: string[]) => {
        setAccount(accounts[0]);
      })
      .catch((error: any) => {
        console.log(`Something went wrong: ${error}`);
      });
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
