/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { connect } from 'react-redux';
import { RootState } from '../../store';

const sectionStart = `$this->start_controls_section(
	'section_id',
	[
		'label' => esc_html__( 'section_label', 'elementor-oembed-widget' ),
		'tab' => \\Elementor\\Controls_Manager::TAB_CONTENT,
	]
);`;

const controls: any = {
  '\\Elementor\\Controls_Manager::TEXT': `$this->add_control(
		':controlId',
		[
			'label' => esc_html__( ':label', 'elementor-oembed-widget' ),
			'type' => \\Elementor\\Controls_Manager::TEXT,
			'input_type' => 'url',
			'placeholder' => esc_html__( ':placeholder', 'elementor-oembed-widget' ),
		]
	);`,
};

function WidgetCode(props: any) {
  const { widget } = props;
  const [codeSn, setCodeSn] = useState('');

  const getControl = (control: any) => {
    let controlItem: any = controls[control.type];
    controlItem = controlItem
      .replace(':controlId', control.id)
      .replace(':label', control.label)
      .replace(':placeholder', control.placeholder);
    return controlItem;
  };
  const Test_getSections = () => {
    let output = '';
    const sectionStart = `$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'elementor-oembed-widget' ),
				'tab' => \\Elementor\\Controls_Manager::TAB_CONTENT,
			]
		);`;

    widget.sections.forEach((itr: any) => {
      output += `${sectionStart}`;
      itr.controls.forEach((control: any) => {
        output += `${getControl(control)}`;
      });
    });
    return output;
  };

  const getSectionStart = (sectionObj: any, sectionStart: string) =>
    sectionStart
      .replace('section_id', sectionObj.id)
      .replace('section_label', sectionObj.label);

  const getSections = () => {
    let output = '';
    const sectionEnd = `$this->end_controls_section();`;
    const startcontrol = `	$this->add_control(
			'url',`;
    const endcontrol = `);`;

    widget.sections.forEach((itr: any) => {
      output += `${sectionStart}`;
      itr.controls.forEach((control: any) => {
        output += `${getControl(control)}`;
      });
    });
    return output;
  };

  const getCode = () => `
class ${widget.title}_Widget extends \\Elementor\\Widget_Base {

	public function get_name() {
		return 'oembed';
	}

	public function get_title() {
		return esc_html__( 'oEmbed', 'elementor-oembed-widget' );
	}

	public function get_icon() {
		return 'eicon-code';
	}

	public function get_custom_help_url() {
		return 'https://developers.elementor.com/docs/widgets/';
	}

	public function get_categories() {
		return [${widget.categories.map((itr: any) => `'${itr}'`).join(', ')}];
	}

	public function get_keywords() {
		return [ 'oembed', 'url', 'link' ];
	}

	protected function register_controls() {
		    ${getSections()}
	}

	protected function render() {

		$settings = $this->get_settings_for_display();
		$html = wp_oembed_get( $settings['url'] );

		echo '<div class="oembed-elementor-widget">';
		echo ( $html ) ? $html : $settings['url'];
		echo '</div>';

	}

}
`;

  useEffect(() => {
    setCodeSn(getCode());
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
