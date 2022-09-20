import React, { Fragment } from 'react';
import { EuiCollapsibleNavGroup, EuiText, EuiCode, EuiPanel, EuiFlexGrid, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import Menu from '../Img/menu.png'
import Search from '../Searchbox/Search'
export default () => (
    <Fragment>
        <EuiPanel grow={false} style={{ backgroundColor: 'black', borderRadius: '1px' }}>
            <EuiFlexGroup grow={false}>
                <img src={Menu} style={{ width: '40px', marginRight: '5px' }} />
                <p style={{ color: 'white', fontSize: '25px', marginBottom: '-3px', marginTop: '2px' }}>Outlook Mail</p>
            </EuiFlexGroup>
        </EuiPanel>
    </Fragment>
);