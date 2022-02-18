import React from 'react'
import { CustomHeader } from '../../shared'
import {
    Route,
    Switch
} from 'react-router-dom'
import { privateRoutes } from '../../navigation/routes';
import { ThemeProvider } from '@mui/material/styles';
import myTheme from '../../utils/theme'

const PrivateLayout = () => {
    return (
        <>
            <ThemeProvider theme={myTheme}>
                <div style={{ height: "10vh" }}>
                    <CustomHeader />
                </div>
                <div style={{ height: "43vh" }}>
                    <Switch>
                        {privateRoutes && privateRoutes.map((item, index) => <Route key={index} exact path={item.path} component={item.component} />)}
                    </Switch>
                </div>
            </ThemeProvider>
        </>
    )
}

export default PrivateLayout