import React, { useState } from 'react';
import { EuiFieldSearch, EuiFlexItem } from '@elastic/eui';
// import { DisplayToggles } from './display_toggles';

export default () => {
    const [isClearable, setIsClearable] = useState(true);
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <EuiFlexItem style={{ width: '245px' }}>
            <EuiFieldSearch

                placeholder="Search Mail And People"
                value={value}
                onChange={(e) => onChange(e)}
                isClearable={isClearable}
                aria-label="Use aria labels when no actual label is in use"

            />

        </EuiFlexItem>

    );
};