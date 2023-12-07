import {useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import ProtectedRoutes from "./components/security/ProtectedRoutes.tsx";
import SecuredComponent from "./components/security/SecuredComponent.tsx";
import StartPage from "./pages/StartPage.tsx";


export type AppUser = {
    id: string,
    name: string,
    imageUrl: string
}
function App() {
    const [appUser, setAppUser] = useState<AppUser | null | undefined>(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get("/api/auth/me")
            .then(response => {
                if(response.data) {
                    setIsLoading(false);
                    setAppUser(response.data)
                }
            })
            .catch(error => {
                setIsLoading(false)
                console.log(error)
            })
    }, [isLoading]);

    if(isLoading) {
        return <></>
    }

    return (
        <>
            <Routes>
                <Route path={"/"} element={<StartPage />} />
                <Route path={"/login"} element={<LoginPage />} />
                <Route element={<ProtectedRoutes appUser={appUser}/>}>
                    <Route path={"/home"} element={<SecuredComponent onLogout={() => setIsLoading(true)}/>}/>
                </Route>

            </Routes>
        </>
    )
}

export default App
