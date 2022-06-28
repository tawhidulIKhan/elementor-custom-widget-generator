export default `class :widgetName_Widget extends \\Elementor\\Widget_Base {

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
		return [:categories];
	}

	public function get_keywords() {
		return [ 'oembed', 'url', 'link' ];
	}

	protected function register_controls() {
		:sections
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

export const TEXT_TEMPLATE = `
$this->add_control(
      ':controlId',
      [
          'label' => esc_html__( ':label', 'elementor-oembed-widget' ),
          'type' => \\Elementor\\Controls_Manager::TEXT,
          'input_type' => 'url',
          'placeholder' => esc_html__( ':placeholder', 'elementor-oembed-widget' ),
      ]
  );`;

export const SECTION_TEMPLATE = `$this->start_controls_section(
	'section_id',
	[
		'label' => esc_html__( 'section_label', 'elementor-oembed-widget' ),
		'tab' => \\Elementor\\Controls_Manager::TAB_CONTENT,
	]
);
:controls
$this->end_controls_section()
`;
