import React, { Component } from 'react';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/dracula';

class StatusBar extends Component {
    onChange(newValue) {
        console.log('change', newValue);
    }
    render() {
        return (
            <AceEditor
                mode="java"
                theme="dracula"
                onChange={this.onChange}
                name="UNIQUE_ID_OF_DIV"
                maxLines={1}
                width="100%"
                fontSize={14}
                showPrintMargin={false}
                editorProps={{ $blockScrolling: true }}
            />
        );
    }
}

export default StatusBar;
