import React, { Component } from 'react';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/dracula';
// import 'ace/keyboard/vim';

class Page extends Component {
    onChange(newValue) {
        console.log('change', newValue);
    }
    render() {
        return (
            <AceEditor
                mode="java"
                theme="dracula"
                onChange={this.onChange}
                width="100%"
                height="1200px"
                fontSize={14}
                showPrintMargin={false}
                readOnly={true}
                
                keyboardHandler="ace/keyboard/vim"
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
            />
        );
    }
}

export default Page;
