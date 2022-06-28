/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import './WidgetCode.scss';

function WidgetCode(props: any) {
  const { widget } = props;
  const [codeSn, setCodeSn] = useState('');
  const getSections = () => {
    let output = '';
    const sectionStart = `$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'elementor-oembed-widget' ),
				'tab' => \\Elementor\\Controls_Manager::TAB_CONTENT,
			]
		);`;
    const sectionEnd = `$this->end_controls_section();`;
    const startcontrol = `	$this->add_control(
			'url',`;
    const endcontrol = `);`;

    widget.sections.forEach((itr: any) => {
      output += `${sectionStart}`;
      itr.controls.forEach((control: any) => {
        output += `${startcontrol}`;
        output += `[`;
        const controls: any = {
          label: `esc_html__('${control.label}', 'elementor-oembed-widget')`,
          type: `${control.type}`,
        };
        Object.keys(controls).forEach((key: any) => {
          output += `'${key}' => ${controls[key]},`;
        });
        output += `]`;
        output += `${endcontrol}`;

        output += `${sectionEnd}`;
      });
    });
    return output;
  };

  const getCode = () => `
/**
 * Elementor oEmbed Widget.
 *
 * Elementor widget that inserts an embbedable content into the page, from any given URL.
 *
 * @since 1.0.0
 */
class ${widget.title}_Widget extends \\Elementor\\Widget_Base {

	/**
	 * Get widget name.
	 *
	 * Retrieve oEmbed widget name.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget name.
	 */
	public function get_name() {
		return 'oembed';
	}

	/**
	 * Get widget title.
	 *
	 * Retrieve oEmbed widget title.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget title.
	 */
	public function get_title() {
		return esc_html__( 'oEmbed', 'elementor-oembed-widget' );
	}

	/**
	 * Get widget icon.
	 *
	 * Retrieve oEmbed widget icon.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget icon.
	 */
	public function get_icon() {
		return 'eicon-code';
	}

	/**
	 * Get custom help URL.
	 *
	 * Retrieve a URL where the user can get more information about the widget.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget help URL.
	 */
	public function get_custom_help_url() {
		return 'https://developers.elementor.com/docs/widgets/';
	}

	/**
	 * Get widget categories.
	 *
	 * Retrieve the list of categories the oEmbed widget belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Widget categories.
	 */
	public function get_categories() {
		return [${widget.categories.map((itr: any) => `'${itr}'`).join(', ')}];
	}

	/**
	 * Get widget keywords.
	 *
	 * Retrieve the list of keywords the oEmbed widget belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Widget keywords.
	 */
	public function get_keywords() {
		return [ 'oembed', 'url', 'link' ];
	}

	/**
	 * Register oEmbed widget controls.
	 *
	 * Add input fields to allow the user to customize the widget settings.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function register_controls() {
    ${getSections()}
		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'elementor-oembed-widget' ),
				'tab' => \\Elementor\\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'url',
			[
				'label' => esc_html__( 'URL to embed', 'elementor-oembed-widget' ),
				'type' => \\Elementor\\Controls_Manager::TEXT,
				'input_type' => 'url',
				'placeholder' => esc_html__( 'https://your-link.com', 'elementor-oembed-widget' ),
			]
		);

		$this->end_controls_section();

	}

	/**
	 * Render oEmbed widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
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
    <div className="codeviewer">
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
