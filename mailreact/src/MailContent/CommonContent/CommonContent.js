import { Tabs } from 'react-simple-tabs-component'
// (Optional) if you don't want to include bootstrap css stylesheet
import 'react-simple-tabs-component/dist/index.css'
import { EuiCollapsibleNavGroup, EuiText, EuiCode, EuiPanel, EuiFlexGrid, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';

// Component Example
const CommonContent = ({ id, Subject, Content }) => {
    return (
        < >
            <h1 >{id}</h1>
            <h4>{Subject}</h4>
            <p>
                {Content}
            </p>
        </>
    )
}

export default CommonContent