import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

export default function save({attributes}) {
    const {header} = attributes
    return (
        <div class="container py-6 text-center">
            <div class="row mb-6">
                <h3 class="fw-bolder col-12 col-md-8 col-lg-4 mx-auto">
                    {header}
                </h3>
            </div>
            <div class="row">
                <InnerBlocks.Content />
            </div>
        </div>
    );
}