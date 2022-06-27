/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import Highlight, { defaultProps } from 'prism-react-renderer';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getWidgetCode } from '../../services/elementor/widgetParser';
import { RootState } from '../../store';

function WidgetCode(props: any) {
  const { widget } = props;
  const [codeSn, setCodeSn] = useState('');

  useEffect(() => {
    setCodeSn(getWidgetCode(widget));
  }, [widget]);

  return (
    <div>
      <Highlight {...defaultProps} code={codeSn} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  widget: state.widget,
});

export default connect(mapStateToProps, null)(WidgetCode);
