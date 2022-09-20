import { Tabs } from 'react-simple-tabs-component'
// (Optional) if you don't want to include bootstrap css stylesheet
import 'react-simple-tabs-component/dist/index.css'
import { EuiCollapsibleNavGroup, EuiText, EuiCode, EuiPanel, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiHorizontalRule } from '@elastic/eui';
import CommonContent from './CommonContent/CommonContent';
let inboxdata = require('./InboxJson/inbox.json');
// Component Example
const Focused = () => {
    return (
        inboxdata.map((data) => {
            return (
                <EuiFlexItem style={{ alignItems: 'start', paddingLeft: '30px', cursor: 'pointer' }}>

                    <CommonContent
                        id={data.mId}
                        Subject={data.subject}
                        Content={data.content}
                    />
                    <EuiHorizontalRule />
                </EuiFlexItem>

            )
        })


    )
}

const Others = () => {
    return (
        <></>
    )
}

// Tabs structure Array
const tabs = [
    {
        label: 'Focused', // Tab Title - String
        Component: Focused // Tab Body - JSX.Element
    },
    {
        label: 'Others',
        Component: Others
    },

]

export default function App() {
    return (
        <div className='App' style={{ marginTop: '9px', marginRight: '-206px' }}>

            <Tabs tabs={tabs} /* Props */ />
        </div>
    )
}