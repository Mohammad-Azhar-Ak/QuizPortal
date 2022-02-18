import React from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
import { publicRoutes } from '../../navigation/routes';

const PublicLayout = ({ }) => {
    return (
        <>
            <div style={{ height: "100vh" }}>
                <Switch>
                    {publicRoutes && publicRoutes.map((item, index) => <Route key={index} exact path={item.path} component={item.component} />)}
                </Switch>
            </div>
        </>
    )
}

export default PublicLayout