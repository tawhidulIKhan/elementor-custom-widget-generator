/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import widgetTemplate from '../../templates/widgetTemplate';
import { getCode } from '../../services/elementor/widgetParser';

function WidgetCode(props: any) {
  const { widget } = props;
  const [codeSn, setCodeSn] = useState('');

  useEffect(() => {
    console.log(widget);
    setCodeSn(getCode(widgetTemplate, widget));
  }, [widget]);

  console.log(widget);

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
