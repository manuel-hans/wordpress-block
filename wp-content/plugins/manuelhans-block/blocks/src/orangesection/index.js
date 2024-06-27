/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

// Register the block
registerBlockType( metadata.name, {
    attributes: {
        buttonText: {
            type: "string",
            default: "Click Here",
        },
        link: {
            type: "string",
            default: "https://google.com"
        },
        content: {
			type: "string",
			source: "html",
		},
        header: {
            type: "string",
            default: "Header",
        }
    },
    edit: Edit,
    save: Save,
} );