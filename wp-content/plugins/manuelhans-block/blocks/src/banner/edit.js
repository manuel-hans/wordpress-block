/**
 * External dependencies
 */
// import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	MediaUploadCheck,
	MediaUpload,
} from '@wordpress/block-editor';
import { TextControl, Button, CheckboxControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes, media } ) {
	const onUpdateImage = ( image ) => {
		setAttributes( {
			image: {
				id: image.id,
				url: image.url,
			},
		} );
	};

	const { image, header, detail, link, addPrimaryPeriod, buttonText } = attributes;

	return (
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
					<fieldset>
						<legend className="blocks-base-control__label">
							Button Text
						</legend>
						<TextControl onChange={(buttonText) => setAttributes({buttonText})} value={buttonText}></TextControl>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							Link
						</legend>
						<TextControl onChange={(link) => setAttributes({link})} value={link}></TextControl>
					</fieldset>
					<fieldset>
						<CheckboxControl 
							label="Primary Color For Period"
            				checked={addPrimaryPeriod}
							onChange={(addPrimaryPeriod) => setAttributes({addPrimaryPeriod})}
							/>
					</fieldset>
				</div>
			</InspectorControls>
			<div>Banner (see right side for settings)</div>
			<div>{header} : {detail}</div>
		</div>
	);
}