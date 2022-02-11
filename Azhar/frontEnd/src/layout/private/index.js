import React from 'react'
import { Header, Footer } from '../../shared'
import {
    Route,
    BrowserRouter,
    Routes
} from 'react-router-dom'
import { privateRoutes } from '../../navigation/routes';
import { Grid } from '@mui/material';



const PrivateLayout = ({ }) => {
    return (
        <>
            <div style={{height:"20vh"}}>
            <Header />
            </div>
            <div style={{height:"43vh"}}>
            <BrowserRouter>
                <Routes>
                    {privateRoutes && privateRoutes.map((item, index) => <Route key={index} exact path={item.path} element={item.component} />)}
                </Routes>
            </BrowserRouter>
            </div>
            <div style={{height:"10vh"}}>
            <Footer />
            </div>
        </>
    )
}

export default PrivateLayout