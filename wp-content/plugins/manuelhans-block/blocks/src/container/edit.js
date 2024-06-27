/**
 * External dependencies
 */
// import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps( {
		className: 'container',
	} );
	const { header } = attributes

	return (
		<>
			<div { ...blockProps } style={{ border: "1px solid black" }}>
				<InspectorControls key="setting">
					<div id="gutenpride-controls" style={{ padding: 10 }}>
						<fieldset>
							<legend className="blocks-base-control__label">
								Header Text
							</legend>
							<TextControl onChange={(header) => setAttributes({header})} value={header}></TextControl>
						</fieldset>
					</div>
				</InspectorControls>
				<div>{header}</div>
				<InnerBlocks />
			</div>
		</>
	);
}