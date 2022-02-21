import React from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
import { publicRoutes } from '../../navigation/routes';
import { CustomPublicHeader } from '../../shared';
import { ThemeProvider } from '@mui/material/styles';
import myTheme from '../../utils/theme'

const PublicLayout = ({ }) => {
    return (
        <>
            <ThemeProvider theme={myTheme}>
                <div style={{ height: "7vh"}} >
                    <CustomPublicHeader/>
                </div>
                <div style={{ height: "80vh" }}>
                    <Switch>
                        {publicRoutes && publicRoutes.map((item, index) => <Route key={index} exact path={item.path} component={item.component} />)}
                    </Switch>
                </div>
            </ThemeProvider>
        </>
    )
}

export default PublicLayout