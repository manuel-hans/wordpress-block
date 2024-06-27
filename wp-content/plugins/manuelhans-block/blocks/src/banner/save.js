import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({attributes}) {
    const {header, detail, addPrimaryPeriod, buttonText, link, image} = attributes
    return (
        <div class="container py-5" >
            <div class="row align-items-center">
                <div class="d-flex flex-column col-12 col-md-6 col-lg-5 text-center text-md-start">
                    <h1 class="fw-900 mb-5">{header}{ addPrimaryPeriod ? <span class="text-primary">.</span> : <></>}</h1>
                    <div class="mb-1"></div>
                    <span class="fs-5 mb-5">{detail}</span>
                    <div class="mb-2"></div>
                    <a class="btn btn-primary mx-auto ms-md-0 mb-3 mb-md-0" href={link}>{buttonText}</a>
                </div>
                <div class="col-12 col-md-6 col-lg-7 text-center">
                    {
                        image && <img src={image.url} class="w-100 banner-img" alt="" />
                    }
                </div>
            </div>
        </div>
    )
}