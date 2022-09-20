import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { EuiCollapsibleNavGroup, EuiText, EuiCode, EuiPanel, EuiFlexGrid, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';

import InboxMailTabs from '../MailContent/InboxMailTabs';
import JunkMail from '../MailContent/JunkMail'
import SentMail from '../MailContent/SentMail'
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Folders', 'sub2', null, [
        getItem('Inbox', '1'),
        getItem('Junk Email', '2'),
        getItem('Drafts', '3'),
        getItem('Sent Items', '4'),
        getItem('Deleted Items', '5'),
        getItem('Archive', '6'),
    ]),
];

const SideNav = () => {
    const [inbox, setInbox] = useState(false)
    const [Junk, setJunk] = useState(false)
    const [Sent, setSent] = useState(false)


    const onClick = (e) => {
        if (e.key == '1') {
            setInbox(true)
            setJunk(false)
            setSent(false)
        } else if (e.key == '2') {
            setJunk(true)
            setInbox(false)
            setSent(false)

        } else if (e.key == '4') {
            setJunk(false)
            setInbox(false)
            setSent(true)
        } else {
            setJunk(false)
            setInbox(false)
            setSent(false)

        }


        console.log('click ', e);
    };

    const InboxMails = (
        inbox ? <InboxMailTabs /> : null
    )

    const JunkMails = (
        Junk ? <JunkMail /> : null
    )

    const SentMails = (
        Sent ? <SentMail /> : null

    )


    return (
        <>
            <EuiFlexGroup grow={false}>
                <Menu
                    onClick={onClick}
                    style={{
                        width: 256,
                    }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                />
                {InboxMails}
                {JunkMails}
                {SentMails}
            </EuiFlexGroup>
        </>
    );
};

export default SideNav;