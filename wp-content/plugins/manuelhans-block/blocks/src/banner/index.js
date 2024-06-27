/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';
import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';

// Register the block
registerBlockType( metadata.name, {
    // apiVersion: 3,
    attributes: {
        header: {
            type: "string",
            default: "Header text",
        },
        detail: {
            type: "string",
            default: "Detail text",
        },
        buttonText: {
            type: "string",
            default: "Click Here",
        },
        link: {
            type: "string",
            default: "https://google.com"
        },
        image: {
            type: 'object',
        },
        addPrimaryPeriod: {
            type: "boolean",
            default: false,
        },
    },
    edit: withSelect((select, props) => {
        return { media: props.attributes.image ? select('core').getMedia(props.attributes.image.id) : undefined };
    })(Edit),
    save: Save,
} );