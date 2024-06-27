import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

export default function save({attributes}) {
    const {image, header, detail} = attributes
    return (
        <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center mb-5">
            {image && <img src={image.url} alt="" class="h-icon mb-4" />}
            <span class="mb-2 fs-4 fw-bolder">{header}</span>
            <span class="mt-1 fs-6">{detail}</span>
          </div>
    );
}