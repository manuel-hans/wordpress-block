import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {link} = attributes
    return (
        <div className="container-fluid bg-gradient-success-danger text-white text-center py-7">
            <h2 className="mb-5 fw-900">Ready to get started?</h2>
            <div className="fs-5 mb-5">
                <InnerBlocks.Content />
            </div>
            <a className="btn btn-secondary fs-6 mb-3" href={link}>Get A Quote</a>
        </div>
    );
}