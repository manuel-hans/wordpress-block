/**
 * External dependencies
 */
// import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	MediaUploadCheck,
	MediaUpload,
	InspectorControls,
} from '@wordpress/block-editor';
import { TextControl, Button, CheckboxControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes, media }) {
	const onUpdateImage = ( image ) => {
		setAttributes( {
			image: {
				id: image.id,
				url: image.url,
			},
		} );
	};
	
	const { header, detail, image } = attributes

	return (
		<>
			<div { ...useBlockProps() } style={{ border: "1px solid black" }}>
				<InspectorControls key="setting">
					<div id="gutenpride-controls" style={{ padding: 10 }}>
						<fieldset>
							<legend className="blocks-base-control__label">
								Banner Image
							</legend>
							<div className="wp-block-image-selector-example-image">
								<MediaUploadCheck fallback={ <p>Stop</p> }>
									<MediaUpload
										title={ "Set Image" }
										onSelect={ onUpdateImage }
										allowedTypes={ ['image'] }
										value={ image ? image.id : undefined }
										render={ ( { open } ) => (
											<Button
												className={ 'editor-post-featured-image__toggle' }
												onClick={ open }>
													{
														media ?
														<img src={media.source_url} />
														:
														<>Set banner image</>
													}
											</Button>
										) }
									/>
								</MediaUploadCheck>
							</div>
						</fieldset>
						<fieldset>
							<legend className="blocks-base-control__label">
								Header Text
							</legend>
							<TextControl onChange={(header) => setAttributes({header})} value={header}></TextControl>
						</fieldset>
						<fieldset>
							<legend className="blocks-base-control__label">
								Detail Text
							</legend>
							<TextControl onChange={(detail) => setAttributes({detail})} value={detail}></TextControl>
						</fieldset>
					</div>
				</InspectorControls>
				<div>Feature card (see right for setting)</div>
				<div>{header} : {detail}</div>
			</div>
		</>
	);
}